function myFunction() {
  var touch = e.originalEvent.touches;

  document.querySelector(".boxwrap").style.background = "pink";
  //box에
}

$(document).ready(function() {
  document.getElementById("year").innerHTML = currentYear;
  printContainer(currentMonth - 1, currentYear);
  printContainer(currentMonth, currentYear);
  printContainer(currentMonth + 1, currentYear);

  document.querySelector(".boxwrap").addEventListener("touchmove", myFunction);
  const center = document.querySelector(".boxwrap").offsetWidth;
  window.scrollTo(center, 0);
  console.log("first" + center);
});

//마우스 휠 이벤시 시!
$(function() {
  $("html, body").on("mousewheel DOMMouseScroll", function(e) {
    const boxContainer = document.querySelector(".boxwrap");
    var wheelDelta = e.originalEvent.wheelDelta;
    const viewWidth = boxContainer.offsetWidth;

    const currYear = parseInt(document.getElementById("year").innerHTML);
    console.log(currYear);
    const preYear = currYear - 1;
    console.log(preYear);
    const nextYear = currYear + 1;

    if (wheelDelta > 0) {
      console.log("up");
      $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
      window.scrollTo(viewWidth, 0);
      /*애니메이션*/
      $(this)
        .stop()
        .animate(
          {
            scrollLeft: (viewWidth / 3) * 2 + "px" //스크롤시 왼쪽에서 부터 0px 위치로 스크롤이 돌아온다!
          },
          {
            duration: 1000,
            complete: function() {
              window.scrollTo(viewWidth, 0);

              const firstId = boxContainer.firstElementChild.id;
              console.dir(boxContainer.firstElementChild);
              /* id값을 int로 변경*/
              let firstNumber = parseInt(firstId);
              console.log(firstNumber + "firstID");

              if (firstNumber > 1) {
                /*타이틀 수정*/
                document.querySelector(".js-month").innerHTML = firstNumber - 1;
                // boxContainer.lastElementChild.remove();

                /*모든 자시 노드를 삭제*/
                while (boxContainer.hasChildNodes()) {
                  boxContainer.removeChild(boxContainer.firstElementChild);
                }
                /* 자시 노드를 추가*/
                printContainer(firstNumber - 1, currentYear);
                printContainer(firstNumber, currentYear);
                printContainer(firstNumber + 1, currentYear);
              }
              //이전해!

              //1,2,3 (scoll)
              //12,1,2 p c c   t>f
              //11,12,1 p p c  f>t
              if (firstNumber === 1) {
                /*모든 자시 노드를 삭제*/
                while (boxContainer.hasChildNodes()) {
                  boxContainer.removeChild(boxContainer.firstElementChild);
                }

                printContainer(12, preYear);
                printContainer(firstNumber, currYear);
                printContainer(firstNumber + 1, currYear);
              }
              //10,11,12 p p p  t
              if (firstNumber === 12) {
                /*모든 자시 노드를 삭제*/
                while (boxContainer.hasChildNodes()) {
                  boxContainer.removeChild(boxContainer.firstElementChild);
                }

                printContainer(firstNumber - 1, preYear);
                printContainer(firstNumber, preYear);
                printContainer(firstNumber - 11, currYear);

                document.getElementById("year").innerHTML = preYear;
              }
            }
          }
        );
    } else {
      console.log("down");
      /*마우스 휠로 좌우스크롤 이동*/
      $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
      window.scrollTo(viewWidth, 0);
      /*애니메이션*/
      $(this)
        .stop()
        .animate(
          {
            scrollLeft: "+=" + viewWidth / 3 + "px" //스크롤시 왼쪽에서 부터 0px 위치갔다가 스크롤이 돌아온다!
          },
          {
            duration: 1000,
            complete: function() {
              window.scrollTo(viewWidth, 0);
              const boxContainer = document.querySelector(".boxwrap");

              const lastId = boxContainer.lastElementChild.id;

              /* id값을 int로 변경*/
              let lastNumber = parseInt(lastId);

              /*해당 lastId가 12면 END*/
              if (lastNumber < 12) {
                /*타이틀 수정*/
                document.querySelector(".js-month").innerHTML = lastId;

                //boxContainer.lastElementChild.previousSibling.remove();
                //printContainer(lastNumber + 1);
                /*모든 자시 노드를 삭제*/
                while (boxContainer.hasChildNodes()) {
                  boxContainer.removeChild(boxContainer.firstElementChild);
                }
                /* 자시 노드를 추가*/
                printContainer(lastNumber - 1, currentYear);
                printContainer(lastNumber, currentYear);
                printContainer(lastNumber + 1, currentYear);
              } else {
                //다음해
                //10 11 12 (scoll)
                //11,12,1 c c n   t>f
                //1,2,3   n n n  f>t
                if (lastNumber === 1) {
                  /*모든 자시 노드를 삭제*/
                  while (boxContainer.hasChildNodes()) {
                    boxContainer.removeChild(boxContainer.firstElementChild);
                  }

                  printContainer(12, currYear);
                  printContainer(lastNumber, nextYear);
                  printContainer(lastNumber + 1, nextYear);
                }
                //10,11,12 p p p  t
                if (lastNumber === 12) {
                  /*모든 자시 노드를 삭제*/
                  while (boxContainer.hasChildNodes()) {
                    boxContainer.removeChild(boxContainer.firstElementChild);
                  }

                  printContainer(lastNumber - 1, currYear);
                  printContainer(lastNumber, currYear);
                  printContainer(lastNumber - 11, nextYear);

                  document.getElementById("year").innerHTML = nextYear;
                }
              }
            }
          }
        );
    }
  });
});
