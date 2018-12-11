// File Utils for array

export function paginate(array, perpage, pageNumber) {
  return array.slice(
    (pageNumber - 1) * perpage,
    (pageNumber - 1 + 1) * perpage
  );
}
