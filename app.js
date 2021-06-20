'use strict';
const form = document.querySelector('.form__content');
const btn = document.querySelector('.btn');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('pass');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkInputs();
  checkEmail(email);
});

function checkInputs() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstNameValue === '' || lastNameValue === '') {
    setErrorFor(firstName, 'First Name cannot be empty');
    setErrorFor(lastName, 'Last Name cannot be empty');
  } else {
    setSuccessFor(firstName, 'Cool name, dude!');
    setSuccessFor(lastName, 'Cool name, dude!');
  }

  if (emailValue === '') {
    setErrorFor(email, 'Looks like this is not an email');
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, 'Not a valid email');
  } else {
    setSuccessFor(email, 'Nice email (;');
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be empty');
  } else {
    setSuccessFor(password, 'Success');
  }
}

function setErrorFor(input, message) {
  let formControl = input.parentElement;
  formControl.className = 'form__control error';

  let small = formControl.querySelector('small');
  small.innerText = message;
}

function setSuccessFor(input, message) {
  let formControl = input.parentElement;
  formControl.className = 'form__control success';

  let small = formControl.querySelector('small');
  small.innerText = message;
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

// function checkEmail(input) {
//   const regex = new RegExp(
//     '^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|' +
//       '(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])' +
//       '|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
//   );

//   email.addEventListener('keyup', e => {
//     email.classList.toggle('valid', regex.test(email.value));
//   });
// }

// document.querySelectorAll('.form__control').forEach(form => {
//   let input = form.querySelector('input');
//   input.addEventListener('keyup', e =>
//     form.classList.toggle('valid', regex.test(input.value))
//   );
// });

// btn.addEventListener('click', e => {
//   e.preventDefault();
// });
