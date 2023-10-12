let num1 = 15;
let num2 = 7;

let calc = prompt("Calculate");

switch (calc) {
  case "+":
    result = num1 + num2;
    alert(`${num1} + ${num2} = ${result}`);
    break;
  case "-":
    result = num1 - num2;
    alert(`${num1} - ${num2} = ${result}`);
    break;
  case "*":
    result = num1 * num2;
    alert(`${num1} * ${num2} = ${result}`);
    break;
  default:
    alert("Invalid calcutation");
}
