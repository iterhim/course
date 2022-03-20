
$(document).ready(function(){
    $("#lst").click(function (){
        $("#16").slideToggle("slow");
    });

    let butt = $("#up")
    butt.hide();
    $(document).on("scroll", window, function (){
        if ($(window).scrollTop()>=750){
            butt.show();
            butt.on("click", function (){

            });

        }else {
            $("#up").hide();
        }
    });
    $('a').on('click', function() {

        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, {
            duration: 370,
            easing: "linear"
        });

        return false;
    });
});
