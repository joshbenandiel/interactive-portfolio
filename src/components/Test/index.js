import React, { useCallback, useEffect, useRef, useState } from "react";
import useDetectKeyboardOpen from "use-detect-keyboard-open";
import {
  EIP6963Connector,
  createWeb3Modal,
  defaultWagmiConfig,
  useWeb3Modal,
} from "@web3modal/wagmi/react";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { arbitrum, mainnet } from "viem/chains";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";
import { walletConnectProvider } from "@web3modal/wagmi1";

export const Test = () => {
  const [publicKey, setPublicKey] = useState("");
  const messageListContainerRef = useRef(null);
  const isKeyboardOpen = useDetectKeyboardOpen();

  const getProvider = () => {
    if ("phantom" in window) {
      const provider = window.phantom?.solana;
      if (provider?.isPhantom) {
        return provider;
      }
    }
  };
  const provider = getProvider();

  useEffect(() => {
    if (!provider) return;

    if (publicKey) {
      provider.on("disconnect", () => {
        setPublicKey("");
      });

      provider.on("accountChanged", (publicKey) => {
        if (publicKey) {
          setPublicKey(publicKey.toBase58());
        }
      });
    }

    provider.on("connect", (publicKey) => {
      if (publicKey) {
        setPublicKey(publicKey.toBase58());
      }
    });
  }, [publicKey]);

  const handleConnect = useCallback(async () => {
    if (!provider) {
      window.open("https://phantom.app/", "_blank");
      return;
    }
    try {
      await provider.connect().then(() => {
        const encodedMessage = new TextEncoder().encode("hello");
        provider?.signMessage(encodedMessage, "utf8");
      });
    } catch (error) {
      console.log("ERROR");
    }
  }, [provider]);

  const handleDisconnect = useCallback(async () => {
    await provider.disconnect();
  }, [provider]);

  const sUsrAg = navigator.userAgent;
  const [browserName, setBrowserName] = useState("");

  useEffect(() => {
    let sBrowser;
    switch (true) {
      case sUsrAg.includes("Phantom"):
        sBrowser = "Phantom";
        break;
      case sUsrAg.indexOf("Firefox") > -1:
        sBrowser = "Mozilla Firefox";
        break;
      case sUsrAg.indexOf("SamsungBrowser") > -1:
        sBrowser = "Samsung Internet";
        break;
      case sUsrAg.indexOf("Opera") > -1 || sUsrAg.indexOf("OPR") > -1:
        sBrowser = "Opera";
        break;
      case sUsrAg.indexOf("Trident") > -1:
        sBrowser = "Microsoft Internet Explorer";
        break;
      case sUsrAg.indexOf("Edge") > -1:
        sBrowser = "Microsoft Edge";
        break;
      case sUsrAg.indexOf("Chrome") > -1:
        sBrowser = "Google Chrome or Chromium";
        break;
      case sUsrAg.indexOf("Safari") > -1:
        sBrowser = "Apple Safari";
        break;
      default:
        sBrowser = "unknown";
        break;
    }
    setBrowserName(sBrowser);
  }, []);

  useEffect(() => {
    if (messageListContainerRef.current) {
      messageListContainerRef.current.addEventListener("touchmove", (e) => {
        if (!e.currentTarget) {
          return;
        }
        if (e.currentTarget.scrollTop === 0) {
          e.currentTarget.scrollTop = 1;
        } else if (
          e.currentTarget.scrollHeight ===
          e.currentTarget.scrollTop + e.currentTarget.offsetHeight
        ) {
          e.currentTarget.scrollTop -= 1;
        }
      });
    }
  }, []);

  const [focused, setFocused] = React.useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  const isInPhantomBrowser = browserName === "Phantom" && focused;

  let inputStyle = {};
  if (isInPhantomBrowser) {
    inputStyle = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%",
    };
  }

  function handleKeyUp(event) {
    if (event.key === "Escape") {
      alert("test");
    }
  }

  const projectId = "2b3f9439022c3636743a10553183c86a";

  const { chains, publicClient } = configureChains(
    [mainnet],
    [walletConnectProvider({ projectId }), publicProvider()]
  );

  const metadata = {
    name: "Web3Modal",
    description: "Web3Modal Example",
    url: "https://web3modal.com",
    icons: ["https://avatars.githubusercontent.com/u/37784886"],
  };

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: [
      new WalletConnectConnector({
        chains,
        options: { projectId, showQrModal: false, metadata },
      }),
      new EIP6963Connector({ chains }),
    ],
    publicClient,
  });

  // 3. Create modal
  createWeb3Modal({
    wagmiConfig,
    projectId,
    chains,
    themeMode: "light",
  });

  const { open } = useWeb3Modal();

  return (
    <WagmiConfig config={wagmiConfig}>
      <div
        style={{
          backgroundColor: "red",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          minHeight: "100%",
        }}
      >
        <div style={{ flexGrow: "1" }}>
          <div onClick={() => open()} style={{ padding: "100px" }}>
            OPEN WALLET CONNECT
          </div>
          <button onClick={handleConnect}>Connect</button>
          <button onClick={handleDisconnect}>Disconnect</button>
          <div>Public Key: {publicKey}</div>
          <div>{navigator.userAgent}</div>
          <div>{navigator.userAgent.indexOf("Phantom")}</div>
          <div>
            {browserName} {focused}
          </div>
          <h2>{`soft keyboard is ${isKeyboardOpen ? "open" : "close"}`}</h2>
        </div>
        <div ref={messageListContainerRef}>
          <div>
            <input
              defaultValue="click here for open keyboard"
              onFocus={onFocus}
              onBlur={onBlur}
              onKeyUp={handleKeyUp}
            />
          </div>
          <div>Chatbox</div>
          <input
            placeholder="send message hehe"
            style={inputStyle}
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyUp={handleKeyUp}
          />
        </div>
      </div>
    </WagmiConfig>
  );
};
