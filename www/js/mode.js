var mode = {
  binary: "bin",
  hexadecimal: "hex",
  decimal: "dec"
}

function setMode(m) {
  //console.log("Start to setMode!");
  if(m == mode.binary) {
    setValidator(m);
    //console.log("Binary Validator + Evaluator");
  } else if (m == mode.hexadecimal) {
    setValidator(m);
    //console.log("Hexadecimal Validator + Evaluator");
  } else if(m == mode.decimal) {
    setValidator(m);
    //console.log("Decimal Validator + Evaluator");
  }
}

function decCheck() {
  //console.log("decCheck()");
  var erg = 0;
  if(inputValidator() === true) {
    erg = eval(readInput());
    writeOutput(erg);
  } else {
    alert("Sorry, Fehler! Bitte neu eintippen ");
  }
}

function binCheck() {
  //console.log("binCheck()");
  var string = korrigieren(readInput());
  //console.log(string);

  var erg = 0;
  var result;
  if(binInputValidator(string) === true) {
    var number1 = checkNumberBrackets(string);
    var number2 = checkCloseOpenBrackets(string);
    if(number1 == true || number2 == true) {
      //console.log("Push");
      string = modifizieren(string);
      //console.log(string);
    }

    var result = eval(string);
    erg = result.toString(2);
    writeOutput(erg);
  } else {
    alert("Sorry, Fehler! Bitte neu eintippen ");
  }
}

function hexCheck() {
  //console.log("hexCheck()");
  var erg = 0;
  var result;
  if(hexInputValidator() === true) {
    var result = eval(readInput());
    erg = result.toString(16).toUpperCase();
    writeOutput(erg);
  } else {
    alert("Sorry, Fehler! Bitte neu eintippen ");
  }
}
