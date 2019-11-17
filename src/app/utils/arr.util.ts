export const mode = <T>(arr: T[]) => {
  const sorted = [...arr].sort(sortByRate(arr));
  return sorted.pop();
};

export const sortByRate = <T>(arr: T[]) => (a: T, b: T) =>
  arr.filter((v) => v === a).length - arr.filter((v) => v === b).length;

export const intersection = <T>(arr1: T[], arr2: T[], cb?: (value: T) => void) =>
  arr1.filter((value) => {
    if (arr2.includes(value) && cb) cb(value);
    return arr2.includes(value);
  });

export const differences = <T>(arr1: T[], arr2: T[], cb?: (value: T) => void) =>
  arr1.filter((value) => {
    if (!arr2.includes(value) && cb) cb(value);
    return !arr2.includes(value);
  });
