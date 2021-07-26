$(function(){

    $("li.mainLi").mouseover(function(){
        $(this).children("ul.subMenu").stop().slideDown(600);
    });

    $("li.mainLi").mouseout(function(){
        $(this).children("ul.subMenu").stop().fadeOut(200);
    });

});