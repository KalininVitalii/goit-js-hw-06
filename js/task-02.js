const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const list = document.querySelector('#ingredients');
const arr = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const item = document.createElement('li');
  item.textContent = ingredients[i];
  item.className = 'item';
  arr.push(item);
}

list.append(...arr);
