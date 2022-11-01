const data = require('../data/zoo_data');

const { employees } = data;

const employName = (employeeName) => {
  const find = employees.find(({ firstName, lastName }) => employeeName === firstName
  || employeeName === lastName);

  if (employeeName === find) {
    throw new Error('Informações inválidas');
  }
  return find;
};

console.log(employName('01422318-ca2d-46b8-b66c-3e9e188244ed'));

const getEmployeesCoverage = () => {

};

module.exports = getEmployeesCoverage;
