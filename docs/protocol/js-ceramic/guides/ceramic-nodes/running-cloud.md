# Running Ceramic nodes in the cloud environment

---

This guide provides the instructions for launching a well-connected, production-ready Ceramic node in the cloud environment.

## Who should run a Ceramic node?

---

To run your application on `mainnet` you'll need to run your own production-ready node or to use a community hosted nodes provider like [hirenodes](https://hirenodes.io/).

## Things to know

---

**Ceramic networks** 
There are currently three main Ceramic networks: 
- `mainnet`
- `testnet-clay`
- `dev-unstable`

Learn more about each network [here](../../networking/networks.md). 

By default, Ceramic will connect to `testnet-clay` and a [Ceramic Anchor Service](https://github.com/ceramicnetwork/ceramic-anchor-service) running on Gnosis. When you are ready to get on Ceramic `mainnet`, check out [this guide](../../../../composedb/guides/composedb-server/access-mainnet) to get access to our `mainnet` anchor service running on Ethereum mainnet.

**Supported platforms** – You can run Ceramic nodes on a cloud provider of your choice. This guide will include instructions for the Digital Ocean Kubernetes, but the
instructions can be applied to the vast majority of other cloud providers like AWS and others.

**Supported Operating Systems:**

- Linux

:::note
At the moment, developers are provided with Linux-based docker images for cloud deployment.
:::

**Compute requirements:**

You’ll need sufficient compute resources to power `ceramic-one`, `js-ceramic` and `PostgreSQL`. Below are the recommended requirements:

- 4 vCPUs
- 8GB RAM

## Required steps

---

Below are the steps required for running a Ceramic node in production. This guide will teach you how to:


### Configure your Kubernetes Cluster

Running a Ceramic Node on DO Kubernetes will require two tools:

- [kubectl](https://kubernetes.io/docs/tasks/tools/) - the Kubernetes command line tool
- [doctl](https://docs.digitalocean.com/reference/doctl/how-to/install/) - the Digital Ocean command line tool

Make sure you have these tools installed on your machine before proceeding to the next step of this guide.

To create a Digital Ocean Kuberetes cluster, follow an official [DigitalOcean tutorial](https://docs.digitalocean.com/products/kubernetes/how-to/create-clusters/). The process of setting up your Kubernetes cluster will take about 10 minutes. Once it’s up and running, you are good to continue with the next step.

### Connect to your Kubernetes Cluster

Once the cluster is up and running, you will be provided a command that you can use to authenticate your cluster on your local machine. You will be provided with a command unique to your cluster, but For example:

```doctl kubernetes cluster kubeconfig save 362dda8b-b555-4c47-9bf0-1a81cf58e0a8```

Run this command on your local machine using your local terminal. After authenticating, verify the connectivity:

```kubectl config get-contexts```

### Deploy Ceramic

Running a Ceramic node will require configuring three components:
- `ceramic-one` - a binary which contains the Ceramic Recon protocol implementation in Rust
- `js-ceramic` - component which provides the API interface for Ceramic applications
- `postgres` - a database used for indexing

To simplify the configuration of all these services, you can use the [SimpleDeploy](https://github.com/ceramicstudio/simpledeploy/tree/main), a set of infra scripts that will make the configuration process faster and easier.

1. Clone the [simpledeploy](https://github.com/ceramicstudio/simpledeploy.git) repository and enter `ceramic-one` folder of the created directory:

```
git clone https://github.com/ceramicstudio/simpledeploy.git
cd simpledeploy/k8s/base/ceramic-one
```

2. Create a namespace for the nodes:

```
export CERAMIC_NAMESPACE=ceramic-one-0-17-0
kubectl create namespace ${CERAMIC_NAMESPACE}
```

3. Create ephemereal secrets for js-ceramic and postgres

```
./scripts/create-secrets.sh
```

4. Apply manifests:

```
kubectl apply -k .
```

5. Wait for the pods to start. It will take a few minutes for the deployment to pull the docker images and start the containers. You can watch the process with the following command:

```
kubectl get pods --watch --namespace ceramic-one-0-17-0
```

You will know that your deployment is up and running when all of the processes have a status `Running` as follows:

```bash
NAME           READY   STATUS    RESTARTS    AGE
ceramic-one-0  1/1     Running   0           77s
ceramic-one-1  1/1     Running   0           77s
js-ceramic-0   1/1     Running   0           77s
js-ceramic-1   1/1     Running   0           77s
postgres-0     1/1     Running   0           77s
```

Hit `^C` on your keyboard to exit this view.

:::note

You can easily access the logs of each of the containers by using the command below and configuring the container name. For example, to access the Ceramic node logs, you can run:

`kubectl logs --follow --namespace ceramic-one-0-17-0 js-ceramic-0`

:::

### Accessing your node

The Ceramic daemon serves an HTTP API that clients use to interact with your Ceramic node. The default API port is `7007`. SimpleDeploy scripts include a Load Balancer configuration for `js-ceramic` and `ceramic-one` pods which allows you to expose the service to the outside world and interact with your node using an external IP. For example, you can access the external IP of the `js-ceramic` pod using the following command:

`kubectl get svc --namespace ceramic-one-0-17-0 js-ceramic-lb-1`

After running this command you will see an output similar to the following:

```bash
NAME              TYPE           CLUSTER-IP       EXTERNAL-IP      PORT(S)          AGE
js-ceramic-lb-1   LoadBalancer   10.245.205.115   152.42.151.112   7007:30614/TCP   18m
```

The `EXTERNAL-IP` can be used to accessing your `js-ceramic` node. To test it out, copy the external IP address provided above and substitute it in the following health check command:

`curl 152.42.151.112:7007/api/v0/node/healthcheck`

You should see the output stating that the connection is alive:

`Alive!`


### Connect to the mainnnet anchor service
By default, your Ceramic node will connect to the Ceramic  `clay-testnet`. In order to connect your application to the mainnet, you will have to configure your node and verify you node DID for using the Ceramic Anchor Service (CAS). You can find a detailed step-by-step guide [here](../../../../composedb/guides/composedb-server/access-mainnet).



---

### Example with Docker containers

All state in this configuration is ephemeral, for persistence use docker-compose.

1. Start ceramic-one using the host network

```json
docker run --network=host \
  public.ecr.aws/r5b3e0r5/3box/ceramic-one:latest
```

2. Start js-ceramic using the host network

```json
docker run --network=host ceramicnetwork/js-ceramic:develop
```

### Docker-compose

1. Create a testing directory, and enter it.

```yaml
mkdir ceramic-recon
cd ceramic-recon
```

2. Create a file colled `docker-compose.yaml` with the configuration shown in the example below and save it:

```
version: '3.8'

services:
  ceramic-one:
    image: public.ecr.aws/r5b3e0r5/3box/ceramic-one:0.19.0
    network_mode: "host"
    volumes:
      - ceramic-one-data:/root/.ceramic-one

  js-ceramic:
    image: ceramicnetwork/js-ceramic:develop
    environment:
      - CERAMIC_RECON_MODE=true
    network_mode: "host"
    volumes:
      - js-ceramic-data:/root/.ceramic
      - ./daemon.config.json:/root/.ceramic/daemon.config.json
    command: --ipfs-api http://localhost:5101

volumes:
  ceramic-one-data:
    driver: local
  js-ceramic-data:
    driver: local
```

3. Update the js-ceramic configuration file `daemon.config.json` with the configurations provided below.

:::note
The js-ceramic configuration file can be found using the following path: `$HOME/.ceramic/daemon.config.json `
:::


```json
{
  "anchor": {
    "auth-method": "did"
  },
  "http-api": {
    "cors-allowed-origins": [
      ".*"
    ],
    "admin-dids": [
    ]
  },
  "ipfs": {
    "mode": "remote",
    "host": "http://localhost:5101"
  },
  "logger": {
    "log-level": 2,
    "log-to-files": false
  },
  "metrics": {
    "metrics-exporter-enabled": false,
    "prometheus-exporter-enabled": true,
    "prometheus-exporter-port": 9465
  },
  "network": {
    "name": "testnet-clay"
  },
  "node": {   },
  "state-store": {
    "mode": "fs",
    "local-directory": "/root/.ceramic/statestore/"
  },
  "indexing": {
    "db": "sqlite://root/.ceramic/db.sqlite3",
    "allow-queries-before-historical-sync": true,
    "disable-composedb": false,
    "enable-historical-sync": false
  }
}
```

3. Run `docker-compose up -d`


---








