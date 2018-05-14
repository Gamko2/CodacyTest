var mode = {
  binary: "bin",
  hexadecimal: "hex",
  decimal: "dec"
}

function setMode(m) {
  console.log("Start to setMode!");
  if(m == mode.binary) {
    setValidator(m);
    //evaluate(m);
    console.log("Binary Validator + Evaluator");
  } else if (m == mode.hexadecimal) {
    setValidator(m);
    //evaluate(m);
    console.log("Hexadecimal Validator + Evaluator");
  } else if(m == mode.decimal) {
    //console.log(mode.decimal);
    setValidator(m);
    //evaluate(m);
    console.log("Decimal Validator + Evaluator");
  }
}

function decCheck() {
  console.log("decCheck()");
  var erg = 0;
  if(inputValidator() === true) {
    erg = eval(readInput());
    writeOutput(erg);
  } else {
    console.log("Fehler!");
  }
}

function binCheck() {
  console.log("binCheck()");
  var string = korrigieren(readInput());
  console.log(string);
  var erg = 0;
  var result;
  if(binInputValidator(string) === true) {
    var result = eval(string);
    erg = result.toString(2).toUpperCase();
    writeOutput(erg);
  } else {
    alert("Sorry, Fehler! Bitte neu eintippen ");
  }
}

function hexCheck() {
  console.log("hexCheck()");
  var erg = 0;
  var result;
  if(hexInputValidator() === true) {
    var result = eval(document.getElementById('input').value);
    document.getElementById('input').value = result.toString(16).toUpperCase();
    //writeOutput(result);
  } else {
    alert("Sorry, Fehler! Bitte neu eintippen ");
  }
}
