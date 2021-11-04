const calc = require("../calculator");

// test operator
test("addition operator is found inside the array", () => {
  expect(calc.checkOperator(["2", "0", "+", "4"])).toBe(true);
});

test("l string operator to be false", () => {
  expect(calc.checkOperator(["2", "0", "n", "4"])).toBe(false);
});

// test if user input is a number
test("number found inside array", () => {
  expect(calc.checkNumber(["2", "0", "+", "4"])).toBe(true);
});

test("no number found inside array", () => {
  expect(calc.checkNumber(["p", "n", "+", "n"])).toBe(false);
});

// test some math
test("20 + 20 to be equal to 40", () => {
  expect(calc.calculate("20", "+", "20")).toEqual(40);
});

test("20 - 20 to be equal to 0", () => {
  expect(calc.calculate("20", "-", "20")).toEqual(0);
});

test("20 * 20 to be equal to 400", () => {
  expect(calc.calculate("20", "*", "20")).toEqual(400);
});

test("20 / 20 to be equal to 1", () => {
  expect(calc.calculate("20", "/", "20")).toEqual(1);
});

// test if user try to divide by 0
test("20 / 0 to be impossible and return an error message", () => {
  expect(calc.calculate("20", "/", "0")).toMatch("You can't divide by zero");
});
