const dec = require('./js/dec.js');

//Mehrere Operatoren hintereinander, wenn dies Eintritt gebe true zurück

test('1+-/4 equals true', () => {
  expect(dec.operators('1+-/4')).toBe(true);
});

test('1++4 equals true', () => {
  expect(dec.operators('1++4')).toBe(true);
});

test('1+4 equals false', () => {
  expect(dec.operators('1+4')).toBe(false);
});


//Wenn nach einem Operator ), . oder nichts steht, gebe false zurück

test('(4+)+20+(10+10) equals false', () => {
  expect(dec.afteroperator('(4+)+20+(10+10)')).toBe(false);
});

test('10+4+.+2 equals false', () => {
  expect(dec.afteroperator('10+4+.+2')).toBe(false);
});

test('4+ equals false', () => {
  expect(dec.afteroperator('4+')).toBe(false);
});

test('4+(10+3) equals true', () => {
  expect(dec.afteroperator('4+(10+3)')).toBe(true);
});

test('4+10+2 equals true', () => {
  expect(dec.afteroperator('4+10+2')).toBe(true);
});


//Wenn zu Begin *, /, oder ), gebe true zurück

test('/4 equals true', () => {
  expect(dec.beginning('/4')).toBe(true);
});

test('*4 equals true', () => {
  expect(dec.beginning('*4')).toBe(true);
});

test(')6 equals true', () => {
  expect(dec.beginning(')6')).toBe(true);
});

test('+6-3 equals false', () => {
  expect(dec.beginning('+6-3')).toBe(false);
});

test('-10-5+4 equals false', () => {
  expect(dec.beginning('-10-5+4')).toBe(false);
});

test('(10-6+4) equals false', () => {
  expect(dec.beginning('(10-6+4)')).toBe(false);
});


//Nach einer Klammer darf kein * oder / stehen, wenn's eintrifft true

test('(*4) equals true', () => {
  expect(dec.afterBracketsNoMulDiv('(*4)')).toBe(true);
});

test('(/4) equals true', () => {
  expect(dec.afterBracketsNoMulDiv('(/4)')).toBe(true);
});

test('(+12) equals false', () => {
  expect(dec.afterBracketsNoMulDiv('(+12)')).toBe(false);
});

test('(-100) equals false', () => {
  expect(dec.afterBracketsNoMulDiv('(-100)')).toBe(false);
});

test('((-100)) equals false', () => {
  expect(dec.afterBracketsNoMulDiv('((-100))')).toBe(false);
});


//Nach einer geschlossenen Klammer folgt eine geöffnete, wenn's zutrifft true

test('(6+1)(4+10) equals true', () => {
  expect(dec.checkCloseOpenBrackets('(6+1)(4+10)')).toBe(true);
});

test('3+4 equals false', () => {
  expect(dec.checkCloseOpenBrackets('3+4')).toBe(false);
});

test('(3+4) equals true', () => {
  expect(dec.checkCloseOpenBrackets('(3+4)')).toBe(true);
});

//Überprüft, ob die Klammern leer sind
  
  test('adds () equals true', () =>{
	expect(dec.emptyBrackets('()')).toBe(true);
});

 //Überprüft, ob die Klammeranzahl stimmt

  test('adds ((((()))) equals false', () =>{
	expect(dec.bracketsCheck('((((())))')).toBe(false);
});
  test('adds ((())) equals true', () =>{
	expect(dec.bracketsCheck('((()))')).toBe(true);
});


//Überprüft, ob bei einer Zahl, mehrere Kommas eingeben werden

test('adds 2.3. equals true', () =>{
	expect(dec.kommaCheck('2.3.')).toBe(true)});

test('adds 2.34 equals false', () =>{
	expect(dec.kommaCheck('2.34')).toBe(false)});

//Überprüft, ob nach einer Zahl eine Klammer folgt, für das Einfügen eines Multiplikationszeichen notwendig

test('adds 4( equals true', ()=>{
	expect(dec.checkDecBrackets('4(')).toBe(true)
});

test('adds 4* equals false', ()=>{
	expect(dec.checkDecBrackets('4*')).toBe(false)
});

test('adds 4. equals false', ()=>{
	expect(dec.checkDecBrackets('4.')).toBe(false)
});

  /*Die Funktion ist dafür zuständig, dass zwischen einer Zahl und einer geöffneten Klammer und zwischen
einer geschlossenen und öffnenden Klammer ein Multiplikationszeichen hinzugefügt wird*/

test('adds 1( equals 1*(', () =>{
	expect(dec.decModifizieren('1(')).toBe('1*(');
});

