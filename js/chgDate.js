/*룰렛 start---------------------------------------------------------------------------------------------------------------------------*/

function chgYearList(e) {
    const wheelyear = e.wheelDelta;

    const firstLi = document.createElement("li");
    const centerLi = document.createElement("li");
    const lastLi = document.createElement("li");

    const node = document.querySelector(".year-list");

    if (wheelyear < 0) {
        console.log("down");

        if (parseInt(node.children.item(0).innerHTML).toString() === "2050") {
            return;
        }

        firstLi.innerHTML = parseInt(node.children.item(0).innerHTML) + 1;
        centerLi.innerHTML = parseInt(node.children.item(0).innerHTML) + 2;
        lastLi.innerHTML = parseInt(node.children.item(0).innerHTML) + 3;
    } else {
        if (parseInt(node.children.item(0).innerHTML).toString() === "2000") {
            return;
        }

        firstLi.innerHTML = parseInt(node.children.item(0).innerHTML) - 1;
        centerLi.innerHTML = parseInt(node.children.item(0).innerHTML);
        lastLi.innerHTML = parseInt(node.children.item(0).innerHTML) + 1;
    }

    changeLi(node, firstLi, centerLi, lastLi);
}

function chgDayList(e, lastNum, target) {
    const wheel = e.wheelDelta;
    const node = document.querySelector(target);
    const nodetext = node.children.item(0).innerHTML;
    const firstLi = document.createElement("li");
    const centerLi = document.createElement("li");
    const lastLi = document.createElement("li");
    if (wheel < 0) {
        console.log("down");

        if (nodetext === (lastNum - 2).toString()) {
            firstLi.innerHTML = parseInt(nodetext) + 1;
            centerLi.innerHTML = parseInt(nodetext) + 2;
            lastLi.innerHTML = 1;
        }

        if (nodetext === (lastNum - 1).toString()) {
            //11 12 1
            firstLi.innerHTML = parseInt(nodetext) + 1;
            centerLi.innerHTML = 1;
            lastLi.innerHTML = 2;
        }
        if (nodetext === lastNum.toString()) {
            //11 12 1
            firstLi.innerHTML = 1;
            centerLi.innerHTML = 2;
            lastLi.innerHTML = 3;
        }
        if (firstLi.innerHTML === "") {
            firstLi.innerHTML = parseInt(nodetext) + 1;
            centerLi.innerHTML = parseInt(nodetext) + 2;
            lastLi.innerHTML = parseInt(nodetext) + 3;
        }
    } else {
        // 123 last 12
        if (node.children.item(0).innerHTML === "1") {
            firstLi.innerHTML = lastNum;
            centerLi.innerHTML = 1;
            lastLi.innerHTML = 2;
        }
        //29 1 2 > 28 29 1
        if (node.children.item(0).innerHTML === lastNum.toString()) {
            firstLi.innerHTML = lastNum - 1;
            centerLi.innerHTML = lastNum;
            lastLi.innerHTML = 1;
        }
        //28 29 1  27 28 29
        if (node.children.item(0).innerHTML === (lastNum - 1).toString()) {
            firstLi.innerHTML = lastNum - 2;
            centerLi.innerHTML = lastNum - 1;
            lastLi.innerHTML = lastNum;
        }
        //27 28 29  >26 27 28

        if (firstLi.innerHTML === "") {
            firstLi.innerHTML = parseInt(nodetext) - 1;
            centerLi.innerHTML = parseInt(nodetext);
            lastLi.innerHTML = parseInt(nodetext) + 1;
        }
    }

    changeLi(node, firstLi, centerLi, lastLi);
}

