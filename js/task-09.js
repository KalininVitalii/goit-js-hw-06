function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector('button.change-color');
const body = document.querySelector('body');
const colorName = document.querySelector('.color');

btnChangeColor.addEventListener('click', e => {
  body.style.backgroundColor = getRandomHexColor();
  colorName.textContent = getRandomHexColor();
});
