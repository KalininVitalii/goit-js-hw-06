const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handler);

function handler(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields');
  }
  const emailUser = email.value;
  const passwordUser = password.value;
  const dataUser = { email: emailUser, password: passwordUser };
  // const dataUser = {email: ${email.value}, password: ${password.value}}
  console.log(dataUser);
  event.currentTarget.reset();
}
