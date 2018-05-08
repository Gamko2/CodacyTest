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

//Setzt den Validator
function setValidator(validator) {
  this.validator = validator;
}

//Initialisiert den Validator fürs Inputfeld
function init() {
  document.getElementById("input").addEventListener("input", onInputChange);
}

function onInputChange() {

}

/*function setValidator(x) {
  var mode = x;

  if(mode == "bin") {
    //binInputValidator(readInput()) -> Bisher nicht programmiert
    //binDisplayValidator(readInput()) -> Bisher nicht programmiert
  }

  else if(mode == "hex") {

    document.getElementById("").

    document.getElementById("equal").addEventListener("click", admire);
    document.getElementById("input").addEventListener("input", fun);
  }

  else if(mode == "dec") {
    document.getElementById("equal").addEventListener("click", inputValidator);
    document.getElementById("input").addEventListener("input", displayValidator);


  }
}

function init() {
    alert("Astral");
  document.getElementById("equal").addEventListener("click", inputValidator);
  document.getElementById("input").addEventListener("input", displayValidator);
}

function onInputChange() {
  var x = readInput();
  displayValidator(x);
}

function haben() {
    alert("Dez1");
}

function yohannes() {
    alert("Dez2");
}

function admire() {
    alert("Hex1");
}

function fun() {
    alert("Hex2");
}*/
