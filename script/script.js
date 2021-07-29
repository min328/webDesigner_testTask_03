$(function(){

    // gnb Menu
    $("#headerGnb li.mainLi").mouseover(function(){
        $(this).children("ul.subMenu").stop().fadeIn(300);
    });
    $("#headerGnb li.mainLi").mouseout(function(){
        $(this).children("ul.subMenu").stop().fadeOut(500);
    });

    // setInterval(slideShow, 1000);
    function slideShow() {
        $("div.slideImage").eq(0).fadeOut(
            1000,
            function(){
                $(this).insertAfter("div.slideImage:last-child");
            }
        );
        $("div.slideImage").eq(1).fadeIn(1000);
    }

    }); // 기본 template