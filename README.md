# ESLint Config

> Noodlestan style guide configuration (ESLint + Prettier)

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

If you'd like to contribute please visit us at [Noodlestan discord](https://discord.gg/b8DkbJSF9z) or drop a line at `hello@noodlestan.org`.Post your idea, report a bug, ask for improvements or just come to say hi! 👋

**Pre-commit:** [Lefthook](https://evilmartians.com/chronicles/lefthook-knock-your-teams-code-back-into-shape) should run automatically before every commit and lint all code. Under the hood it runs `npm run lint` and `npm run ci`. Run these to inspect error details.

## MIT License

Copyright (c) 2024 [Noodlestan](https://noodlestan.org/).

Published under a [MIT license](https://noodlestan.mit-license.org/).
