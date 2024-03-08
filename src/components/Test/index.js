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

  
  return (
    <div>
      <button onClick={handleConnect}>Connect</button>
      <button onClick={handleDisconnect}>Disconnect</button>
      <div>Public Key: {publicKey}</div>
      <div>{navigator.userAgent}</div>
      <div>{navigator.userAgent.indexOf("Phantom")}</div>
    </div>
  )
}
