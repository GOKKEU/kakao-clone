function myFunction() {
  var touch = e.originalEvent.touches;

  document.querySelector(".boxwrap").style.background = "pink";
  //box에
}

$(document).ready(function() {
  printContainer(currentMonth - 1);
  printContainer(currentMonth);
  printContainer(currentMonth + 1);

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

    console.log(viewWidth);
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
            duration: 1200,
            complete: function() {
              window.scrollTo(viewWidth, 0);

              const firstId = boxContainer.firstElementChild.id;

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
                printContainer(firstNumber - 1);
                printContainer(firstNumber);
                printContainer(firstNumber + 1);
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
                printContainer(lastNumber - 1);
                printContainer(lastNumber);
                printContainer(lastNumber + 1);
              }
            }
          }
        );
    }
  });
});
