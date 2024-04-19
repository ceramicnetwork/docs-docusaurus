import React, { useEffect, useState } from "react";
import {
  FeedUser,
  FeedSummary,
  FeedMeta,
  FeedLabel,
  FeedEvent,
  FeedContent,
  Feed,
} from "semantic-ui-react";
import { ComposeClient } from "@composedb/client";
import { definition } from "./utils/mutation-all";

const composeClient = new ComposeClient({
  ceramic: "https://experiments.ceramic.dev/",
  definition,
});

export default function FeedExample() {
  const [devs, setDevs] = useState([]);
  const [parentDid, setParentDid] = useState("");

  const refreshMessages = async () => {
    const messagesResult = await composeClient.executeQuery(`
        query {
            ceramicDevIndex(last: 8){
                edges{
                    node{
                        id
                        developer {
                          id
                        }
                        context
                        languages {
                          JavaScript 
                          Python
                          Rust
                          Java
                          Swift
                          Go
                          Cpp
                          Scala
                          WebAssembly
                          Solidity
                          Other
                        }
                        attestations(first: 500){
                            edges{
                                node{
                                    id
                                    attester {
                                      id
                                    }
                                  signal
                                }
                            }
                        }
                    }
                }
            }
        }
    `);
    if(messagesResult.data && messagesResult.data.ceramicDevIndex && messagesResult.data.ceramicDevIndex.edges){
      const devIndex = messagesResult.data.ceramicDevIndex.edges
      .reverse()
      .filter((dev) => {
        return dev.node !== null && dev.node.context === "sandbox";
      });
    setDevs(devIndex);
    }
  };

  useEffect(() => {
    try {
      localStorage.getItem("parent_did") &&
        setParentDid(localStorage.getItem("parent_did"));
      refreshMessages();
      window.addEventListener("mutation", function (e) {
        console.log(e);
        try {
          localStorage.getItem("parent_did") &&
            setParentDid(localStorage.getItem("parent_did"));
          refreshMessages();
        } catch (error) {
          console.log(error);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      {devs.length ? (
        <Feed
          style={{
            backgroundColor: "black",
            width: "100%",
            padding: "2%",
            borderRadius: "5px",
          }}
        >
          {devs.map((dev) => {
            return (
              <FeedEvent key={dev.node.id} style={{ marginBottom: "2%" }}>
                <FeedLabel style={{ color: "white" }}>
                  {dev.node.developer.id === parentDid && (
                    <div style={{ color: "lightgreen" }}>Your Profile</div>
                  )}
                  <strong>Developer:</strong> {dev.node.developer.id}
                  <div style={{ color: "lightblue" }}>
                    {" "}
                    Context: {dev.node.context}
                  </div>
                </FeedLabel>
                <FeedContent>
                  <FeedSummary>
                    <FeedUser>
                      <div>
                        {dev.node.languages.JavaScript != null &&
                          "JavaScript: " + dev.node.languages.JavaScript}{" "}
                      </div>
                      <div>
                        {dev.node.languages.Python !== null &&
                          "Python: " + dev.node.languages.Python}
                      </div>
                      <div>
                        {dev.node.languages.Rust !== null &&
                          "Rust: " + dev.node.languages.Rust}
                      </div>
                      <div>
                        {dev.node.languages.Java !== null &&
                          "Java: " + dev.node.languages.Java}
                      </div>
                      <div>
                        {dev.node.languages.Swift !== null &&
                          "Swift: " + dev.node.languages.Swift}
                      </div>
                      <div>
                        {dev.node.languages.Go !== null &&
                          "Go: " + dev.node.languages.Go}
                      </div>
                      <div>
                        {dev.node.languages.Cpp !== null &&
                          "Cpp: " + dev.node.languages.Cpp}
                      </div>
                      <div>
                        {dev.node.languages.Scala !== null &&
                          "Scala: " + dev.node.languages.Scala}
                      </div>
                      <div>
                        {dev.node.languages.WebAssembly !== null &&
                          "WebAssembly: " + dev.node.languages.WebAssembly}
                      </div>
                      <div>
                        {dev.node.languages.Solidity !== null &&
                          "Solidity: " + dev.node.languages.Solidity}
                      </div>
                      <div>
                        {dev.node.languages.Other !== null &&
                          "Other: " + dev.node.languages.Other}
                      </div>
                    </FeedUser>
                    <div className="text-sm">
                      <p style={{ color: "white" }}>
                        {" "}
                        Unique Verifications:{" "}
                        {dev.node.attestations.edges.length}
                      </p>
                    </div>
                  </FeedSummary>
                  <FeedMeta></FeedMeta>
                </FeedContent>
              </FeedEvent>
            );
          })}
        </Feed>
      ) : (
        <div style={{ color: "black" }}>Loading...</div>
      )}
    </>
  );
}
