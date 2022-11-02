const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const { specie, sex } = animal;
  if (animal === undefined) {
    const count = {};
    species.forEach((especie) => {
      count[especie.name] = especie.residents.length;
    });
    return count;
  }
  if (specie && sex) {
    return species.find(({ name }) => specie.includes((name))).residents
      .filter((animal1) => animal.sex === animal1.sex).length;
  }
  return species.find(({ name }) => specie.includes((name))).residents.length;
};

// .filter(({ sex }) => sex.includes((sex))).length; poderia deixar assim, mas o lint da erro

console.log(countAnimals({ specie: 'penguins', sex: 'female' }));

module.exports = countAnimals;
