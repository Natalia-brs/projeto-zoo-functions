const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

const getOldestFromFirstSpecies = (ids) => {
  const findAnimal = employees.find(({ id }) => id === ids).responsibleFor[0];
  const old = species.find(({ id }) => id.includes(findAnimal)).residents
    .reduce((acc, velho) => (acc.age > velho.age ? acc : velho));
  return [old.name, old.sex, old.age];
};

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