function changeLi(node, firstLi, centerLi, lastLi) {
    //모두 지우기
    while (node.hasChildNodes()) {
        node.removeChild(node.firstChild);
    }

    node.appendChild(firstLi);
    node.appendChild(centerLi);
    node.appendChild(lastLi);
}
function chgMonthList(e) {
    const wheel = e.wheelDelta;

    const firstLi = document.createElement("li");
    const centerLi = document.createElement("li");
    const lastLi = document.createElement("li");

    const node = document.querySelector(".month-list");

    if (wheel > 0) {
        // console.log("up");
        if (node.children.item(0).innerHTML === "1") {
            firstLi.innerHTML = 12;
            centerLi.innerHTML = parseInt(node.children.item(0).innerHTML);
            lastLi.innerHTML = parseInt(node.children.item(0).innerHTML) + 1;
        }

        if (node.children.item(0).innerHTML === "12") {
            //11 12 1
            firstLi.innerHTML = parseInt(node.children.item(0).innerHTML) - 1;
            centerLi.innerHTML = parseInt(node.children.item(0).innerHTML);
            lastLi.innerHTML = 1;
        }

        if (firstLi.innerHTML === "") {
            firstLi.innerHTML = parseInt(node.children.item(0).innerHTML) - 1;
            centerLi.innerHTML = parseInt(node.children.item(0).innerHTML);
            lastLi.innerHTML = parseInt(node.children.item(0).innerHTML) + 1;
        }
    } else {
        //  10 11 12 > 11 12 1
        if (node.children.item(0).innerHTML === "10") {
            firstLi.innerHTML = parseInt(node.children.item(0).innerHTML) + 1;
            centerLi.innerHTML = parseInt(node.children.item(0).innerHTML) + 2;
            lastLi.innerHTML = 1;
        }
        //11 12 1-> 12 1 2
        if (node.children.item(0).innerHTML === "11") {
            //91011

            firstLi.innerHTML = parseInt(node.children.item(0).innerHTML) + 1;
            centerLi.innerHTML = parseInt(node.children.item(0).innerHTML) - 10;
            lastLi.innerHTML = parseInt(node.children.item(0).innerHTML) - 9;
        }

        //12 1 2 > 123
        if (node.children.item(0).innerHTML === "12") {
            firstLi.innerHTML = parseInt(node.children.item(0).innerHTML) - 11;
            centerLi.innerHTML = parseInt(node.children.item(0).innerHTML) - 10;
            lastLi.innerHTML = parseInt(node.children.item(0).innerHTML) - 9;
        }

        if (firstLi.innerHTML === "") {
            firstLi.innerHTML = parseInt(node.children.item(0).innerHTML) + 1;
            centerLi.innerHTML = parseInt(node.children.item(0).innerHTML) + 2;
            lastLi.innerHTML = parseInt(node.children.item(0).innerHTML) + 3;
        }
    }
    changeLi(node, firstLi, centerLi, lastLi);
}
//마지막 달을 구하는 메서드 (DAY 구할때)
function getLastDay() {
    const chekedM = document.querySelector(".month-list").children.item(1).innerText; //선택된달의

    const cheekedMonth = document.querySelector(".month-list").children.item(1).innerText;
    const cheekedYear = document.querySelector(".year-list").children.item(1).innerText;
    const lastDay = new Date(cheekedYear, cheekedMonth, 0).getDate();
    return lastDay;
}

/*룰렛 end ---------------------------------------------------------------------------------------------------------------------------*/

/*event 추가 메서드*/

//0.룰렛의 List에 마우스 휠 효과가 적용됬을때 이벤트
document.querySelector(".month-list").addEventListener("mousewheel", function(e) {
    chgMonthList(e);
});
document.querySelector(".year-list").addEventListener("mousewheel", function(e) {
    chgYearList(e);
});
document.querySelector(".day-list").addEventListener("mousewheel", function(e) {
    //마지막해값

    const day = getLastDay();
    chgDayList(e, day, ".day-list");
});

//1.확인버튼 클릭시 해당값을 선택됬던  input에 값을 전송하는 이벤트
document.querySelector(".submitDatebtn").addEventListener("click", function(e) {
    const cheekedYear = document.querySelector(".year-list").children.item(1).innerText;
    const month = document.querySelector(".month-list").children.item(1).innerText;
    const chekedMonth = month < 10 ? "0" + month : month;
    const day = document.querySelector(".day-list").children.item(1).innerText;
    const chekedDay = day < 10 ? "0" + day : day;

    // 숨겨진 input에서 값을 바다 선택된 input을 구분
    const chekTag = document.querySelector(".chekTag").value;
    if (chekTag === "시작") {
        //console.log(chekedDay);
        document.querySelector(".startTime").querySelector("input").value = cheekedYear + "-" + chekedMonth + "-" + chekedDay;
    }
    if (chekTag === "종료") {
        //console.log(chekedDay);
        document.querySelector(".endTime").querySelector("input").value = cheekedYear + "-" + chekedMonth + "-" + chekedDay;
    }
    //2.확인 버튼 클릭시 박스 사라지는 이벤트
    document.querySelector(".datepicker").style.display = "none";
});

//3.input을 클릭하면 날짜 입력 룰렛 생성 이벤트*/
document.querySelector(".startTime input").addEventListener("click", function(e) {
    /*시작과 종료시간 전송시 구분을 위한 코드*/

    const preObj = e.toElement;

    if (preObj === null) {
        /*explore*/
        const obj = e.srcElement;
        document.querySelector(".chekTag").value = obj.previousSibling.innerHTML;
    } else {
        /*chrome*/
        const obj = e.toElement.previousElementSibling;
        console.log(obj);
        document.querySelector(".chekTag").value = obj.innerHTML;
    }

    /*박스 보이게 하기*/
    document.querySelector(".datepicker").style.display = "block";
});
document.querySelector(".endTime input").addEventListener("click", function(e) {
    const preObj = e.toElement;

    if (preObj === null) {
        /*explore*/
        const obj = e.srcElement;
        document.querySelector(".chekTag").value = obj.previousSibling.innerHTML;
    } else {
        /*chrome*/

        const obj = e.toElement.previousElementSibling;
        document.querySelector(".chekTag").value = obj.innerHTML;
    }

    /*박스 보이게 하기*/
    document.querySelector(".datepicker").style.display = "block";
});

//4.확인을 누르지X 나갈때 이벤트 처리
document.querySelector(".wrappercontainer").addEventListener("click", function(e) {
    document.querySelector(".datepicker").style.display = "none";
});
