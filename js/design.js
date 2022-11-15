$("documnet").ready(function(){
    // $(".m-btn").click(function(){
    //     $(this).toggleClass("on")
    //     $(".m-nav").toggleClass("on")
    //     $(".window").fadeToggle("on")
    // })

    // $(".m-btn, .window").click(function(){
    //     $(".m-btn").toggleClass("on")
    //     $(".m-nav").toggleClass("on")
    //     $(".window").fadeToggle("on")
    // })

    $(".m-btn, .window").click(function(){
        if(!$(".window-content").is(":visible")){
            $(".m-btn").toggleClass("on")
            $(".m-nav").toggleClass("on")
            $(".window").fadeToggle("on")
        }
    })


    const work_img_content = [
        // "../images/파일명.확장자",
        // "../images/파일명.확장자",
        // "../images/파일명.확장자",
        // "../images/파일명.확장자"
        "../images/design/lotion.jpg",
        "../images/design/suncushion.jpg",
        "https://via.placeholder.com/1200x5000/ca9",
        "https://via.placeholder.com/1200x5000/8e9",
        "https://via.placeholder.com/1200x5000/6a9",
        "https://via.placeholder.com/1200x5000/6ff"
    ]


    $(".content .design .work-content").click(function(){
        let i = $(this).index();
        $(".window").fadeIn()
        $(".window-content").fadeIn().scrollTop(0)
        
        if(i == 1 || i == 3){
            $(".window-content").css("height", "auto")
        }else{
            $(".window-content").css("height", "100%")
        }

        $(".window-content img").attr("src", work_img_content[i])
        $("html, body").css("overflow","hidden")

    })
    
    $(".window, .window-content i").click(function(){
        $(".window").fadeOut()
        $(".window-content").fadeOut()
        $("html, body").css("overflow", "visible")
    })




    let close = parseInt($(".window-content").css("top"))

    $(".window-content").scroll(function(){
        $(".window-content i").css("top", close+$(".window-content").scrollTop()+"px")
    })






        /*
        해당 컨텐츠의 스크롤 이벤트이냐, 전체 스크롤 이벤트이냐를 먼저 체크!
        scroll event > 스크롤바의 위치에 따라 영향을 주는 이벤트
        전체 스크롤 이벤트 선택자 > window 선택자
        해당 컨텐츠의 이벤트 선택자 > css 선택자
        전체 스크롤 이벤트 선택자인 window의 경우 문자열이 아니므로 "" 혹은 ''를 입력해서는 안 된다.
        */
    
        let floating_top = parseInt($(".floating").css("top"));
        // parseInt - 해당 데이터의 값 중 다른 값을 모두 제외하고 오로지 수치만 가지고 오는 속성
        // 위 예제 기준으로 floating top 값은 100px이지만, px 글자를 잘라내고 100이라는 숫자 데이터만 가져온다.
    
        
        $(window).scroll(function(){
            let pos = $(window).scrollTop();
            let current = (pos / ($(document).outerHeight() - $(window).height())) * 100;
            // outerHeight - 보더를 포함한 세로 길이값
            // $(window).height() - 현재 전체 세로길이값
            
            $(".bar").width(current+"%")
    
        
        })








    var menu = ['01 상세페이지 디자인', '02 배너디자인', 'Slide 3']
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 100,
        centeredSlides: true,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
        },
        mousewheel: true,
        pagination: {
        el: '.swiper-pagination',
			clickable: true,
            renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
    },
    });
    





        
    
    
})


