let previousValue = 0;
let operator = "";

function setOperator(opValue) {
  operator = opValue;
  previousValue = getDisplayValue();
  setDisplayValue("");
  document.querySelector("#display").placeholder = previousValue;
}

function setDisplay(value) {
  let disValue = getDisplayValue();
  if (disValue === 0) {
    disValue = "";
  }
  if (value === "." && disValue.indexOf(".") > -1) {
    return;
  }

  setDisplayValue(`${disValue}${value}`);
}

function calculate() {
  let value = getDisplayValue();
  let result = 0;
  switch (operator) {
    case "+":
      result = Number.parseFloat(previousValue) + Number.parseFloat(value);
      break;
    case "-":
      result = Number.parseFloat(previousValue) - Number.parseFloat(value);

      break;
    case "*":
      result = Number.parseFloat(previousValue) * Number.parseFloat(value);

      break;
    case "/":
      result = Number.parseFloat(previousValue) / Number.parseFloat(value);

      break;
    default:
      result = 0;
  }

  setDisplayValue(result);
}

function getDisplayValue() {
  let displayValue = document.querySelector("#display").value;
  return displayValue;
}

function setDisplayValue(value) {
  document.querySelector("#display").value = value;
}

function clearAll() {
  setDisplayValue("");
  document.querySelector("#display").placeholder = 0;

  previousValue = 0;
  operator = "";
}
