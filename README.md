# dj-poc-mf
POC demonstrating module federation using Webpack 5

## Quickstart

From the root:
- install dependencies with `yarn`
- serve the two projects with `yarn start`
- open the host URL with `yarn open`

## Overview

There are two projects in the repo:
- dj-poc-mf-host
- dj-poc-mf-lib

The `host` project is a federated module host.
The `lib` project is a federated module library.

The host runs on `http://localhost:8082` and consumes the library directly from the URL where it is served (`localhost:8083`).

Webpack 5 is used to configure these projects as federated modules - see the `webpack.config.*` files in the projects.
Webpack creates an 'entry file' at build time (in this case `dist/remoteEntry.js`) via which other projects can import any components exposed by paths defined inside the `webpack.config.*` files of the library.
