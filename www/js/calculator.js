function displayValidator(evt) {
  var charCode = (evt.which) ? evt.which : event.keyCode;
  if ((charCode > 39 && charCode < 58) || (charCode == 8))
  {
    //alert(charCode);
     return true;
  }
   //alert(charCode);
   return false;
}

function inputValidator(x) {
  var input = x;
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
    /*document.getElementById('input').value = eval(input);
    if(document.getElementById('input').value == "Infinity") {
      document.getElementById('input').value = "Division durch 0 ist nicht möglich";
      return false;
    }*/
    var invalidOperator = 0;
    for(i = 0; i < input.length-1; i++) {
      if((input.charAt(i) == '+' || input.charAt(i) == '/' || input.charAt(i) == '*' || input.charAt(i) == '-')
        && (input.charAt(i+1) == '+' || input.charAt(i+1) == '/' || input.charAt(i+1) == '*' || input.charAt(i+1) == '-')) {
        invalidOperator++;
        //break;
      }
    }

    //Multiplkator zwischen klammern und zwischen geschlossener Klammer und Zahl------------------------------------------------
   String.prototype.insert = function (index, string) {
      if (index > 0){
       return this.substring(0, index) + string + this.substring(index, this.length);
      }else {
          return string + this;
         }
    }
        var temp2 = '';
        for(i = 0; i <input.length-1; i++){
          if(input.charAt(i) == ')' && input.charAt(i+1) =='('){
            var temp = document.getElementById('input').value;
            temp2 = temp.insert(i+1, '*');
        }
      }

    if(temp2 !== ''){
      document.getElementById('input').value = temp2;
    }

      temp2 = '';
      for(i = 0; i <input.length-1; i++){
        if(input.charAt(i) == ')' && (input.charAt(i+1) >='0' && input.charAt(i+1) <='9')){
          temp = document.getElementById('input').value;
          temp2 = temp.insert(i+1, '*');
        }
      }

      if(temp2 !== ''){
        document.getElementById('input').value = temp2;
      }
    //------------------------------------------------------------------------------------*/

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
          if((input.charAt(0) == '+') || (input.charAt(0) == '-') || (input.charAt(0) == '(') || (input.charAt(0) >= '0' &&
              input.charAt(0) <= '9')) {
            invalidBegin++;
          }

          if(invalidBegin == 0) {
            alert("Zu Beginn dürfen nur Zahlen oder +, -, ( stehen!");
            return false;
          } else {
              //
                  var patt = /([0-9]+[.]+[0-9]+[.]+)/;
                  var c = patt.test(readInput());

                  if(c == true) {
                      alert("Es darf pro Zahl nur ein Komma vorkommen");
                      return 0;
                  }
                  var pushMultiplicationSignNumber = 0;
                  var saveInput = document.getElementById('input').value;
                  var newString = " ";
                  for(i = 0; i < input.length; i++) {
                    if((input.charAt(i) >= '0' && input.charAt(i) <= '9') && input.charAt(i+1) == '(') {
                      pushMultiplicationSignNumber++;
                      newString = saveInput.slice(0, i+1) + "*" + saveInput.slice(i+1, input.length);
                    }
                  }

                  //console.log(newString);
                    if(pushMultiplicationSignNumber != 0) {
                      if(eval(newString == "Infinity")) {
                        alert("Division durch 0 ist nicht möglich!");
                        return false;
                      }

                      document.getElementById('input').value = eval(newString);
                    } else {
                    if(eval(document.getElementById('input').value) == "Infinity") {
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
      //}
  //}

//Hier kommt noch der binäre Validator hin

//Hexadezimaler DisplayValidator
  function hexDisplayValidator(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if ((charCode >= 65 && charCode <= 70) || (charCode >= 97 && charCode <= 102) || (charCode >= 48 && charCode <= 57) || (charCode >= 40 && charCode <= 43) || charCode == 45 || charCode == 47)
    {
      //alert(charCode);
       return true;
    }
     //alert(charCode);
     return false;
  }

//Hexadezimaler InputValidator
  function hexInputValidator(x) {
    var input = x;
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

      //Multiplkator zwischen klammern------------------------------------------------
     String.prototype.insert = function (index, string) {
        if (index > 0){
         return this.substring(0, index) + string + this.substring(index, this.length);
        }else {
            return string + this;
           }
      }

          var temp2 = '';
          for(i = 0; i <input.length-1; i++){
            if(input.charAt(i) == ')' && input.charAt(i+1) =='('){
              var temp = document.getElementById('input').value;
              temp2 = temp.insert(i+1, '*');
          }
        }


      if(temp2 !== ''){
        document.getElementById('input').value = temp2;
      }

      //------------------------------------------------------------------------------------*/

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
            if((input.charAt(0) == '0' && input.charAt(1) == 'x') || (input.charAt(0) == '(' && input.charAt(1) == '0' && input.charAt(2) == 'x') ||
            (input.charAt(0) == '+' && input.charAt(1) == '0' && input.charAt(2) == 'x') || (input.charAt(0) == '-' && input.charAt(1) == '0' && input.charAt(2) == 'x')) {
              invalidBegin++;
            }

            if(invalidBegin == 0) {
              alert("Zu Beginn muss 0x oder eine Klammer, +, - gefolgt von 0x stehen!");
              return false;
            } else {
                //Verbesserung kommt durch Verschmelzung mit GCODE
                /*var noNumberAfterOperator = 0;
                if(input.charAt(input.length-1) == '+' || input.charAt(input.length-1) == '-' || input.charAt(input.length-1) == '*'
                  || input.charAt(input.length-1) == '/' || input.charAt(input.length-1) == '('){
                    noNumberAfterOperator++;
                  }

                  if(input.charAt(input.length-1) == ')' && (input.charAt(input.length-2) == '+' || input.charAt(input.length-2) == '-'
                    || input.charAt(input.length-2) == '*' || input.charAt(input.length-2) == '/')) {
                    alert("Nach einem Operator muss eine Zahl, A bis F oder Klammer auf stehen");
                    return false;
                  }

                  if(noNumberAfterOperator != 0) {
                    alert("Nach einem Operator muss eine Zahl oder eine geöffnete Klammer folgen!");
                    return false;
                  } else {*/
                    var pushMultiplicationSignNumber = 0;
                    var saveInput = document.getElementById('input').value;
                    var newString = " ";
                    for(i = 0; i < input.length; i++) {
                      if(((input.charAt(i) >= '0' && input.charAt(i) <= '9') || (input.charAt(i) >= 'A' && input.charAt(i) <= 'F') || (input.charAt(i) >= 'a' && input.charAt(i) <= 'f')) && input.charAt(i+1) == '(') {
                        pushMultiplicationSignNumber++;
                        newString = saveInput.slice(0, i+1) + "*" + saveInput.slice(i+1, input.length);
                      }
                    }

                    //console.log(newString);
                      if(pushMultiplicationSignNumber != 0) {
                        if(eval(newString == "Infinity")) {
                          alert("Division durch 0 ist nicht möglich!");
                          return false;
                        }

                        document.getElementById('input').value = eval(newString);
                      } else {
                      if(eval(document.getElementById('input').value) == "Infinity") {
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
        //}
    //}
    //Notiz 1, nach einem Operator und einer geöffneten Klammer muss ein 0x stehen!
    //Notiz 2, am Anfang muss 0x stehen!
