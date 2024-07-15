# Technical requirements to run Ceramic

To understand the expected costs to integrate Ceramic into your architecture, it is helpful to first understand where Ceramic lives in the application architecture stack.

Ceramic is a decentralized data storage network made up of different components, and can replace or augment existing storage solutions.

![Architecture](/img/app-architecture-overview.png)


To make it easier to grasp, you can think about implementing Ceramic just like you might think about implementing a traditional SQL or PostgreSQL database.

When integrating with Ceramic, you will be running a few different services and components, each serving a specific purpose for running your application:

- `js-ceramic` - provides the HTTP API access for connected clients to read the streams stored on the Ceramic network
- `ceramic-one` - responsible for storing the actual data and coordinate with network participants.
- `PostgreSQL` - used for indexing data
- `Ethereum RPC node API access` - required to validate Ceramic Anchor Service (CAS) anchors.
- `Ceramic Anchor Service (CAS) access` - Anchors Ceramic protocol proofs to the blockchain. This service is currently funded by 3box Labs, however, eventually, this function will be provided by node operators and with some expected cost. 

Ceramic nodes are simply pieces of software than run on a server. PostgreSQL is a type of traditional database.

## Hardware requirements

For most projects, all three components of Ceramic can be run on the same server. Thus the main consideration impacting costs are the hardware requirements of your server.

Depending on the expected throughput of your project, the suggested hardware requirements will differ. Below, you can find the estimated hardware requirements based on a different levels of expected throughput.

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

Advanced users may want to consider running the PostgreSQL database on a different server than the Ceramic node.  If you choose to run them on different servers, a VPC can be used to establish the communication between them.



<div style={{ display: "flex", justifyContent: "flex-start" }}>
  <div style={{ marginRight: "100px" }}>
    <div style={{ fontWeight: "bold", marginBottom: "8px" }}>Ceramic node</div>
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          <th style={{ textAlign: "left", padding: "8px" }}>Resource</th>
          <th style={{ textAlign: "left", padding: "8px" }}>Size</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ textAlign: "left", padding: "8px" }}>CPU</td>
          <td style={{ textAlign: "left", padding: "8px" }}>2 4CPU Cores</td>
        </tr>
        <tr>
          <td style={{ textAlign: "left", padding: "8px" }}>RAM</td>
          <td style={{ textAlign: "left", padding: "8px" }}>8 GB</td>
        </tr>
        <tr>
          <td style={{ textAlign: "left", padding: "8px" }}>Storage</td>
          <td style={{ textAlign: "left", padding: "8px" }}>180GB</td>
        </tr>
      </tbody>
    </table>
  </div>
  
  <div>
    <div style={{ fontWeight: "bold", marginBottom: "8px" }}>PostgreSQL DB</div>
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          <th style={{ textAlign: "left", padding: "8px" }}>Resource</th>
          <th style={{ textAlign: "left", padding: "8px" }}>Size</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ textAlign: "left", padding: "8px" }}>CPU</td>
          <td style={{ textAlign: "left", padding: "8px" }}>1 2CPU Cores</td>
        </tr>
        <tr>
          <td style={{ textAlign: "left", padding: "8px" }}>RAM</td>
          <td style={{ textAlign: "left", padding: "8px" }}>4 GB</td>
        </tr>
        <tr>
          <td style={{ textAlign: "left", padding: "8px" }}>Storage</td>
          <td style={{ textAlign: "left", padding: "8px" }}>110GB</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>



## Hosting solutions and costs

One of the key factors impacting costs is how you choose to host your Ceramic node.  A few options are shown below.  Monthly server costs are **estimated** based on the hardware requirements above.

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


