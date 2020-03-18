const month = document.querySelector(".js-month"),
  monthContainer = document.querySelector(".boxwrap");

/*Date객체 obj을 만드는 함수*/
function getDateObj(setmonth, setyear) {
  const dateObj = {
    //getDay() 함수 출력값 : 일:0  1:월  2:화  수:3  목:4  금:5  토:6
    currMonth: setmonth,
    currFirstDay: new Date(setyear, setmonth - 1).getDay(), //현재년,월의 요일
    curLastDate: new Date(setyear, setmonth, 0).getDate(),
    preLastDate: new Date(setyear, setmonth - 1, 0).getDate() //이전달에 마지막 날짜
  };
  //console.log(new Date(setyear, setmonth, 0).getDate());

  return dateObj;
}
//array의 요소를 7개씩 묶어주는 메서드
function chunk(arr, size) {
  var arryLi = [];
  for (var i = 0, len = arr.length; i < len; i += size)
    arryLi.push(arr.slice(i, i + size));
  return arryLi;
}
/*화면에 날짜배열을 출력하는 함수*/
function printArr(arr, currentM) {
  const WEEKS = "weeks";
  const DATE = "date";

  for (const i in arr) {
    const ul = document.createElement("ul");

    if (i === "0") {
      ul.classList.add(WEEKS);
    } else {
      ul.classList.add(DATE);
    }
    for (var j in arr[i]) {
      const li = document.createElement("li");
      li.innerHTML = arr[i][j];
      ul.appendChild(li);
    }
    document.getElementById(currentM).appendChild(ul);
   
  }
 
}

function arrAddDate(obj) {
  const arr = ["일", "월", "화", "수", "목", "금", "토"];
  const dateObj = obj;
  const currM = dateObj["currMonth"];
  const firstDay = dateObj["currFirstDay"];
  let prelastDate = dateObj["preLastDate"];
  let crrlastDate = dateObj["curLastDate"];

  /*이전달 내용*/

  for (let i = 0; i < firstDay; i++) {
    arr[i + 7] = prelastDate - firstDay + 1;
    prelastDate = prelastDate + 1;
  }
  /*현재달 내용*/
  for (let i = 1; i <= crrlastDate; i++) {
    // 1~마지막날
    arr.push(i);
  }
  /*다음달 내용*/
  let emptylen = 49 - arr.length;
  for (let i = 1; i <= emptylen; i++) {
    //1~ (남은갯수)
    arr.push(i);
  }
  /*길이가 7인 배열 만들기-각각 7개의 요소를 갖음*/
  const newArr = chunk(arr, 7);

  printArr(newArr, currM);
}

function printContainer(printmonth, printyear) {
  //(1)년도와 월을 받아서 Div생성
  console.log(printmonth, printyear);

  const div = document.createElement("div");
  div.id = printmonth;
  div.classList.add("box");
  monthContainer.appendChild(div);
  //div를 id값 순서로 정렬

  //(2)해당 년 월에 일을 배열한다 (달)
  arrAddDate(getDateObj(printmonth, printyear));

}
