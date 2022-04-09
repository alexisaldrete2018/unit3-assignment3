let number1 = parseFloat(prompt("Enter your first number"));
let number2 = parseFloat(prompt("Enter your second number"));

var addResultCont = document.getElementById('addition-result');
var subResultCont = document.getElementById('substraction-result');
var multResultCont = document.getElementById('multiplication-result');
var divResultCont = document.getElementById('division-result');

let additionResult = number1 + number2;
let substractionResult = number1 - number2;
let multiplicationResult = number1 * number2;
let divisionResult = number1 / number2;

addResultCont.innerHTML = additionResult;
subResultCont.innerHTML = substractionResult;
multResultCont.innerHTML = multiplicationResult;
divResultCont.innerHTML = divisionResult;

function init(){

}

window.onload = init;