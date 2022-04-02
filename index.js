// Write your solution in this file!
const employee = { 
    name: `Raul`, 
    streetAddress: `58 Kent St`,
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
        ...employee,
        [key]: value,
      };
    };

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
      employee[key] = value;
      return employee;
    };

function deleteFromEmployeeByKey(employee, key, value){
  const newEmployee = {...employee};
  delete newEmployee.name;
  return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, key, value){
  delete employee.name;
  return employee;
};