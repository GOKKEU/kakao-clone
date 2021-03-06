function valSizeCheck(iNodes) {
    let startD = "";
    let endD = "";
    iNodes.forEach(function(i) {
        if (i.name === "start") {
            startD = i.value;
        }
        if (i.name === "end") {
            endD = i.value;
        }
    });
    if (Number(startD) < Number(endD)) {
        console.log(startD + "<" + endD);
        return true;
    } else {
        return false;
    }
}

function isDate(item) {
    const result = /(\d{4})(\d{2})(\d{2})/;
    return result.test(item);
}
/*태그 수정*/
function saveVal(start, end) {
    const inputs = document.querySelector(".container").querySelectorAll("input");

    const localStorageData = localStorage.getItem(SETDATE); //string
    const array = [];

    eval(localStorageData).forEach(function(obj) {
        const sT = obj.start.replace(/-/gi, "");
        const eT = obj.end.replace(/-/gi, "");

        inputs.forEach(function(i) {
            if (sT === start && eT === end) {
                //정규식을 사용해서 문자열에 "yyyy-mm-dd" 정규식으로 값 치환
                if (i.name === "start") {
                    obj.start = i.value.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");
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
            }
        });

        array.push(obj);
    });
    //  console.dir(array);
    localStorage.setItem(SETDATE, JSON.stringify(array));
    document.getElementById("modal_popup").style.display = "none";
    window.location.reload();
}
/*태그 삭제*/
function deleteVal(start, end) {
    var sString = start;
    var eString = end;
    const getlocalData = localStorage.getItem(SETDATE); //string
    const startT = sString.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");
    const endT = eString.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");
    const arr = [];

    eval(getlocalData).forEach(function(obj) {
        if (obj.start === startT && obj.end === endT) {
        } else {
            arr.push(obj);
        }
    });

    localStorage.setItem(SETDATE, JSON.stringify(arr));
    alert("삭제했습니다.");
    window.location.reload();
    document.getElementById("modal_popup").style.display = "none";
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

/*close 버튼 이벤트*/
document.querySelector(".close").onclick = function(e) {
    document.getElementById("modal_popup").style.display = "none";
    window.location.reload();
};

/*팝업창 이벤트*/
function showPopup(e) {
    const className = e.srcElement.className;
    //none -> block
    document.getElementById("modal_popup").style.display = "block";

    //start end값 입력
    let startTime = "";
    let endTime = "";
    const inputNodes = document.querySelector(".container").querySelectorAll("input");

    for (let i = 0; i < inputNodes.length; i++) {
        //모든 input 값을 readOnly로 변경
        inputNodes.item(i).readOnly = true;
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
        if (inputNodes.item(i).name === "text") {
            inputNodes.item(i).value = getLocalItem(startTime, endTime);
        }
        if (inputNodes.item(i).value === "수정") {
            inputNodes.item(i).addEventListener("click", function() {
                inputNodes.item(i).type = "hidden";

                inputNodes.forEach(function(item) {
                    item.readOnly = false;
                    if (item.name === "start") {
                        item.onchange = function() {
                            //start의 값이 변할때
                            if (!isDate(item.value.replace(/-/gi, ""))) {
                                alert("날짜를 다시 입력하세요");
                                item.value = startTime;
                            } else {
                                startDate = item.value;
                            }
                        };
                    }
                    if (item.name === "end") {
                        item.onchange = function() {
                            //start의 값이 변할때
                            if (!isDate(item.value.replace(/-/gi, ""))) {
                                alert("날짜를 다시 입력하세요");
                                item.value = endTime;
                            }
                            //end의 입력값은 항상 start값보다 커야 한다.
                            if (!valSizeCheck(inputNodes)) {
                                alert("시작날 이후에 날짜를 입력하세요");
                                item.value = endTime;
                            }
                        };
                    }
                    if (item.name === "title") {
                        item.onchange = function() {
                            if (item.value === "") {
                                alert("제목을 입력해 주세요");
                                item.value = e.srcElement.innerText;
                            }
                        };
                    }
                });
                document.getElementById("saveBtn").type = "button";
                document.getElementById("saveBtn").onclick = function(e) {
                    saveVal(startTime, endTime);
                };
            });
        }

        if (inputNodes.item(i).value === "삭제") {
            inputNodes.item(i).addEventListener("click", function(e) {
                deleteVal(startTime, endTime);
            });
        }
    }
}
