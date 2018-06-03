/*Der hexadezimale DisplayValidator sorgt dafür, dass im Inputfeld nur die Hexadezimalzahlen, Operatoren und die Klammern vom
User eingetippt werden können. Alles andere wird durch evt.preventDefault() verhindert*/
function hexDisplayValidator(evt) {
  var charCode = (evt.which) ? evt.which : event.keyCode;
  charCode = String.fromCharCode(charCode);

  var patt = /[0-F|+|\-|*|/|(|)]/;
  var c = patt.test(charCode);

  if(c === false) {
    evt.preventDefault();
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
   var hex = /[0-F|X]/;
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
  var patt = /([0-F]+[\(]|[\)][0-F]+)/

  var c = patt.test(string);

  return c;
}

/*Der Modifizierer ist dafür zuständig ein Malzeichen zwischen einer Hexadezimalzahl und einer geöffneten Klammer
oder sich schließenden und öffnenden Klammer hinzuzufügen.
*/
function hexaModifizieren(string) {
   var binaryPattern = /[0-F]/;

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
 if(j == true) {string = removeEmpty(string); writeOutput(string); message1 = "Keine leeren Klammer eingeben\n";}

 var brackets = bracketsCheck(string);
 if(brackets == false) {message2 = "Die Klammern sind nicht richtig gesetzt!"; waitForToast(message1, message2); return false;}

 var operator = operators(string);
 if(operator == true) {message2 = "Die Operatoren sind hintereinander"; waitForToast(message1, message2); return false;}

 var after = afteroperator(string);
 if(after == false) {message2 = "Nach einem Operator muss eine Hexadezimalzahl oder eine sich öffnende Klammer stehen"; waitForToast(message1, message2); return false;}

 var beg = beginning(string);
 if(beg == true) {message2 = "Am Anfang dürfen nur +, -, ( oder eine Hexadezimalzahl stehen!"; waitForToast(message1, message2); return false;}

 var aBNMD = afterBracketsNoMulDiv(string);
 if(aBNMD == true) {message2 = "Nach einer Klammer darf nur +, -, ( oder eine Hexadezimalzahl stehen!"; waitForToast(message1, message2); return false;}

 waitForToast(message1, message2);
 return true;
}

module.exports = {
  hexaKorrigieren: hexaKorrigieren,
  hexaCheckBrackets: hexaCheckBrackets,
  hexaModifizieren: hexaModifizieren
}
