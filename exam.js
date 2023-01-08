const add = require("./add");
const findEmp = require("./findEmployee");
const read = require("./read");

const cmd = process.argv;

if (cmd[2] === "add") {
  const data = read();
  const emp = {
    employee: cmd[3],
    role: cmd[4],
    department: cmd[5],
  };
  add(data, emp);
}

if (cmd[2] === "read") {
  console.log(JSON.parse(read()));
}

if (cmd[2] === "employee") {
  const data = read();
  findEmp(data);
}
