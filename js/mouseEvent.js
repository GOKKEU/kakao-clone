const focusInput = document.querySelector(".js-toDoForm"),
  focusIcon = document.querySelectorAll(".find__icon"),
  focusIine = document.querySelector(".find__line"),
  focusContainer = document.querySelector(".find__write-container"),
  focusToDo = document.querySelector(".js-toDoList"),
  focusBtn = focusToDo.querySelectorAll("button");

const focused = null;

const ADD_CSS = "addingcss";
const ADD_CSS_ICON = "iconaddingcss";
const ADD_CSS_IINE = "lineaddingcss";
const ADD_CSS_IIPUT = "lnputaddingcss";

function mouseEnter() {
  focusContainer.style.background = "blue";
  focusContainer.classList.add(ADD_CSS);
  for (var i = 0; i < focusIcon.length; i++) {
    focusIcon.item(i).classList.add(ADD_CSS_ICON);
  }
  focusIine.classList.add(ADD_CSS_IINE);
  focusInput.classList.add(ADD_CSS_IIPUT);
}

function mouseLeave() {
  focusContainer.style.background = "pink";
  focusContainer.classList.remove(ADD_CSS);
  for (var i = 0; i < focusIcon.length; i++) {
    focusIcon.item(i).classList.remove(ADD_CSS_ICON);
  }

  focusIine.classList.remove(ADD_CSS_IINE);
  focusInput.classList.remove(ADD_CSS_IIPUT);
}

function init() {
  for (var i = 0; i < focusBtn.length; i++) {
    focusBtn.item(i).addEventListener("mouseenter", mouseEnter);
    focusBtn.item(i).addEventListener("mouseleave", mouseLeave);
  }
}
init();
