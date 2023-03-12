// let result = "";

// function addToResult(value) {
//   result += value;
//   document.getElementById("result").value = result;
// }

// function calculate() {
//   let answer = eval(result);
//   document.getElementById("result").value = answer;
//   result = answer.toString();
// }

// function clearResult() {
//   result = "";
//   document.getElementById("result").value = "";
// }

// function add() {
//   let num1 = parseFloat(document.getElementById("num1").value);
//   let num2 = parseFloat(document.getElementById("num2").value);
//   let sum = num1 + num2;
//   document.getElementById("result").value = sum;
// }

function add() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let sum = num1 + num2;
  document.getElementById("result").value = sum;
}

function subtract() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let difference = num1 - num2;
  document.getElementById("result").value = difference;
}

function multiply() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let product = num1 * num2;
  document.getElementById("result").value = product;
}

function divide() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let quotient = num1 / num2;
  document.getElementById("result").value = quotient;
}

function modulo() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let remainder = num1 % num2;
  document.getElementById("result").value = remainder;
}

function clearResult() {
  document.getElementById("result").value = "";
}
