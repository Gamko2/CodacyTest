function hexDisplayValidator(evt) {
  //console.log("DisplayHex");
  var charCode = (evt.which) ? evt.which : event.keyCode;
  if ((charCode >= 40 && charCode <= 43) || charCode == 45 || (charCode >= 47 && charCode <= 57) || (charCode >= 65 && charCode <= 70) || (charCode >= 97 && charCode <= 102) || charCode == 8)
  {
     return true;
  }

  evt.preventDefault();
}

function hexInputValidator() {
  //console.log("Start Hex");
  var input = readInput();
  var i = 0;
  var bracketsOpen = 0;
  var bracketsClose = 0;

  for(i = 0; i < input.length; i++) {
    if(input.charAt(i) == '(') {
      bracketsOpen++;
    }

    if(input.charAt(i) == ')') {
      bracketsClose++;
    }
  }

  var missed = 0;
  if(bracketsOpen > bracketsClose) {
    missed = bracketsOpen - bracketsClose;
    alert("Invalid, du hast " + missed + " geschlossene Klammern vergessen!");
    return false;
  } else if (bracketsOpen < bracketsClose) {
    missed = bracketsClose - bracketsOpen;
    alert("Invalid, du hast " + missed + " geöffnete Klammern vergessen!");
    return false;
  } else {
    var invalidOperator = 0;
    for(i = 0; i < input.length-1; i++) {
      if((input.charAt(i) == '+' || input.charAt(i) == '/' || input.charAt(i) == '*' || input.charAt(i) == '-')
        && (input.charAt(i+1) == '+' || input.charAt(i+1) == '/' || input.charAt(i+1) == '*' || input.charAt(i+1) == '-')) {
        invalidOperator++;
        //break;
      }
    }

    //-----------------------------------------Insert Funktion----------------------------------------------------------------------
   String.prototype.insert = function (index, string) {
      if (index > 0){
       return this.substring(0, index) + string + this.substring(index, this.length);
      }else {
          return string + this;
         }
    }
    //---------------------Multiplkator zwischen klammern und zwischen geschlossener Klammer und Zahl---------------------------------
        var temp = document.getElementById('input').value;
        var temp2 = '';
        for(i = 0; i <input.length-1; i++){
          if(input.charAt(i) == ')' && input.charAt(i+1) =='('){
            temp2 = temp.insert(i+1, '*');
            temp = temp2;
            input = temp;
            i = i+2; // weil 1 zeichen eingesetzt wird
        }
      }
 //---------------------------------------------- * nach geschlossener Klammer zu und Hexzahl--------------------------------------------
    if(temp2 !== ''){
      document.getElementById('input').value = temp2;
    }

      temp2 = '';
      temp = document.getElementById('input').value;
      for(i = 0; i <input.length-1; i++){
        if(input.charAt(i) == ')' && ((input.charAt(i+1) >='0' && input.charAt(i+1) <='9') || input.charAt(i+1) >= 'A' && input.charAt(i+1) <= 'F')){
          temp2 = temp.insert(i+1, '*');
          temp = temp2;
          input = temp;
          i = i+2;
        }
      }

      if(temp2 !== ''){
        document.getElementById('input').value = temp2;
      }
    //---------------------------------------------------------------------------------------------------------------------/

    if(invalidOperator != 0) {
      alert("Du hast " + (invalidOperator+1) + " Operatoren hintereinander!");
      return false;
    } else {
        var bracketsAfterBrackets = 0;
        for(i = 0; i <input.length-1; i++) {
          if(input.charAt(i) == '(' && input.charAt(i+1) == ')') {
            bracketsAfterBrackets++;
            break;
          }
        }

        if(bracketsAfterBrackets != 0) {
          alert("Die Klammern sind leer!");
          return false;
        } else {
          var invalidBegin = 0;
          if((input.charAt(0) == '+') || (input.charAt(0) == '-') || (input.charAt(0) == '(')
              || (input.charAt(0) >= '0' && input.charAt(0) <= '9') || (input.charAt(0) >= 'A' && input.charAt(0) <= 'F')) {
            invalidBegin++;
          }

          if(invalidBegin == 0) {
            alert("Zu Beginn dürfen nur Hexzahlen oder +, -, ( stehen!");
            return false;
          } else {
              var noNumberAfterOperator = 0;
              if(input.charAt(input.length-1) == '+' || input.charAt(input.length-1) == '-' || input.charAt(input.length-1) == '*'
                || input.charAt(input.length-1) == '/' || input.charAt(input.length-1) == '('){
                  noNumberAfterOperator++;
                }

                if(input.charAt(input.length-1) == ')' && (input.charAt(input.length-2) == '+' || input.charAt(input.length-2) == '-'
                  || input.charAt(input.length-2) == '*' || input.charAt(input.length-2) == '/')) {
                  alert("Nach einem Operator muss eine Zahl oder Klammer auf stehen");
                  return false;
                }

                for(i=0; i<input.length-1; i++){
                  if(input.charAt(i) == ')' && (input.charAt(i-1) == '+' || input.charAt(i-1) == '-' ||
                      input.charAt(i-1) == '*' || input.charAt(i-1) == '/')){
                    noNumberAfterOperator++;
                  }
                }

                for(i=0; i<input.length-1; i++){
                  if(input.charAt(i) == '(' && (input.charAt(i+1) == '/' || input.charAt(i+1) == '*')){
                    alert("Nach einer geöffneten klammer darf nur +, - oder eine Hexzahl stehen!")
                    return false;
                  }
                }

                if(noNumberAfterOperator != 0) {
                  alert("Nach einem Operator muss eine Zahl oder eine geöffnete Klammer folgen!");
                  return false;
                } else {

                  var patt = /([.])/;
                  var c = patt.test(readInput());

                  if(c == true) {
                      alert("Es darf kein komma bei Hexzahlen vorkommen!");
                      return 0;
                  }

                  var saveInput = document.getElementById('input').value;
                  var newString = "";

                  for(i = 0; i < input.length; i++) {
                    if(((input.charAt(i) >= '0' && input.charAt(i) <= '9') || input.charAt(i) >= 'A' && input.charAt(i) <= 'F') && input.charAt(i+1) == '(') {
                      newString = saveInput.slice(0, i+1) + "*" + saveInput.slice(i+1, input.length);
                    }
                  }

                    if(newString  !== "") {
                      document.getElementById('input').value = newString;
                    }

                    //-------------------------------0x nach Operatorn------------------------------------------------
                    input = document.getElementById('input').value;
                    temp2 = '';
                    temp = document.getElementById('input').value;
                    for(i = 0; i < input.length; i++){
                      if((input.charAt(i) == '+' && input.charAt(i+1) !== '(')||
                         (input.charAt(i) == '-' && input.charAt(i+1) !== '(')||
                         (input.charAt(i) == '*' && input.charAt(i+1) !== '(')||
                         (input.charAt(i) == '/' && input.charAt(i+1) !== '(')){
                        temp2 = temp.insert(i+1, '0x');
                        temp = temp2;
                        input = temp;
                        i = i+3; // weil 2 zeichen eingefügt werden
                        //console.log(temp2);
                        }
                      }
                      // console.log(temp2);
                      if (temp2 !== ''){
                        document.getElementById('input').value = temp2;
                        input = document.getElementById('input').value;
                      }
                      //------------------------------0x am Anfang-----------------------------------------------------
                      if((input.charAt(0) >= '0' && input.charAt(0) <= '9') || (input.charAt(0) >= 'A' && input.charAt(0) <= 'F')){
                        temp = input;
                        temp2 = temp.insert(0, '0x');
                        document.getElementById('input').value = temp2;
                        input = document.getElementById('input').value;
                      }

                      //--------------------- 0x nach geöffneter Klammer und Hexzahl-------------------------------------------------------------
                      input = document.getElementById('input').value;
                      temp2 = '';
                      temp = document.getElementById('input').value;
                      for(i = 0; i < input.length-1; i++){
                        if(input.charAt(i) == '(' && ((input.charAt(i+1) >= '0' && input.charAt(i+1) <= '9') ||
                          (input.charAt(i+1) >= 'A' && input.charAt(i+1) <= 'F'))) {
                          temp2 = temp.insert(i+1, '0x');
                          temp = temp2;
                          input = temp;
                          i = i+3; // weil 2 zeichen eingefügt werden
                          //console.log(temp2);
                        }
                      }

                      if (temp2 !== ''){
                        document.getElementById('input').value = temp2;
                        input = document.getElementById('input').value;
                      }
                      //--------------------------------------------------------------------------------------------------------------*/

                    if(eval(document.getElementById('input').value) == Infinity) {
                      alert("Division durch 0 ist nicht möglich!");
                        return false;
                    } else {
                      return true;
                  }
                }
              }
            }
          }
        }
      }
