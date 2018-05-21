//Überprüft, ob mehrere Operatoren hintereinander auftauchen
function operators(string) {
  var pattern = /[+|\-|*|\/][+|\-|*|\/]+/;

  var c = pattern.test(string);
  return c;
}

//Überprüft ob zu Begin ein *, / oder ) steht -> Damit nur (, +, - oder eine Zahl eingegeben werden können
function beginning(x) {
  var pattern = /^([*]|[\)]|[\/])/;

  var c = pattern.test(x);

  console.log(c);
  return c;
}

/*function beginning(string) {
  if((string.charAt(0) == ')') || string.charAt(0) == '*' || string.charAt(0) == '/') {
    return false;
  }
}*/

//Überprüft wenn nach einem Operator eine ) oder ein . steht -> Damit nach dem Operator eine Klammer auf oder eine Zahl stehen kann
function afteroperator(string) {

 var pattern = /([+|\-|*|\/])(([\)]|[.])|$)/;

 var c = pattern.test(string);

 if(c == true) {
   return false;
 } else {
   return true;
 }
}

//Überprüft, ob die Klammern leer sind
function emptyBrackets(string) {

  var patt = /[(][)]/;
  var c = patt.test(string);

  return c;
}

//Überprüft, ob die Klammeranzahl stimmt
function bracketsCheck(string) {

  var brackets = 0;
  var openBracketsPattern = /[(]/;
  var closedBracketsPattern = /[)]/;

  for(i = 0; i < string.length; i++) {
      var c = string.charAt(i);

      if(openBracketsPattern.test(c)) {brackets++;}
      else if(closedBracketsPattern.test(c)) {brackets--;}
   }

   if(brackets == 0) {return true}
   else {return false}
}

//Überprüft, ob nach den Klammern ein Multiplikationszeichen oder ein geteilt Zeichen steht -> Damit nach einer Klammer nur +, -, eine Zahl oder die Klammern stehen können
function afterBracketsNoMulDiv(x) {
  var pattern = /([\(])([*]|[\/])/;

  var c = pattern.test(x);

  return c;
}

//Überprüft, ob eine ) und danach eine Klammer ( steht, um später das Multiplikationszeichen einfügen zu können.
function checkCloseOpenBrackets(string) {
  var patt = /([\)])([\(])/

  var c = patt.test(string);

  return c;
}

module.exports = {
  operators: operators,
  beginning: beginning,
  afteroperator: afteroperator,
  emptyBrackets: emptyBrackets,
  bracketsCheck: bracketsCheck,
  afterBracketsNoMulDiv: afterBracketsNoMulDiv,
  checkCloseOpenBrackets: checkCloseOpenBrackets
}
