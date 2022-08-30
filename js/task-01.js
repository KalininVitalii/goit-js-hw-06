const numberCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${numberCategories.length}`);

numberCategories.forEach(item => {
  console.log(`Category: ${item.querySelector('h2').textContent}`);
  console.log(`Elements: ${item.querySelectorAll('li').length}`);
});
