// Filters out duplicates by key
export const removeDuplicates = (data, key) => [
  ...new Map(data.map((item) => [key(item), item])).values(),
];
