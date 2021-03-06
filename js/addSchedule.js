const SETDATE = "setDate";
let dateLs = [];

const localdata = localStorage.getItem(SETDATE);
if (localdata !== null) {
    dateLs = eval(localdata); //string->obj!!!
}

function loadSchedule() {
    /*dataLs는 localStroge에서 데이터를 받아온 배열*/
    dateLs.forEach(function(dateitem) {
        // console.log("화면 로드시 태그 생성");
        const startArr = dateitem.start.split("-");
        const endArr = dateitem.end.split("-");
        const title = dateitem.title;
        const color = dateitem.color;
        printLocalData(startArr, endArr, title, color);
    });
}
function addPreSchedule(start, end, title) {
    const nNodes = document.querySelector(".boxwrap").childNodes;
    const nArr = [];
    for (j = 0; j < nNodes.length; j++) {
        nArr.push(nNodes.item(j));
    }
    //console.dir(nArr);
}

function addSchedule(start, end, title, color) {
    //출력된 요소에 아이디가 일치하는지 확인
    const LiNode = document.querySelector(".boxwrap").querySelectorAll("li");
    const arr = [];
    for (let j = Number(start); j <= Number(end); j++) {
        arr.push(j);
    }

    for (let i = 0; i < LiNode.length; i++) {
        const span = document.createElement("span");
        const nodeId = LiNode.item(i).id;

        const id = Number(nodeId.slice(1, 9));

        if (arr.indexOf(id) !== -1) {
            span.classList.add(start + "-" + end);
            span.innerHTML = title;
            span.style.backgroundColor = color;
            span.addEventListener("click", showPopup);
        }

        LiNode.item(i).appendChild(span);
    }
}
function printLocalData(startArr, endArr, title, color) {
    /*시작 > 종료 인 경우 다시입력을 유도하기*/
    const startDate = new Date(startArr[0], Number(startArr[1]) - 1, startArr[2]);
    const endDate = new Date(endArr[0], Number(endArr[1]) - 1, endArr[2]);
    // 종료시간 - 시작시간이 <0 인경우 제외
    const beteeenDay = (endDate.getTime() - startDate.getTime()) / 1000 / 60 / 60 / 24;
    if (beteeenDay < 0) {
        return false;
    } else {
        //시작날자 문제 text
        const start = startArr[0] + startArr[1] + startArr[2];
        const end = endArr[0] + endArr[1] + endArr[2];

        addSchedule(start, end, title, color);
    }
    return true;
}

/*로컬스트로지에 저장된 데이터를 가져와서 화면에 출력하는 메서드*/
function getLocalData() {
    dateLs.forEach(function(dateitem, idx, arr) {
        if (idx === arr.length - 1) {
            //가장 마지막으로 ARRAY에 저장된 데이터
            const startArr = dateitem.start.split("-");
            const endArr = dateitem.end.split("-");
            const title = dateitem.title;
            const color = dateitem.color;
            const boolcheek = printLocalData(startArr, endArr, title, color);

            if (boolcheek) {
                //  저장시 이전화면으로 돌아가기 위해 넓이를 0으로
                document.querySelector(".addToDoList").position = "static";
                document.querySelector(".addToDoList").style.width = "0";
                document.querySelector(".endTime").querySelector("input").style.color = "black";
            } else {
                document.querySelector(".endTime").querySelector("input").style.color = "red";
            }
        }
    });
}

/*저장버튼을 눌렀을때 이벤트*/
document.querySelector(".saveToDoList").addEventListener("click", function() {
    //입력한데이터를 읽어서 obj으로 만듬
    const title = document.querySelector(".date__title").querySelector("input");
    const startT = document.querySelector(".startTime").querySelector("input");
    const endT = document.querySelector(".endTime").querySelector("input");
    const text = document.querySelector(".text-content");
    //선택된 tag색상
    let color = " ";
    if (document.getElementById("red").checked) {
        color = "lightpink";
    } else if (document.getElementById("blue").checked) {
        color = "lightskyblue";
    } else if (document.getElementById("green").checked) {
        color = "lightgreen";
    } else {
        color = "gold";
    }

    if (title.value === "") {
        alert("제목을 입력해 주세요");
        return;
    }
    //console.dir(text);
    const timeObj = {
        start: startT.value,
        end: endT.value,
        text: text.value,
        title: title.value,
        color: color
    };
    //해당obj를  ARRAY에 추가한 후 ARRAY를 로컬스트로지 데이터에 추가한다.
    dateLs.push(timeObj);
    localStorage.setItem(SETDATE, JSON.stringify(dateLs));

    getLocalData();
});
