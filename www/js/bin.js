/*Der binäre DisplayValidator sorgt dafür, dass im Inputfeld nur die Binärzahlen, Operatoren und die Klammern vom
User eingetippt werden können. Alles andere wird durch evt.preventDefault() verhindert.*/
function binDisplayValidator(evt) {
  var charCode = (evt.which) ? evt.which : event.keyCode;
  charCode = String.fromCharCode(charCode);

  var patt = /[0|1|B|+|\-|*|/|(|)]/;
  var c = patt.test(charCode);

  /*if(charCode == '#' || charCode == ',' || charCode == '\'' || charCode == '.') {
    c = false;
  }*/

  if(c === false) {
    evt.preventDefault();
  }
}

/*Die Funktion ist dafür verantwortlich, dass sie an die Hexadezimalzahl ein 0X dranhängt, damit die eval()
Funktion diese berechnen kann.Solange binary.test(c) true zurückgibt und number false ist, handelt es sich
um eine Hexadezimalzahl von 0 oder 1 und ein 0B wird drangehängt = 0B[0-1]. Ist das eingetreten wird, wenn
wieder eine Binärzahl von 0-1 eingetippt wird an 0B[0-1] nochmals [0-1] drangehängt = 0B[0-1][0-1]...
Wenn binary.test(c) false returned und number true returned, bedeutet dass nach 0B[0-1]... ein Operator oder Klammern folgt und an
0B[0-1]... drangehängt wird = 0B[0-1][+/-/* und geteilt oder ()].
*/
function korrigieren(string) {
   var extra = "0B";
   var binary = /[0|1|B]/;
   var neo = "";

   var number = false;

   for(i = 0; i < string.length; i++) {
     var c = string.charAt(i);
     if(binary.test(c) && number == false) {
        neo = neo + extra + c;
        number = true;
     }
     else if(!binary.test(c) && number == true) {
     neo = neo + c;
     number = false;
   }

   else if(binary.test(c) && number == true) {
   neo = neo + c;
   }

   else if(!binary.test(c) && number == false) {
   neo = neo + c;
   }

   }
  return neo;
}

/*Überprüft, ob nach einer Zahl eine geöffnete Klammer folgt, ist später dafür zuständig, dass zwischen einer Zahl und einer Klammer
ein Multiplikationszeichen folgt*/
function checkBinBrackets(string) {
  var patt = /([0-1]+[\(]|[\)][0-1]+)/

  return string.search(patt);
}

/*Der Modifizierer ist dafür zuständig ein Malzeichen zwischen einer Binärzahl und einer geöffneten Klammer oder sich schließenden und
öffnenden Klammer hinzuzufügen.
*/
function binModifizieren(string) {
   var binaryPattern = /[0|1]/;

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

//Hier werden die Kontrollfunktionen aufgerufen und wenn ein Fehler auftaucht, false zurückgegeben und eine Fehlermeldung ausgegeben
function binInputValidator(string) {
 //string = korrigieren(string);
 var brackets = bracketsCheck(readInput());
 if(brackets !== -1) {displayToastMessage("Klammern sind nicht korrekt");
 markRed(bracketsCheck(readInput()));
 return false;}

 var operator = operators(readInput());
 if(operator !== -1) {displayToastMessage("Mehrere hintereinander folgende Operatoren");
 markRed(operators(readInput()));
 return false;}

 var a = afteroperator(readInput());
 if (a == false) { displayToastMessage("Nach einem Operator muss eine Zahl oder eine sich öffnende Klammer stehen");
 markAfterOperator(readInput());
 return false; }

 var beg = beginning(string);
 if(beg !== -1) {displayToastMessage("Am Anfang dürfen nur +, -, ( oder eine Binärzahl stehen!");
 markRed(beginning(string));
 return false;}

 var aBNMD = afterBracketsNoMulDiv(string);
 if(aBNMD !== 0) {displayToastMessage("Nach einer Klammer darf nur +, -, ( oder eine Binärzahl stehen!");
 markRed(afterBracketsNoMulDiv(string));
 return false;}

 return true;
}

module.exports =  {
korrigieren: korrigieren,
checkBinBrackets: checkBinBrackets,
binModifizieren: binModifizieren
}
