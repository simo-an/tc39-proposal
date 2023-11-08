function intersection<T>(s1: Set<T>, s2: Set<T>): Set<T> {
  const result = new Set<T>();
  for (const item of s1) {
    if (s2.has(item)) {
      result.add(item);
    }
  }
  return result;
}

function union<T>(s1: Set<T>, s2: Set<T>) {
  const result = new Set<T>(s1);
  for (const item of s2) {
    result.add(item);
  }
  return result;
}

function difference<T>(s1: Set<T>, s2: Set<T>) {
  const result = new Set<T>(s1);
  for (const item of s2) {
    result.delete(item);
  }
  return result;
}

function symmetricDifference<T>(s1: Set<T>, s2: Set<T>) {
  return union(difference(s1, s2), difference(s2, s1));
}

function isSubsetOf<T>(s1: Set<T>, s2: Set<T>) {
  return difference(s1, s2).size === 0;
}

function isSupersetOf<T>(s1: Set<T>, s2: Set<T>) {
  return isSubsetOf(s2, s1);
}

function isDisjointFrom<T>(s1: Set<T>, s2: Set<T>) {
  return intersection(s1, s2).size === 0;
}

export {
  intersection,
  union,
  difference,
  symmetricDifference,
  isSubsetOf,
  isSupersetOf,
  isDisjointFrom,
};
