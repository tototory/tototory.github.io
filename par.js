$(document).ready(function(){
    var ht=parseInt($(window).height());
    $(window).on("mousewheel", function(e){
        if(e.originalEvent.wheelDelta < 0){  //아래로 스크롤
            $("html, body").not(":animated").animate({scrollTop:"+="+ht+"px"}, 800);
        } else {  //위로 스크롤
            $("html, body").not(":animated").animate({scrollTop:"-="+ht+"px"}, 800);

        }
        return false;
    });
});