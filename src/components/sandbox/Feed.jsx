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
  ceramic: "https://ceramic-temp.hirenodes.io",
  definition,
});

export default function FeedExample() {
  const [devs, setDevs] = useState([]);
  const [count, setCount] = useState(0);
  const [reactItems, setReactItems] = useState([]);

  const refreshMessages = async () => {
    const list = [];
    const messagesResult = await composeClient.executeQuery(`
        query {
            ceramicDevIndex(last: 30){
                edges{
                    node{
                        id
                        developer {
                          id
                        }
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
                        attestations(first: 100){
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
    setDevs(messagesResult.data.ceramicDevIndex.edges);
  };

  useEffect(() => {
    setInterval(() => {
      refreshMessages();
    }, 1000);
  }, []);

  return (
    <Feed>
      {devs.map((dev) => {
        return (
          <FeedEvent key={dev.node.id} style={{ marginBottom: "2%" }}>
            <FeedLabel>
              <strong>Developer:</strong> {dev.node.developer.id}
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
                <div className="text-sm text-gray-400">
                  <p> Attestations: {dev.node.attestations.edges.length.toString()}</p>
                </div>
              </FeedSummary>
              <FeedMeta></FeedMeta>
            </FeedContent>
          </FeedEvent>
        );
      })}
    </Feed>
  );
}
