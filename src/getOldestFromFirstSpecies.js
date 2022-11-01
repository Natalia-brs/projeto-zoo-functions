const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

const getOldestFromFirstSpecies = (id) => {
  const findAnimal = employees.find((employ) => employ.id === id).responsibleFor[0];
  const old = species.find((especie) => especie.id === findAnimal).residents
    .reduce((acc, velho) => (acc.age > velho.age ? acc : velho));
  return [old.name, old.sex, old.age];
};

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
