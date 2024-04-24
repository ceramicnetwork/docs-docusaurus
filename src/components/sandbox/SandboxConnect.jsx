import React, { useState, useEffect } from "react";
import useIsBrowser from "@docusaurus/useIsBrowser";
import "graphiql/graphiql.min.css";
import { DIDSession } from "did-session";
import { EthereumWebAuth, getAccountId } from "@didtools/pkh-ethereum";
import { ComposeClient } from "@composedb/client";
import { definition } from "./utils/mutation-runtime";

export default function Connect() {
  const [ceramicConnected, setCeramicConnected] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [account, setAccount] = useState("");
  const [status, setStatus] = useState("");
  const isBrowser = useIsBrowser();

  const compose = new ComposeClient({
    ceramic: "https://ceramic-temp.hirenodes.io",
    // cast our definition as a RuntimeCompositeDefinition
    definition,
  });

  const authenticateCeramic = async () => {
    const sessionStr = localStorage.getItem("ceramic:eth_did");
    let session;

    if (sessionStr) {
      session = await DIDSession.fromSession(sessionStr);
    }

    if (!session || (session.hasSession && session.isExpired)) {
      const ethProvider = window.ethereum;
      // request ethereum accounts.
      console.log("requesting accounts");
      const addresses = await ethProvider.enable({
        method: "eth_requestAccounts",
      });
      const accountId = await getAccountId(ethProvider, addresses[0]);
      console.log("accountId", accountId);
      const authMethod = await EthereumWebAuth.getAuthMethod(
        ethProvider,
        accountId
      );
      session = await DIDSession.authorize(authMethod, {
        resources: [compose.resources[1]],
      });
      localStorage.setItem("ceramic:eth_did", session.serialize());
      localStorage.setItem("parent_did", session.did._parentId);
    }
    if (session && session.hasSession && !session.isExpired) {
      setCeramicConnected(true);
      setStatus("ceramicConnected");
    } else {
      setCeramicConnected(false);
    }
  };

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
      await authenticateCeramic();
      setStatus("connected");
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;
    const sessionStr = localStorage.getItem("ceramic:eth_did");
    let session;
    if (sessionStr) {
      session = await DIDSession.fromSession(sessionStr);
    }
    if (session && session.hasSession && !session.isExpired) {
      setCeramicConnected(true);
    }

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
      setStatus("connected");
    } else {
      console.log("No authorized account found");
    }
    setLoaded(true);
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return isBrowser && status !== "connected" ? (
    <button
      onClick={async () => connectWallet()}
      style={{
        borderRadius: ".75rem",
        marginBottom: "1rem",
        border: "none",
        backgroundColor: "#F05027",
        color: "white",
        height: "2rem",
        width: "8rem",
        fontWeight: "bold",
      }}
    >
      Connect Wallet
    </button>
  ) : (
    <button
      onClick={async () => {
        connectWallet();
      }}
      style={{
        borderRadius: ".75rem",
        marginBottom: "1rem",
        border: "none",
        backgroundColor: "#F05027",
        color: "white",
        height: "2rem",
        width: "8rem",
        fontWeight: "bold",
      }}
    >
      {loaded && ceramicConnected
        ? "Connected"
        : loaded && status === "connected"
        ? "Authenticate on Ceramic"
        : loaded
        ? "Connect Wallet"
        : "Loading"}
    </button>
  );
}
