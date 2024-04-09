import React, { useState, useEffect } from "react";
import useIsBrowser from "@docusaurus/useIsBrowser";
import "graphiql/graphiql.min.css";

export default function Connect() {
  const [loaded, setLoaded] = useState(false);
  const [account, setAccount] = useState("");
  const [status, setStatus] = useState("");
  const isBrowser = useIsBrowser();

  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert("Get MetaMask -> https://metamask.io/");
        return;
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Connected", accounts[0]);
      setAccount(accounts[0].toLowerCase());
      setStatus("Connected");
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }
    const accounts = await ethereum.request({ method: "eth_accounts" });
    // Users can have multiple authorized accounts, we grab the first one if its there!
    if (accounts.length !== 0) {
      const acc = accounts[0];
      console.log("Found an authorized account:", acc);
      setAccount(acc.toLowerCase());
      setStatus("Connected");
    } else {
      console.log("No authorized account found");
    }
    setLoaded(true);
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return isBrowser && loaded && status !== "Connected" ? (
    <button onClick={async () => connectWallet()}>Connect Wallet</button>
  ) : (
    <button
      onClick={async () => {
        connectWallet();
      }}
    >
      {loaded ? status : "Loading..."}
    </button>
  );
}
