const Calculator = require("../src/calculator");

const c = new Calculator();

test("adds 4 + 5 + 3 to equal 12", () => {
  const sum = c.sum(4, 5, 3);
  expect(sum).toBe(12);
});

test("subtract 20 - 10 - 5 to equal 5", () => {
  const subtract = c.subtract(20, 10, 5);
  expect(subtract).toBe(5);
});
