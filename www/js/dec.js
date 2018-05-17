/*Der dezimale DisplayValidator ist dafür zuständig, dass nur Zahlen, die Operatoren und Klammern
sowie das Backspace eingegeben werden können. Alles andere wird durch das evt.preventDefault() verhindert.
einzugeben*/
function decDisplayValidator(evt) {
  //console.log("decDisplay");
  var charCode = (evt.which) ? evt.which : event.keyCode;
  if ((charCode >= 40 && charCode <= 43) || (charCode >= 45 && charCode <= 57) || (charCode == 8))
  {
     //alert(charCode);
     return true;
  }

   evt.preventDefault();
   //return false;
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
      alert("Es dürfen per Paste nur Zahlen, die Operatoren +, -, *, / und die Klammern übergeben werden!");
      event.preventDefault(); //Unterbindet das Paste Event und somit auch das Hinzufügen eines unerlaubten Strings in das Eingabefeld
      return false;
    } else {
      return true;
    }
  });

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
    if(b == false) {alert("Die Klammern sind nicht richtig gesetzt!"); return false;}

    var e = emptyBrackets(string);
    if(e == true) {alert("Die Klammer sind leer!"); return false;}

    var o = operators(string);
    if(o == true) {alert("Operatoren hintereinander"); return false;}

    var a = afteroperator(string);
    if(a == false) {alert("Nach einem Operator muss eine Zahl oder eine sich öffnende Klammer stehen"); return false;}

    var aBNMD = afterBracketsNoMulDiv(string);
    if(aBNMD == true) {alert("Nach einer Klammer darf nur +, -, ( oder eine Zahl stehen!"); return false;}

    var kc = kommaCheck(string);
    if(kc == true) {alert("Es darf pro Zahl nur ein Komma vorkommen"); return false;}

    var beg = beginning(string);
    if(beg == true) {alert("Am Anfang dürfen nur +, -, ( oder eine Zahl stehen!"); return false;}

    return true;
  }
