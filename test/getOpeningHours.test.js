const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Teste não passando argumentos. Deverá retornar o objeto:', () => {
    const schedule = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(schedule);
  });
  it('Para os argumentos Monday e 09:00-AM deve retornar a string The zoo is closed', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Para os argumentos Tuesday e 09:00-AM deve retornar a string The zoo is open', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Para os argumentos Wednesday e 09:00-PM deve retornar a string The zoo is closed', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('Validação da abreviação AM - PM', () => {
    expect(() => getOpeningHours('Thursday', '09:00-AZ')).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('Utilização de apenas dias validos', () => {
    expect(() => getOpeningHours('Thurxsdsday', '09:00-AZ')).toThrowError(new Error('The day must be valid. Example: Monday'));
  });
  it('Se o horario for incorreto deve lançar um erro', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrowError(new Error('The hour must be between 0 and 12'));
  });
  it('Se os minutos estiverem incorretos deve lançar um erro', () => {
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrowError(new Error('The minutes must be between 0 and 59'));
  });
  it('Erro no caso de inserção de minutos com valores diferentes de numeros', () => {
    expect(() => getOpeningHours('Monday', '13:t0-AM')).toThrowError(new Error('The minutes should represent a number'));
  });
  it('Erro no caso de inserção de minutos com valores diferentes de numeros', () => {
    expect(() => getOpeningHours('Monday', '1j:60-AM')).toThrowError(new Error('The hour should represent a number'));
  });
});
