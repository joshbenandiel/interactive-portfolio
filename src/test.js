let eventHandlers = {};
let pendingResponses = {};
let msgIdCounter = 1;

const BASE_API_URL = "https://dev-api.playfriends.gg";

/**
 * Sends a postMessage event. If expectResponse is true, returns a Promise that resolves with the response.
 * @param {string} event - The event name to send.
 * @param {any} payload - The payload to send with the event.
 * @param {boolean} expectResponse - Whether to wait for a response.
 * @returns {Promise<any>|void}
 */
function sendEvent(event, payload = {}, expectResponse = false) {
  console.log("Sending event from QUASIX game engine");
  const message = { event, payload };
  if (expectResponse) {
    const id = `msg_${msgIdCounter++}_${Date.now()}`;
    message.id = id;
    return new Promise((resolve) => {
      pendingResponses[id] = resolve;
      if (window.parent !== window) {
        window.parent.postMessage(message, "*");
      } else {
        const iframes = document.querySelectorAll("iframe");
        iframes.forEach((iframe) => {
          iframe.contentWindow?.postMessage(message, "*");
        });
      }
    });
  } else {
    if (window.parent !== window) {
      window.parent.postMessage(message, "*");
    } else {
      const iframes = document.querySelectorAll("iframe");
      iframes.forEach((iframe) => {
        iframe.contentWindow?.postMessage(message, "*");
      });
    }
  }
}

/**
 * Registers a handler for a specific event.
 * @param {string} event
 * @param {(payload: any) => any|Promise<any>} handler
 */
function onEvent(event, handler) {
  eventHandlers[event] = handler;
}

async function makeApiRequest(resourcePath, payload) {
  const { token, ...body } = payload || {};
  let result = null;
  let error = null;

  let authToken =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTc0ODgyNTIzMywiZXhwIjoxNzQ4ODI4ODMzLCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay1tYzlyd0BwZi1kZXYtOTc0NzMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzdWIiOiJmaXJlYmFzZS1hZG1pbnNkay1tYzlyd0BwZi1kZXYtOTc0NzMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJ1aWQiOiJoZ2pyTXhCUlNJYVVKQmdCbTM5YVU5RE14U0wyIn0.e4hCthcsqWOIzs9jk888LkOC7D6GeaRCu7olkQtMeKh9d12A8DHF28zEZJFep0uZdmo2NJ73xgwwwOfhX1xEXLM5KZP0qJ9Jd1rni92HCb_Z594m5bCSAtIlnV0wO6JbVoqICL9phgCWQqR6bt7tmdCsDLQFiQNA-HttFLqkzTXA_2TTtQib6EipKdD8C12CV_Qr1g8IW5fxoyPW_Cojln_8i9cHUgqWyuERrzZShAfXIAPzGHfif0QI-vGqrnaTTc6tgE-E1UXWzEiFRVQFXSZIu9WBXptvhqWHl_T8CUqBddwrxggP-bym6_ML8G_KBbbMJsnuG66WDxh4ErOdaQ";

  try {
    const persistRoot = localStorage.getItem("persist:root");
    if (persistRoot) {
      const persistObj = JSON.parse(persistRoot);
      if (persistObj.auth) {
        const authObj = JSON.parse(persistObj.auth);
        if (authObj.authToken) {
          authToken = authObj.authToken;
        } else {
          console.warn("authToken not found in auth object from localStorage");
        }
      } else {
        console.warn(
          "auth property not found in persist:root from localStorage"
        );
      }
    } else {
      console.warn("persist:root not found in localStorage");
    }
  } catch (e) {
    console.warn(
      `Failed to extract authToken from localStorage, using hardcoded: ${e.message}`
    );
  }

  if (!token) return { error: "Missing token in payload" };

  try {
    const res = await fetch(
      `${BASE_API_URL}${resourcePath}?token=${encodeURIComponent(token)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(body),
      }
    );

    if (!res.ok) {
      throw new Error(`API error: ${res.status} ${res.statusText}`);
    }

    result = await res.json();
  } catch (e) {
    error = e.message || "Unknown API error";
  }

  return { result, error };
}

// Register handlers
onEvent("roll_gacha", async (payload) => {
  return makeApiRequest("/v1/lobbies/games/do/gacha", payload);
});

onEvent("pay_to_play", async (payload) => {
  return makeApiRequest("/v1/games/pay-to-play", payload);
});

onEvent("report_score", async (payload) => {
  return makeApiRequest("/v1/games/score/report", payload);
});

onEvent("get_user_info", async (payload) => {
  return makeApiRequest("/v0/lobbies/games/me", payload);
});

// Handle postMessage
window.addEventListener("message", async (msgEvent) => {
  const { event, payload, id, responseTo, responsePayload } =
    msgEvent.data || {};

  if (responseTo && pendingResponses[responseTo]) {
    pendingResponses[responseTo](responsePayload);
    delete pendingResponses[responseTo];
    return;
  }

  if (event && eventHandlers[event]) {
    let result;
    try {
      result = await eventHandlers[event](payload);
    } catch (e) {
      result = { error: e?.message || "Handler error" };
    }

    if (id) {
      msgEvent.source?.postMessage(
        {
          responseTo: id,
          responsePayload: result,
        },
        msgEvent.origin || "*"
      );
    }
  }
});

// ✅ Expose to global scope
window.sendEvent = sendEvent;
window.onEvent = onEvent;
console.log("[QUASIX] Engine initialized and exposed globally.");
