
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
  var ausdruck = readInput(); //OX anhängen
  var ergebnis = 0;

  if(decInputValidator(ausdruck) === true) {
    //var number1 = checkBinBrackets(string);
    ausdruck = decModifizieren(readInput());
    ergebnis = eval(ausdruck);
    ergebnis = (Math.round(ergebnis * 1000) / 1000);

    if(ergebnis == Infinity) { displayToastMessage("Teilen durch 0 nicht möglich!"); }
    else { writeOutput(ergebnis); }
    }
}

//binCheck funktioniert ebenfalls wie decCheck
function binCheck() {

  var ausdruck = korrigieren(readInput()); //OB anhängen
  var ergebnis = 0;

  if(binInputValidator(ausdruck) === true) {
    //var number1 = checkBinBrackets(string);
    ausdruck = binModifizieren(korrigieren(readInput()));
    ergebnis = eval(ausdruck);
    ergebnis = ergebnis.toString(2);

    if(ergebnis == Infinity) { displayToastMessage("Teilen durch 0 nicht möglich!"); }
    else { writeOutput(ergebnis); }
    }
}

//hexCheck funktioniert ebenfalls wie decCheck
function hexCheck() {
  var ausdruck = hexaKorrigieren(readInput()); //OX anhängen
  var ergebnis = 0;

  if(hexInputValidator(ausdruck) === true) {
    //var number1 = checkBinBrackets(string);
    ausdruck = hexaModifizieren(hexaKorrigieren(readInput()));
    ergebnis = eval(ausdruck);
    ergebnis = ergebnis.toString(16).toUpperCase();
    if(ergebnis == "INFINITY") { displayToastMessage("Teilen durch 0 nicht möglich!"); }
    else { writeOutput(ergebnis); }
    }
}
