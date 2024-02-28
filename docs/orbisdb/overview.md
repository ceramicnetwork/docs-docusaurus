# OrbisDB

[OrbisDB](https://github.com/OrbisWeb3/orbisdb) is a developer-friendly interface to explore data with the ease of SQL and a plugin store to save development time on processes like data migration and gating mechanisms all the way to automated blockchain interactions.

OrbisDB is powered by Ceramic's Data Feed API which means that in order to interact with OrbisDB, you have to run a [Ceramic Node](../protocol/js-ceramic/nodes/running-a-node#install-and-run-the-ceramic-cli).

OrbisDB comes with a easy-to-use [OrbisDB SDK](./orbisdb-sdk) for interacting with data. 


## Key components

OrbisDB consists of two main components - core and plugins.

- Core:
    - Dedicated to read/write operation of the indexing service
    - Listens to stream changes of specific models being used by developers and indexes the content in a Postgres database.

- Plugins:
    - Optional and designed to perform operations beyond the core’s scope.
    - Divided into 4 categories (Create streams, Add metadata, Validate and Post process). More details about plugins underneath.


Start building using [OrbisDB](https://useorbis.com/).


