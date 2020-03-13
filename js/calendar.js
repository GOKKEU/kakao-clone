const month = document.querySelector(".js-month"),
  monthContainer = document.querySelector(".boxwrap");

const date = new Date();
const currentDays = date.getDate();
//1월 : 0 부터시작! 3월은 2 따라서 1을 더해준다.
const currentMonth = date.getMonth() + 1;
const currentYear = date.getFullYear();

const weekdays = date.getDay(); //일:0 1:월 2:화 수:3 목:4 금:5 토:6

function getDateObj(month,year) {
  const date = {
    firstDay: new Date(year, month - 1, 1).getDay(), // 현재 달의 1일 요일
    lastDate: new Date(year, month, 0).getDate() // setting day parameter to 0 means one day less than firs day of the month which is last day of the previous moth.
  };
  return date;
}

// li를 추가하는 메서드
function addLi(length, arr, firstBox) {
  if (firstBox) {
    priviousMonth = currentMonth - 1;
    const lastMonth = new Date(currentYear, priviousMonth, 0);
    const preLastDay = lastMonth.getDate();
    for (let i = preLastDay - length; i < preLastDay; i++) {
      const span = document.createElement("span");
      span.innerHTML = i;
      arr.push(span);
    }
  } else {
    for (let i = 0; i < length; i++) {
      const span = document.createElement("span");
      if (!firstBox) {
        span.innerHTML = i + 1;
      }
      arr.push(span);
    }
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
function printArrWeeks(arr, currentM) {
  const ul = document.createElement("ul");
  for (var i in arr) {
    const li = document.createElement("li");
    li.innerHTML = arr[i];
    ul.appendChild(li);
  }
  document.getElementById(currentM).appendChild(ul);
}
function printArr(arr, currentM) {
  for (const i in arr) {
    const ul = document.createElement("ul");
    for (var j in arr[i]) {
      const li = document.createElement("li");
      li.innerHTML = arr[i][j].innerHTML;
      ul.appendChild(li);
    }

    document.getElementById(currentM).appendChild(ul);
  }
}

function paintDays(currentM, arr,obj) {
  const dateObj = obj;
  const firstDay = dateObj["firstDay"];
  const lastDate = dateObj["lastDate"];

  addLi(firstDay, arr, 1); //앞에 li추가
  addLi(lastDate, arr, 0); //// 마지막 날짜 숫자까지 li추가
  const arrayLength = arr.length;

  addLi(42 - arrayLength, arr, 0); //뒤에 li추가

  const weeks = ["일", "월", "화", "수", "목", "금", "토"];
  printArrWeeks(weeks, currentM);

  const newArr = chunk(arr, 7);
  printArr(newArr, currentM);
}

function printContainer(month,year) {

  const div = document.createElement("div");
  div.id = month;
  div.classList.add("box");
  monthContainer.appendChild(div);
  //div를 id값 순서로 정렬
  const arr = [];

  paintDays(month, arr,getDateObj(month,year));
}

function init() {
  //monthContainer에 div를 생성
  month.innerHTML = currentMonth; // 월
}
init();
