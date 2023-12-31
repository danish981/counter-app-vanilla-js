const plusButton = document.getElementById("plus-button");

plusButton.addEventListener("click", () => {
  const countElement = document.getElementById("counter-element");
  const count = Number(countElement.innerText);
  countElement.innerText = count + 1;
});

const minusButton = document.getElementById("minus-button");

minusButton.addEventListener("click", () => {
  const countElement = document.getElementById("counter-element");
  const count = Number(countElement.innerText);
  countElement.innerText = count - 1;
});

const resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", () => {
  const countElement = document.getElementById("counter-element");
  countElement.innerText = 0;
});
