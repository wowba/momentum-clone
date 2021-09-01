const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const loginButtton = loginForm.querySelector("button");
const greeting = document.querySelector(".greeting");

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem("username", username);
  loginForm.classList.add("hidden");
  greeting.innerText = "hello " + username;
  greeting.classList.remove("hidden");
  paintGreetings(username);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem("username");

function paintGreetings(username) {
  greeting.innerText = "hello " + username;
  greeting.classList.remove("hidden");
}

if (savedUsername === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
