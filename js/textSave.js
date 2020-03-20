const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    title = document.querySelector(".js-textTitle");

const USER_ID = "ggy",
    SHOWING_NM = "showing";

function saveName(name) {
    localStorage.setItem(USER_ID, name);
}
function handleSubmit(event) {
    /*input에 입력후 enter누르면 입력한 text가 남아 있다 */
    /*(1)기본동작을 막음 */
    event.preventDefault();
    /*input에 입력된 text받기*/
    const currentValue = input.value;
    /*text를 화면에 보이게 함*/
    paintingTitle(currentValue);
    /*저장*/
    saveName(currentValue);
}
function searchText() {
    form.classList.add(SHOWING_NM);
    /*리스너를 추가*/
    form.addEventListener("submit", handleSubmit);
}
/*title에 색칠하는 함수*/
function paintingTitle(text) {
    /* title의 class요소 추가*/
    form.classList.remove(SHOWING_NM);
    title.classList.add(SHOWING_NM);
    title.innerHTML = `${text}`;
}
function loadText() {
    //localStorage에 저장된 데이터와 비교 (이전에 찾은 text 기능)
    const currentText = localStorage.getItem(USER_ID);
    if (currentText === null) {
        searchText();
    } else {
        //값이 있다면
        paintingTitle(currentText);
    }
}

function init() {
    /*로컬 스토리지에 저장*/
    loadText();
}
init();
