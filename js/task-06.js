const textInput = document.querySelector('#validation-input');
// const number = document.querySelector('#validation-input[data-length]');

// console.log(number);
textInput.addEventListener('blur', event => {
  if (event.currentTarget.value.length === 6) {
    textInput.classList.add('valid');
    textInput.classList.remove('invalid');
  } else {
    textInput.classList.add('invalid');
  }
});
