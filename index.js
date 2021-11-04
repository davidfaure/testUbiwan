const readline = require("readline");
const calc = require("./calculator");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.setPrompt("Enter an operation: "); // can be remove but if feels more "human"
rl.prompt();

rl.on("line", (line) => {
  // calculate input user directly and keep going until exit.
  calc.calculator(line);
  rl.prompt();
});

rl.on("exit", () => {
  console.log("Thank you for using my calculator");
  rl.close();
});
