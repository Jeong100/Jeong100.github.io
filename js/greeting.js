// const loginForm = document.getElementById("login-form");
const loginButton = document.querySelector("#login-form button");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");
const loginForm = document.querySelector("#login-form");

const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreeting();
}

loginForm.addEventListener("submit", onLoginSubmit);


// function handleLinkClick(event){
//   event.preventDefault();
//   console.log(event);
//   // alert("clicked!");
// }


// function onLoginBtnClick() {
//   console.dir("hello", loginInput.value);
// }

loginForm.addEventListener("submit", onLoginSubmit);
// link.addEventListener("click", handleLinkClick);

// handleLinkClick({information about the event that just happend})
function paintGreeting(){ 
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greeting
  paintGreeting();
}