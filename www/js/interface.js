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
  /*var x = document.getElementById("floatkomma");
//  var y = document.getElementById("decdiv");
//  if (x.style.display === "none") {
      x.style.display = "block";
      x.style.visibility = "visible";*/
  allVisible();
  let array = new Array('A','B','C','D','E','F')
  makeInvisible(array);
  document.getElementById("grid-mode").className = "decimal-grid";
  valueButton(document.getElementById('dec').value);
}

/*This is called when the HEX Button is pressed
We make every element visible and then load the hexadecimal-grid*/
function hexadecimal(){
  /*var x = document.getElementById("floatkomma");
      if (x.style.display === "block") {
          x.style.display = "none";
          x.style.visibility = "hidden";
      } else {
          x.style.display = "block";
      }*/
  allVisible();
  let array = new Array('floatkomma')
  makeInvisible(array);
  document.getElementById("grid-mode").className = "hexadecimal-grid";
  valueButton(document.getElementById('hex').value);
}
/*This is called when the Bin button is pressed
We make every element visible.
This array is again a placeholder should be in the Mode Enum.
We make all elements from the array invisible and load the binary-grid afterwards.
*/
function binary(){
  /*var x = document.getElementById("floatkomma");
      if (x.style.display === "block") {
          x.style.display = "none";
          x.style.visibility = "hidden";
      } else {
          x.style.display = "block";
      }*/
  allVisible();
  let array = new Array('A','B','C','D','E','F','2','3','4','5','6','7','8','9','floatkomma')
  makeInvisible(array);
  document.getElementById("grid-mode").className = "binary-grid";
  valueButton(document.getElementById('bin').value);
}

/*Nimmt den Wert des Buttons entgegen und wird an setMode übergeben*/
function valueButton(value) {
  var mode = value;
  //console.log(mode);

  setMode(mode);
}
