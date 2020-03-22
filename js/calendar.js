const month = document.querySelector(".js-month"),
    monthContainer = document.querySelector(".boxwrap");

/*Date객체 obj을 만드는 함수*/
function getDateObj(setmonth, setyear) {
    const dateObj = {
        //getDay() 함수 출력값 : 일:0  1:월  2:화  수:3  목:4  금:5  토:6
        currMonth: setmonth,
        currYear: setyear,
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
    for (var i = 0, len = arr.length; i < len; i += size) arryLi.push(arr.slice(i, i + size));
    return arryLi;
}
/*화면에 날짜배열을 출력하는 함수*/
function printArr(arr, currentY, currentM) {
    const WEEKS = "weeks";
    const DATE = "date";
    console.log(arr);

    for (let i = 0; i < arr.length; i++) {
        const ul = document.createElement("ul");

        if (i === 0) {
            ul.classList.add(WEEKS);
        } else {
            ul.classList.add(DATE);
        }
        for (var j in arr[i]) {
            console.log(arr[i][j]);
            //     const val =eval( arr[i][j] );
            ul.appendChild(arr[i][j]);
        }
        document.getElementById(currentM).appendChild(ul);
    }
}

function arrAddDate(obj) {
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    const arr = [];
    for (i = 0; i < days.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = days[i];
        arr.push(li);
    }
    const dateObj = obj;
    const currM = dateObj["currMonth"]; //number
    const stringMonth = currM < 10 ? "0" + currM : currM; //string
    const currY = dateObj["currYear"];
    const firstDay = dateObj["currFirstDay"];
    let prelastDate = dateObj["preLastDate"];
    let crrlastDate = dateObj["curLastDate"];

    console.log(typeof currY);

    /*이전달 내용*/
    for (let i = 0; i < firstDay; i++) {
        const li = document.createElement("li");
        const day = Number(prelastDate - firstDay + 1);

        if (currM === 1) {
            li.id = "p" + (currY - 1).toString() + 12 + day;

            console.log(li.id);
        } else {
            li.id = "p" + currY.toString() + (currM - 1).toString() + day;
        }
        li.innerHTML = Number(day);
        arr[i + 7] = li;
        prelastDate = prelastDate + 1;
    }

    /*현재달 내용*/
    for (let j = 1; j <= crrlastDate; j++) {
        const li = document.createElement("li");
        const day = j < 10 ? "0" + j : j;
        li.id = "c" + currY.toString() + stringMonth + day;
        li.innerHTML = Number(day);
        // 1~마지막날
        arr.push(li);
    }

    /*다음달 내용*/
    let emptylen = 49 - arr.length;
    for (let k = 1; k <= emptylen; k++) {
        //1~ (남은갯수)
        const li = document.createElement("li");

        const day = k < 10 ? "0" + k : k;
        if (currM == 12) {
            li.id = "n" + (currY + 1).toString() + 1 + day;
            console.log(li.id + "12월");
        } else {
            li.id = "n" + currY.toString() + (currM + 1) + day;
        }
        li.innerHTML = Number(day);
        arr.push(li);
    }

    /*길이가 7인 배열 만들기-각각 7개의 요소를 갖음*/
    const newArr = chunk(arr, 7);

    printArr(newArr, currY, currM);
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
