---
prev: false
next: false
---

# Getting started

## Installation

### Prerequisites

- Node.js version 18 or higher.
- A package manager: e.g. npm, pnpm, ...

::: code-group

```sh [npm]
$ npm add @ogs-gmbh/axios-retry
```

```sh [pnpm]
$ pnpm add @ogs-gmbh/axios-retry
```

```sh [yarn]
$ yarn add @ogs-gmbh/axios-retry
```

```sh [bun]
$ bun add @ogs-gmbh/axios-retry
```

:::

### Usage

Now, you're able to import [`axiosRetry`](/reference/Other/axiosRetry). Take the following line as an example:

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
