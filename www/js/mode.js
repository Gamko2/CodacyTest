/*Die Enumeration dient später zum Vergleichscheck bei der Funktion setMode(m)
*/
var mode = {
  binary: "bin",
  hexadecimal: "hex",
  decimal: "dec"
}

/*Die Funktion setMode(m) übergibt den jeweiligen Mode an die Funktion setValidator, die
später den richtigen display Validator und die richtigen checkMethoden auswählt.*/
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

/*Die decCheck() Methode ist verantwortlich, für das Ausrechnen aller Decimalwerte.
Zu Beginn wird der Inhalt des Eingabefeldes an den dezimalen input Validator übergeben.
Wenn dieser true zurückgibt, wird erstmal kontrolliert, ob nach einer Zahl eine sich öffnende Klammer
folgt -> checkDecBrackets, oder ob eine sich schließende und danach öffnende folgt -> checkCloseOpenBrackets
Wenn eines dieser Fälle auftritt, wird ein Malzeichen eingefügt. Danach folgt das Ausrechnen durch die eval()
Funktion und wenn das Ergebnis Infinity ausgibt, soll nochmals eine Fehlermeldung angezeigt werden.
*/
function decCheck() {
  //console.log("decCheck()");
  var erg = 0;
  string = readInput()
  if(decInputValidator(string) === true) {
    var number1 = checkDecBrackets(string);
    var number2 = checkCloseOpenBrackets(string);
    if(number1 == true || number2 == true) {
      //console.log("Push");
      string = decModifizieren(string);
      //console.log(string);
    }

    erg = eval(string);

    if(erg == Infinity) {
      alert("Teilen durch 0 nicht möglich!");
    } else {
      writeOutput(erg);
    }
  }
}

//binCheck funktioniert ebenfalls wie decCheck
function binCheck() {
  //console.log("binCheck()");
  var string = korrigieren(readInput());
  //console.log(string);

  var erg = 0;
  var result;
  if(binInputValidator(string) === true) {
    var number1 = checkBinBrackets(string);
    var number2 = checkCloseOpenBrackets(string);
    if(number1 == true || number2 == true) {
      //console.log("Push");
      string = binModifizieren(string);
      //console.log(string);
    }

    result = eval(string);
    erg = result.toString(2);
    if(erg == Infinity) {
      alert("Teilen durch 0 nicht möglich!");
    } else {
      writeOutput(erg);
    }
  }
}

//hexCheck funktioniert ebenfalls wie decCheck
function hexCheck() {
  //console.log("hexCheck()");
  var erg = 0;
  var result;
  var string = hexaKorrigieren(readInput());
  if(hexInputValidator(string) === true) {
    var number1 = hexaCheckBrackets(string);
    var number2 = checkCloseOpenBrackets(string);
    if(number1 == true || number2 == true) {
      string = hexaModifizieren(string);
    }

    var result = eval(string);
    erg = result.toString(16).toUpperCase();

    if(erg == "INFINITY") {
      alert("Teilen durch 0 nicht möglich!");
    } else {
      writeOutput(erg);
    }
  }
}