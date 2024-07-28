import add from "../add";

test("parses empty string as 0", () => {
  expect(add("")).toBe(0);
});

test("parses filled string with commas as their sum", () => {
  expect(add("1")).toBe(1);
  expect(add("1,5")).toBe(6);
});

test("parses filled string with commas and \n as their sum", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("parses filled string with custom delimeter", () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("parses filled string shouldn't contain negative number", () => {
  expect(() => add("//;\n1;2;-3")).toThrow(
    "Negative Numbers are not allowed -3"
  );
  expect(() => add("//;\n1;2;-3;-4;-5;-6")).toThrow(
    "Negative Numbers are not allowed -3,-4,-5,-6"
  );
});
