/*현재 날짜 정보를 받아온다*/
const date = new Date();
const currentMonth = date.getMonth() + 1;
const currentYear = date.getFullYear();

console.log("현재 날짜 정보" + currentMonth + "," + currentYear + ",");

function leftPrint(month) {
  let year = parseInt(document.getElementById("year").innerHTML);
  console.log("월" + month + "년" + year);

  /*left*/
  if (month === 12) {
    printContainer(month - 1, year - 1);
    printContainer(month, year - 1);
    printContainer(month - 11, year);
    document.getElementById("year").innerHTML = year - 1;
    return;
  }
  if (month === 1) {
    printContainer(12, year - 1);
  } else {
    printContainer(month - 1, year);
  }

  printContainer(month, year);
  printContainer(month + 1, year);
  document.getElementById("year").innerHTML = year;
}
function rifhtPrint(month) {
  let year = parseInt(document.getElementById("year").innerHTML);
  console.log("월" + month + "년" + year + "오른쪽");

  /*right*/
  if (month === 1) {
    printContainer(month + 11, year);
    printContainer(month, year + 1);
    printContainer(month + 1, year + 1);
    document.getElementById("year").innerHTML = year + 1;
    return;
  }

  printContainer(month - 1, year);
  printContainer(month, year);
  if (month === 12) {
    printContainer(month - 11, year + 1);
  } else {
    printContainer(month + 1, year);
  }
  document.getElementById("year").innerHTML = year;
}

/*스크롤 위치 변경*/
function scrollPositionChg() {
  const boxCon = document.querySelector(".boxwrap");
  let posi = boxCon.offsetWidth;
  console.dir(posi);
  $(".boxwrap").scrollLeft(posi);
}

function mouseWheelEvent(e) {
  const wheelDelta = e.originalEvent.wheelDelta;
  const boxCon = document.querySelector(".boxwrap");
  if (wheelDelta > 0) {
    console.log("up");

    $(".boxwrap")
      .stop()
      .animate(
        { scrollLeft: 0 },
        {
          duration: 1000,
          complete: function() {
            let firstNumber = parseInt(boxCon.firstElementChild.id);
            while (boxCon.hasChildNodes()) {
              boxCon.removeChild(boxCon.firstElementChild);
            }
            leftPrint(firstNumber);
            scrollPositionChg();
            document.querySelector(".month").innerHTML = firstNumber;
          }
        }
      );
  } else {
    /*이벤트*/
    $(".boxwrap")
      .stop()
      .animate(
        { scrollLeft: "+=" + boxCon.offsetWidth },
        {
          duration: 1000,
          complete: function() {
            let lastNumber = parseInt(boxCon.lastElementChild.id);

            while (boxCon.hasChildNodes()) {
              boxCon.removeChild(boxCon.firstElementChild);
            }
            rifhtPrint(lastNumber);
            scrollPositionChg();
            document.querySelector(".month").innerHTML = lastNumber;
          }
        }
      );
  }
}

function touchEvent(e) {
  const touchDelta = e.originalEvent.touchEvent;
  const boxCon = document.querySelector(".boxwrap");
  if (wheelDelta > 0) {
    console.log("up");

    $(".boxwrap")
      .stop()
      .animate(
        { scrollLeft: 0 },
        {
          duration: 1000,
          complete: function() {
            let firstNumber = parseInt(boxCon.firstElementChild.id);
            while (boxCon.hasChildNodes()) {
              boxCon.removeChild(boxCon.firstElementChild);
            }
            leftPrint(firstNumber);
            scrollPositionChg();
            document.querySelector(".month").innerHTML = firstNumber;
          }
        }
      );
  } else {
    /*이벤트*/
    $(".boxwrap")
      .stop()
      .animate(
        { scrollLeft: "+=" + boxCon.offsetWidth },
        {
          duration: 1000,
          complete: function() {
            let lastNumber = parseInt(boxCon.lastElementChild.id);

            while (boxCon.hasChildNodes()) {
              boxCon.removeChild(boxCon.firstElementChild);
            }
            rifhtPrint(lastNumber);
            scrollPositionChg();
            document.querySelector(".month").innerHTML = lastNumber;
          }
        }
      );
  }
}
//마우스 휠 이벤시 시!
$(function() {
  $("body").on("mousewheel", function(e) {
    mouseWheelEvent(e);
  });
  $("body").on("swipeleft", function() {
    document.body.style.backgroundColor = "red";
    $(".boxwrap")
      .stop()
      .animate(
        { scrollLeft: 0 },
        {
          duration: 1000,
          complete: function() {
            let firstNumber = parseInt(boxCon.firstElementChild.id);
            while (boxCon.hasChildNodes()) {
              boxCon.removeChild(boxCon.firstElementChild);
            }
            leftPrint(firstNumber);
            scrollPositionChg();
            document.querySelector(".month").innerHTML = firstNumber;
          }
        }
      );
  });
});
$(document).ready(function() {
  document.querySelector(".addBtn").addEventListener("click", function() {
    //버튼 클릭 이벤트 (full 화면)
  });
  document.getElementById("year").innerHTML = currentYear;
  leftPrint(currentMonth);
  scrollPositionChg();
  document.querySelector(".month").innerHTML = currentMonth;
});
