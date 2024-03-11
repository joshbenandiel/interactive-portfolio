import React, { useCallback, useEffect, useState } from 'react'

export const Test = () => {
  const [publicKey, setPublicKey] = useState("");
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
        provider?.signMessage(encodedMessage, "utf8")
      });
    } catch (error) {
      console.log("ERROR")
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
      case sUsrAg.includes("Phantom"):
        sBrowser = "Phantom";
        break;
      default:
        sBrowser = "unknown";
        break;
    }
    setBrowserName(sBrowser);
  }, []);

  
  return (
    <div style={{ backgroundColor: "red", height: "100vh", display: "flex", flexDirection: "column", width: "100vw", minHeight: "100%"}}>
      <div style={{ flexGrow: "1"}}>
        <button onClick={handleConnect}>Connect</button>
        <button onClick={handleDisconnect}>Disconnect</button>
        <div>Public Key: {publicKey}</div>
        <div>{navigator.userAgent}</div>
        <div>{navigator.userAgent.indexOf("Phantom")}</div>
        <div>{browserName}</div>
      </div>
      <div>
        <div>Chatbox</div>
        <input placeholder='send message hehe'/>
      </div>
    </div>
  )
}
