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

  function inputValidator() {
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

      //---------------------------------------------- Insert Funktion------------------------------------------------
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
          if(input.charAt(i) == ')' && (input.charAt(i+1) >='0' && input.charAt(i+1) <='9')){
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
            if((input.charAt(0) == '+') || (input.charAt(0) == '-') || (input.charAt(0) == '(') || (input.charAt(0) >= '0' && input.charAt(0) <= '9')) {
              invalidBegin++;
            }

            if(invalidBegin == 0) {
              alert("Zu Beginn dürfen nur Zahlen oder +, -, ( stehen!");
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
                      alert("Nach einer geöffneten klammer darf nur +, - oder eine Zahl stehen")
                      return false;
                    }
                  }

                  if(noNumberAfterOperator != 0) {
                    alert("Nach einem Operator muss eine Zahl oder eine geöffnete Klammer folgen!");
                    return false;
                  } else {
                    var patt = /([0-9]+[.]+[0-9]+[.]+)/;
                    var c = patt.test(readInput());

                    if(c == true) {
                        alert("Es darf pro Zahl nur ein Komma vorkommen");
                        return 0;
                    }

                    var saveInput = document.getElementById('input').value;
                    var newString = " ";
                    for(i = 0; i < input.length; i++) {
                      if((input.charAt(i) >= '0' && input.charAt(i) <= '9') && input.charAt(i+1) == '(') {
                        //pushMultiplicationSignNumber++;
                        newString = saveInput.slice(0, i+1) + "*" + saveInput.slice(i+1, input.length);
                      }
                    }
                        document.getElementById('input').value = eval(newString);

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
