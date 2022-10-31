const data = require('../data/zoo_data');

const { employees } = data;

const getEmployeeByName = (employeeName) => {
  if (employeeName === undefined) {
    return {};
  }
  return employees
    .filter(({ firstName, lastName }) => employeeName === firstName
    || employeeName === lastName)[0];
};

module.exports = getEmployeeByName;
