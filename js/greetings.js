// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const logout = document.querySelector("#logout");
const greeting = document.querySelector("#greeting");
const todoTitle = document.querySelector("#todoTitle");
const todoForm = document.querySelector("#todo-form");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"; //반복되는 string 은 변수 설정하는게 좋다. 실수를 줄이기 위해서

function onLoginSubmit(event) {
  event.preventDefault(); // 브라우저에서 제공하는 기본 동작들을 멈추게 함.
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreeting();
}

function paintGreeting() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerHTML = `어서오세요!! ${username}님 😀`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  todoTitle.classList.remove(HIDDEN_CLASSNAME);
  todoForm.classList.remove(HIDDEN_CLASSNAME);
  logout.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show the greeting
  paintGreeting();
}

logout.addEventListener("click", () => {
  localStorage.removeItem(USERNAME_KEY);
  location.reload();
});
