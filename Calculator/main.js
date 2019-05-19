function dis(val) {
  document.getElementById("result").value += val;
}

//function that evaluates the digit and return result
function solve() {
  var x = document.getElementById("result").value;
  var y = eval(x);
  document.getElementById("result").value = y;
}

//function that clear the display
function c() {
  document.getElementById("result").value = "";
}
