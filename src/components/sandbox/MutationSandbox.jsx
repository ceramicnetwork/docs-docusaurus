import React from "react";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { GraphiQL } from "graphiql";
import "graphiql/graphiql.min.css";
import { ComposeClient } from "@composedb/client";
import ReactGA from "react-ga4";
import Mutations from "./queries/mutations";
import { DIDSession } from "did-session";
import { definition } from "./utils/mutation-runtime";

const pointUpdate = async (recipient) => {
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
          context: "mutationSandbox",
        }),
      }
    ).then((res) => res.json());
    console.log(readPoints);
    if (readPoints) {
      if (!readPoints.contextTotal) {
        const updatePoints = await fetch(
          "https://walrus-app-f7xa9.ondigitalocean.app/multi/aggregate",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              recipient: `did:pkh:eip155:1:${recipient}`,
              context: "mutationSandbox",
              amount: 5,
            }),
          }
        ).then((res) => res.json());
        if (updatePoints) {
          if (updatePoints.contextTotal) {
            return updatePoints.contextTotal;
          }
        }
      }
    }
    return undefined;
  } catch (error) {
    console.log(error);
  }
};

const checkIfWalletIsConnected = async () => {
  const { ethereum } = window;

  if (!ethereum) {
    return "";
  }
  const accounts = await ethereum.request({ method: "eth_accounts" });
  // Users can have multiple authorized accounts, we grab the first one if its there!
  if (accounts.length !== 0) {
    const acc = accounts[0];
    return acc;
  } else {
    return "";
  }
};

const fetcher = async (graphQLParams) => {
  ReactGA.initialize("G-426ZZLPJPW");

  const composeClient = new ComposeClient({
    ceramic: "https://experiments.ceramic.dev/",
    definition,
  });

  const sessionStr = localStorage.getItem("ceramic:eth_did");

  let session;
  if (sessionStr) {
    session = await DIDSession.fromSession(sessionStr);
  }
  if (session && session.hasSession && !session.isExpired) {
    composeClient.setDID(session.did);
  }

  const data = await composeClient.executeQuery(`${graphQLParams.query}`);

  if (data.errors) {
    ReactGA.event({
      category: "sandbox-query",
      action: "query-error",
    });
    ReactGA.event({
      category: "sandbox-query",
      action: "query-all",
    });
  }
  if (!data.data.__schema) {
    ReactGA.event({
      category: "sandbox-query",
      action: "mutation-success",
    });
    ReactGA.event({
      category: "sandbox-query",
      action: "query-all",
    });

    // Check if wallet is connected and allocate a point if conditions are met
    const address = await checkIfWalletIsConnected();
    if (address.length > 0) {
      const point = await pointUpdate(address.toLowerCase());
      if (point) {
        console.log("Write point created! ", point);
        window.dispatchEvent(new Event("point"));
        window.dispatchEvent(new Event("mutation"));
        ReactGA.event({
          category: "points",
          action: "points-allocated",
        });
      }
    }
    return data.data;
  }
};

const settings = {
  mutations: Mutations,
};

export default function MutationSandbox(props) {
  const isBrowser = useIsBrowser();
  return isBrowser ? (
    <GraphiQL
      defaultTabs={settings[props.queries].values}
      storage={null}
      fetcher={fetcher}
    />
  ) : (
    <div>loading...</div>
  );
}
