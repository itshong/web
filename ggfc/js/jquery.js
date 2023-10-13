var bw = $("body").width(); 

$(window).resize(function(){
    bw = $("body").width();
    console.log(bw);
});

// footer .site-link 
$(".site").click(function(){
    $(this).next().addClass("on", function(){
    });
});

$(".f-site").on("mouseleave focusout", function(){
    $(".site-link").removeClass("on"); 
});

// footer 탑버튼
$(window).scroll(function(){
    var wtt = $(this).scrollTop();
    if (wtt > 400) {
        $("footer > button").addClass("bt");
    } else {
        $("footer > button").removeClass("bt");
    }
});

$("footer > button").click(function(){
    $("html").animate({scrollTop:0},500);
});


/* pc 버전 */

$(".gnb").on("mouseover focusin",function(){
    if (bw > 800) {
        $(".tab").slideDown(300);
    }
});

$(".tab").on("mouseleave focusout",function(){
    if (bw > 800) {
        $(this).slideUp(300);
    }
});



/* mobile 버전 */

$(".hamburger").click(function(){
    $(this).toggleClass("is-active");
    $(".gnb").toggleClass("on");
    $(".snb").toggleClass("on");
  });

$(".gnb > li").has("ul").children("a").click(function(){
    if (bw < 800) {
        $(".gnb ul").slideUp(300);
        $(this).next().stop().slideToggle(300);
        
        return false; 
    }
}); 