# Ceramic Documentation

This repository contains the code and markdown files for the Ceramic documentation site. View the full site at [**developers.ceramic.network**](https://developers.ceramic.network).
This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Local Development
Follow these steps to run the site locally and test your changes.

Install the dependencies:

```
$ pnpm install
```

Start a local development server:

```
$ pnpm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ pnpm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

The website is automatically deployed by a GitHub action on commits to the main branch.

## Contributing
We welcome all contributions – big and small. To contribute, make your change and submit a PR to this repo describing what you've done.
