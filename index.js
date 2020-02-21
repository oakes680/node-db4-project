const express = require("express");

const server = express();

server.use(express.json());

server.listen(9000, () => {
  console.log("server is up and running on port 9000");
});