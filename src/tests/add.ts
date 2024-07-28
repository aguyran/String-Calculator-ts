function add(numbers: string): number {
  if (!numbers) {
    return 0;
  }
  let delimiter: string | RegExp = /\n|,/;
  if (numbers.startsWith("//")) {
    const match = numbers.match(/\/\/(.*)\n/);
    if (match !== null && match[0]) {
      delimiter = match[1];
      numbers = numbers.replace(/\/\/(.*)\n/, "");
    }
  }
  console.log(numbers);
  return numbers
    .split(delimiter)
    .map(Number)
    .reduce((acc, curr) => acc + curr, 0);
}

export default add;
