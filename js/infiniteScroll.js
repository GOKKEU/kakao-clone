function myFunction() {
  document.querySelector(".boxwrap").style.background = "pink";
}

$(document).ready(function() {
  printContainer(currentMonth);
  printContainer(currentMonth + 1);
  document.querySelector(".boxwrap").addEventListener("touchmove", myFunction);

  console.log("fist");
});

//마우스 휠 이벤시 시!
$(function() {
  $("html, body").on("mousewheel DOMMouseScroll", function(e) {
    var wheelDelta = e.originalEvent.wheelDelta;

    if (wheelDelta > 0) {
      console.log("up");
      $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());

      /*애니메이션*/
      $(this)
        .stop()
        .animate(
          {
            scrollLeft: -20 + "px" //스크롤시 왼쪽에서 부터 0px 위치로 스크롤이 돌아온다!
          },
          {
            duration: 1000,
            complete: function() {
              const boxContainer = document.querySelector(".boxwrap");

              const firstId = boxContainer.firstElementChild.id;

              /* id값을 int로 변경*/
              let firstNumber = parseInt(firstId);
              console.log(firstNumber + "firstID");

              if (firstNumber > 1) {
                /*타이틀 수정*/
                document.querySelector(".js-month").innerHTML = firstNumber - 1;
                /*모든 자시 노드를 삭제*/
                while (boxContainer.hasChildNodes()) {
                  boxContainer.removeChild(boxContainer.firstElementChild);
                }
                /* 자시 노드를 추가*/
                printContainer(firstNumber - 1);
                printContainer(firstNumber);
              }
            }
          }
        );
    } else {
      console.log("down");
      /*마우스 휠로 좌우스크롤 이동*/
      $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());

      /*애니메이션*/
      $(this)
        .stop()
        .animate(
          {
            scrollLeft: 20 + "px" //스크롤시 왼쪽에서 부터 0px 위치로 스크롤이 돌아온다!
          },
          {
            duration: 1000,
            complete: function() {
              const boxContainer = document.querySelector(".boxwrap");

              const lastId = boxContainer.lastElementChild.id;

              /* id값을 int로 변경*/
              let lastNumber = parseInt(lastId);

              /*해당 lastId가 12면 END*/
              if (lastNumber < 12) {
                /*타이틀 수정*/
                document.querySelector(".js-month").innerHTML = lastId;

                boxContainer.lastElementChild.previousSibling.remove();
                printContainer(lastNumber + 1);
              }
            }
          }
        );
    }
  });
});
