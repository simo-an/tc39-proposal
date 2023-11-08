## TC39 proposal

https://github.com/tc39/proposal-array-grouping

https://tc39.es/proposal-array-grouping

## Install

Install `@tc39-proposal/group-by` by `pnpm`

```bash
pnpm add @tc39-proposal/group-by
```

## Usage

### Group by Object

```ts
import { groupBy } from "@tc39-proposal/group-by";

const array = [1, 2, 3, 4, 5];

// `groupBy(array, fn)` groups items by arbitrary key.
// In this case, we're grouping by even/odd keys
const result1 = groupBy(array, (num, index) => {
  return num % 2 === 0 ? "even" : "odd";
});
console.info(result1);
// =>  { odd: [1, 3, 5], even: [2, 4] }
```

you can also use

```ts
import { groupByObject } from "@tc39-proposal/group-by";
```

### Group by Map

```ts
import { groupBy } from "@tc39-proposal/group-by";

// `groupBy(array, fn, true)` returns items in a Map, and is useful for grouping
// using an object key.
const odd = { odd: true };
const even = { even: true };
const result2 = groupBy(
  array,
  (num, index) => {
    return num % 2 === 0 ? even : odd;
  },
  true
);
console.info(result2);
// => Map(2) { { odd: true } => [ 1, 3, 5 ], { even: true } => [ 2, 4 ] }
```

you can also use

```ts
import { groupByMap } from "@tc39-proposal/group-by";
```

## Others

Welcome to contribute and make @tc39-proposal/group-by better!
