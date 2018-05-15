function operators(string) {
  var pattern = /[+|-|*|\/][+|-|*|\/]/

  var c = pattern.test(string);
  return c;
}

function afternumber(string) {
  var returnValue = true;

  var endPattern = /[0|B|1]/;
  var binaryPattern = /[0][B][0|1]+/
  var afterBinaryPattern = /[)|+|-|*|\/]/

  for(i = 0; i < string.length; i++) {

  var c = string.charAt(i);

  if(c == "0") {
   for(ii = i; ii < string.length; ii++) {
    var d = string.charAt(ii);
    if(endPattern.test(d) === false) {
      var number = string.slice(i, ii-1);
      var afterNumber = string.charAt(ii);
      if(binaryPattern.test(number) && afterBinaryPattern.test(d)) { i = ii; break;}
      else {returnValue = false; break;}
      }
   }

   if(returnValue === false) {break;}

  }

  }

  return returnValue;
}

function afteroperator(string) {

 var pattern = /([+]|[\-]|[*]|[\/])([\)])/;

 var c = pattern.test(string);

 if(c == true) {
   return false;
 } else {
   return true;
 }
}

function beginning(string) {

  var patt = /^([+, (]|[0][B][1][0-1]*|[0][B][0][0-1]*|[-])/;
  var c = patt.test(string);


 return c;
}

function emptyBrackets(string) {

  var patt = /[(][)]/;
  var c = patt.test(string);

  return c;
}

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

function checkNumberBrackets(string) {
  var patt = /([0-1]+)([\(])/

  var c = patt.test(string);

  return c;
}

function checkCloseOpenBrackets(string) {
  var patt = /([\))([\(])/

  var c = patt.test(string);

  return c;
}

function modifizieren(string) {
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

function binInputValidator(string) {
 //string = korrigieren(string);

 var brackets = bracketsCheck(string);
 if(brackets == false) {alert("Fehler: Klammern sind nicht korrekt"); return false;}

 var empty = emptyBrackets(string);
 if(empty == true) {alert("Fehler: Leeres Klammernpaar"); return false;}

 var operator = operators(string);
 if(operator == true) {alert("Fehler: Zwei hintereinander folgende Operatoren"); return false;}

 var after = afteroperator(string);
 if(after == false) {alert("Fehler: Nach einem Operator muss eine Zahl oder eine sich öffnende Klammer stehen"); return false;}

 /*var number = afternumber(string);
 if(number == false) {alert("Fehler: Nach einer Zahl muss ein Operator stehen oder eine geöffnete Klammer"); return false;}
*/

 return true;
}
