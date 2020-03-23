function savaVal() {
    const inputs = document.querySelector(".container").querySelectorAll("input");

    const localStorageData = localStorage.getItem(SETDATE); //string
    const array = [];

    eval(localStorageData).forEach(function(obj) {
        inputs.forEach(function(i) {
            console.log(i.name);
            if (i.name === "start") {
                //정규식을 사용해서 문자열에 "yyyy-mm-dd" 정규식으로 값 치환

                obj.start = i.value.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");
                console.log(obj.start);
            }
            if (i.name === "end") {
                obj.end = i.value.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");
            }
            if (i.name === "title") {
                obj.title = i.value;
            }
            if (i.name === "text") {
                obj.text = i.value;
            }
        });
        array.push(obj);
        console.dir(array);
    });

    localStorage.setItem(SETDATE, JSON.stringify(array));
    alert("저장했습니다.");
    window.location.reload();
    document.getElementById("id01").style.display = "none";
}

function deleteVal(e) {
    console.dir(e);
}

function modifyVal() {
    //input 내용 변경 가능
    const inputNodes = document.querySelector(".container").querySelectorAll("input");
    let startVal = "";
    let endVal = "";

    inputNodes.forEach(function(inputitem) {
        inputitem.readOnly = false;
        if (inputitem.name === "start") {
            startVal = inputitem.value.split("-")[0];
        }
        if (inputitem.name === "end") {
            endVal = inputitem.value.split("-")[0];
        }

        //수정박스 text를 저장으로 바꿈
        if (inputitem.value === "수정") {
            inputitem.value = "저장";
            inputitem.addEventListener("click", savaVal);
        }
    });
}

function getLocalItem(startTime, endTime) {
    const localData = localStorage.getItem(SETDATE); //string
    let result = "";
    eval(localData).forEach(function(item) {
        let startLocalTime = "";
        let endLocalTime = "";

        item.start.split("-").forEach(function(i) {
            startLocalTime += i;
        });

        item.end.split("-").forEach(function(i) {
            endLocalTime += i;
        });

        if (startLocalTime === startTime && endLocalTime === endTime) {
            result = item.text;
        }
    });
    return result;
}

function showPopup(e) {
    //span의 클레스 이름을 받는다.
    const className = e.srcElement.className;
    //none -> block
    document.getElementById("id01").style.display = "block";
    //start end값 입력
    let startTime = "";
    let endTime = "";
    const inputNodes = document.querySelector(".container").querySelectorAll("input");

    for (let i = 0; i < inputNodes.length; i++) {
        //모든 input 값을 readOnly로 변경

        if (inputNodes.item(i).name === "start") {
            startTime = className.split("-")[0];
            inputNodes.item(i).value = startTime;
        }

        if (inputNodes.item(i).name === "end") {
            endTime = className.split("-")[1];
            inputNodes.item(i).value = endTime;
        }

        if (inputNodes.item(i).name === "title") {
            inputNodes.item(i).value = e.srcElement.innerText;
        }

        if (inputNodes.item(i).value === "수정") {
            inputNodes.item(i).addEventListener("click", modifyVal);
        }
        if (inputNodes.item(i).value === "삭제") {
            inputNodes.item(i).addEventListener("click", deleteVal);
        }

        if (inputNodes.item(i).name === "text") {
            console.log(startTime + "," + endTime);

            inputNodes.item(i).value = getLocalItem(startTime, endTime);
        }

        inputNodes.item(i).readOnly = "true";
    }

    //text값을 저장된 값에서 찾아준다

    //수정버튼과 종료버튼에 이벤트 추가
}
