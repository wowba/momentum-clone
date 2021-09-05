const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const loginButtton = loginForm.querySelector("button");
const greeting = document.querySelector(".greeting");
const todoForm = document.querySelector(".todo-form");
const todoList = document.querySelector(".todo-list");
const quotee = document.querySelector(".quote");
const weather = document.querySelector(".weather");
const Clock = document.querySelector(".clock");
const date = document.querySelector(".date");

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem("username", username);
  loginForm.classList.add("hidden");
  greeting.innerText = "hello " + username;
  greeting.classList.remove("hidden");
  todoForm.classList.remove("hidden");
  todoList.classList.remove("hidden");
  quotee.classList.remove("hidden");
  weather.classList.remove("hidden");
  Clock.classList.remove("hidden");
  date.classList.remove("hidden");

  paintGreetings(username);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem("username");

function paintGreetings(username) {
  greeting.innerText = "Hi, " + username;
  greeting.classList.remove("hidden");
  todoForm.classList.remove("hidden");
  todoList.classList.remove("hidden");
  quotee.classList.remove("hidden");
  weather.classList.remove("hidden");
  Clock.classList.remove("hidden");
  date.classList.remove("hidden");
}

if (savedUsername === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
