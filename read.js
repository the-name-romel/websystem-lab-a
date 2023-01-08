const fs = require("fs");

const read = () => {
  return fs.readFileSync("data.txt", "utf8");
};

module.exports = read;
