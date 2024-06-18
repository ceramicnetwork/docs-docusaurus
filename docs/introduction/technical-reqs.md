# Technical requirements to run Ceramic

To understand the expected costs to integrate Ceramic into your architecture, it is helpful to first briefly understand where Ceramic lives in the application architecture stack.

Ceramic is a decentralized data storage network made up of different components, and can replace or augment existing storage solutions.

![Architecture](/img/architecture-overview.png)


To make it easier to grasp, it can be helpful to think about implementing Ceramic as you might think about implementing a traditional SQL or Postgres database.

When integrating with Ceramic, you will be running three pieces of server software, or three components:

- Ceramic node
- PostgresSQL
- IPFS node

Ceramic and IPFS nodes are simply pieces of software than run on a server.

PostgresSQL is a type of traditional database.

## Hardware requirements

For most projects, all three components can be run on the same server.  

Thus the main consideration impacting costs are the hardware requirements of your server.

Depending on the expected throughput of your project, the suggested hardware requirements will differ.

**Minimum (light throughput)**

| Resource | Size |
| --- | --- |
| CPU |  2 CPU Cores |
| RAM | 4GB |
| Storage | 110GB |



### **Recommended**

As your project scales, you may need to expand your storage beyond 180GB.

| Resource | Size |
| --- | --- |
| CPU | 4 CPU cores |
| RAM | 8 GB |
| Storage | 180GB |


### **Advanced (heavy throughput)**

Advanced users may want to consider running the PostgresSQL db on a different server than the Ceramic node + IPFS node.  If running on different servers, a VPC can be used to communicate between them.

**Ceramic node + IPFS node**

| Resource | Size |
| --- | --- |
| CPU | 2 4CPU |
| RAM | 8 GB |
| Storage | 180GB |



**PostgresSQL DB**

| Resource | Size |
| --- | --- |
| CPU | 1 2CPU |
| RAM | 4 GB |
| Storage | 110GB |


## Hosting solutions and costs

The second consideration impacting costs is how you choose to host your Ceramic node.  A few options are shown below.  **Monthly** server costs are estimated based on the hardware requirements above.

| Locally hosted | Cloud hosted | Managed node service |
| --- | --- | --- |
|- No new incremental costs <br/> - Not recommended for production environments | - $25-$250 per node per month <br/> <br/> - Dependent on cloud provider (e.g., AWS vs GCP vs Azure) <br/> <br/> - Infrastructure professionals who manage their own servers should have lower costs than using a cloud provider |- $50-$500 per node per month <br/> <br/> - Managed backups <br/> <br/> - App developers who prefer to use third party managed node services can offload node management responsibilities to dedicated professionals |

