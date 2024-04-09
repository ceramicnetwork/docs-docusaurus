import React from "react";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { GraphiQL } from "graphiql";
import "../../css/graphiql.min.css";
import { ComposeClient } from "@composedb/client";
import ReactGA from "react-ga4";
import Profiles from "./queries/profiles";
import Posts from "./queries/posts";
import Begin from "./queries/begin";
import Comments from "./queries/comments";
import { definition } from "./utils/read-runtime";
import { BrowserView, MobileView } from "react-device-detect";

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
    ceramic: "https://ceramic-temp.hirenodes.io",
    definition,
  });

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
      action: "query-success",
    });
    ReactGA.event({
      category: "sandbox-query",
      action: "query-all",
    });

    // Allocate a point
    const address = await checkIfWalletIsConnected();
    if (address.length > 0) {
      // const point = await generatePoint(address);
      // console.log(point);
    }
    return data.data;
  }
};

const settings = {
  profiles: Profiles,
  comments: Comments,
  posts: Posts,
  begin: Begin,
};

export default function Sandbox(props) {
  const isBrowser = useIsBrowser();
  return isBrowser ? (
    <>
      <BrowserView>
        <div style={{ height: "60rem", width: "100%", margin: "auto" }}>
          <GraphiQL
            defaultTabs={settings[props.queries].values}
            storage={null}
            fetcher={fetcher}
          />
        </div>
      </BrowserView>
      <MobileView>
        <div style={{ height: "30rem", width: "100%", margin: "auto" }}>
          <GraphiQL
            defaultTabs={settings[props.queries].values}
            storage={null}
            fetcher={fetcher}
            style={{ transform: "scale(.5)" }}
          />
        </div>
      </MobileView>
    </>
  ) : (
    <div>loading...</div>
  );
}
