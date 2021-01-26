let inputdiv1 = document.getElementById("input1");
let inputdiv = document.body;
console.log(inputdiv);
inputdiv.addEventListener('keypress', checkLetter);
let sauv = "";

function checkLetter(e) {

  let x = e.keyCode;
  console.log(x);
  if ((x >= 97 && x <= 122) || (x >= 65 && x <= 90)) {
    sauv += e.key;
  }
  inputdiv1.value = sauv;
}
