/*Der dezimale DisplayValidator ist dafür zuständig, dass nur Zahlen, die Operatoren und Klammern
sowie das Backspace eingegeben werden können. Alles andere wird durch das evt.preventDefault() verhindert.
einzugeben*/
function decDisplayValidator(evt) {
  //console.log("decDisplay");
  var charCode = (evt.which) ? evt.which : event.keyCode;
  if ((charCode >= 40 && charCode <= 43) || (charCode >= 45 && charCode <= 57) || (charCode == 8))
  {
     //displayToastMessage(charCode);
     /*c = checkAfterPoint(readInput() + String.fromCharCode(charCode));
     if(c == true) {
       displayToastMessage("Es dürfen nur 3 Zahlen nach dem Komma folgen");
       evt.preventDefault();
     }*/
     return true;
  }

   evt.preventDefault();
   //return false;
}

//3 Nachkommastellen dürfen nur eingegeben werden
function checkAfterPoint(string) {
  var pattern = /([0-9]+)([.][0-9][0-9][0-9][0-9]+)/
  var c = pattern.test(string);
  return c;
}

//Überprüfung der Eingabe per Paste
document.addEventListener('paste', function(event) {
    var inputText = event.clipboardData.getData('Text'); //Speichert das, was bei Copy Paste im Zwischenlager war in inputText
    var fail = 0;
    var i = 0;

    /*Der String wird überprüft, wenn ein Fehler auftaucht, d.h
    keine Zahl, +, -, /, *, ( und ) vorzufinden ist, wird fail = 1 gesetzt und die Schleife durch break unterbrochen*/
    for(i = 0; i < inputText.length; i++) {
      if(!((inputText.charAt(i) >= '0' && inputText.charAt(i) <= '9') || (inputText.charAt(i) == '+') || (inputText.charAt(i) == '-') ||
      (inputText.charAt(i) == '/') || (inputText.charAt(i) == '*') || (inputText.charAt(i) == ')') || (inputText.charAt(i) == '('))) {
        //console.log(inputText.charAt(i));
        fail = 1;
        break;
      }
    }

    //console.log(correct);
    if(fail == 1) { //Wenn fail == 1, ein Fehler wurde im Paste String gefunden, wenn nicht ist fail = 0 und geht in den else Block
      displayToastMessage("Es dürfen per Paste nur Zahlen, die Operatoren +, -, *, / und die Klammern übergeben werden!");
      event.preventDefault(); //Unterbindet das Paste Event und somit auch das Hinzufügen eines unerlaubten Strings in das Eingabefeld
      return false;
    } else {
      return true;
    }
  });

//Überprüft, ob bei einer Zahl, mehrere Kommas eingeben werden
function kommaCheck(x) {
  var pattern = /([0-9]+[.]+[0-9]+[.]+)/;
  var c = pattern.test(x);

  return c;
}

//Überprüft, ob nach einer Zahl eine Klammer folgt, für das Einfügen eines Multiplikationszeichen notwendig
function checkDecBrackets(x) {
  var pattern = /([0-9]+)([\(])/;

  var c = pattern.test(x);

  return c;
}

/*Die Funktion ist dafür zuständig, dass zwischen einer Zahl und einer geöffneten Klammer und zwischen
einer geschlossenen und öffnenden Klammer ein Multiplikationszeichen hinzugefügt wird*/
function decModifizieren(string) {
   var binaryPattern = /[0-9]/;

   var neo = string.charAt(0);
   var zusatz = "*";

   for(i = 1; i < string.length; i++) {
   var b = string.charAt(i);
   var a = string.charAt(i-1);
   if((binaryPattern.test(a) && b == "(") || (a == ")" && b == "(") ) {
    neo = neo + zusatz + b;
   }
   else {neo = neo + b}
   }
   return neo;
}

/*Hier werden die Kontrollfunktionen aufgerufen und wenn ein Fehler auftaucht, false zurückgegeben
und eine Fehlermeldung ausgegeben*/

  function decInputValidator(string) {

    var b = bracketsCheck(string);
    if(b == false) {displayToastMessage("Die Klammern sind nicht richtig gesetzt!"); return false;}

    var o = operators(string);
    if(o == true) {displayToastMessage("Operatoren hintereinander"); return false;}

    var a = afteroperator(string);
    if(a == false) {displayToastMessage("Nach einem Operator muss eine Zahl oder eine sich öffnende Klammer stehen"); return false;}

    var aBNMD = afterBracketsNoMulDiv(string);
    if(aBNMD == true) {displayToastMessage("Nach einer Klammer darf nur +, -, ( oder eine Zahl stehen!"); return false;}

    var kc = kommaCheck(string);
    if(kc == true) {displayToastMessage("Es darf pro Zahl nur ein Komma vorkommen"); return false;}

    var beg = beginning(string);
    if(beg == true) {displayToastMessage("Am Anfang dürfen nur +, -, ( oder eine Zahl stehen!"); return false;}

    return true;
  }
