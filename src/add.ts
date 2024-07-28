function add(numbers: string): number {
  if (!numbers) {
    return 0;
  }
  const [delimeter, parsedNumbers] = extractDelimiterAndNumber(numbers);

  const splitNumbers = parsedNumbers.split(delimeter).map(Number);
  checkIfNumberNegative(splitNumbers);
  return splitNumbers.reduce((acc, curr) => acc + curr, 0);
}
function checkIfNumberNegative(numbers: number[]) {
  const negativeNumbers: number[] = [];
  numbers.forEach((num) => (num < 0 ? negativeNumbers.push(num) : undefined));
  if (negativeNumbers.length) {
    throw new Error(
      `Negative Numbers are not allowed ${negativeNumbers.join(",")}`
    );
  }
}

function extractDelimiterAndNumber(numbers: string): [RegExp | string, string] {
  let delimiter: string | RegExp = /\n|,/;

  if (numbers.startsWith("//")) {
    const match = numbers.match(/\/\/(.*)\n/);
    if (match !== null && match[0]) {
      delimiter = match[1];
      numbers = numbers.replace(/\/\/(.*)\n/, "");
    }
  }

  return [delimiter, numbers];
}
export default add;
