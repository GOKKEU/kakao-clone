const focusInput = document.querySelector(".js-toDoForm"),
  focusIcon = document.querySelectorAll(".find__icon"),
  focusIine = document.querySelector(".find__line"),
  focusContainer = document.querySelector(".find__write-container"),
  focusToDo = document.querySelector(".js-toDoList"),
  focusBtn = document.querySelector(".js-toDoList").querySelectorAll("button");

const focused = null;

const ADD_CSS = "addingcss";
const ADD_CSS_ICON = "iconaddingcss";
const ADD_CSS_IINE = "lineaddingcss";
const ADD_CSS_IIPUT = "lnputaddingcss";

function mouseEnter() {
  focusContainer.classList.add(ADD_CSS);
  focusIcon.forEach(function(element) {
    element.classList.add(ADD_CSS_ICON);
  });
  focusIine.classList.add(ADD_CSS_IINE);
  focusInput.classList.add(ADD_CSS_IIPUT);
}

function mouseLeave() {
  focusContainer.classList.remove(ADD_CSS);
  focusIcon.forEach(function(element) {
    element.classList.remove(ADD_CSS_ICON);
  });
  focusIine.classList.remove(ADD_CSS_IINE);
  focusInput.classList.remove(ADD_CSS_IIPUT);
}

function init() {
  focusBtn.forEach(function(element) {
    element.addEventListener("mouseenter", mouseEnter);
  });

  focusBtn.forEach(function(element) {
    element.addEventListener("mouseleave", mouseLeave);
  });
}
init();
