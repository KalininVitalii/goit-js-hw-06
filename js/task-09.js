function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector('button.change-color');
const widgetColor = document.querySelector('.widget');

btnChangeColor.addEventListener('click', e => {
  let color = getRandomHexColor();
  widgetColor.style.backgroundColor = color;
});
