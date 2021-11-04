const checkOperator = (userInput) => {
  const validOperators = ["*", "-", "+", "/"];
  // check if operator is included in validOperator array.
  let arrayWithoutNumber = userInput.filter((c) => isNaN(parseInt(c)));
  const foundOperator = arrayWithoutNumber.some((r) =>
    validOperators.includes(r)
  );
  return foundOperator;
};

const checkNumber = (userInput) => {
  // check if there is number.
  const arrayOfNumber = userInput.filter((c) => !isNaN(parseInt(c))).length;
  return arrayOfNumber !== 0;
};

const calculate = (firstNumber, operator, secondNumber) => {
  switch (operator) {
    // do the math depending on operator
    case "+":
      return Number(firstNumber) + Number(secondNumber);
    case "-":
      return Number(firstNumber) - Number(secondNumber);
    case "*":
      return Number(firstNumber) * Number(secondNumber);
    case "/":
      // check division by zero cause it's impossible
      if (secondNumber === "0") {
        return "You can't divide by zero";
      } else {
        return Number(firstNumber) / Number(secondNumber);
      }
    default:
  }
};

const calculator = (input) => {
  // remove any white space if any.
  const userInput = input.replace(/\s+/g, "");
  // push every string into an array to start iterate inside it.
  const userInputArray = [];
  [...userInput].forEach((s) => userInputArray.push(s));

  // check if there is number inside user input
  if (!checkNumber(userInputArray)) {
    console.log("please select at least a number");
  } else if (!checkOperator(userInputArray)) {
    // check if there is a valid operator inside user input
    console.log("please select a valid operator : '+', '-', '*', '/'");
  } else {
    let operatorIndex;
    let operator;
    // check where the operator is and return his index
    userInputArray.map((e, index) => {
      if (isNaN(parseInt(e))) {
        operatorIndex = index;
        operator = e;
      }
    });
    // join the first number BEFORE the operator to have only one number
    const firstNumber = userInputArray.slice(0, operatorIndex).join("");
    // join the second number AFTER the operator to have only one number
    const secondNumber = userInputArray
      .slice(operatorIndex + 1, userInputArray.length)
      .join("");
    if (firstNumber.length === 0 || secondNumber.length === 0) {
      // check if user forgot number before operator or after to avoid bad result
      console.log("please type at least 2 number to calculate");
    } else {
      // calculate the result and display "= result"
      console.log("=", calculate(firstNumber, operator, secondNumber));
    }
  }
};

// export every module to make some test
module.exports = {
  calculator,
  checkOperator,
  checkNumber,
  calculate,
};
