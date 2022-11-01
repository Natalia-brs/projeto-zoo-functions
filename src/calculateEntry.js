const data = require('../data/zoo_data');

const { prices } = data;

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

// Filtrei os elementos do array por idade e passei para o objeto com suas respectivas chaves

const countEntrants = (entrants) => ({
  child: entrants.filter((child) => child.age < 18).length,
  adult: entrants.filter((adult) => adult.age >= 18 && adult.age < 50).length,
  senior: entrants.filter((senior) => senior.age >= 50).length,
});

// console.log(countEntrants(entrants));

// Fazendo as verificaçoes, multiplicação e soma dos valores
const calculateEntry = (entrants) => {
  if (entrants === undefined) {
    return 0;
  }
  if (Object.keys(entrants).length === 0) {
    return 0;
  }

  const checkAge = countEntrants(entrants);
  const multAdult = checkAge.adult * prices.adult;
  const multChild = checkAge.child * prices.child;
  const multSenior = checkAge.senior * prices.senior;
  return multAdult + multChild + multSenior;
};

// console.log(calculateEntry(entrants))

module.exports = { calculateEntry, countEntrants };
