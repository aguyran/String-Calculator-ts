import add from "./add";

test("parses empty string as 0", () => {
  expect(add("")).toBe(0);
});
