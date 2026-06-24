> _We're OGS, check out our work on [github.com/ogs-gmbh](https://github.com/ogs-gmbh)_

# axios-retry

_Resilient Axios requests with exponential backoff, flexible retry conditions, and lifecycle hooks — zero boilerplate._

![Preview](./docs/preview.avif)

<a href="./LICENSE" target="_blank"><img alt="license badge" src="https://img.shields.io/github/license/OGS-GmbH/axios-retry?color=0f434e&logo=hackthebox&logoColor=000000&labelColor=ffffff" /></a>
<a href="https://github.com/OGS-GmbH/axios-retry/actions/workflows/main-trusted-deploy.yml" target="_blank"><img alt="workflow badge" src="https://img.shields.io/github/actions/workflow/status/OGS-GmbH/axios-retry/main-trusted-deploy.yml?color=0f434e&logo=rocket&logoColor=000000&labelColor=ffffff" /></a>
<a href="https://www.npmjs.com/package/@ogs-gmbh/axios-retry" target="_blank"><img alt="npm badge" src="https://img.shields.io/npm/v/%40ogs-gmbh%2Faxios-retry?color=0f434e&logo=npm&logoColor=000000&labelColor=ffffff" /></a>

- **Drop-in Setup**\
  One function call on any Axios instance — no wrappers, no class extensions, no config files.
- **Linear & Exponential Backoff**\
  Choose a fixed delay between retries or let the wait time grow automatically with each attempt.
- **Flexible Retry Conditions**\
  Pass a list of HTTP status codes or a custom function to decide exactly when a retry should happen.
- **Full Lifecycle Hooks**\
  React to every retry event — `onRetry`, `onMaxRetry`, `onRetryFailed`, and `onMaxRetryExceeded` — for logging, alerting, or custom logic.

## Getting Started

> [!IMPORTANT]
> We're offering an extensive API-Reference covered with in-depth usage examples of this project.

To get a starting point, simply refer to our documentation at [ogs-gmbh.github.io/axios-retry](https://ogs-gmbh.github.io/axios-retry).

### Prerequisites

- Node.js version 18 or higher
- A package manager: e.g. npm, pnpm, ...

### Installation

Using npm:

```sh
$ npm install @ogs-gmbh/axios-retry
```

<details>
  <summary>Using a different package manager?</summary>
  <br/>

Using yarn:

```sh
$ pnpm add @ogs-gmbh/axios-retry
```

Using pnpm:

```sh
$ pnpm add @ogs-gmbh/axios-retry
```

Using bun:

```sh
$ bun add @ogs-gmbh/axios-retry
```

</details>

### Usage

Now, you're able to import [`axiosRetry`](https://ogs-gmbh.github.io/axios-retry/reference/Core/axiosRetry). Take the following line as an example:

```ts [example.ts]
import { create } from "axios";
import { axiosRetry } from "@ogs-gmbh/axios-retry";

function makeACall() {
  const instance = create({
    baseURL: "https://ogs.de/example"
  });

  axiosRetry(instance);

  return instance;
}
```

## License

The MIT License (MIT) - Please have a look at the [LICENSE file](./LICENSE) for more details.

## Contributing

Contributions are always welcome and greatly appreciated. Whether you want to report a bug, suggest a new feature, or improve the documentation, your input helps make the project better for everyone.

Feel free to submit a pull request, issue or feature request.

### Issues and Feature Requests

Reporting an issue or creating a feature request is made by creating a new issue on this repository.

You can create a [new issue or feature request here](../../issues/new/choose).

### Pull Requests

GitHub offers a solid guideline for contributing to open source projects through pull requests, covering key practices. These best practices provide a reliable starting point for making effective contributions.

You can find the [guidelines here](https://docs.github.com/get-started/exploring-projects-on-github/contributing-to-a-project).

### Code Of Conduct

We are committed to keeping a welcoming, inclusive, and respectful community for everyone. To help us achieve this, we kindly ask that you adhere to our [Code of Conduct](./CODE_OF_CONDUCT.md).

## Disclaimer

All trademarks and registered trademarks mentioned are property of their respective owners and are used for identification purposes only. Use of these names does not imply endorsement or affiliation.

This project is a trademark of OGS Gesellschaft für Datenverarbeitung und Systemberatung mbH. The License does not grant rights to use the trademark without permission.

---

<a href="https://www.ogs.de/en/">
  <picture>
    <source
      srcset="https://raw.githubusercontent.com/OGS-GmbH/.github/refs/tags/v1.0.0/docs/assets/logo/light.svg"
      media="(prefers-color-scheme: dark)"
    />
    <img height="64" alt="OGS Logo" src="https://raw.githubusercontent.com/OGS-GmbH/.github/refs/tags/v1.0.0/docs/assets/logo/dark.svg"
  </picture>
</a>

Gesellschaft für Datenverarbeitung und Systemberatung mbH

[Imprint](https://www.ogs.de/en/imprint/) | [Contact](https://www.ogs.de/en/contact/) | [Careers](https://www.ogs.de/en/about-ogs/#Careers)
