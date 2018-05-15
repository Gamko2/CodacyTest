//Ließt das Eingabefeld
function readInput() {
  var inp = document.getElementById('input').value;
  return inp;
}

//Schreibt in das Eingabefeld und ersetzt es
function writeOutput(x) {
  document.getElementById('input').value = x;
}

//Leert das Eingabefeld
function Clear() {
  document.getElementById('input').value = '';
}

//Löscht Zeichen in Abhängigkeit von Amount
function reduce(amount) {
  var text = readInput();
  document.getElementById("input").value = text.substring(0,text.length-amount);
}

function init() {
  //console.log("init() activated");
  setMode("hex");
}

function setValidator(x) {
  var mode = x;
  //var oldMode = mode;

//Löschen des alten Events
  //if(mode == "dec") {
    document.getElementById("equal").removeEventListener("click", inputValidator);
    document.getElementById("input").removeEventListener("keypress", displayValidator);
    document.getElementById("equal").removeEventListener("click", decCheck);
    //console.log("Löschen Decimal Successful!");
  //} else if(mode == "hex") {
    document.getElementById("equal").removeEventListener("click", hexInputValidator);
    document.getElementById("input").removeEventListener("keypress", hexDisplayValidator);
    document.getElementById("equal").removeEventListener("click", hexCheck);
    //console.log("Löschen Hexadecimal Successful!");
  //} else if(mode == "bin") {
    document.getElementById("equal").removeEventListener("click", binInputValidator);
    document.getElementById("input").removeEventListener("keypress", binDisplayValidator);
    document.getElementById("equal").removeEventListener("click", binCheck);
    //console.log("Löschen Binary Successful!");
  //}
    Clear(); //Nachdem alle Validatoren gelöscht werden, soll auch das InputFeld geleert werden

//Hinzufügen neuer Validatoren
  if(mode === "dec") {
    //document.getElementById("equal").addEventListener("click", inputValidator);
    document.getElementById("input").addEventListener("keypress", displayValidator);
    document.getElementById("equal").addEventListener("click", decCheck);
    //console.log("Decimal Validator Successful!");

  } else if(mode === "hex") {
    //document.getElementById("equal").addEventListener("click", hexInputValidator);
    document.getElementById("input").addEventListener("keypress", hexDisplayValidator);
    document.getElementById("equal").addEventListener("click", hexCheck);
    //console.log("Hexadecimal Validator Successful!");

  } else if(mode === "bin") {
    //document.getElementById("equal").addEventListener("click", binInputValidator);
    document.getElementById("input").addEventListener("keypress", binDisplayValidator);
    document.getElementById("equal").addEventListener("click", binCheck);
    //console.log("Binary Validator Successful!");
  }
}
