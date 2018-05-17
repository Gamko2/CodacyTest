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
  var patt = /([0-1]+)([\(])/

  var c = patt.test(string);

  return c;
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

   else {neo = neo + b}
   }
   return neo;
}

//Hier werden die Kontrollfunktionen aufgerufen und wenn ein Fehler auftaucht, false zurückgegeben und eine Fehlermeldung ausgegeben
function binInputValidator(string) {
 //string = korrigieren(string);
 var brackets = bracketsCheck(string);
 if(brackets == false) {alert("Klammern sind nicht korrekt"); return false;}

 var empty = emptyBrackets(string);
 if(empty == true) {alert("Leeres Klammernpaar"); return false;}

 var operator = operators(string);
 if(operator == true) {alert("Mehrere hintereinander folgende Operatoren"); return false;}

 var after = afteroperator(string);
 if(after == false) {alert("Nach einem Operator muss eine Binärzahl oder eine sich öffnende Klammer stehen"); return false;}

 var beg = beginning(string);
 if(beg == true) {alert("Am Anfang dürfen nur +, -, ( oder eine Binärzahl stehen!"); return false;}

 var aBNMD = afterBracketsNoMulDiv(string);
 if(aBNMD == true) {alert("Nach einer Klammer darf nur +, -, ( oder eine Binärzahl stehen!"); return false;}

 return true;
}
