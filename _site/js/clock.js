//시계

const clockContainer = document.querySelector(".js-clock");
console.log(clockContainer);
function getTime() {
  const date = new Date();

  const hours = date.getHours();

  const minutes = date.getMinutes();
  console.log("date" + "hours" + "minutes");
  clockTitle.innerText = `${hours}:${minutes}`;
}
function init() {
  getTime();
}

init();
