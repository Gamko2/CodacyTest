/*Der hexadezimale DisplayValidator sorgt dafür, dass im Inputfeld nur die Hexadezimalzahlen, Operatoren und die Klammern vom
User eingetippt werden können. Alles andere wird durch evt.preventDefault() verhindert*/
function hexDisplayValidator(evt) {
  changeColorBlack();
  var charCode = (evt.which) ? evt.which : event.keyCode;
  if(charCode === 13){
     evt.preventDefault();
     document.getElementById("equal").click();
  }

  charCode = String.fromCharCode(charCode);

  var patt = /[0-F|+|\-|*|/|(|)|a-f|\.]/;
  var forbidden = /[@|\||:|;|>|<|?|=]/;

  var c = patt.test(charCode);
  var f = forbidden.test(charCode);
  if(c === false || f === true) {
    evt.preventDefault();
  }
}

function hexPaste(event) {
    var inputText = event.clipboardData.getData('Text'); //Speichert das, was bei Copy Paste im Zwischenlager war in inputText
    var fail = 0;
    var i = 0;

    /*Der String wird überprüft, wenn ein Fehler auftaucht, d.h
    keine Zahl, +, -, /, *, ( und ) vorzufinden ist, wird fail = 1 gesetzt und die Schleife durch break unterbrochen*/
    for(i = 0; i < inputText.length; i++) {
      if(!((inputText.charAt(i) >= '0' && inputText.charAt(i) <= '9') || (inputText.charAt(i) >= 'A' && inputText.charAt(i) <= 'F') || (inputText.charAt(i) >= 'a' && inputText.charAt(i) <= 'f') || (inputText.charAt(i) == '+') || (inputText.charAt(i) == '-') ||
      (inputText.charAt(i) == '/') || (inputText.charAt(i) == '*') || (inputText.charAt(i) == ')') || (inputText.charAt(i) == '('))) {
        //console.log(inputText.charAt(i));
        fail = 1;
        break;
    }
}

    //console.log(correct);
    if(fail == 1) { //Wenn fail == 1, ein Fehler wurde im Paste String gefunden, wenn nicht ist fail = 0 und geht in den else Block
      displayToastMessage("Es dürfen per Paste nur Hexzahlen, die Operatoren +, -, *, / und die Klammern übergeben werden!");
      event.preventDefault(); //Unterbindet das Paste Event und somit auch das Hinzufügen eines unerlaubten Strings in das Eingabefeld
      return false;
    } else {
      return true;
    }
}

/*Die Funktion ist dafür verantwortlich, dass sie an die Hexadezimalzahl ein 0X dranhängt, damit die eval()
Funktion diese berechnen kann.Solange hex.test(c) true zurückgibt und number false ist, handelt es sich
um eine Hexadezimalzahl von 0-F und ein 0X wird drangehängt = 0X[0-F]. Ist das eingetreten wird, wenn
wieder eine Hexaddezimalzahl von 0-F eingetippt wird an 0X[0-F] nochmals [0-F] drangehängt = 0X[0-F][0-F]...
Wenn hex.test(c) false returned und number true returned, bedeutet dass nach 0X[0-F]... ein Operator oder Klammern folgt und an
0X[0-F]... drangehängt wird = 0X[0-F][+/-/* und geteilt oder ()].
*/
function hexaKorrigieren(string) {
   var extra = "0X";
   var hex = /[0-F|X|a-f]/;
   var neo = "";

   var number = false;

   for(i = 0; i < string.length; i++) {
     var c = string.charAt(i);
     if(hex.test(c) && number == false) {
        neo = neo + extra + c;
        number = true;
     }
     else if(!hex.test(c) && number == true) {
     neo = neo + c;
     number = false;
   }

   else if(hex.test(c) && number == true) {
   neo = neo + c;
   }

   else if(!hex.test(c) && number == false) {
   neo = neo + c;
   }

   }
  return neo;
}

//Überprüft, ob nach Hexadezimal eine geöffnete Klammer folgt, wird für das einfügen eines Multilikationszeichen wichtig
function hexaCheckBrackets(string) {
  var patt = /([0-F|a-f]+[\(]|[\)][0-F|a-f]+)/

  var c = patt.test(string);

  return c;
}

/*Der Modifizierer ist dafür zuständig ein Malzeichen zwischen einer Hexadezimalzahl und einer geöffneten Klammer
oder sich schließenden und öffnenden Klammer hinzuzufügen.
*/
function hexaModifizieren(string) {
   var binaryPattern = /[0-F|a-f]/;

   var neo = string.charAt(0);
   var zusatz = "*";

   for(i = 1; i < string.length; i++) {
   var b = string.charAt(i);
   var a = string.charAt(i-1);
   if((binaryPattern.test(a) && b == "(") || (a == ")" && b == "(") ) {
    neo = neo + zusatz + b;
   }

   else if(binaryPattern.test(b) && a == ")") {
     neo = neo + zusatz + b;
   }

   else {neo = neo + b}
   }
   return neo;
}

/*Hier werden die Kontrollfunktionen aufgerufen und wenn ein Fehler auftaucht, false zurückgegeben
und eine Fehlermeldung ausgegeben*/

function hexInputValidator(string) {
 //string = korrigieren(string);

 var message1 = "";
 var message2 = "";

 var j = emptyBrackets(string);
 if(j == true) {changeColor(); string = removeEmpty(string); changeColorBlack(); writeOutput(removePrefix(string)); message1 = "Bitte keine leeren Klammer eingeben";}

 var e = emptyString(string);
 if(e == true) {message2 = "Bitte keinen leeren Ausdruck eingeben"; waitForToast(message1, message2); changeColor(); return false;}

 var brackets = bracketsCheck(string);
 if(brackets == false) {message2 = "Die Klammern sind nicht richtig gesetzt!"; waitForToast(message1, message2); changeColor(); return false;}

 var order = checkBracketsOrder(string);
 if(order == true) {message2 = "Die Klammernfolge ist nicht richtig!"; waitForToast(message1, message2); changeColor(); return false;}

 var operator = operators(string);
 if(operator == true) {message2 = "Die Operatoren sind hintereinander"; waitForToast(message1, message2); changeColor(); return false;}

 var after = afteroperator(string);
 if(after == false) {message2 = "Nach einem Operator muss eine Hexadezimalzahl oder eine sich öffnende Klammer stehen"; waitForToast(message1, message2); changeColor(); return false;}

 var beg = beginning(string);
 if(beg == true) {message2 = "Am Anfang dürfen nur +, -, ( oder eine Hexadezimalzahl stehen!"; waitForToast(message1, message2); changeColor(); return false;}

 var aBNMD = afterBracketsNoMulDiv(string);
 if(aBNMD == true) {message2 = "Nach einer Klammer darf nur +, -, ( oder eine Hexadezimalzahl stehen!"; waitForToast(message1, message2); changeColor(); return false;}


 waitForToast(message1, message2);
 return true;
}

module.exports = {
  hexaKorrigieren: hexaKorrigieren,
  hexaCheckBrackets: hexaCheckBrackets,
  hexaModifizieren: hexaModifizieren
}
