const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animals, ages) => species.filter(({ name }) => name === animals)[0]
  .residents.every(({ age }) => age > ages);

module.exports = getAnimalsOlderThan;
