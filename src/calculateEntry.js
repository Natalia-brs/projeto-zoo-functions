const data = require('../data/zoo_data');

const { prices } = data;

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

// Filtrei os elementos do array por idade e passei para o objeto com suas respectivas chaves

const countEntrants = (pessoas) => ({
  child: pessoas.filter(({ age }) => age < 18).length,
  adult: pessoas.filter(({ age }) => age >= 18 && age < 50).length,
  senior: pessoas.filter(({ age }) => age >= 50).length,
});

// Fazendo as verificaçoes, multiplicação e soma dos valores
const calculateEntry = (ingressos) => {
  if (ingressos === undefined) {
    return 0;
  }
  if (Object.keys(ingressos).length === 0) {
    return 0;
  }

  const checkAge = countEntrants(entrants);
  const multAdult = checkAge.adult * prices.adult;
  const multChild = checkAge.child * prices.child;
  const multSenior = checkAge.senior * prices.senior;
  return multAdult + multChild + multSenior;
};

console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
