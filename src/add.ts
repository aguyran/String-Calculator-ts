type delimiterType = RegExp | string;

function add(numbers: string): number {
  if (!numbers) {
    return 0;
  }
  const [delimiter, parsedNumbers] = extractDelimiterAndNumber(numbers);

  const splitNumbers = parsedNumbers
    .split(delimiter)
    .map((num) => (num.trim() === "" ? NaN : Number(num)));

  checkForInvalidInput(splitNumbers);
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

function extractDelimiterAndNumber(numbers: string): [delimiterType, string] {
  let delimiter: delimiterType = /\n|,/;

  if (numbers.startsWith("//")) {
    const match = numbers.match(/\/\/(.*)\n/);
    if (match !== null && match[0]) {
      delimiter = match[1];
      numbers = numbers.replace(/\/\/(.*)\n/, "");
    }
  }

  return [delimiter, numbers];
}

function checkForInvalidInput(numbers: number[]) {
  if (Number.isNaN(numbers?.at(-1))) {
    throw new Error("Invalid Input");
  }
}

export default add;
