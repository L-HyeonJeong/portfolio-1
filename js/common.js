$("document").ready(function(){

    var $mousePointer = $('#mouse-pointer'),
        $clickElements = $('a');

    function moveCursor(e){
        $mousePointer.css({
            "left": e.pageX,
            "top": e.pageY
        })
    }
    $clickElements.mouseenter(function(){
        // console.log('마우스온');
        $mousePointer.addClass('hover');
    })
    $clickElements.mouseleave(function(){
        // console.log('마우스오프');
        $mousePointer.removeClass('hover');
    })
    $(window).on('mousemove', moveCursor);



    







    AOS.init();
            new WOW({
                animateClass: "animate__animated"
            }).init();
            
    



    
});