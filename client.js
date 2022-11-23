const net = require("net");
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Successfully connected to game server");
    conn.write("Name: EL");
    // setInterval(() => conn.write("Move: down"), 50);
    // setTimeout(() => conn.write("Move: left"), 50);
    // setTimeout(() => conn.write("Move: left"), 50);
    // setTimeout(() => conn.write("Move: left"), 50);
  });
  // gets data from server
  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  });
  //message when disconnected
  conn.on('end', () => {
    console.log('disconnected from server');
  });

  return conn;
};

module.exports = { connect };