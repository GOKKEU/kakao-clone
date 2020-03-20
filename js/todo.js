const toDoInput = document.querySelector(".js-toDoForm"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = [];

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
    toDoInput.addEventListener("search", handleSubmit);
}

init();
