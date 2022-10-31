const data = require('../data/zoo_data');

const { employees } = data;

const isManager = (id) => employees.some(({ managers }) => managers.includes(id));

// console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'))
// Verifica se o id que estou passando está incluso na chave managers, se sim significa que os colaboradores são managers.

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.filter(({ managers }) => managers.includes(managerId))
    .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
};
// Primeiro realizando a verificação da função isManager se é compativel com o mesmo id passado pelo parametro
// Se sim realizando um filter para trazer todas as pessoas que incluem o id de um colaborador gerente e por fim um mapa para trazer nomes e sobrenomes

// console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
