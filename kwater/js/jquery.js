var bw = $("body").width(); 

$(window).resize(function(){
    bw = $("body").width();
    console.log(bw);
});


// footer .site-link 탭

$(".site > a").click(function(){
    $(this).next().addClass("on", function(){
    });
    $(this).children("img").attr("src","images/relate_site_arrow.png");
});

$(".site").on("mouseleave focusout", function(){
    $(".site-link").removeClass("on"); 
    $(this).find("img").attr("src","images/relate_site_arrow_d.png");
});


// 탑버튼

$(window).scroll(function(){
    var wtt = $(this).scrollTop();
    if (wtt > 500) {
        $("#main button").addClass("bt");
    } else {
        $("#main button").removeClass("bt");
    }
});

$("#main button").click(function(){
    $("html").animate({scrollTop:0},500);
});


/* pc 버전 */

$(".gnb > li > a").on("mouseover focusin",function(){
    if (bw > 800) {
        $(".hidden").slideDown(300);
    }
});

$(".gnb").on("mouseleave focusout",function(){
    if (bw > 800) {
        $(".hidden").slideUp(300);
    }
});



/* mobile 버전 */

$(".hamburger").click(function(){
    $(this).toggleClass("is-active");
    $(".gnb").toggleClass("left");
  });

$(".gnb > li").has("ul").children("a").click(function(){
    if (bw < 800) {
        $(".gnb ul").slideUp(300);
        $(this).next().stop().slideToggle(300);
        
        return false; 
    }
}); 