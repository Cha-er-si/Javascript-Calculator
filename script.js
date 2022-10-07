const firstNumber = document.querySelector("#firstNumber");
const secondNumber = document.querySelector("#secondNumber");
const msg = document.querySelector(".msg");
const answer = document.querySelector(".answer");

const adder = document.querySelector("#add");
adder.addEventListener("click", add);
function add(e) {
  e.preventDefault();
  if (firstNumber.value === "" || secondNumber.value === "") {
    msg.innerHTML = "Please enter all fields";

    setTimeout(() => msg.remove(), 3000);
  } else {
    const result = Number(firstNumber.value) + Number(secondNumber.value);
    answer.innerHTML = `The sum is: ${result}`;
  }
}

const subtracter = document.querySelector("#subtract");
subtracter.addEventListener("click", subtract);
function subtract(e) {
  e.preventDefault();
  if (firstNumber.value === "" || secondNumber.value === "") {
    msg.innerHTML = "Please enter all fields";

    setTimeout(() => msg.remove(), 3000);
  } else {
    const result = Number(firstNumber.value) - Number(secondNumber.value);
    answer.innerHTML = `The difference is: ${result}`;
  }
}

const multiplier = document.querySelector("#multiply");
multiplier.addEventListener("click", multiply);
function multiply(e) {
  e.preventDefault();
  if (firstNumber.value === "" || secondNumber.value === "") {
    msg.innerHTML = "Please enter all fields";

    setTimeout(() => msg.remove(), 3000);
  } else {
    const result = Number(firstNumber.value) * Number(secondNumber.value);
    answer.innerHTML = `The product is: ${result}`;
  }
}

const divider = document.querySelector("#divide");
divider.addEventListener("click", divide);
function divide(e) {
  e.preventDefault();
  if (firstNumber.value === "" || secondNumber.value === "") {
    msg.innerHTML = "Please enter all fields";

    setTimeout(() => msg.remove(), 3000);
  } else {
    const result = Number(firstNumber.value) / Number(secondNumber.value);
    answer.innerHTML = `The qoutient is: ${result}`;
  }
}
