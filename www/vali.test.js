const calc = require('./js/calculator.js');

test('test123', () => {
  expect(calc.inputValidator("+++")).toBe(false);
});

//Case: Brackets
test('2 Open 1 Closed Bracket', () => {
  expect(calc.inputValidator("((5+5)")).toBe(false);
});
test('1 Open 2 Closed Brackets', () => {
  expect(calc.inputValidator("(5+5))")).toBe(false);
});
test('Equal Brackets', () => {
  expect(calc.inputValidator("(5+5)")).toBe(true);//Problem with the function return
});

//Case: No two consecutive Operators
test('2 +', () => {
  expect(calc.inputValidator("++")).toBe(false);
});
test('3 -', () => {
  expect(calc.inputValidator("---")).toBe(false);
});
test('*-', () => {
  expect(calc.inputValidator("*-")).toBe(false);
});
test('*.', () => {
  expect(calc.inputValidator("*.")).toBe(false);
});
test('+-//', () => {
  expect(calc.inputValidator("+-//")).toBe(false);
});
test('//', () => {
  expect(calc.inputValidator("//")).toBe(false);
});
test('8--+5', () => {
  expect(calc.inputValidator("8--+5")).toBe(false);
});

//Case: No Start with Operator
test('+(4*3)', () => {
  expect(calc.inputValidator("+(4*3)")).toBe(false);
});
test('-', () => {
  expect(calc.inputValidator("-")).toBe(false);
});
test('/8*3', () => {
  expect(calc.inputValidator("/8*3")).toBe(false);
});

//Case: No End with Operator
test('12*3-', () => {
  expect(calc.inputValidator("12*3-")).toBe(false);
});
test('(12*3)+4/', () => {
  expect(calc.inputValidator("(12*3)+4/")).toBe(false);
});
test('*', () => {
  expect(calc.inputValidator("*")).toBe(false);
});

//Case: Consecutive Brackets
test('(12*3)(8+9)', () => {
  expect(calc.inputValidator("(12*3)(8+9)")).toBe(true);
});
test('8(8+9)', () => {
  expect(calc.inputValidator("8(8+9)")).toBe(true);
});
test('8(8+9)', () => {
  expect(calc.inputValidator("8(8+9)")).toBe(true);
});

//Case: Wrong Inputs (for Dezimal)
test('5+4-3oeurhg', () => {
  expect(calc.inputValidator("5+4-3oeurhg")).toBe(false);
});
test('(13*5a)+7', () => {
  expect(calc.inputValidator("(13*5a)+7")).toBe(false);
});
test('§$)/&/(=§/)awd', () => {
  expect(calc.inputValidator("§$)/&/(=§/)awd")).toBe(false);
});

//Case: Empty brackets
test('((()()))()()', () => {
  expect(calc.inputValidator("((()()))()()")).toBe(false);
});
test('(5+8*(3-2+(2+3)*()-2)+1)', () => {
  expect(calc.inputValidator("(5+8*(3-2+(2+3)*()-2)+1)")).toBe(false);
});
test('(5+8*(3-2+(2+3)*(5-3)-2)+1)', () => {
  expect(calc.inputValidator("(5+8*(3-2+(2+3)*(5-3)-2)+1)")).toBe(true);
});

//Case: After Bracket only Number or +,-
test('(1+1)', () => {
  expect(calc.inputValidator("(1+1)")).toBe(true);
});
test('(*3+2)', () => {
  expect(calc.inputValidator("(*3+2)")).toBe(false);
});

//Case: two deciaml points
test('5.3-2.5*3.234', () => {
  expect(calc.inputValidator("5.3-2.5*3.234")).toBe(true);
});
test('5.323.4-2.5*3.234', () => {
  expect(calc.inputValidator("5.323.4-2.5*3.234")).toBe(false);
});
test('5..4-2.5*3.234', () => {
  expect(calc.inputValidator("5..4-2.5*3.234")).toBe(false);
});

//Speacial Cases
test('25/0', () => {
  expect(calc.inputValidator("25/0")).toBe(false);
});
test('25*3+(4*5)/0', () => {
  expect(calc.inputValidator("25*3+(4*5)/0")).toBe(false);
});
