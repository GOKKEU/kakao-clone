$(function(){
    var d = false;
    $("html, body").on('mousewheel DOMMouseScroll', function(e) {
        var E = e.originalEvent;
        delta = 0;
        if (E.detail) {
            delta = E.detail * -40;
        }else{
            delta = E.wheelDelta;
        };

        var a = parseInt($("ul").css("left"));
        var b = $("li").width();
        var c = $('li').length;

        if(delta < 0 && a > (c-1)*-b && !d){
            // 마우스 휠을 아래로 내렸을 경우
            d = true;
            $('ul').stop().animate({
                "left": a += -b
            },800,function(){
                d = false;
            });
        };
        if(delta > 0 && a < 0 && !d){
            // 마우스 휠을 위로 올렸을 경우
            d = true;
            $('ul').stop().animate({
                "left": a += b
            },400,function(){
                d = false;
            });
        };
    });
});