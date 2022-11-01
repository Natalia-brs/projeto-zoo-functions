const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('retorna a quantidade de elefantes', () => {
    expect(getOpeningHours('count')).toBe(4);
  });
  it('retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(getOpeningHours('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('retorna a média de idade dos elefantes', () => {
    expect(getOpeningHours('averageAge')).toBeCloseTo(10.5);
  });
  it('retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(getOpeningHours('location')).toBe('NW');
  });
  it('retorna a popularidade dos elefantes', () => {
    expect(getOpeningHours('popularity')).toBe(5);
  });
  it('retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(getOpeningHours('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Não passando argumentos a função deve retornar', () => {
    expect(getOpeningHours()).toBe([undefined]);
  });
});
