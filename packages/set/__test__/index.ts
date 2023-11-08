import chalk from "chalk";
import {
  intersection,
  union,
  difference,
  symmetricDifference,
  isSubsetOf,
  isSupersetOf,
  isDisjointFrom,
} from "../index";

let passed = false;
let caseNumber = 0;
let result: Set<number>;
let answer: Set<number>;

function judge(exit?: boolean) {
  caseNumber += 1;
  passed = Array.from(result).toString() === Array.from(answer).toString();

  if (!passed) {
    console.error(
      chalk.red(
        `Failed: ${caseNumber}`,
        "result: ",
        Array.from(result),
        "answer: ",
        Array.from(answer)
      )
    );
  } else {
    console.info(
      chalk.green(
        `Succeed: ${caseNumber}`,
        "result: ",
        Array.from(result),
        "answer: ",
        Array.from(answer)
      )
    );
  }
  exit && process.exit(0);
}

const s1 = new Set([1, 2, 3, 4, 5]);
const s2 = new Set([3, 4, 5, 6, 7]);

console.info(isSubsetOf(s1, s2) === false);
console.info(isSupersetOf(s1, s2) === false);
console.info(isDisjointFrom(s1, s2) === false);

result = intersection(s1, s2);
answer = new Set([3, 4, 5]);
judge();

result = union(s1, s2);
answer = new Set([1, 2, 3, 4, 5, 6, 7]);
judge();

result = difference(s1, s2);
answer = new Set([1, 2]);

judge();

result = symmetricDifference(s1, s2);
answer = new Set([1, 2, 6, 7]);

judge(true);
