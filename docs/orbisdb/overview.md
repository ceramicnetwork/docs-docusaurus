# OrbisDB

[OrbisDB](https://useorbis.com/) is a developer-friendly interface to explore data with the ease of SQL and a plugin store to save development time on processes like data migration and gating mechanisms all the way to automated blockchain interactions.

### How to get started?

OrbisDB comes with an easy-to-use shared instance called [Orbis Studio](https://app.formo.so/orbisdb-access-hJ5VGyugmGigyVFyqdHJa) which provides developers with a user-friendly interface to start interacting with data stored on Ceramic and use a library of available plugins right away without worrying about managing the backend requirements. [**Get access to Orbis Studio in closed beta and start building using OrbisDB**](https://app.formo.so/orbisdb-access-hJ5VGyugmGigyVFyqdHJa).



<div align="center"><iframe width="660" height="415" src="https://www.youtube.com/embed/gxHphFzkV3k?si=BY0iH78Y59-NmSrb" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>




## Key components

OrbisDB consists of two main components - core and plugins.

- Core:
    - Dedicated to read/write operation of the indexing service
    - Listens to stream changes of specific models being used by developers and indexes the content in a Postgres database.

- Plugins:
    - Optional and designed to perform operations beyond the core’s scope.
    - Divided into 4 categories (Create streams, Add metadata, Validate and Post process). More details about plugins underneath.


## OrbisDB SDK
OrbisDB comes with a easy-to-use [OrbisDB SDK](./orbisdb-sdk) for writing the data to the OrbisDB instance as well as querying the data needed for your applications.



