const focusInput = document.querySelector(".js-toDoForm"),
  focusIcon = document.querySelectorAll(".find__icon"),
  focusIine = document.querySelector(".find__line"),
  focusContainer = document.querySelector(".find__write-container"),
  focusToDo = document.querySelector(".js-toDoList"),
  focusChild = focusToDo.childNodes;

const focused = null;

const ADD_CSS = "addingcss";
const ADD_CSS_ICON = "iconaddingcss";
const ADD_CSS_IINE = "lineaddingcss";
const ADD_CSS_IIPUT = "lnputaddingcss";
/*마우스 호버 효과 (입력창 안에서)*/
function mouseEnter() {
  focusContainer.classList.add(ADD_CSS);
  for (var i = 0; i < focusIcon.length; i++) {
    focusIcon.item(i).classList.add(ADD_CSS_ICON);
  }
  focusIine.classList.add(ADD_CSS_IINE);
  focusInput.classList.add(ADD_CSS_IIPUT);
}

function mouseLeave() {
  focusContainer.classList.remove(ADD_CSS);
  for (var i = 0; i < focusIcon.length; i++) {
    focusIcon.item(i).classList.remove(ADD_CSS_ICON);
  }

  focusIine.classList.remove(ADD_CSS_IINE);
  focusInput.classList.remove(ADD_CSS_IIPUT);
}

function init() {
  const TODOS_LS = "toDos";
  const localStorageItem = localStorage.getItem(TODOS_LS);

  if (localStorageItem !== null) {
    const parseItem = JSON.parse(localStorageItem);
    /*input이 포커스 될때*/
    focusInput.addEventListener("focus", e => {
      for (var i = 0; i < parseItem.length; i++) {
        //만약에 container가 block 상태이면! 실행
        const todoSavedData = focusChild.item(i);

        todoSavedData.addEventListener("mouseenter", mouseEnter);
        todoSavedData.addEventListener("mouseleave", mouseLeave);
      }
    });
  }
}
init();
