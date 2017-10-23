var menuLink;

$("document").ready(function(){
    var $upperLine = $('#e_line_1');
    var $middleLine = $('#e_line_2');
    var $underLine = $('#e_line_3');
   
        
    $(".logo").css({"opacity": "1"});

    $(".logo").css({
        "-webkit-transform":"translate(0px,0px)",
        "-ms-transform":"translate(0px,0px)",
        "transform":"translate(0px,0px)",
    })
    
    $(".e_line").css({
        "opacity": 1,
        "-webkit-transform":"translate(0px,0px)",
        "-ms-transform":"translate(0px,0px)",
        "transform":"translate(0px,0px)",
        "height":"0.1vw",
    })

    $middleLine.css({
        "width":"3vw"
    })

    $("body").css({"background-color":"#101010"})




    scrollLink("#menu-link", "#menu-placement")
    scrollLink("#back-link", ".link-menu")
    menuLink = $("#menu-placement");
})


$(window).scroll(function(){
    var offsetY = menuLink.offset().top;
    if(window.scrollY > offsetY -200){
        var menuItems = $("td");
        menuItems.each(function(element) {
            setTimeout(function(){
                $(menuItems[element]).css({"opacity":1, "border-bottom": "1px solid rgba(255, 255, 255, 0.7)"});
            }, element*50)
        }, this);
    }
    forceLeft =70 - (offsetY - window.scrollY)/20;
    forceLeft = (forceLeft < 50) ? forceLeft : 50; 
    console.log(forceLeft)
    $("#left").animate({
        "left" : forceLeft +"%"
    }, 10)
    $("#right").animate({
        "left" : 100-forceLeft +"%"
    }, 10)


})


function scrollLink(linkObj, scrollToObj){
	$(linkObj).click(function() {
        $('html, body').animate({
            scrollTop: $(scrollToObj).position().top
        }, 1000, "easeInOutExpo");
	});
}