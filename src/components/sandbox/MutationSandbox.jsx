import React from "react";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { GraphiQL } from "graphiql";
import "graphiql/graphiql.min.css";
import { ComposeClient } from "@composedb/client";
import ReactGA from "react-ga4";
import Mutations from "./mutations";
import { DIDSession } from "did-session";
import { definition } from "./utils/mutation-runtime";

const fetcher = async (graphQLParams) => {
  ReactGA.initialize("G-426ZZLPJPW");

  const composeClient = new ComposeClient({
    ceramic: "https://ceramic-temp.hirenodes.io",
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
  console.log(data);

  if (data.errors) {
    ReactGA.event({
      category: "sandbox-query",
      action: "query-error",
    });
  }
  if (!data.data.__schema) {
    ReactGA.event({
      category: "sandbox-query",
      action: "mutation-success",
    });
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
