//Überprüft, ob mehrere Operatoren hintereinander auftauchen
function operators(string) {
  var regEx = /[+|\-|*|\/][+|\-|*|\/]+/;

  return string.search(regEx);

}

//Überprüft ob zu Begin ein *, / oder ) steht -> Damit nur (, +, - oder eine Zahl eingegeben werden können
function beginning(x) {
  var pattern = /^([*]|[\)]|[\/])/;

  return x.search(pattern);
}

//Überprüft wenn nach einem Operator eine ) oder ein . steht -> Damit nach dem Operator eine Klammer auf oder eine Zahl stehen kann
function afteroperator(string) {

  var pattern = /([+|\-|*|\/])(([\)]|[.])|$)/;

  var c = pattern.test(string);

  if (c == true) {
    return false;
  } else {
    return true;
  }
}

function markAfterOperator(input) {
  let regEx = /([+|\-|*|\/])(([\)]|[.])|$)/;
  markRed(input.search(regEx));

}

//Überprüft, ob die Klammern leer sind
function emptyBrackets(string) {

  var patt = /[(][)]/;
  return string.search(patt);


}

//Überprüft, ob die Klammeranzahl stimmt
function bracketsCheck(string) {

  var openBracketsPattern = /[(]/;
  var closedBracketsPattern = /[)]/;
  let openIndexes = [];
  let closedIndexes = [];

  for (i = 0; i < string.length; i++) {
    var c = string.charAt(i);
    if (openBracketsPattern.test(c)) {
      openIndexes.push(i);
    }
    else if (closedBracketsPattern.test(c)) {
      closedIndexes.push(i);
    }
  }

  if (openIndexes.length == closedIndexes.length) {
    return -1
  }
  else {
    if (openIndexes.length > closedIndexes.length) {
      return openIndexes[openIndexes.length - 1]
    } else {
      return closedIndexes[closedIndexes.length - 1]
    }

  }
}



//Überprüft, ob nach den Klammern ein Multiplikationszeichen oder ein geteilt Zeichen steht -> Damit nach einer Klammer nur +, -, eine Zahl oder die Klammern stehen können
function afterBracketsNoMulDiv(x) {
  var pattern = /([\(])([*]|[\/])/;
  return readInput().search(pattern)+1;

}

//Überprüft, ob eine ) und danach eine Klammer ( steht, um später das Multiplikationszeichen einfügen zu können.
function checkCloseOpenBrackets(string) {
  var patt = /([\)])([\(])/

  var c = patt.test(string);

  return c;
}

//Leere Klammern löschen
function removeEmpty(string) {
  var regex = /[(][)]/;

  while (regex.test(string)) {
    string = string.replace("()", "");
  }

  return string;
}

function checkForIncorrectInput(string){
if (string.includes("font")){
 return false; 
} 
else {
  return true;
}
}



module.exports = {
  operators: operators,
  beginning: beginning,
  afteroperator: afteroperator,
  emptyBrackets: emptyBrackets,
  bracketsCheck: bracketsCheck,
  afterBracketsNoMulDiv: afterBracketsNoMulDiv,
  checkCloseOpenBrackets: checkCloseOpenBrackets,
  removeEmpty: removeEmpty
}
