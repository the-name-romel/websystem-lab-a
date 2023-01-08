const findEmp = (data) => {
  const emps = JSON.parse(data);
  const names = emps.map((emp) => emp.employee);
  console.log(`Employee: ${names.join(", ")}`);
};

module.exports = findEmp;
