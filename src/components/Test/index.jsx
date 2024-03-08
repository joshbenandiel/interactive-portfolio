// import { useWeb3Modal } from '@web3modal/wagmi1/react';
// import { useWeb3ModalState } from '@web3modal/wagmi1/react';
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

  // const { open: openFunc } = useWeb3Modal();
  // const { open } = useWeb3ModalState();

  // useEffect(() => {
  //   // Workaround to only show MetaMask in WalletConnectModal
  //   if (open) {
  //     setTimeout(() => {
  //       const modalElement = document.querySelector("w3m-modal");
  //       const shadowRoot = modalElement?.shadowRoot;
  //       const innerShadowRoot =
  //         shadowRoot?.querySelector("w3m-router")?.shadowRoot;
  //       const childrenOfInnerShadowRoot =
  //         innerShadowRoot?.querySelector("w3m-connect-view")?.shadowRoot;

  //       const walletElements =
  //         childrenOfInnerShadowRoot?.querySelectorAll(`wui-list-wallet`);

  //       walletElements?.forEach((element) => {
  //         if (element instanceof HTMLElement) {
  //           if (element.getAttribute("name") === "MetaMask") {
  //             element.style.display = "";
  //           } else {
  //             element.style.display = "none";
  //           }
  //         }
  //       });
  //     }, 0);
  //   }
  // }, [open]);
  
  return (
    <div style={{ backgroundColor: "red", height: "100vh", display: "flex", flexDirection: "column", color: "white"}}>
    <div style={{ flexGrow: "1"}}>
      <button onClick={handleConnect}>Connect</button>
      <button onClick={handleDisconnect}>Disconnect</button>
      {/* <button onClick={() => openFunc()}>OPEN WALLETCONNECT</button> */}
      <div>Public Key: {publicKey}</div>
      <div>{navigator.userAgent}</div>
      <div>{navigator.userAgent.indexOf("Phantom")}</div>
      <div>{browserName}</div>
    </div>
    <div style={{ padding: "20px"}}>
      <input style={{width: "100%"}}/>
    </div>
    </div>
  )
}
