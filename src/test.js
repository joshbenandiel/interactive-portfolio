let eventHandlers = {};
let pendingResponses = {};
let msgIdCounter = 1;

const BASE_API_URL = "https://dev-api.playfriends.gg";

function isReactNativeWebView() {
  return (
    typeof window !== "undefined" &&
    window.ReactNativeWebView &&
    typeof window.ReactNativeWebView.postMessage === "function"
  );
}

function log(...args) {
  console.log(...args);
  if (isReactNativeWebView()) {
    try {
      const formatted = args
        .map((arg) => {
          if (typeof arg === "object") {
            try {
              return JSON.stringify(arg, null, 2);
            } catch {
              return "[Unserializable Object]";
            }
          }
          return String(arg);
        })
        .join(" ");
      window.ReactNativeWebView.postMessage("[JS LOG] " + formatted);
    } catch (err) {
      console.warn("Failed to post log message to ReactNativeWebView:", err);
    }
  }
}

function getSessionTokenFromUrl() {
  try {
    const params = new URLSearchParams(window.location.search);
    return params.get("sessionToken") || "";
  } catch {
    return "";
  }
}

function getAuthTokenFromLocalStorage() {
  try {
    const persistRoot = localStorage.getItem("persist:root");
    if (!persistRoot) return "";
    const parsed = JSON.parse(persistRoot);
    if (!parsed.auth) return "";
    const auth = JSON.parse(parsed.auth);
    return auth.authToken || "";
  } catch (e) {
    log("⚠️ Failed to extract token from localStorage:", e.message);
    return "";
  }
}

function isIframe() {
  return typeof window !== "undefined" && window.parent !== window;
}

function isParentWindow() {
  return typeof window !== "undefined" && window.parent === window;
}

function getEnvironmentInfo() {
  return {
    isReactNativeWebView: isReactNativeWebView(),
    isIframe: isIframe(),
    isParentWindow: isParentWindow(),
    hasReactNativeWebView:
      typeof window !== "undefined" && !!window.ReactNativeWebView,
    userAgent:
      typeof navigator !== "undefined" ? navigator.userAgent : "unknown",
  };
}

function sendMessage(message) {
  log("🔼 Sending message:", message);
  if (isReactNativeWebView()) {
    window.ReactNativeWebView.postMessage(JSON.stringify(message));
  } else if (isIframe()) {
    window.parent.postMessage(message, "*");
  } else if (isParentWindow()) {
    const iframes = document.querySelectorAll("iframe");
    iframes.forEach((iframe) => {
      iframe.contentWindow?.postMessage(message, "*");
    });
  } else {
    log("⚠️ Unknown environment, cannot send message", message);
  }
}

function sendEvent(event, payload = {}, expectResponse = false) {
  const message = { event, payload };
  log("📤 sendEvent triggered:", {
    event,
    payload,
    expectResponse,
    environment: getEnvironmentInfo(),
  });
  if (expectResponse) {
    const id = `msg_${msgIdCounter++}_${Date.now()}`;
    message.id = id;
    return new Promise((resolve) => {
      pendingResponses[id] = resolve;
      sendMessage(message);
    });
  } else {
    sendMessage(message);
  }
}

function onEvent(event, handler) {
  log("📥 Registered handler for event:", event);
  eventHandlers[event] = handler;
}

async function makeApiRequest(resourcePath, payload) {
  const { token, ...body } = payload || {};
  let result = null;
  let error = null;

  if (!token) return { error: "Missing token in payload" };

  const isRN = isReactNativeWebView();
  const sessionToken = getSessionTokenFromUrl();
  const localToken = getAuthTokenFromLocalStorage();
  const authToken = isRN ? sessionToken : localToken;

  const url = `${BASE_API_URL}${resourcePath}?token=${encodeURIComponent(
    token
  )}`;

  log("🌐 Making API Request:", {
    url,
    body,
    payload,
    tokenSource: isRN ? "sessionToken (React Native)" : "localStorage (Web)",
  });

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw new Error(`API error: ${res.status} ${res.statusText}`);
    }

    result = await res.json();
    log("✅ API response:", result);
  } catch (e) {
    error = e.message || "Unknown API error";
    log("❌ API error:", error);
  }

  return { result, error };
}

onEvent("roll_gacha", (payload) =>
  makeApiRequest("/v1/lobbies/games/do/gacha", payload)
);
onEvent("pay_to_play", (payload) =>
  makeApiRequest("/v1/games/pay-to-play", payload)
);
onEvent("report_score", (payload) =>
  makeApiRequest("/v1/games/score/report", payload)
);
onEvent("get_user_info", (payload) =>
  makeApiRequest("/v0/lobbies/games/me", payload)
);

window.addEventListener("message", async (msgEvent) => {
  let messageData;

  if (typeof msgEvent.data === "string") {
    try {
      messageData = JSON.parse(msgEvent.data);
    } catch (e) {
      log("❌ Failed to parse message as JSON:", msgEvent.data);
      return;
    }
  } else {
    messageData = msgEvent.data || {};
  }

  const { event, payload, id, responseTo, responsePayload } = messageData;

  log("📬 Received message:", { event, payload, id, responseTo });

  if (responseTo && pendingResponses[responseTo]) {
    log("📨 Resolving pending response:", responseTo);
    pendingResponses[responseTo](responsePayload);
    delete pendingResponses[responseTo];
    return;
  }

  if (event && eventHandlers[event]) {
    log("⚙️ Handling event:", event);
    let result;
    try {
      result = await eventHandlers[event](payload);
    } catch (e) {
      result = { error: e?.message || "Handler error" };
      log("❌ Handler error:", e.message);
    }

    if (id) {
      const responseMessage = {
        responseTo: id,
        responsePayload: result?.result,
      };
      if (isReactNativeWebView()) {
        window.ReactNativeWebView.postMessage(JSON.stringify(responseMessage));
      } else if (msgEvent.source) {
        msgEvent.source.postMessage(responseMessage, msgEvent.origin || "*");
      }
    }
  } else {
    log("⚠️ No handler found for event:", event);
  }
});

// ✅ Expose to global window for CDN usage
window.sendEvent = sendEvent;
window.onEvent = onEvent;
