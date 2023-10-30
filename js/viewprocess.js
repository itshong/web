

// 탑버튼

$(window).scroll(function(){
    var wtt = $(this).scrollTop();
    if (wtt > 600) {
        $(".up_button").addClass("bt");
    } else {
        $(".up_button").removeClass("bt");
    }
});

$(".up_button").click(function(){
    $("html").animate({scrollTop:0},500);
});