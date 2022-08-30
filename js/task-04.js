let counterValue = 0;
const buttontPlus = document.querySelector('button[data-action="increment"]');
const buttonMinus = document.querySelector('button[data-action="decrement"]');
const count = document.querySelector('#value');

buttontPlus.addEventListener('click', () => {
  counterValue++;
  count.textContent = counterValue;
});

buttonMinus.addEventListener('click', () => {
  counterValue--;
  count.textContent = counterValue;
});
