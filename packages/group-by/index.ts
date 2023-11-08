function groupByMap<T>(array: T[], group: (data: T, index: number) => any) {
  return array.reduce<Map<any, T[]>>((prev, cur, index) => {
    const key = group(cur, index);
    if (prev.has(key)) {
      prev.get(key)!.push(cur);
    } else {
      prev.set(key, [cur]);
    }
    return prev;
  }, new Map());
}

function groupByObject<T>(array: T[], group: (data: T, index: number) => any) {
  return array.reduce<Record<any, T[]>>((prev, cur, index) => {
    const key = group(cur, index);
    if (prev[key]) {
      prev[key].push(cur);
    } else {
      prev[key] = [cur];
    }
    return prev;
  }, {});
}

function groupBy<T>(array: T[], group: (data: T, index: number) => any, map?: boolean) {
  return map ? groupByMap(array, group) : groupByObject(array, group);
}

export { groupBy, groupByMap, groupByObject };
