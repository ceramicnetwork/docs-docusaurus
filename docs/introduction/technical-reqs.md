# Technical requirements to run Ceramic

To understand the expected costs to integrate Ceramic into your architecture, it is helpful to first understand where Ceramic lives in the application architecture stack.

Ceramic is a decentralized data storage network made up of different components, and can replace or augment existing storage solutions.

![Architecture](/img/app-architecture-overview.png)

When integrating with Ceramic, you will be running a few different services and components, each serving a specific purpose for running your application:

- `ceramic-one` - the Ceramic node written in Rust, responsible for storing data, providing HTTP API access, and coordinating with network participants
- `EVM RPC node access` - required for self-anchoring to EVM blockchains (optional, but recommended for production)

With self-anchoring support, you can run your own anchor service on any EVM-compatible blockchain instead of relying on external services. See [Self-Anchoring](../protocol/ceramic-one/anchoring/overview) for more details.

## Hardware requirements

Depending on the expected throughput of your project, the suggested hardware requirements will differ. Below, you can find the estimated hardware requirements based on different levels of expected throughput.

### Minimum (light throughput)

| Resource | Size |
| --- | --- |
| CPU |  2 CPU Cores |
| RAM | 4GB |
| Storage | 110GB |

### Recommended

As your project scales, you may need to expand your storage beyond 180GB.

| Resource | Size |
| --- | --- |
| CPU | 4 CPU cores |
| RAM | 8 GB |
| Storage | 180GB |

### Advanced (heavy throughput)

| Resource | Size |
| --- | --- |
| CPU | 4 CPU Cores |
| RAM | 8 GB |
| Storage | 180GB+ |

## Hosting solutions and costs

One of the key factors impacting costs is how you choose to host your Ceramic node. A few options are shown below. Monthly server costs are **estimated** based on the hardware requirements above.

<table style={{ width: "100%", borderCollapse: "collapse" }}>
  <tr>
    <th style={{ width: "33%", textAlign: "left", verticalAlign: "top" }}>Locally hosted</th>
    <th style={{ width: "33%", textAlign: "left", verticalAlign: "top" }}>Cloud hosted</th>
    <th style={{ width: "33%", textAlign: "left", verticalAlign: "top" }}>Managed node service</th>
  </tr>
  <tr>
    <td style={{ textAlign: "left", verticalAlign: "top" }}>- No new incremental costs</td>
    <td style={{ textAlign: "left", verticalAlign: "top" }}>- $25 - $250 per node per month</td>
    <td style={{ textAlign: "left", verticalAlign: "top" }}>- $50 - $500 per node per month</td>
  </tr>
  <tr>
    <td style={{ textAlign: "left", verticalAlign: "top" }}>- Not recommended for production environments</td>
    <td style={{ textAlign: "left", verticalAlign: "top" }}>- Dependent on cloud provider (e.g., AWS vs GCP vs Azure)</td>
    <td style={{ textAlign: "left", verticalAlign: "top" }}>- Managed backups</td>
  </tr>
  <tr>
    <td style={{ textAlign: "left", verticalAlign: "top" }}></td>
    <td style={{ textAlign: "left", verticalAlign: "top" }}>- Infrastructure professionals who manage their own servers should have lower costs than using a cloud provider</td>
    <td style={{ textAlign: "left", verticalAlign: "top" }}>- Application developers who prefer to use third party managed node services can offload node management responsibilities to dedicated professionals</td>
  </tr>
</table>
