$(function(){
    // $("a[href^='#']").on('click',function(e){
    //     e.preventDefault();
    //     var target = $($(this).attr("href"));
    //     if(target.length ){
    //         $("html,body").animate({scrollTop: target.offset().top}, 600, "easeInOutExpo")
    //     }
    // });

    //햄버거 메뉴 클릭시 이동하기
    document.querySelectorAll("a[href^='#']").forEach(elem => {
        elem.addEventListener("click", e => {
            e.preventDefault();
            const scr = document.querySelector(elem.getAttribute('href'));
            scr.scrollIntoView({behavior: "smooth"});
        })
    });

    //햄버거 메뉴 접었다 펼치기
    $("#mnav").on("click", function(){
        $(this).toggleClass("active");
        $(".ham_menu").toggleClass("active");
    });
   $(".ham_menu .menu ul li a").on("click",function(){
        $(".ham_menu").removeClass("active");
        $("#mnav").removeClass("active");
   });
   $(window).resize(function(){
       let wWidth = $(window).width();
       if(wWidth > 960){
            $(".ham_menu").removeClass("active");
            $("#mnav").removeClass("active");
       }
   })

    //메인 텍스트 효과
    let txt1 = $(".main_txt").find("h1").text().split("").join("</span><span>");
    txt1 = "<span>"+ txt1 +"</span>";
    $(".main_txt").find("h1").html(txt1);

    
        //메인로딩
    setInterval(start, 2000);
    function start(){
        $("body").addClass("show")
        $(".main_txt").find("h1").find("span").each(function(index){
            setTimeout(function(){
                $(".main_txt").find("h1").find("span").eq(index).addClass("show");
            }, 100*(index+1) );
          });
    }

    $(window).scroll(function(){
        let wScroll = $(this).scrollTop();
        if(wScroll >= $("#about").offset().top - ($(window).height() / 2)){
        $("#about").find("h2").addClass("show");
        }
        if(wScroll >= $("#project").offset().top- ($(window).height() / 2)){
            $("#project").find("h2").addClass("show");
        }
        if(wScroll >= $("#animation").offset().top- ($(window).height() / 2)){
            $("#animation").find("h2").addClass("show");
        }
        if(wScroll >= $("#contact").offset().top- ($(window).height() / 2)){
            $("#contact").find("h2").addClass("show");
        }
        if(wScroll >= $("#last").offset().top- ($(window).height() / 2)){
            $("#last").find(">div").addClass("show");
        }
    });

  //counter
function counter() {
    if ($('.skill .count').size()) {
        $c = $('.skill .count');  //변수

        $c.each(function () {
            var $this = $(this);
            $this.data('target', parseInt($this.html()));
            $this.data('counted', false);
            $this.html('0');
        });

        $(window).on('scroll', function () {
            var speed = 3000;

            $c.each(function (i) {
                var $t = $(this);
                if (!$t.data('counted') && $(window).scrollTop() + $(window).height() >= $t.offset().top) {

                    $t.data('counted', true);

                    $t.animate({
                        dummy: 1
                    }, {
                        duration: speed,
                        step: function (now) {
                            var $this = $(this);
                            var val = Math.round($this.data('target') * now);
                            $this.html(val);
                        },
                        easing: 'easeInOutQuart'
                    });

                    // easy pie
                    $('.pie').easyPieChart({
                        barColor: '#000',
                        trackColor: '#fff',
                        scaleColor: '#030303',
                        scaleLength: 3,
                        lineWidth: 5,
                        size: 190,
                        lineCap: 'round',
                        animate: { duration: speed, enabled: true }
                    });
                }
            });
        }).triggerHandler('scroll');
    }
}
counter()

})