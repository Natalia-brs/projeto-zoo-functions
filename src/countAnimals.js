const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Por ordem:

/* Nessa etapa utilizei o ForEach para contabilizar a quantidade de animais no zoologico,
 utilizando a anotação de bracket notation onde a minha key name irá receber o numero de
 residentes. Retornando na variavel count. (1)
*/

/* Utilizei um if passando as chaves specie e sex por parametro (animal), apos isso um find para comparar o meu parametro com
o interador do find que está passando pelo meu array de objetos, na chave residents, por ultimo utilizando o filter para comparar
o meu parametro com o interador do filter na chave sex dentro do array residents. (2)
*/

/* Utilizei um if passando as chave specie por parametro (animal), e utlizando o find para comparar se o meu parametro é igual ao meu iterador
que ira passa na chave name, dentro do array residents. (3)
*/

const countAnimals = (animal) => {
  if (animal === undefined) { // 1
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
  if (animal.specie) { // 3
    return species.find((especiee) => animal.specie === especiee.name).residents.length;
  }
};
console.log(countAnimals({ specie: 'lions' }));

module.exports = countAnimals;
