function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

for (let i = 0; i < amount; i++) {
  const div = document.createElement('div');
  div.style.height = `${30 + 10 * i}px`;
  div.style.width = `${30 + 10 * i}px`;
  div.style.background = getRandomHexColor();
}
