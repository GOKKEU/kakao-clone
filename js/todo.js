const toDoInput = document.querySelector(".js-toDoForm"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = [];

const focusIcon = document.querySelectorAll(".find__icon"),
    focusIine = document.querySelector(".find__line"),
    focusContainer = document.querySelector(".find__write-container");
const focusedChid = document.querySelector(".js-toDoList").childNodes;
const focused = null;

const ADD_CSS = "addingcss";
const ADD_CSS_ICON = "iconaddingcss";
const ADD_CSS_IINE = "lineaddingcss";
const ADD_CSS_IIPUT = "lnputaddingcss";

/*마우스 호버 효과 (입력창 안에서)*/
function mouseEnter() {
    /*box나타나게 하는  css*/
    focusContainer.classList.add(ADD_CSS);
    /*icon 나타나게 하는  css*/
    for (var i = 0; i < focusIcon.length; i++) {
        focusIcon.item(i).classList.add(ADD_CSS_ICON);
    }
    /*라인박스를 나타나게 하는 cs*/
    focusIine.classList.add(ADD_CSS_IINE);
    /*input을 나타나게 하는 cs*/
    toDoInput.classList.add(ADD_CSS_IIPUT);
}

function mouseLeave() {
    focusContainer.classList.remove(ADD_CSS);
    for (var i = 0; i < focusIcon.length; i++) {
        focusIcon.item(i).classList.remove(ADD_CSS_ICON);
    }
    focusIine.classList.remove(ADD_CSS_IINE);
    toDoInput.classList.remove(ADD_CSS_IIPUT);
}
function xBtnAddCss() {
    const localStorageItem = localStorage.getItem(TODOS_LS);
    const parseItem = JSON.parse(localStorageItem);
    if (parseItem !== null) {
        for (var i = 0; i < parseItem.length; i++) {
            console.dir(parseItem.length + "X의 갯수");
            /*mouseenter는 요소에 위치했을때 발생*/
            if (focusedChid.item(i) !== null) {
                focusedChid
                    .item(i)

                    .addEventListener("mouseenter", mouseEnter);
            }
        }
    }
}

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;

    /*list에만 지워짐*/
    toDoList.removeChild(li);
    /*어려움! array를 만드는 filter 기능 사용해 완전히 지움*/
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });

    toDos = cleanToDos;
    saveToDo();

    if (focusedChid.length === 0) {
        mouseLeave();
    } else {
        mouseEnter();
    }
}

function saveToDo() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    delBtn.innerHTML = "X";
    delBtn.addEventListener("click", deleteToDo);

    span.innerHTML = text;
    li.id = newId;

    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDo();

    if (focusedChid.length !== 0) {
        console.log(focusedChid.length + "저장된 후");
        xBtnAddCss();
    }
}

function handleSubmit(event) {
    event.preventDefault();
    const currentVal = toDoInput.value;

    paintToDo(currentVal);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);

    if (loadedToDos !== null) {
        const parseToDos = JSON.parse(loadedToDos);

        parseToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    }
}

function init() {
    loadToDos();
    //input 공백 방지

    toDoInput.addEventListener("keypress", function(e) {
        if (e.key === " ") {
            //13는 스페이스바
            alert("해당 항목에는 공백을 사용할 수 없습니다");
            console.log(toDoInput.value);
            toDoInput.value = "";
            e.returnValue = false;
        }
    });
    document.querySelector(".find__icon-right").addEventListener("click", handleSubmit);
    //돋보기 아이콘 눌렀을때 input에 내용을 저장하게 하는 기능
    document.querySelector(".find__icon-right").addEventListener("mouseenter", mouseEnter);
    document.querySelector(".find__icon-right").addEventListener("mouseLeave", mouseLeave);

    //컨테이너 밖의 요소 클릭시 dislay none 되도록 추가
    //  document.querySelector(".header-wrapper").addEventListener("click", mouseLeave);
}

init();
