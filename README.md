# Project Nebula Home Site

_A place for core Project Nebula documentation._

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern
static website generator.

### Installation

If you only need to view the website, see the Project Nebula [Home page](https://about.utdnebula.com/)

To build this project, you will need a working Node.js installation, preferably
Node.js 12 or later.

All of the commands used to run this project can interchange Yarn for NPM if
desired.

First, clone the repository.

Then install the dependencies:

```console
npm install
```

Now start the local development server:

```console
npm start
```

This command starts a local development server and opens up a browser window.
Most changes are reflected live without having to restart the server.

### Deployment

First, build the website to compile the resources into a servable static bundle:

```console
npm run build
```

This command generates static content into the `build` directory and can be
served using any static contents hosting service.

This project uses [Netlify](https://netlify.com) to automatically build and
deploy the website, but the `build` folder can be deployed anywhere static
assets can be served.
