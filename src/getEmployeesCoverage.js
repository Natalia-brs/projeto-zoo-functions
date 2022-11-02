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
    species: species.filter((animale) =>
      employ.responsibleFor.includes(animale.id)).map((nombre) => nombre.name),
    locations: species.filter((animal) =>
      employ.responsibleFor.includes(animal.id)).map((local) => local.location),
  });
});

// Fazendo as verificaçoes dentro da função

const getEmployeesCoverage = (para) => {
  if (para === undefined) return creating;
  const { name, id } = para;
  if (creating.find((employ) => employ.id === id)) {
    return creating.find((employ) => employ.id === id);
  }
  if (creating.find((employ2) => employ2.fullName.includes((name)))) {
    return creating.find((employ2) => employ2.fullName.includes(name));
  }
  throw new Error('Informações inválidas');
};

module.exports = getEmployeesCoverage;
