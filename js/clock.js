const clock = document.querySelector("h1#clock");

function sayHello() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = ``;

  const currentTime = `${hours}:${minutes}:${seconds}`;
  clock.innerText = ` CURRENT TIME : ${currentTime}`;
}

sayHello();
setInterval(sayHello, 1000);