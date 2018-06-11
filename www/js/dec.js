
/*Der dezimale DisplayValidator ist dafür zuständig, dass nur Zahlen, die Operatoren und Klammern
sowie das Backspace eingegeben werden können. Alles andere wird durch das evt.preventDefault() verhindert.
einzugeben*/
function decDisplayValidator(evt) {
  changeColorBlack();
  var charCode = (evt.which) ? evt.which : event.keyCode;

  if (charCode === 13) {
    evt.preventDefault();
    document.getElementById("equal").click();
  }

  if ((charCode >= 40 && charCode <= 43) || (charCode >= 45 && charCode <= 57) || (charCode == 8)) {
    return true;
  }

  evt.preventDefault();
}

function markRed(index) {

  let inputString = readInput();
  let cut1 = inputString.substring(0, index);
  let toBeColored = inputString.substring(index, index + 1);
  let cut2 = inputString.substring(index + 1, inputString.length);
  console.log(cut1);
  console.log(toBeColored);
  console.log(cut2);
  console.log(toBeColored.fontcolor("red"));
  let coloredResult = cut1 + toBeColored.fontcolor("red") + cut2;
  console.log(coloredResult);
  writeOutput(coloredResult);
}


//3 Nachkommastellen dürfen nur eingegeben werden
/*function checkAfterPoint(string) {
  var pattern = /([0-9]+)([.][0-9][0-9][0-9][0-9]+)/
  var c = pattern.test(string);
  return c;
}*/

//Überprüfung der Eingabe per Paste
function decPaste(event) {
  var inputText = event.clipboardData.getData('Text'); //Speichert das, was bei Copy Paste im Zwischenlager war in inputText
  var fail = 0;
  var i = 0;
  console.log(inputText);

  /*Der String wird überprüft, wenn ein Fehler auftaucht, d.h
  keine Zahl, +, -, /, *, ( und ) vorzufinden ist, wird fail = 1 gesetzt und die Schleife durch break unterbrochen*/
  for (i = 0; i < inputText.length; i++) {
    if (!((inputText.charAt(i) >= '0' && inputText.charAt(i) <= '9') || (inputText.charAt(i) == '+') || (inputText.charAt(i) == '-') ||
      (inputText.charAt(i) == '/') || (inputText.charAt(i) == '*') || (inputText.charAt(i) == ')') || (inputText.charAt(i) == '('))) {
      //console.log(inputText.charAt(i));
      fail = 1;
      break;
    }
  }

  //console.log(correct);
  if (fail == 1) { //Wenn fail == 1, ein Fehler wurde im Paste String gefunden, wenn nicht ist fail = 0 und geht in den else Block
    displayToastMessage("Es dürfen per Paste nur Zahlen, die Operatoren +, -, *, / und die Klammern übergeben werden!");
    event.preventDefault(); //Unterbindet das Paste Event und somit auch das Hinzufügen eines unerlaubten Strings in das Eingabefeld
    return false;
  } else {
    return true;
  }
};


//Überprüft, ob Kommas richtig benutz wurden
function kommaCheck(x) {

  var pattern = /([0-9]+[.]+[0-9]+[.]+)/;
  var pattern2 = /([.]+[.])|([.]+([(]|[)]))|(\.$)/;

  var a = x.search(pattern);
  var b = x.search(pattern2);

  if (a == -1 && b == -1) {
    return -1;
  } else if (a != -1) {
    return a;
  } else {
    return b;
  }
}

//Überprüft, ob nach einer Zahl eine Klammer folgt, für das Einfügen eines Multiplikationszeichen notwendig
function checkDecBrackets(x) {
  var pattern = /([0-9]+[\(]|[\)][0-9]+)/;

  var c = pattern.test(x);

  return c;
}

/*Die Funktion ist dafür zuständig, dass zwischen einer Zahl und einer geöffneten Klammer und zwischen
einer geschlossenen und öffnenden Klammer ein Multiplikationszeichen hinzugefügt wird*/
function decModifizieren(string) {
  var binaryPattern = /[0-9]/;

  var neo = string.charAt(0);
  var zusatz = "*";

  for (i = 1; i < string.length; i++) {
    var b = string.charAt(i);
    var a = string.charAt(i - 1);
    if ((binaryPattern.test(a) && b == "(") || (a == ")" && b == "(")) {
      neo = neo + zusatz + b;
    }
    else if (binaryPattern.test(b) && a == ")") {
      neo = neo + zusatz + b;
    }
    else { neo = neo + b }
  }
  return neo;
}

function adjustKommaRedMark(index, string) {
  for (i = index; i < readInput().length; i++) {
    if (string.charAt(i) == ".") {
      markRed(i);
      break;
    }
  }
};

/*Hier werden die Kontrollfunktionen aufgerufen und wenn ein Fehler auftaucht, false zurückgegeben
und eine Fehlermeldung ausgegeben*/

function decInputValidator(string) {
  let toasts = [];


  if (readInput().includes("font")) {
    return false;
  }



  var j = emptyBrackets(string);
  if (j == true) {toasts.push("Keine leeren Klammer eingeben\n"); string = removeEmpty(string); writeOutput(string); waitBetweenToast(toasts);}

  var e = emptyString(string);
  if(e == true) {toasts.push("Bitte keinen leeren Ausdruck eingeben");waitBetweenToast(toasts);  return false;}



  var b = bracketsCheck(readInput());
  if (b !== -1) {
    toasts.push("Die Klammern sind nicht richtig gesetzt!");
    markRed(b);
    waitBetweenToast(toasts);
    return false;
  }


  if (operators(string) !== -1) {
    toasts.push("Operatoren hintereinander");
    markRed(operators(string));
    waitBetweenToast(toasts);
    return false;
  }
  var order = checkBracketsOrder(string);
  if (order !== -1) {
    toasts.push("Die Klammernfolge ist nicht richtig!");
    waitBetweenToast(toasts);
    return false;
  }

  var a = afteroperator(string);
  if (a == false) {
    toasts.push("Nach einem Operator muss eine Zahl oder eine sich öffnende Klammer stehen");
    markAfterOperator(string);
    waitBetweenToast(toasts);
    return false;
  }

  var aBNMD = afterBracketsNoMulDiv(string);
  if (aBNMD !== 0) {
    toasts.push("Nach einer Klammer darf nur +, -, ( oder eine Zahl stehen!");
    markRed(afterBracketsNoMulDiv(string));
    waitBetweenToast(toasts);
    return false;
  }

  var kc = kommaCheck(string);
  if (kc !== -1) {
    toasts.push("Falsches Komma");
    adjustKommaRedMark(kommaCheck(string), string);
    waitBetweenToast(toasts);
    return false;
  }

  var beg = beginning(string);
  if (beg !== -1) {
    toasts.push("Am Anfang dürfen nur +, -, ( oder eine Zahl stehen!");
    markRed(beginning(string));
    waitBetweenToast(toasts);
    return false;
  }



  return true;
}

module.exports = {
  kommaCheck: kommaCheck,
  checkDecBrackets: checkDecBrackets,
  decModifizieren: decModifizieren
}
