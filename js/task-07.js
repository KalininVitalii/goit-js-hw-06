const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');
inputEl.addEventListener('input', handleInput);

function handleInput(event) {
  spanEl.style.fontSize = event.currentTarget.value + 'px';
}
