## TC39 proposal

https://github.com/tc39/proposal-set-methods

https://tc39.es/proposal-set-methods

## Install

Install `@tc39-proposal/set` by `pnpm`

```bash
pnpm add @tc39-proposal/set
```

## Usage

```ts
import {
  intersection,
  union,
  difference,
  symmetricDifference,
  isSubsetOf,
  isSupersetOf,
  isDisjointFrom,
} from "@tc39-proposal/set";

const s1 = new Set([1, 2, 3, 4, 5]);
const s2 = new Set([3, 4, 5, 6, 7]);

console.info(isSubsetOf(s1, s2) === false);
console.info(isSupersetOf(s1, s2) === false);
console.info(isDisjointFrom(s1, s2) === false);

let result = intersection(s1, s2);
// result => [3, 4, 5]

result = union(s1, s2);
// result => [1, 2, 3, 4, 5, 6, 7]

result = difference(s1, s2);
// result => [1, 2]

result = symmetricDifference(s1, s2);
// result => [1, 2, 6, 7]
```

## Others

Welcome to contribute and make @tc39-proposal/set better!
