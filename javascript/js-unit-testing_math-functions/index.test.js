// create index.test.js
import { add, subtract, multiply, divide } from "./index.js"; // import function

// test add() function
test("adds the numbers 1 and 2 correctly", () => {
  const result = add(1, 2);
  expect(result).toBe(3);
});
