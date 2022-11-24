const { MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY } = require("./constants");
let connection;

const handleUserInput = function(key) {
  // your code here
  
  if (key === MOVE_UP_KEY) {
    connection.write('Move: up');
  }

  if (key === MOVE_LEFT_KEY) {
    connection.write('Move: left');
  }

  if (key === MOVE_DOWN_KEY) {
    connection.write('Move: down');
  }
  if (key === MOVE_RIGHT_KEY) {
    connection.write('Move: right');
  }
};

// setup interface to handle user input from stdin

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", key => {
    handleUserInput(key);
  });
  return stdin;
};

module.exports = {
  handleUserInput,
  setupInput
};