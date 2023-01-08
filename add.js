const fs = require("fs");

const add = (data, emp) => {
  const oldData = JSON.parse(data);
  const addTo = [
    ...oldData,
    { employee: emp.employee, role: emp.role, department: emp.department },
  ];
  return fs.writeFileSync("data.txt", JSON.stringify(addTo));
};

module.exports = add;
