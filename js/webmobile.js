$("document").ready(function(){





    // let Fullpage = new fullpage(".fullpage",{
    //     sectionsColor: ["#140a42","#f1f0f5","#f1f0f5","#f1f0f5","#f1f0f5","#f1f0f5","#f1f0f5"],
    //     anchors: ["home","about","web","design","contact","fotter"],
    //     navigation: true,
    //     navigationTooltips: ["홈","프로필","웹퍼블리싱","디자인","컨택트","푸터"],
    //     licenseKey: "603D3EBB-D1B84561-B40D98B6-7A87C3D7",
    //     afterLoad: function(origin, destination){
    //         // $("#fp-nav ul li .fp-tooltip").removeClass("on").eq(destination.index).addClass("on")
    //         if(destination.index == 0){
    //             $("#fp-nav ul li .fp-tooltip").eq(0).addClass("on")
                
    //         }
    //         if(destination.index == 1 && pro_chk == false){
    //             skill("#html", 0.7)
    //             skill("#css", 0.8)
    //             skill("#js", 0.6)
    //             skill("#ps", 0.9)
    //             skill("#ai", 0.7)
    //             skill("#of", 0.5)
    //             pro_chk = true
    //         }
    //     },
    //     onLeave: function(origin, destination){
    //         if(destination.index > 0){
    //             $(".header").fadeIn()
                
    //         }else{
    //             $(".header").fadeOut()
                
    //         }
    //         $(".header .nav ul li").removeClass("on").eq(destination.index).addClass("on")
    //         $("#fp-nav ul li .fp-tooltip").removeClass("on").eq(destination.index).addClass("on")
    //     },
    //     responsiveWidth: 1200
    // })

    // let typed = new Typed("#typed1",{
    //     stringsElement: "#typed",
    //     typeSpeed: 100
    // })

    // $(".m-btn, .window, .m-nav ul li").click(function(){
    //     if(!$(".window-content").is(":visible")){
    //         $(".m-btn").toggleClass("on")
    //         $(".m-nav").toggleClass("on")
    //         $(".window").fadeToggle("on")
    //     }
    // })


    // $(".m-nav ul li, .nav ul li").click(function(){
    //     let i = $(this).index();
    //     $("html, body").stop().animate({
    //         scrollTop:$(".section").eq(i).offset().top
    //     })
    // })


    
    $(document).ready(function() {
        $('#fullpage').fullpage({
            //options here
            licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
            navigation: true,  //우측페이저유무
            navigationPosition: 'left', // left,right(default) 페이저 위치
            autoScrolling:true,
            scrollHorizontally: true,
            navigationTooltips: ['01 WEB Redesign', '02 WEB Redesign','03 Mobile APP Design'], //navigation active시 타이틀 노출여부(hover포함)
            showActiveTooltip: true,  //네비게이션 hover(default:false)시 툴팁 표기
            fitToSection: true,
            fitToSectionDelay: 1000, // 섹션 넘어갈 때 걸리는 딜레이 시간
            keyboardScrolling: true, // 키보드 방향키로 스크롤 컨트롤 여부
            animateAnchor: true,
            sectionsColor: ['#000', '#08a0b7', '#6a8cbf'], // 섹션별 컬러
            responsiveWidth: 1200
            
            
        });

        $(".header .header-wrap .nav ul li.on a").addClass()

    // if(!dark_mode){
    //     $("html *").attr("data-dark", "false")
    //     $(".header .etc ul li i").eq(0).removeClass("fa-moon").addClass("fa-sun")
    //     $(".dark-btn i").eq(0).removeClass("fa-moon").addClass("fa-sun")
    //     $(".contact-content .sns ul li").eq(4).find("img").attr("src","images/talk.png");
    // }else{
        
    // }
    });


    
    
    

})