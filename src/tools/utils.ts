export const matchStringInArray = (
  array: string[],
  string: string,
  limit: number
): string[] => {
  const searchRegEx = new RegExp(string, 'i');
  let recordsAdded = 0;
  const results: string[] = [];

  for (let i = 0; i < array.length; i++) {
    if (recordsAdded >= limit) break;

    if (searchRegEx.test(array[i])) {
      recordsAdded++;
      results.push(array[i]);
    }
  }

  return results;
};
