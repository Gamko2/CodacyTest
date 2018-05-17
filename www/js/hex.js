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

//Überprüft, ob mehrere Operatoren hintereinander auftauchen
function operators(string) {
  var pattern = /[+|\-|*|\/][+|\-|*|\/]+/;

  var c = pattern.test(string);
  return c;
}

//Überprüft ob zu Begin ein *, / oder ) steht -> Damit nur (, +, - oder eine Zahl eingegeben werden können
function beginning(x) {
  var pattern = /^([*]|[\)]|[\/])/;

  var c = pattern.test(x);

  //console.log(c);
  return c;
}

/*function beginning(string) {
  if((string.charAt(0) == ')') || string.charAt(0) == '*' || string.charAt(0) == '/') {
    return false;
  }
}*/

//Überprüft wenn nach einem Operator eine ) oder ein . steht -> Damit nach dem Operator eine Klammer auf oder eine Zahl stehen kann
function afteroperator(string) {

 var pattern = /([+|\-|*|\/])(([\)]|[.])|$)/;

 var c = pattern.test(string);

 if(c == true) {
   return false;
 } else {
   return true;
 }
}

//Überprüft, ob die Klammern leer sind
function emptyBrackets(string) {

  var patt = /[(][)]/;
  var c = patt.test(string);

  return c;
}

//Überprüft, ob die Klammeranzahl stimmt
function bracketsCheck(string) {

  var brackets = 0;
  var openBracketsPattern = /[(]/;
  var closedBracketsPattern = /[)]/;

  for(i = 0; i < string.length; i++) {
      var c = string.charAt(i);

      if(openBracketsPattern.test(c)) {brackets++;}
      else if(closedBracketsPattern.test(c)) {brackets--;}
   }

   if(brackets == 0) {return true}
   else {return false}
}

//Überprüft, ob nach den Klammern ein Multiplikationszeichen oder ein geteilt Zeichen steht -> Damit nach einer Klammer nur +, -, eine Zahl oder die Klammern stehen können
function afterBracketsNoMulDiv(x) {
  var pattern = /([\(])([*]|[\/])/;

  var c = pattern.test(x);

  return c;
}

//Überprüft, ob eine ) und danach eine Klammer ( steht, um später das Multiplikationszeichen einfügen zu können.
function checkCloseOpenBrackets(string) {
  var patt = /([\))([\(])/

  var c = patt.test(string);

  return c;
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
  var patt = /([0-F]+)([\(])/

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

   else {neo = neo + b}
   }
   return neo;
}

/*Hier werden die Kontrollfunktionen aufgerufen und wenn ein Fehler auftaucht, false zurückgegeben
und eine Fehlermeldung ausgegeben*/

function hexInputValidator(string) {
 //string = korrigieren(string);

 var brackets = bracketsCheck(string);
 if(brackets == false) {alert("Klammern sind nicht korrekt"); return false;}

 var empty = emptyBrackets(string);
 if(empty == true) {alert("Leeres Klammernpaar"); return false;}

 var operator = operators(string);
 if(operator == true) {alert("Mehrere hintereinander folgende Operatoren"); return false;}

 var after = afteroperator(string);
 if(after == false) {alert("Nach einem Operator muss eine Hexadezimalzahl oder eine sich öffnende Klammer stehen"); return false;}

 var beg = beginning(string);
 if(beg == true) {alert("Am Anfang dürfen nur +, -, ( oder eine Hexadezimalzahl stehen!"); return false;}

 var aBNMD = afterBracketsNoMulDiv(string);
 if(aBNMD == true) {alert("Nach einer Klammer darf nur +, -, ( oder eine Hexadezimalzahl stehen!"); return false;}

 return true;
}
