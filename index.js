//1//
const employee = {
  name : "name",
  address : "address"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value,
  };
};


//2//
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
};


//3//
function deleteFromEmployeeByKey(employee, key) {
    const newObj = {...employee};

    delete newObj[key];
    return newObj;
};


//4//
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
};
