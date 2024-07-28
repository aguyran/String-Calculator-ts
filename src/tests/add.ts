function add(numbers: string): number {
  if (!numbers) {
    return 0;
  }
  const [delimeter, parsedNumbers] = extractDelimiterAndNumber(numbers);
  
  return parsedNumbers
    .split(delimeter)
    .map(Number)
    .reduce((acc, curr) => acc + curr, 0);
}

function extractDelimiterAndNumber(numbers: string): [RegExp | string, string] {
  let delimiter: string | RegExp = /\n|,/;

  if (!numbers.startsWith("//")) {
    const match = numbers.match(/\/\/(.*)\n/);
    if (match !== null && match[0]) {
      delimiter = match[1];
      numbers = numbers.replace(/\/\/(.*)\n/, "");
    }
  }

  return [delimiter, numbers];
}
export default add;
