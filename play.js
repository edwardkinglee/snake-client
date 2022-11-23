const { connect } = require('./client');

console.log("Connecting ...");
connect();

const handleUserInput = function() {
  // your code here
};

// setup interface to handle user input from stdin

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

setupInput();
