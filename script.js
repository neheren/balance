
$("document").ready(function(){
    var $upperLine = $('#e_line_1');
    var $middleLine = $('#e_line_2');
    var $underLine = $('#e_line_3');
   
    $(".e_line").fadeIn(500);
        

    $(".e_line").css({
        "-webkit-transform":"translate(0px,0px)",
        "-ms-transform":"translate(0px,0px)",
        "transform":"translate(0px,0px)",
        "height":"0.1vw"
    })

    $middleLine.css({
        "width":"3vw"
    })


})