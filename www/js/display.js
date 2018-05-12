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
  document.getElementById("equal").addEventListener("click", inputValidator);
  document.getElementById("input").addEventListener("input", displayValidator);
}

function setValidator(x) {
  var mode = x;
  var oldMode = mode;

  if(mode == "dec") {
    document.getElementById("equal").addEventListener("click", inputValidator);
    document.getElementById("input").addEventListener("input", displayValidator);
    console.log("Validator Decimal!");
  }

  if(oldMode == mode) {
    document.getElementById("equal").removeEventListener("click", inputValidator);
    document.getElementById("input").removeEventListener("input", displayValidator);
  }
}
