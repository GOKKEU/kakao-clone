//저장버튼
//시작과 종료의 inpu 데이터를 빋고
//저장을 누르면
//시작: 종료: 내용: obj 만들고
//localstroge에 저장해 놓고
//화면이 로딩될때 년도/월을 확인해서 localstorge에 arr에 오브젝트에 저장되어 있는지 확인
//값이 있다면 1차 배경색 바꾸기
const SETDATE = "setDate";
let dateLs = [];

const localdata = localStorage.getItem(SETDATE);
if (localdata !== null) {
    dateLs = eval(localdata); //string->obj!!!
    console.log(dateLs);
}

function loadSchedule() {
    /*dataLs는 localStroge에서 데이터를 받아온 배열*/
    dateLs.forEach(function(dateitem) {
        console.log("화면 로드시 태그 생성");
        const startArr = dateitem.start.split("-");
        const endArr = dateitem.end.split("-");
        const title = dateitem.title;
        printLocalData(startArr, endArr, title);
    });
}
function addSchedule(nodes, start, beteeenDay, content) {
    //span 태그의 시작점에 디자인 추가 멧서드
    let count = 0;
    let curCount = 0;
    let nexCount = 0;
    console.dir(nodes); //총 49개
    for (let i = 0; i < nodes.length; i++) {
        const number = parseInt(nodes.item(i).innerHTML);
        if (number === 1) {
            count++;
        }

        if (count === 1 && start === number) {
            console.log("몇번째노드" + i); //0~6 까지 빼고 7부터
            console.log(start + "," + number + "," + Number(49 - i));

            const span = document.createElement("span");
            span.innerText = content;
            nodes.item(i).appendChild(span);
        }
        if (count === 1) {
            curCount++;
        }
        if (count === 2) {
            console.log("마지막노드" + i); //49-i =1부터 마지막 칸의 숫자
            nexCount++;
        }
    }
    console.log("첫노드부터 이달 마지막 날까지" + curCount + "표시된 다음달의 갯수" + nexCount);
}

function printLocalData(startArr, endArr, title) {
    /*시작 > 종료 인 경우 다시입력을 유도하기*/
    const startDate = new Date(startArr[0], Number(startArr[1]) - 1, startArr[2]);
    const endDate = new Date(endArr[0], Number(endArr[1]) - 1, endArr[2]);
    // 종료시간 - 시작시간이 <0 인경우 제외
    const beteeenDay = (endDate.getTime() - startDate.getTime()) / 1000 / 60 / 60 / 24;
    console.log(beteeenDay);
    if (beteeenDay < 0) {
        return false;
    } else {
        //현재 생성된달력 날짜 비교
        const boxList = document.querySelector(".boxwrap").childNodes;
        //year값 비교
        if (startArr[0] !== document.getElementById("year").innerHTML) {
            //내용은 저장
        } else {
            for (let i = 0; i < boxList.length; i++) {
                if (Number(startArr[1]) === Number(boxList.item(i).id)) {
                    //ul 태그 밑에 날짜 정보가 있는 li의 값을 가져와서
                    const nodes = boxList.item(i).querySelectorAll("li");
                    //nodes를 돌면서 일치하는데이터 화면에 디자인 추가
                    addSchedule(nodes, Number(startArr[2]), beteeenDay, title);
                }
            }
        }
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

            const boolcheek = printLocalData(startArr, endArr, title);
            console.log(boolcheek);
            if (boolcheek) {
                /*저장시 이전화면으로 돌아가기 위해 넓이를 0으로*/
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
    const test = document.querySelector(".text-content");

    if (title.value === "") {
        alert("제목을 입력해 주세요");
        return;
    }

    const timeObj = {
        start: startT.value,
        end: endT.value,
        text: test.innerHTML,
        title: title.value
    };
    //해당obj를  ARRAY에 추가한 후 ARRAY를 로컬스트로지 데이터에 추가한다.
    dateLs.push(timeObj);
    localStorage.setItem(SETDATE, JSON.stringify(dateLs));

    getLocalData();
});
