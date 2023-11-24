# Running a Node
---
This will help explain how to run a Ceramic Node and some other specifics that are recommended to make sure your node is running smoothly. 

## Installation
---

### Install and Run the Ceramic CLI

This can be installed from NPM and updated through NPM by using the following command:

```bash
npx @ceramicnetwork/cli daemon
```

This will install the CLI and start the daemon. This will allow all of the initial files to be created. This will successfully have a node running on the Clay TestNet.

## Operations Considerations
---

### Log Rotate

As a node runs for sometime if you enable the log to files you will want to enable `logrotate` to ensure that your node does not overfill the hard drive. This can be done by following the following steps:

1. Install `logrotate` using the following command:

```bash
sudo apt install logrotate
```

2. Create a file in `/etc/logrotate.d/ceramic` with the following contents:

```bash
/home/ubuntu/.ceramic/logs/*.log {
    daily
    missingok
    rotate 7
    compress
    delaycompress
    notifempty
    create 0640 ubuntu ubuntu
    sharedscripts
    postrotate
        systemctl restart ceramic
    endscript
}
```

3. Enable and Start the `logrotate` service using the following commands:

```bash
sudo systemctl enable logrotate
sudo systemctl start logrotate
```