const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input')
const greeting = document.querySelector('#greeting')

const HIDDEN_CLASSNAME = 'hidden'
const USERNAME_KEY = 'username'

function loginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME)
  const username = loginInput.value
  localStorage.setItem(USERNAME_KEY, username)
  paintGreetings(username)
}

function paintGreetings (username) {
  greeting.classList.remove(HIDDEN_CLASSNAME)
  greeting.innerText = `반갑습니다 ${username}님`
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if(!savedUsername) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener('submit', loginSubmit)
} else {
  // show the greeting
  paintGreetings(savedUsername)
}