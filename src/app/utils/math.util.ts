export const mode = <T>(arr: T[]) =>
  arr.sort((a, b) => arr.filter((v) => v === a).length - arr.filter((v) => v === b).length).pop();
