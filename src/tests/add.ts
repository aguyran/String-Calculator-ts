function add(numbers: string): number {
  if (!numbers) {
    return 0;
  }
  return numbers
    .split(/\n|,/)
    .map(Number)
    .reduce((acc, curr) => acc + curr, 0);
}

export default add;
