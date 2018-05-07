function Clear() {
  document.getElementById('input').value = '';
}

function readInput() {
  var equation = document.getElementById('input').value;
  return equation;
}

function setValidator(x) {
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
}
