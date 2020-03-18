$.fn.pivot = function(options) {
  // 변수를 선언합니다.

  var $target = $(this);

  var $items = $target.children();

  var $container = $target.wrap("<div></div>").parent();

  var option = { width: 500, height: 450 };

  // 옵션을 처리합니다.

  $.extend(option, options);

  // 스타일을 지정합니다.

  $target.css({

    width: $items.length * option.width,
    height: option.height,
    position: "absolute"

  });

  $items.css({
    float: "left",

    width: option.width,
    height: option.height
  });

  $container.css({
    overflow: "hidden",
    position: "relative",

    width: option.width,
    height: option.height
  });

  // 이벤트를 연결합니다.

  var originalLeft = 0;

  var oldLeft = 0;

  var nowPosition = 0;

  var isDown = false;

  $target.on("mousedown", function(event) {
    oldLeft = originalLeft = event.clientX;

    isDown = true;

    event.preventDefault();
  });

  $target.on("mosemove", function(event) {
    if (isDown) {
      // 변수를 선언합니다.

      var distance = oldLeft - event.clientX;

      oldLeft = event.clientX;

      // 움직입니다.

      $target.animate({ left: "-=" + distance }, 0);

      $target.stop(true);
    }

    event.preventDefault();
  });

  $target.on("mouseup", function(event) {
    // 내부 함수를 선언합니다.

    function movePositon(direction) {
      // 위치를 설정합니다.

      var changePosition = nowPosition + direction;

      if (0 <= changePosition && changePosition < $items.length) {
        nowPosition = changePosition;
      }
    }

    // 요소의 1/4 이상 드래그했을 경우 피벗합니다.

    if (originalLeft - event.clientX > option.width / 4) {
      movePosition(+1);
    } else if (originalLeft - event.clientX < -option.width / 4) {
      movePosition(-1);
    }

    // 이동합니다.

    $target.animate({ left: -nowPostion * option.width }, "fast");

    isDown = false;

    event.preventDefault();
  });
};


$("#id").on('mousewheel',function(e){

    var wheelDelta = e.originalEvent.wheelDelta;

    if(wheelDelta > 0){

        console.log("up");

        $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());

    }else{

    console.log("down");

        $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());

    }

});



출처: https://ys87.tistory.com/entry/JQuery-마우스휠을-이용하여-좌우-스크롤하기 [심심풀이땅콩]