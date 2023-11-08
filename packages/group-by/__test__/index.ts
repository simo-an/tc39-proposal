import { groupBy } from "../index";

const array = [1, 2, 3, 4, 5];

const result1 = groupBy(array, (num, index) => {
  return num % 2 === 0 ? "even" : "odd";
});
console.info(result1);
// =>  { odd: [1, 3, 5], even: [2, 4] }

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
// =>  Map { {odd: true}: [1, 3, 5], {even: true}: [2, 4] }
