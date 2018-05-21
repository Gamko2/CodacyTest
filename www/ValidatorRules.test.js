const valRules = require('./js/ValidatorRules.js');

//Allte Tests enthalten einen positiven und negativen Test
//Richtige Klammersetzung, wenn die Klammern nicht richtig gesetzt sind, wird false zurückgegeben
test('((A+1)+(B-C))/(10+2)) equals false', () => {
  expect(valRules.bracketsCheck('((A+1)+(B-C))/(10+2))')).toBe(false);
});

test('((B*C)/(A+1)+(7-8)) equals true', () => {
  expect(valRules.bracketsCheck('((B*C)/(A+1)+(7-8))')).toBe(true);
});

//Leere Klammern, wenn leere Klammern vorhanden sind, gebe true aus
test('A+1+() equals true', () => {
  expect(valRules.emptyBrackets('A+1+()')).toBe(true);
});

test('()() equals true', () => {
  expect(valRules.emptyBrackets('()()')).toBe(true);
});

test('(56+CDF) equals false', () => {
  expect(valRules.emptyBrackets('(56+CDF)')).toBe(false);
});

//Mehrere Operatoren hintereinander, wenn dies Eintritt gebe true zurück
test('A+-/1 equals true', () => {
  expect(valRules.operators('A+-/1')).toBe(true);
});

test('ABC++10 equals true', () => {
  expect(valRules.operators('ABC++10')).toBe(true);
});

test('ABC+10 equals false', () => {
  expect(valRules.operators('ABC+10')).toBe(false);
});

//Wenn nach einem Operator ), . oder nichts steht, gebe false zurück
test('(A+)+20+(10+10) equals false', () => {
  expect(valRules.afteroperator('(A+)+20+(10+10)')).toBe(false);
});

test('10+A+.+2 equals false', () => {
  expect(valRules.afteroperator('10+A+.+2')).toBe(false);
});

test('A+ equals false', () => {
  expect(valRules.afteroperator('A+')).toBe(false);
});

test('A+(10+19) equals true', () => {
  expect(valRules.afteroperator('A+(10+19)')).toBe(true);
});

test('A+10+2 equals true', () => {
  expect(valRules.afteroperator('A+10+2')).toBe(true);
});

//Wenn zu Begin *, /, oder ), gebe true zurück
test('/A equals true', () => {
  expect(valRules.beginning('/A')).toBe(true);
});

test('*1 equals true', () => {
  expect(valRules.beginning('*1')).toBe(true);
});

test(')10 equals true', () => {
  expect(valRules.beginning(')10')).toBe(true);
});

test('+10-F equals false', () => {
  expect(valRules.beginning('+10-F')).toBe(false);
});

test('-10-B+34 equals false', () => {
  expect(valRules.beginning('-10-B+34')).toBe(false);
});

test('(10-B+34) equals false', () => {
  expect(valRules.beginning('(10-B+34)')).toBe(false);
});

//Nach einer Klammer darf kein * oder / stehen, wenn's eintrifft true
test('(*10) equals true', () => {
  expect(valRules.afterBracketsNoMulDiv('(*10)')).toBe(true);
});

test('(/AB) equals true', () => {
  expect(valRules.afterBracketsNoMulDiv('(/AB)')).toBe(true);
});

test('(+CDE) equals false', () => {
  expect(valRules.afterBracketsNoMulDiv('(+CDE)')).toBe(false);
});

test('(-100) equals false', () => {
  expect(valRules.afterBracketsNoMulDiv('(-100)')).toBe(false);
});

test('((-100)) equals false', () => {
  expect(valRules.afterBracketsNoMulDiv('((-100))')).toBe(false);
});

//Nach einer geschlossenen Klammer folgt eine geöffnete, wenn's zutrifft true
test('(A+1)(B+10) equals true', () => {
  expect(valRules.checkCloseOpenBrackets('(A+1)(B+10)')).toBe(true);
});

test('F+34 equals false', () => {
  expect(valRules.checkCloseOpenBrackets('F+34')).toBe(false);
});

//Korrektur
test('(F+34) equals false', () => {
  expect(valRules.checkCloseOpenBrackets('(F+34)')).toBe(false);
});
