const boxContainer = document.querySelector(".boxwrap");

window.onscroll = function() {
  var elm = ".box";
  $(elm).each(function(index) {
    // 개별적으로 Wheel 이벤트 적용

    $(this).on("mousewheel DOMMouseScroll", function(e) {
      e.preventDefault();
      var delta = 0;
      if (!event) event = window.event;

      if (event.wheelDelta) {
        delta = event.wheelDelta / 120;
        if (window.opera) delta = -delta;
      } else if (event.detail) delta = -event.detail / 3;

      var moveTop = $(window).scrollLeft();
      var elmSelecter = $(elm).eq(index);
      // 마우스휠을 위에서 아래로
      if (delta < 0) {
        console.log("scroll");
        if ($(elmSelecter).next() != undefined) {
          try {
            moveTop = $(elmSelecter)
              .next()
              .offset().left;
          } catch (e) {}

          const num = document.querySelector(".boxwrap").lastElementChild.id;

          if (num > 12) {
            return;
          }
          if (document.body.offsetWidth == $(window).scrollLeft()) {
            console.dir(num + "/");
            const number = num - 1;
            document.getElementById(number.toString()).remove();

            printContainer(num + 1);
            window.scrollTo(0, 0);
          }
        }
        // 마우스휠을 아래에서 위로
      } else {
        if ($(elmSelecter).prev() != undefined) {
          try {
            moveTop = $(elmSelecter)
              .prev()
              .offset().left;
          } catch (e) {}
        }
      }

      // 화면 이동 0.8초(800)
    });
  });
};
