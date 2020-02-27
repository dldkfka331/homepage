
/* 레이어 팝업 */
$(".ON").click(function(e){
    e.preventDefault();
    $("#layer").css("display","block")
});
$(".exit").click(function(e){
    e.preventDefault();
    $("#layer").css("display","none")
});

/* 탭메뉴 */
let tBtn = $(".news .main > li");
let tList= $(".sub >ul ");
tBtn.click(function(e){
    e.preventDefault();
    let target = $(this);
    let index = target.index();
    tBtn.removeClass();
    target.addClass("active");
    tList.css("display","none");
    tList.eq(index).css("display","block");
});

/* 스와이퍼 */
var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 10,
  })