"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3091],{56244:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=s(11527),t=s(63883);const r={},i="Running in the Cloud",a={id:"composedb/guides/composedb-server/running-in-the-cloud",title:"Running in the Cloud",description:"Run a ComposeDB server in the cloud",source:"@site/docs/composedb/guides/composedb-server/running-in-the-cloud.mdx",sourceDirName:"composedb/guides/composedb-server",slug:"/composedb/guides/composedb-server/running-in-the-cloud",permalink:"/docs/composedb/guides/composedb-server/running-in-the-cloud",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"composedb",previous:{title:"Running Locally",permalink:"/docs/composedb/guides/composedb-server/running-locally"},next:{title:"Server Configurations",permalink:"/docs/composedb/guides/composedb-server/server-configurations"}},c={},d=[{value:"Things to Know",id:"things-to-know",level:2},{value:"Cloud Requirements",id:"cloud-requirements",level:2},{value:"Running ComposeDB server on Kubernetes",id:"running-composedb-server-on-kubernetes",level:2},{value:"Running ComposeDB server on DigitalOcean Kubernetes",id:"running-composedb-server-on-digitalocean-kubernetes",level:3},{value:"Creating a Kubernetes Cluster",id:"creating-a-kubernetes-cluster",level:3},{value:"Connecting to Kubernetes cluster",id:"connecting-to-kubernetes-cluster",level:3},{value:"Deploy a Ceramic with ComposeDB Server",id:"deploy-a-ceramic-with-composedb-server",level:3},{value:"Access the Ceramic with ComposeDB API",id:"access-the-ceramic-with-composedb-api",level:3},{value:"Expose the node endpoint to the internet",id:"expose-the-node-endpoint-to-the-internet",level:3},{value:"Optional - Add an SSL Cert and Domain Name",id:"optional---add-an-ssl-cert-and-domain-name",level:3},{value:"Utilize the Deployed Assets with ComposeDB CLI and Graphiql Server",id:"utilize-the-deployed-assets-with-composedb-cli-and-graphiql-server",level:3},{value:"Commonly asked questions",id:"commonly-asked-questions",level:2},{value:"Where is my data stored?",id:"where-is-my-data-stored",level:3},{value:"What is my admin DID and how do I use it to connect?",id:"what-is-my-admin-did-and-how-do-i-use-it-to-connect",level:3},{value:"How do I connect to the Postgres database?",id:"how-do-i-connect-to-the-postgres-database",level:3},{value:"How do I shut it all down?",id:"how-do-i-shut-it-all-down",level:3},{value:"Docker Hub",id:"docker-hub",level:2},{value:"Running IPFS",id:"running-ipfs",level:3},{value:"Running Postgres",id:"running-postgres",level:3},{value:"Running Ceramic",id:"running-ceramic",level:3},{value:"Editing the <code>daemon.config.json</code> file",id:"editing-the-daemonconfigjson-file",level:3},{value:"Next Steps",id:"next-steps",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"running-in-the-cloud",children:"Running in the Cloud"}),"\n",(0,o.jsx)(n.p,{children:"Run a ComposeDB server in the cloud"}),"\n",(0,o.jsx)(n.h2,{id:"things-to-know",children:"Things to Know"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["This guide is focused on running in the cloud using Docker and Kubernetes. For local deployment instructions check out ",(0,o.jsx)(n.a,{href:"/docs/composedb/guides/composedb-server/running-locally",children:"Running Locally"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["ComposeDB Server requires running a Ceramic node (which uses IPFS) for decentralized data, ",(0,o.jsx)(n.a,{href:"https://ipfs.tech/",children:"IPFS"}),", and a Postgres DB. Each of these components should be running within a separate Docker container."]}),"\n",(0,o.jsxs)(n.li,{children:["Docker images for\xa0IPFS are built from the ",(0,o.jsx)(n.a,{href:"https://github.com/ceramicnetwork/go-ipfs-daemon",children:(0,o.jsx)(n.code,{children:"go-ipfs-daemon"})})," repository and come pre-configured with plugins that make it easy to run IPFS on cloud infrastructure (e.g. the ",(0,o.jsx)(n.a,{href:"https://github.com/ipfs/go-ds-s3",children:"S3 plugin"}),"). Images built from the ",(0,o.jsx)(n.code,{children:"main"})," branch are tagged with\xa0",(0,o.jsx)(n.code,{children:"latest"}),", and\xa0the git commit hash of the code from which the image was built."]}),"\n",(0,o.jsxs)(n.li,{children:["Docker images to run ComposeDB Server are built from the ",(0,o.jsx)(n.a,{href:"https://github.com/ceramicnetwork/js-ceramic",children:"js-ceramic"})," repository. Images built from the ",(0,o.jsx)(n.code,{children:"main"})," branch are tagged with\xa0",(0,o.jsx)(n.code,{children:"latest"}),", the git commit hash of the code from which the image was built, and the npm package version of the corresponding ",(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/@ceramicnetwork/cli",children:(0,o.jsx)(n.code,{children:"@ceramicnetwork/cli"})})," release."]}),"\n"]}),"\n",(0,o.jsxs)(n.admonition,{type:"danger",children:[(0,o.jsxs)(n.p,{children:["To run a Ceramic node in production, it is critical to persist the ",(0,o.jsx)(n.a,{href:"../../../protocol/js-ceramic/guides/ceramic-nodes/running-cloud#ceramic-state-store",children:"Ceramic state store"}),", ",(0,o.jsx)(n.a,{href:"https://github.com/ipfs/go-ipfs/blob/master/docs/config.md#datastorespec",children:"IPFS datastore"}),", and the Postgres database used for the ComposeDB index. The form of storage you choose should also be configured for an emergency recovery with data redundancy, and some form of snapshotting and/or backups. ",(0,o.jsx)(n.strong,{children:"Loss of this data can result in permanent loss of Ceramic streams and will cause your node to be in a corrupt state."})]}),(0,o.jsx)(n.p,{children:"Your backup procedure should implement the following order:"}),(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Snapshot your Postgres instance first"}),"\n",(0,o.jsx)(n.li,{children:"State store"}),"\n",(0,o.jsx)(n.li,{children:"IPFS block store"}),"\n"]}),(0,o.jsx)(n.p,{children:"Leveraging this order guarantees that the higher-level subsystems won't know about data that the lower-level subsystems are missing in the backup."})]}),"\n",(0,o.jsx)(n.h2,{id:"cloud-requirements",children:"Cloud Requirements"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Supported Operating Systems"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Linux"}),"\n",(0,o.jsx)(n.li,{children:"Mac"}),"\n",(0,o.jsx)(n.li,{children:"Windows"}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"For Windows, Windows Subsystem for Linux 2 (WSL2) is strongly recommended. Using the Windows command line is not portable and can cause compatibility issue when running the same configuration on a different operating system (e.g. in a Linux-based cloud deployment)."})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Compute requirements"})}),"\n",(0,o.jsx)(n.p,{children:"You\u2019ll need sufficient compute resources to power Ceramic, IPFS, and Postgres. Below are the recommended requirements:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"4 vCPUs"}),"\n",(0,o.jsx)(n.li,{children:"8GB RAM"}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"If you are just getting started with a brand new project, you can start with a much smaller instance. For example, to follow this guide, you can start with a 1GB RAM and 1vCPU cluster and scale your instance afterwards."})}),"\n",(0,o.jsx)(n.h2,{id:"running-composedb-server-on-kubernetes",children:"Running ComposeDB server on Kubernetes"}),"\n",(0,o.jsxs)(n.p,{children:["You can run ComposeDB Server on Kubernetes on the cloud, such as ",(0,o.jsx)(n.a,{href:"https://cloud.google.com/kubernetes-engine",children:"Google Kubernetes Engine"})," or ",(0,o.jsx)(n.a,{href:"https://aws.amazon.com/eks/",children:"Amazon Elastic Kubernetes Service"}),".\nYou can also run ComposeDB Server on ",(0,o.jsx)(n.a,{href:"https://www.digitalocean.com/products/kubernetes/",children:"DigitalOcean Kubernetes"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Running Kubernetes on the Cloud means a provider will manage the underlying infrastructure for you. You can also run Kubernetes on your own infrastructure, but that is outside the scope of this guide."}),"\n",(0,o.jsx)(n.h3,{id:"running-composedb-server-on-digitalocean-kubernetes",children:"Running ComposeDB server on DigitalOcean Kubernetes"}),"\n",(0,o.jsx)(n.p,{children:"DigitalOcean Kubernetes (DOKS) allows developers to deploy Kubernetes clusters using simple managed service. The instructions below are also covered in a video walkthrough here:"}),"\n",(0,o.jsx)("iframe",{width:"660",height:"415",src:"https://www.youtube.com/embed/mgwM9c5fWck?si=fWP1D1xRtab5Tz6T",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,o.jsx)(n.p,{children:"ComposeDB deployment on DigitalOcean Kubernetes will require 2 tools:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/tools",children:"kubectl"})," - the Kubernetes command line tool"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://docs.digitalocean.com/reference/doctl/how-to/install/",children:"doctl"})," - the DigitalOcean command line tool"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Make sure you have these tools installed on your machine before proceeding to the next step of this guide."}),"\n",(0,o.jsx)(n.h3,{id:"creating-a-kubernetes-cluster",children:"Creating a Kubernetes Cluster"}),"\n",(0,o.jsxs)(n.p,{children:["First, you will have to create your DigitalOcean Kubernetes cluster. To do that, follow an ",(0,o.jsx)(n.a,{href:"https://docs.digitalocean.com/products/kubernetes/how-to/create-clusters/",children:"official DigitalOcean tutorial"}),". The process of setting up your Kubernetes cluster will take about 10 minutes.\nOnce it\u2019s up and running, you are good to continue with the next step."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"When it comes to choosing your cluster capacity, we recommend starting with the most cost-effective option - starting with the smallest cluster size and upgrading later. For example, to follow this guide you can start with a 1GB RAM and 1vCPU cluster. Also, keep in mind that\nDigital Ocean offers free credits for the new users to start building their projects."})}),"\n",(0,o.jsx)(n.h3,{id:"connecting-to-kubernetes-cluster",children:"Connecting to Kubernetes cluster"}),"\n",(0,o.jsx)(n.p,{children:"First, you will have to configure the authentication of your cluster and retrieve the credentials. This can be achieved using the\xa0doctl\xa0command  below and substituting the authentication number provided\nto you by Digital Ocean right after your cluster is launched:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"doctl kubernetes cluster kubeconfig save 362dda8b-b555-4c47-9bf0-1a81cf58e0a8\n"})}),"\n",(0,o.jsx)(n.p,{children:"After authenticating your cluster, it\u2019s a good idea to verify the connectivity. This can be achieved using the following command which should list your cluster name, user and namespace:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl config get-contexts\n"})}),"\n",(0,o.jsx)(n.h3,{id:"deploy-a-ceramic-with-composedb-server",children:"Deploy a Ceramic with ComposeDB Server"}),"\n",(0,o.jsx)(n.p,{children:"In this section we will focus on deploying the Ceramic with ComposeDB Server on the DigitalOcean Kubernetes cluster."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Clone the ",(0,o.jsx)(n.a,{href:"https://github.com/ceramicstudio/simpledeploy.git",children:"simpledeploy"})," repository and enter the created directory:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"git clone https://github.com/ceramicstudio/simpledeploy.git\ncd simpledeploy\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"Run the following commands to deploy the stack:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"# Create a namespace for the deployment\nkubectl create namespace ceramic\n\n# Create the necessary secrets\n./k8s/base/composedb/create-secrets.sh\n\n# Apply the deployment\nkubectl apply -k k8s/base/composedb/\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:"It will take a few minutes for the deployment to pull the docker images and start the containers. You can watch the process with the following command:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl get pods --watch --namespace ceramic\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You will know that your deployment is up and running when all of the processes have a status ",(0,o.jsx)(n.code,{children:"Running"})," as follows:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"NAME          READY   STATUS    RESTARTS   AGE\ncomposedb-0   0/1     Running   0          77s\nipfs-0        1/1     Running   0          77s\npostgres-0    1/1     Running   0          77s\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Hit ",(0,o.jsx)(n.code,{children:"^C"})," on your keyboard to exit this view."]}),"\n",(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsx)(n.p,{children:"You can easily access the logs of each of the containers by using the command below and configuring the container name. For example, to access the Ceramic node logs, you can run:"}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"kubectl logs --follow --namespace ceramic composedb-0"})})]}),"\n",(0,o.jsx)(n.h3,{id:"access-the-ceramic-with-composedb-api",children:"Access the Ceramic with ComposeDB API"}),"\n",(0,o.jsx)(n.p,{children:"You can use local port forwarding to access the Ceramic node from your local machine. Open a new terminal and run the command below. The port forward will stop when the command is exited\nso make sure to keep this command running for the rest of this guide."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl port-forward --namespace ceramic composedb-0 7007:7007\n"})}),"\n",(0,o.jsx)(n.p,{children:"Once you run the command you should see the following output in your terminal:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"Forwarding from 127.0.0.1:7007 -> 7007\nForwarding from [::1]:7007 -> 7007\n"})}),"\n",(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsxs)(n.p,{children:["The Ceramic node must be ready to accept connections before you can access it.\nThe pod's state must be ",(0,o.jsx)(n.code,{children:"Running"})," and the ",(0,o.jsx)(n.code,{children:"READY"})," column must be ",(0,o.jsx)(n.code,{children:"1/1"}),".\nYou can check the status of the node by running the command below:"]}),(0,o.jsx)(n.p,{children:"$ kubectl get pods composedb-0\nNAME          READY   STATUS    RESTARTS      AGE\ncomposedb-0   1/1     Running   1 (28h ago)   28h"})]}),"\n",(0,o.jsxs)(n.p,{children:["To check the connection, open a new terminal and run the command below. A successful connection should utter a response ",(0,o.jsx)(n.code,{children:"Alive!"})," as follows:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"curl http://127.0.0.1:7007/api/v0/node/healthcheck\n"})}),"\n",(0,o.jsx)(n.p,{children:"Expected output:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"Alive!\n"})}),"\n",(0,o.jsx)(n.h3,{id:"expose-the-node-endpoint-to-the-internet",children:"Expose the node endpoint to the internet"}),"\n",(0,o.jsx)(n.p,{children:"The last step is to expose your Ceramic node to the internet so that it\u2019s accessible for your application. This can be done using a DigitalOcean Load Balancer:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f k8s/base/composedb/do-lb.yaml\n"})}),"\n",(0,o.jsx)(n.p,{children:"You can get the EXTERNAL IP address of the load balancer with the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl get svc --namespace ceramic composedb-lb\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The result of this command will be an output similar to the one below. Keep in mind that might take a few minutes for the EXTERMAL-IP to be configured and change the status from ",(0,o.jsx)(n.code,{children:"<pending>"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"NAME           TYPE           CLUSTER-IP      EXTERNAL-IP       PORT(S)          AGE\ncomposedb-lb   LoadBalancer   10.245.10.130   174.138.109.159   7007:31284/TCP   4m4s\n"})}),"\n",(0,o.jsx)(n.p,{children:"This external IP address can now be used for accessing your node. To test it out, copy the external IP address provided above and substitute it in the following health check command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"curl http://174.138.109.159:7007/api/v0/node/healthcheck\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Once again, a successful connection will provide an output ",(0,o.jsx)(n.code,{children:"Alive!"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"Alive!\n"})}),"\n",(0,o.jsx)(n.h3,{id:"optional---add-an-ssl-cert-and-domain-name",children:"Optional - Add an SSL Cert and Domain Name"}),"\n",(0,o.jsxs)(n.p,{children:["If you wish to direct a domain to your ceramic node and acquire an SSL Certificate, you may follow the steps under ",(0,o.jsx)(n.a,{href:"https://github.com/ceramicstudio/simpledeploy/blob/main/k8s/cert-ingress/README.md",children:"cert-ingress"})," to modify the kubernetes setup.  Of course you may use other methods to add a domain name and certificate depending on what provider you wish to use."]}),"\n",(0,o.jsx)(n.h3,{id:"utilize-the-deployed-assets-with-composedb-cli-and-graphiql-server",children:"Utilize the Deployed Assets with ComposeDB CLI and Graphiql Server"}),"\n",(0,o.jsxs)(n.p,{children:["Now that you have a Ceramic with ComposeDB server deployed, you can utilize the ",(0,o.jsx)(n.a,{href:"/docs/composedb/set-up-your-environment#composedb",children:"ComposeDB Cli"})," to create models and\ncomposites, as well as standing up a Graphiql server backed by the Ceramic with ComposeDB server."]}),"\n",(0,o.jsxs)(n.p,{children:["First you will need to install ",(0,o.jsx)(n.a,{href:"/docs/composedb/set-up-your-environment#composedb",children:"ComposeDB Cli"}),". Next you will need to setup,\nyour environment to properly talk to your server"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'export CERAMIC_URL="http://"$(kubectl get service composedb-lb --namespace ceramic -o json | jq -r \'.status.loadBalancer.ingress[0].ip\')":7007"\nexport DID_PRIVATE_KEY=$(kubectl get secrets --namespace ceramic ceramic-admin -o json | jq -r \'.data."private-key"\' | base64 -d)\n'})}),"\n",(0,o.jsxs)(n.p,{children:["You can now follow the existing guides, omitting adding ",(0,o.jsx)(n.code,{children:"--ceramic-url"})," or ",(0,o.jsx)(n.code,{children:"--did-private-key"})," to your composdb calls. For\nexample"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"composedb composite:from-model kjzl6hvfrbw6c5ajfmes842lu09vjxu5956e3xq0xk12gp2jcf9s90cagt2god9 --output=my-first-composite-single.json\n"})}),"\n",(0,o.jsx)(n.p,{children:"will create a new composite, utilizing your remote Ceramic with ComposeDB server. You can also run Graphiql locally"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"composedb graphql:server --graphiql runtime-composite.json --port=5005\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You can access the graphiql server at ",(0,o.jsx)(n.a,{href:"http://localhost:5005/graphql",children:"http://localhost:5005/graphql"})]}),"\n",(0,o.jsx)(n.h2,{id:"commonly-asked-questions",children:"Commonly asked questions"}),"\n",(0,o.jsx)(n.h3,{id:"where-is-my-data-stored",children:"Where is my data stored?"}),"\n",(0,o.jsxs)(n.p,{children:["Each part of the stack (js-ceramic, ipfs, postgres) has its own ",(0,o.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/",children:"Persistent Volume"}),".\nYou can view the volumes with the following command:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl get PersistentVolumeClaim --namespace ceramic\n"})}),"\n",(0,o.jsx)(n.p,{children:"This output includes identifiers for the volume on the cloud provider as well as the size and storage class, which defines the properties of the volume."}),"\n",(0,o.jsx)(n.h3,{id:"what-is-my-admin-did-and-how-do-i-use-it-to-connect",children:"What is my admin DID and how do I use it to connect?"}),"\n",(0,o.jsx)(n.p,{children:"The ceramic node is configured with an admin DID. This DID is used to authenticate with the ceramic node. The DID is derived from a seed, which is stored in a kubernetes secret named ceramic-admin and the private-key key's value is the base64 encoded seed."}),"\n",(0,o.jsx)(n.p,{children:"While the example deployment creates a random seed for the admin DID, you can use your own seed by creating a secret with the same name and key instead of using the create-secrets.sh script."}),"\n",(0,o.jsx)(n.p,{children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"$ kubectl create secret generic ceramic-admin --from-literal=private-key=<YOUR SEED>\n"})}),"\n",(0,o.jsx)(n.p,{children:"To view the currently configured admin DID seed, you can use the following command (requires jq):"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"kubectl get secrets --namespace ceramic ceramic-admin -o json | jq -r '.data.\"private-key\"' | base64 -d\n"})}),"\n",(0,o.jsx)(n.h3,{id:"how-do-i-connect-to-the-postgres-database",children:"How do I connect to the Postgres database?"}),"\n",(0,o.jsx)(n.p,{children:"You can create a session to the postgres database with the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl exec --namespace ceramic -ti postgres-0 -- psql -U ceramic\n"})}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.code,{children:"postgres"})," service is also created and can be exposed locally with port-forwarding:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl port-forward --namespace ceramic svc/postgres 5432\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"ceramic"})," user password randomly generated during deployment.\nIt is also available in the ",(0,o.jsx)(n.code,{children:"postgres-auth"})," secret:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl --namespace ceramic get secrets postgres-auth -o yaml\n"})}),"\n",(0,o.jsx)(n.p,{children:"Here you should get the following output:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"apiVersion: v1\ndata:\n  password: NzNjNzQ4ZDkxM2Y5NGQ2MmQwOTRiYzQ2YzIzMmM4YzdlYzFhODA2MA==\n  username: Y2VyYW1pYw==\nkind: Secret\n...\n"})}),"\n",(0,o.jsx)(n.h3,{id:"how-do-i-shut-it-all-down",children:"How do I shut it all down?"}),"\n",(0,o.jsx)(n.p,{children:"To remove the workload from the cluster, you can delete the namespace. For example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl delete namespace ceramic\n"})}),"\n",(0,o.jsx)(n.h2,{id:"docker-hub",children:"Docker Hub"}),"\n",(0,o.jsxs)(n.p,{children:["You can find the ComposeDB server and IPFS Docker images on ",(0,o.jsx)(n.a,{href:"https://hub.docker.com/u/ceramicnetwork",children:"Docker Hub"}),".\nBelow, you can find examples of how you can run IPFS, Postgres and Ceramic processes using Docker."]}),"\n",(0,o.jsx)(n.h3,{id:"running-ipfs",children:"Running IPFS"}),"\n",(0,o.jsxs)(n.p,{children:['For production deployments you should run your own IPFS process manually and point your Ceramic node at it. This is referred to as running IPFS in "remote" mode in the Ceramic ',(0,o.jsx)(n.code,{children:"daemon.config.json"})," file, versus the pre-configured \u201cbundled\u201d mode used for running locally."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker pull ceramicnetwork/go-ipfs-daemon:latest\n\ndocker run \\\n  -p 5001:5001 \\ # API port\n  -p 8011:8011 \\ # Healthcheck port\n  -v /path_on_volume_for_ipfs_repo:/data/ipfs \\\n  --name ipfs \\\n  go-ipfs-daemon\n"})}),"\n",(0,o.jsx)(n.h3,{id:"running-postgres",children:"Running Postgres"}),"\n",(0,o.jsx)(n.p,{children:"An example below demonstrates how you can run a Postgres process. Make sure to update the variables to fit your use case:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker pull postgres\n\ndocker run -d \\\n  -e POSTGRES_PASSWORD=mysecretpassword \\\n  -e PGDATA=/var/lib/postgresql/data/pgdata \\\n  -v /path_on_volume_for_postgres_data:/var/lib/postgresql/data \\\n  -p 5432:5432 \\\n  --name postgres \\\n  postgres\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You can also follow the examples from the official Postgres Docker image ",(0,o.jsx)(n.a,{href:"https://hub.docker.com/_/postgres",children:"documentation"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"running-ceramic",children:"Running Ceramic"}),"\n",(0,o.jsx)(n.p,{children:"An example below demonstrates how you can run a Ceramic server using Docker. Make sure to update the variables to fit your use case:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker pull ceramicnetwork/js-ceramic:latest\n\ndocker run -d \\\n  -p 7007:7007 \\\n  -v /path_on_volume_for_daemon_config:/root/.ceramic/daemon.config.json \\\n  -v /path_on_volume_for_ceramic_logs:/root/.ceramic/logs \\\n  -v /path_on_volume_for_ceramic_statestore:/root/.ceramic/statestore \\\n  -e NODE_ENV=production \\\n  -e CERAMIC_INDEXING_DB_URI=postgres://username:password@host:5432/dbname \\\n  --name ceramic \\\n  js-ceramic --ipfs-api http://ipfs_ip_address:5001\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"editing-the-daemonconfigjson-file",children:["Editing the ",(0,o.jsx)(n.code,{children:"daemon.config.json"})," file"]}),"\n",(0,o.jsxs)(n.p,{children:["To have these IPFS and Postgres settings persist in your Ceramic node, edit the ",(0,o.jsx)(n.code,{children:"daemon.config.json"})," file to include IPFS information. The default location is ",(0,o.jsx)(n.code,{children:"~/.ceramic/daemon.config.json"}),". For a full file example, see the ",(0,o.jsx)(n.a,{href:"../../../protocol/js-ceramic/guides/ceramic-nodes/running-cloud#example-daemonconfigjson",children:"Ceramic"})," docs."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'...\n    "ipfs": {\n        "mode": "remote",\n        "host": "http://ipfs_ip_address:5001"\n    },\n...\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'...\n"indexing": {\n    "db": "postgres://username:password@host:5432/dbname",\n    "allow-queries-before-historical-sync": true,\n    "enable-historical-sync": false\n  }\n...\n'})}),"\n",(0,o.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Understand the different ways to ",(0,o.jsx)(n.a,{href:"/docs/composedb/guides/composedb-server/server-configurations",children:"configure your server"}),", including choosing a network"]}),"\n",(0,o.jsxs)(n.li,{children:["Use your Admin DID to authenticate your node to gain ",(0,o.jsx)(n.a,{href:"/docs/composedb/guides/composedb-server/access-mainnet",children:"access to mainnet"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},63883:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>i});var o=s(50959);const t={},r=o.createContext(t);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);