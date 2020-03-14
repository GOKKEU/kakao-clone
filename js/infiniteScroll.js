/*현재 날짜 정보를 받아온다*/
const date = new Date();
const currentMonth = date.getMonth() + 1;
const currentYear = date.getFullYear();
console.log("현재 날짜 정보" + currentMonth + "," + currentYear + ",");

function myFunction() {
  var touch = e.originalEvent.touches;
  document.querySelector(".boxwrap").style.background = "pink";
}

$(document).ready(function() {
  document.getElementById("year").innerHTML = currentYear;
  printContainer(currentMonth - 1, currentYear);
  printContainer(currentMonth, currentYear);
  printContainer(currentMonth + 1, currentYear);

  //document.querySelector(".boxwrap").addEventListener("touchmove", myFunction);

  const center = document.querySelector(".boxwrap").offsetWidth;
  window.scrollTo(center, 0);
  //console.log("first" + center);
});

function mouseWheelEvent(e) {
  const wheelDelta = e.originalEvent.wheelDelta;

  /*
   div:.calendar ->
   div:.boxwrap  ->  boxwrap의 CSS의 왼쪽 값 (calendarLeftSize):넓이 (leftWidth)
   div:.box      -> box의 넓이 (childWidth)  , 갯수(childLength)

   조건: 
   
   leftWidth <(childLength-1)*  childWidth휠 위로 즉 왼쪽으로 이동)
   containerWidth >(childLength-1)* -childWidth(휠 아래로 즉 오른쪽으로 이동)
   */

  if (wheelDelta > 0) {
    console.log("up");
    window.scrollTo(500, 0);
    /*마우스 휠로 좌우스크롤 이동*/
     //$(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
    /*애니메이션*/
    $(this)
      .stop()
      .animate(
        {
          scrollLeft: 10 + "px" //스크롤시 왼쪽에서 부터 0px 위치로 스크롤이 돌아온다!
        },
        {
          duration: 1000,
          complete: function() {}
        }
      );
  } else {
    /*이벤트*/
    /*마우스 휠로 좌우스크롤 이동*/
    //  $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
  }
}
//마우스 휠 이벤시 시!
$(function() {
  $("body").on("mousewheel", function(e) {
    const boxContainer = document.querySelector(".boxwrap");
    const viewWidth = boxContainer.offsetWidth;

    const currYear = parseInt(document.getElementById("year").innerHTML);
    console.log(currYear);
    const preYear = currYear - 1;
    console.log(preYear);
    const nextYear = currYear + 1;

    // boxContainer.lastElementChild.remove();

    mouseWheelEvent(e);
  });
});
