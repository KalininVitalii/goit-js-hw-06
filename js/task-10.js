function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const numberEl = document.querySelector("input[type='number']");
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');
const controlDestroy = document.querySelector('#controls');

const createBoxes = amount => {
  const elementsToAdd = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();
    elementsToAdd.push(div);
  }
  return elementsToAdd;
};

btnDestroy.addEventListener('click', event => {
  boxes.innerHTML = '';
});

btnCreate.addEventListener('click', () => {
  let boxesAdd = createBoxes(numberEl.value);
  boxes.append(...boxesAdd);
});
