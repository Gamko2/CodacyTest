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

  var returnValue = true;
  var endPattern = /([+]|[-]|[*]|[/]|[(])/;
  var operatorPattern = /([+]|[-]|[*]|[/])/;
  var binaryPattern = /([0][B][0-1]+)$/;

  for(i = 0; i < string.length; i++) {
  var c = string.charAt(i);
  var isOperator = operatorPattern.test(c);
  if(isOperator === true) {
  for(ii = i + 1; ii < string.length; ii++) {
     c = string.charAt(ii);
     if(string.charAt(i + 1) == '(') {break;}
     else if(endPattern.test(c) || ii == string.length - 1) {var res = string.slice(i+1, ii-1);returnValue = binaryPattern.test(res); break;}
   }
   if(returnValue === false){break;}
  }
 }
 return returnValue;
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

  var patt = /[0, 1, B, ., +, -, *, /]/;
  var c = patt.test(charCode);

  return c;
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

 var number = afternumber(string);
 if(number == false) {alert("Fehler: Nach einer Zahl muss ein Operator stehen oder eine geöffnete Klammer"); return false;}

 return true;
}
