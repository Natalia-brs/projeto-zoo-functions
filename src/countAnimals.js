const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (animal === undefined) {
    const count = {};
    species.forEach((especie) => {
      count[especie.name] = especie.residents.length;
    });
    return count;
  }
  if (animal.specie && animal.sex) { // 2
    return species.find((especie) => animal.specie === especie.name).residents
      .filter((sex) => animal.sex === sex.sex).length;
  }
  return species.find((especiee) => animal.specie === especiee.name).residents.length;
};

console.log(countAnimals({ specie: 'bears' }));

module.exports = countAnimals;
