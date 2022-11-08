const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

/* Usei o forEach para fazer o push de um objeto para dentro de um array,
dentro desse objeto fiz um filter para filtrar dentro do species se o id está incluso no meu employees,
aṕos iss, fiz a verificaçoes para o retorno do objeto.
*/

const creating = [];
employees.forEach((employ) => {
  creating.push({
    id: employ.id,
    fullName: `${employ.firstName} ${employ.lastName}`,
    species: species.filter(({ id }) =>
      employ.responsibleFor.includes(id)).map(({ name }) => name),
    locations: species.filter(({ id }) =>
      employ.responsibleFor.includes(id)).map(({ location }) => location),
  });
});

// Fazendo as verificaçoes dentro da função

const getEmployeesCoverage = (para) => {
  if (para === undefined) return creating;
  const { name, id } = para;
  if (creating.find((employ) => employ.id === id)) {
    return creating.find((employ) => employ.id === id);
  }
  if (creating.find(({ fullName }) => fullName.includes((name)))) {
    return creating.find(({ fullName }) => fullName.includes(name));
  }
  throw new Error('Informações inválidas');
};

console.log(getEmployeesCoverage({ name: 'Ola' }));

module.exports = getEmployeesCoverage;
