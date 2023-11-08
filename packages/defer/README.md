## TC39 proposal

https://github.com/tc39/proposal-promise-with-resolvers

https://tc39.es/proposal-promise-with-resolvers/

## Install

Install `@tc39-proposal/defer` by `pnpm`

```bash
pnpm add @tc39-proposal/defer
```

## Basic Usage

```ts
import { createDefer } from "@tc39-proposal/defer";

function sleep(duration?: number) {
  const defer = createDefer();

  try {
    setTimeout(defer.resolve, duration);
  } catch (error) {
    defer.reject(error);
  }

  return defer.promise;
}
```

## Others

Welcome to contribute and make @tc39-proposal/defer better!
