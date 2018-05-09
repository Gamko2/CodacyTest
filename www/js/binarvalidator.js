function afteroperator(string) {
  var patt = /([+, -, *, /])(?!([0][B][0-1]+))/;
  var c = patt.test("+");

  /*Geöffnete Klammer noch hinzufügen*/

return c;
}

function beginning(string) {

  var patt = /^([+, (]|[0][B][1][0-1]*|[0][B][0][0-1]*|[-]))/;
  var c = patt.test(string);


 return c;
}

function operator(string) {

  var patt = /([0-9]+[.]+[0-9]+[.]+)/;
  var c = patt.test(string);

  return true;
}

function bracketsCheck(string) {

var input = string;
var openBrackets = 0;
var closedBrackets = 0;

for(i = 0; i < input.length; i++) {
    if(input.charAt(i) == '(') {
      openBrackets++;
    }

    else if(input.charAt(i) == ')') {
      closedBrackets++;
    }
  }

  if(openBrackets == closedBrackets) {
  return true;
  }

  else
  return false;

}

function BinDisplayValidator(evt) {
  var charCode = (evt.which) ? evt.which : event.keyCode;
  charCode = String.fromCharCode(charCode);

  var patt = /[0, 1, B, ., +, -, *, /]/;
  var c = patt.test(charCode);

  return c;
}
