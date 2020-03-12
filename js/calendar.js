const month = document.querySelector(".js-month"),
  daysList = document.querySelector(".days"),
  listUl = daysList.querySelector("ul");

const date = new Date();
const currentDays = date.getDate();
//1월 : 0 부터시작! 3월은 2 따라서 1을 더해준다.
const currentMonth = date.getMonth() + 1;
const currentYear = date.getFullYear();
const weekdays = date.getDay(); //일:0 1:월 2:화 수:3 목:4 금:5 토:6

const firstDayOfMonth = new Date(currentYear, currentMonth - 1, 1); // 현재 달의 1일 요일
const lastDayOfMonth = new Date(currentYear, currentMonth, 0); // setting day parameter to 0 means one day less than firs day of the month which is last day of the previous moth.

const arrayli = [];
// li를 추가하는 메서드
function addLi(length) {
  for (let i = 0; i < length; i++) {
    const span = document.createElement("span");
    span.innerHTML = i + 2;
    arrayli.push(span);
  }
}
//array의 요소를 7개씩 묶어주는 메서드
function chunk(arr, size) {
  var arryLi = [];
  for (var i = 0, len = arr.length; i < len; i += size)
    arryLi.push(arr.slice(i, i + size));
  return arryLi;
}
//array안에 묶어진 요소를 출력한다
function printArr(arr) {
  console.log(arr);
  for (const i in arr) {
    const ul = document.createElement("ul");
    for (var j in arr[i]) {
      const li = document.createElement("li");
      li.innerHTML = arr[i][j].innerHTML;
      ul.appendChild(li);
    }
    daysList.appendChild(ul);
  }
}
function paintDays() {
  month.innerHTML = currentMonth;// 월

  const firstDay = firstDayOfMonth.getDay();
  const lastDate = lastDayOfMonth.getDate();

  addLi(firstDay); //앞에 li추가
  addLi(lastDate); //// 마지막 날짜 숫자까지 li추가
  console.log(lastDate);
  addLi(42 - lastDate); //뒤에 li추가

  const newArr = chunk(arrayli, 7);
 
  printArr(newArr);
}
function init() {
  paintDays();
}
init();
