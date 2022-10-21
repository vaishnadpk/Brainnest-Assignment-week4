let previousValue = 0;
let operator = "";

//function to set the operator
function setOperator(opValue) {
  operator = opValue;
  previousValue = getDisplayValue();
  setDisplayValue("");
  document.querySelector("#display").placeholder = previousValue;
}

//function for appending the values
function setDisplay(value) {
  let disValue = getDisplayValue();
  if (disValue === "0") {
    disValue = "";
  }
  if (value === "." && disValue.includes(".")) {
    return;
  }

  setDisplayValue(`${disValue}${value}`);
}

//function for the calculation
function calculate() {
  let value = getDisplayValue();
  let result = 0;
  let firstNumber = Number.parseFloat(previousValue);
  let secondNumber = Number.parseFloat(value);
  switch (operator) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;

      break;
    case "*":
      result = firstNumber * secondNumber;

      break;
    case "/":
      result = firstNumber / secondNumber;

      break;
    default:
      result = 0;
  }

  setDisplayValue(result);
}

//function to get the value of input
function getDisplayValue() {
  let displayValue = document.querySelector("#display").value;
  return displayValue;
}

//function to set the value to value attribute of input
function setDisplayValue(value) {
  document.querySelector("#display").value = value;
}

function clearAll() {
  setDisplayValue("");
  document.querySelector("#display").placeholder = 0;

  previousValue = 0;
  operator = "";
}
