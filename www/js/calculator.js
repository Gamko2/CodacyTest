function Clear() {
  document.getElementById('input').value = '';
}

/*function readInput() {
  var equation = document.getElementById('input').value;
  return equation;
}

function writeOutput(x) {
  document.getElementById('input').value = eval(x);
}

function reduce() {

}*/

/* Needs to be fixed. Works but the event fires twice for some reason.
window.addEventListener("DOMContentLoaded", () => {
  let clipboard = new ClipboardJS('.btn');
  clipboard.on('success', function (e) {
    alert("Successfully copied to Clipboard");

  });

  clipboard.on('error', function (e) {
    alert("Copy to Clipboard failed");
  });
}, false);
*/

/*This function makes all elements visible. First you grab all childs from a certain moudel and then we check whether its a button or not and if it is we remove the
invis class*/



function allVisible() {
  let childs = document.getElementById("grid-mode").childNodes;
  for (let i = 0; i < childs.length; i++) {
      if (childs[i].nodeName == "BUTTON") {
          childs[i].classList.remove("invis");
      }
  }
}

/*Makes the elements that are contained in the elementids array invisible*/
function makeInvisible(elementids) {
  for (elementid of elementids) {
      document.getElementById(elementid).classList.add('invis');
  }
}
/*The function thats called when the deciamal mode button is pressed.
The array created here is a placeholder it should be included in the Mode Enum which is NYI
We make all elements visible and then the specified ones invisible. 
Afterwards we load the decimal-grid*/
function decimal() {
  allVisible();
  let array = new Array('A','B','C','D','E','F')
  makeInvisible(array);
  document.getElementById("grid-mode").className = "decimal-grid";
}

/*This is called when the HEX Button is pressed
We make every element visible and then load the hexadecimal-grid*/
function hexadecimal(){
allVisible();
document.getElementById("grid-mode").className = "hexadecimal-grid";
}
/*This is called when the Bin button is pressed
We make every element visible.
This array is again a placeholder should be in the Mode Enum.
We make all elements from the array invisible and load the binary-grid afterwards.
*/
function binary(){
  allVisible();
  let array = new Array('A','B','C','D','E','F','2','3','4','5','6','7','8','9')
  makeInvisible(array);
  document.getElementById("grid-mode").className = "binary-grid";

}

function inputValidator(evt) {
  var charCode = (evt.which) ? evt.which : event.keyCode;
  if ((charCode > 39 && charCode < 58) || (charCode == 8)) {
    //alert(charCode);
    return true;
  }
  //alert(charCode);
  return false;
}

function displayValidator(x) {
  var input = x;
  var i = 0;
  var bracketsOpen = 0;
  var bracketsClose = 0;

  for (i = 0; i < input.length; i++) {
    if (input.charAt(i) == '(') {
      bracketsOpen++;
    }

    if (input.charAt(i) == ')') {
      bracketsClose++;
    }
  }

  var missed = 0;
  if (bracketsOpen > bracketsClose) {
    missed = bracketsOpen - bracketsClose;
    alert("Invalid, du hast " + missed + " geschlossene Klammern vergessen!");
    return false;
  } else if (bracketsOpen < bracketsClose) {
    missed = bracketsClose - bracketsOpen;
    alert("Invalid, du hast " + missed + " geöffnete Klammern vergessen!");
    return false;
  } else {
    /*document.getElementById('input').value = eval(input);
    if(document.getElementById('input').value == "Infinity") {
      document.getElementById('input').value = "Division durch 0 ist nicht möglich";
      return false;
    }*/
    var invalidOperator = 0;
    for (i = 0; i < input.length - 1; i++) {
      if ((input.charAt(i) == '+' || input.charAt(i) == '/' || input.charAt(i) == '*' || input.charAt(i) == '-')
        && (input.charAt(i + 1) == '+' || input.charAt(i + 1) == '/' || input.charAt(i + 1) == '*' || input.charAt(i + 1) == '-')) {
        invalidOperator++;
        //break;
      }
    }

    //Multiplkator zwischen klammern------------------------------------------------
    String.prototype.insert = function (index, string) {
      if (index > 0) {
        return this.substring(0, index) + string + this.substring(index, this.length);
      } else {
        return string + this;
      }
    }

    var temp2 = '';
    for (i = 0; i < input.length - 1; i++) {
      if (input.charAt(i) == ')' && input.charAt(i + 1) == '(') {
        var temp = document.getElementById('input').value;
        temp2 = temp.insert(i + 1, '*');
      }
    }


    if (temp2 !== '') {
      document.getElementById('input').value = temp2;
    }

    //------------------------------------------------------------------------------------*/

    if (invalidOperator != 0) {
      alert("Du hast " + (invalidOperator + 1) + " Operatoren hintereinander!");
      return false;
    } else {
      var bracketsAfterBrackets = 0;
      for (i = 0; i < input.length - 1; i++) {
        if (input.charAt(i) == '(' && input.charAt(i + 1) == ')') {
          bracketsAfterBrackets++;
          break;
        }
      }

      if (bracketsAfterBrackets != 0) {
        alert("Die Klammern sind leer!");
        return false;
      } else {
        var invalidBegin = 0;
        if ((input.charAt(0) == '+') || (input.charAt(0) == '-') || (input.charAt(0) == '(') || (input.charAt(0) >= '0' && input.charAt(0) <= '9')) {
          invalidBegin++;
        }

        if (invalidBegin == 0) {
          alert("Zu Beginn dürfen nur Zahlen oder +, -, ( stehen!");
          return false;
        } else {
          var noNumberAfterOperator = 0;
          if (input.charAt(input.length - 1) == '+' || input.charAt(input.length - 1) == '-' || input.charAt(input.length - 1) == '*'
            || input.charAt(input.length - 1) == '/' || input.charAt(input.length - 1) == '(') {
            noNumberAfterOperator++;
          }

          if (noNumberAfterOperator != 0) {
            alert("Nach einem Operator muss eine Zahl oder eine geöffnete Klammer folgen!");
            return false;
          } else {
            var pushMultiplicationSignNumber = 0;
            var saveInput = document.getElementById('input').value;
            var newString = " ";
            for (i = 0; i < input.length; i++) {
              if ((input.charAt(i) >= '0' && input.charAt(i) <= '9') && input.charAt(i + 1) == '(') {
                pushMultiplicationSignNumber++;
                newString = saveInput.slice(0, i + 1) + "*" + saveInput.slice(i + 1, input.length);
              }
            }

            //console.log(newString);
            if (pushMultiplicationSignNumber != 0) {
              if (eval(newString == "Infinity")) {
                alert("Division durch 0 ist nicht möglich!");
                return false;
              }

              document.getElementById('input').value = eval(newString);
            } else {
              if (eval(document.getElementById('input').value) == "Infinity") {
                alert("Division durch 0 ist nicht möglich!");
                return false;
              } else {
                document.getElementById('input').value = eval(document.getElementById('input').value);
              }
            }
          }
        }
      }
    }
  }
}
  //}
