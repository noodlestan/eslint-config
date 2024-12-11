# ESLint Config

> Noodlestan's opinionated style guide configuration (ESLint + Prettier).

## Noodlestan Collective 🐘

We are an open collective of people dedicated to the design and software crafts: UX, design, code, web, 3d, audio, the works.

Learn more about us and our projects at [Noodlestan.org](https://noodlestan.org), join us on [Noodlestan's Discord](https://discord.gg/b8DkbJSF9z) server, or drop us a line at hello@noodlestan.org.

## Development

System requirements:

- [Node.js](https://nodejs.org/)
- [NVM](https://github.com/nvm-sh/nvm)
- [VS Code](https://code.visualstudio.com/)
- [VS Code ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [VS Code Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Getting started

First make sure you are using the correct node version by running `nvm use`.

Install dependencies with `npm install`.

Run `npm run lint`. It will lint the example files provided.

### Contributing

👐 **We welcome contributions!**

If would like to share your ideas, report a bug, ask for improvements - or simply say hi! 👋 - don't hesitate to join us on [Noodlestan's Discord](https://discord.gg/b8DkbJSF9z) or to drop us a line at `hello@noodlestan.org`.

**Pre-commit:** [Lefthook](https://evilmartians.com/chronicles/lefthook-knock-your-teams-code-back-into-shape) runs automatically before every commit and lints all code. Under the hood it runs `npm run lint` and `npm run ci`. Run these to inspect error details.

## MIT License

Copyright (c) 2024 [Noodlestan](https://noodlestan.org/).

Published under a [MIT license](https://noodlestan.mit-license.org/).
