import React, { useState, useEffect } from "react";
import useIsBrowser from "@docusaurus/useIsBrowser";
import "graphiql/graphiql.min.css";
import { ComposeClient } from "@composedb/client";
import { definition } from "./utils/mutation-all";
import ReactGA from "react-ga4";

const composeClient = new ComposeClient({
  ceramic: "https://experiments.ceramic.dev/",
  definition,
});

export default function ConnectOnly() {
  const [loaded, setLoaded] = useState(false);
  const [read, setRead] = useState(false);
  const [mutationSandbox, setMutationSandbox] = useState(false);
  const [mutationRepo, setMutationRepo] = useState(false);
  const [account, setAccount] = useState("");
  const [status, setStatus] = useState("");
  const [network, setNetwork] = useState("");
  const isBrowser = useIsBrowser();

  const networks = {
    "0x1": "Mainnet",
    "0x3": "Ropsten",
    "0x2a": "Kovan",
    "0x4": "Rinkeby",
    "0x5": "Goerli",
    "0x61": "BSC Testnet",
    "0x38": "BSC Mainnet",
    "0x89": "Polygon Mainnet",
    "0x13881": "Polygon Mumbai Testnet",
    "0xa86a": "AVAX Mainnet",
    "0xaa36a7": "Sepolia",
  };

  const checkPoints = async (recipient) => {
    try {
      const readPoints = await fetch(
        "https://walrus-app-f7xa9.ondigitalocean.app/multi/getAggregations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            recipient: `did:pkh:eip155:1:${recipient}`,
            context: "read",
          }),
        }
      ).then((res) => res.json());

      const writeSandbox = await fetch(
        "https://walrus-app-f7xa9.ondigitalocean.app/multi/getAggregations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            recipient: `did:pkh:eip155:1:${recipient}`,
            context: "mutationSandbox",
          }),
        }
      ).then((res) => res.json());

      const mutationRepo = await fetch(
        "https://walrus-app-f7xa9.ondigitalocean.app/multi/getAggregations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            recipient: `did:pkh:eip155:1:${recipient}`,
            context: "mutationRepo",
          }),
        }
      ).then((res) => res.json());

      return {
        read: readPoints,
        mutationSandbox: writeSandbox,
        mutationRepo,
      };
    } catch (error) {
      console.log(error);
    }
  };

  const pointUpdate = async (recipient) => {
    try {
      const updatePoints = await fetch(
        "https://walrus-app-f7xa9.ondigitalocean.app/multi/aggregate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            recipient: `did:pkh:eip155:1:${recipient}`,
            context: "mutationRepo",
            amount: 10,
          }),
        }
      ).then((res) => res.json());
      if (updatePoints) {
        if (updatePoints.contextTotal) {
          return updatePoints.contextTotal;
        }
      }
      return undefined;
    } catch (error) {
      console.log(error);
    }
  };

  const checkCreatedAttestation = async (address) => {
    try {
      const messagesResult = await composeClient.executeQuery(`
      query Attestations {
        node(id: "did:pkh:eip155:1:${address}") {
          ... on CeramicAccount {
            id
            attestToDevList(first: 10) {
              edges {
                node {
                  id
                }
              }
            }
          }
        }
      }
    `);
      if (
        messagesResult.data &&
        messagesResult.data.node &&
        messagesResult.data.node.attestToDevList
      ) {
        return messagesResult.data.node.attestToDevList.edges;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const switchNetwork = async () => {
    if (window.ethereum) {
      try {
        // Try to switch to the Mumbai testnet
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x1" }], // Check networks.js for hexadecimal network ids
        });

        const chainId = await ethereum.request({ method: "eth_chainId" });
        setNetwork(networks[chainId]);
        if (chainId === "0x1") {
          const accounts = await ethereum.request({ method: "eth_accounts" });
          localStorage.setItem("address", accounts[0]);
        }
      } catch (error) {
        // This error code means that the chain we want has not been added to MetaMask
        // In this case we ask the user to add it to their MetaMask
        if (error.code === 4902) {
          try {
            await window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: "1",
                  chainName: "Mainnet",
                  rpcUrls: ["https://ethereum-rpc.publicnode.com"],
                  nativeCurrency: {
                    name: "ETH",
                    symbol: "ETH",
                    decimals: 18,
                  },
                  blockExplorerUrls: ["https://etherscan.io/"],
                },
              ],
            });
          } catch (error) {
            console.log(error);
          }
        }
        console.log(error);
      }
    } else {
      // If window.ethereum is not found then MetaMask is not installed
      alert(
        "MetaMask is not installed. Please install it to use this app: https://metamask.io/download.html"
      );
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
      setAccount(accounts[0]);
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
      setAccount(acc);
      const res = await checkPoints(acc);
      if (res) {
        if (res.read.contextTotal) {
          setRead(true);
        }
        if (res.mutationSandbox.contextTotal) {
          setMutationSandbox(true);
        }
        if (res.mutationRepo.contextTotal) {
          setMutationRepo(true);
        } else {
          const result = await checkCreatedAttestation(acc);
          if (result) {
            if (result.length) {
              const point = await pointUpdate(acc.toLowerCase());
              if (point) {
                console.log("Repo mutation point created! ", point);
                window.dispatchEvent(new Event("point"));
                ReactGA.initialize("G-426ZZLPJPW");
                ReactGA.event({
                  category: "points",
                  action: "points-allocated",
                });
              }
            }
          }
        }
      }
      setStatus("Connected");
    } else {
      console.log("No authorized account found");
    }
    const chainId = await ethereum.request({ method: "eth_chainId" });

    setNetwork(networks[chainId]);
    if (chainId === "0x1") {
      const acc = accounts[0];
      localStorage.setItem("address", acc);
    }
    setLoaded(true);
  };

  useEffect(() => {
    checkIfWalletIsConnected();
    window.addEventListener("point", function (e) {
      console.log(e);
      checkIfWalletIsConnected();
    });
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          height: "fit-content",
          width: "100%",
          borderRadius: ".5rem",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "10px",
            justifyContent: "space-between",
            width: "90%",
            margin: "auto",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p>Read Query</p>
            <p style={{ fontSize: "0.8rem" }}>
              {" "}
              Use the GraphiQL modules below to view existing data
            </p>
          </div>
          {status === "Connected" && network === "Mainnet" && read ? (
            <p>1/1 Point(s) Earned ✅</p>
          ) : status === "Connected" && network === "Mainnet" && !read ? (
            <p>0/1 Point(s) Earned</p>
          ) : (
            <p>Not Connected</p>
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "10px",
            justifyContent: "space-between",
            width: "90%",
            margin: "auto",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p>Sandbox Mutation Query</p>
            <p style={{ fontSize: "0.8rem" }}>
              {" "}
              Use the GraphiQL modules within the "Writing Data" section to
              create new data
            </p>
          </div>
          {status === "Connected" &&
          network === "Mainnet" &&
          mutationSandbox ? (
            <p>5/5 Point(s) Earned ✅</p>
          ) : status === "Connected" &&
            network === "Mainnet" &&
            !mutationSandbox ? (
            <p>0/5 Point(s) Earned</p>
          ) : (
            <p>Not Connected</p>
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "10px",
            justifyContent: "space-between",
            width: "90%",
            margin: "auto",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p>Sandbox Extension Mutation Query</p>
            <p style={{ fontSize: "0.8rem" }}>
              {" "}
              Clone the reposority found in the "Writing Data" section to create
              new data
            </p>
          </div>
          {status === "Connected" && network === "Mainnet" && mutationRepo ? (
            <p>10/10 Point(s) Earned ✅</p>
          ) : status === "Connected" &&
            network === "Mainnet" &&
            !mutationRepo ? (
            <p>0/10 Point(s) Earned</p>
          ) : (
            <p>Not Connected</p>
          )}
        </div>
      </div>{" "}
      {isBrowser && loaded && status !== "Connected" ? (
        <>
          <p style={{ marginTop: "1rem" }}>
            Connect your wallet to earn points
          </p>
          <button
            style={{
              marginBottom: "1rem",
              borderRadius: ".75rem",
              border: "none",
              backgroundColor: "#F05027",
              color: "white",
              height: "2rem",
              width: "8rem",
              fontWeight: "bold",
            }}
            onClick={async () => connectWallet()}
          >
            Connect Wallet
          </button>
        </>
      ) : isBrowser &&
        loaded &&
        status === "Connected" &&
        network !== "Mainnet" ? (
        <button
          onClick={async () => {
            switchNetwork();
          }}
          style={{
            marginTop: "1rem",
            marginBottom: "1rem",
            borderRadius: ".75rem",
            border: "none",
            backgroundColor: "#F05027",
            color: "white",
            height: "2rem",
            width: "8rem",
            fontWeight: "bold",
          }}
        >
          Switch to Mainnet
        </button>
      ) : (
        <button
          onClick={async () => {
            connectWallet();
          }}
          style={{
            marginTop: "1rem",
            marginBottom: "1rem",
            borderRadius: ".75rem",
            border: "none",
            backgroundColor: "#F05027",
            color: "white",
            height: "2rem",
            width: "8rem",
            fontWeight: "bold",
          }}
        >
          {loaded ? status : "Loading..."}
        </button>
      )}
    </>
  );
}
