/**********   탑배너   *************/
let tb_curr_idx = 0;
let tb_count = $('.tb_item').length;
$('.tb_item').eq(tb_curr_idx).css({top: 0})
setInterval(function(){
    // 나갈거
    $('.tb_item').eq(tb_curr_idx % tb_count).animate({
        top: '-100%'
    }, 500)

    // 들어올거
    $('.tb_item').eq((tb_curr_idx+1) % tb_count).css({
        top: '100%'
    }).animate({
        top: '0%'
    }, 500)
    tb_curr_idx++;
}, 2000)

/**********   헤더 100% 메뉴   *************/
// .menu_item 에 마우스 올리면 .pan 한테 addClass('pan_active') 하기
$('.menu_item, .pan').hover(function(){

    console.log($(this).prop('class'))

    // 100판 펼치기
    $('.pan').addClass('pan_active')


    /* menu_item에 마우스 올려서 pan 펼쳐놨어도 pan으로 마우스가 이동하면 hover가 풀린다.
    그래서  pan 한테도 똑같이 hover를 먹인다. 대신 pan에 마우스가 올라간 경우에 pan_item은 영향을 받지 않아야 한다.
    */
    // if($(this).prop('class') == "menu_item") {
    if($(this).hasClass('menu_item')) {
    // if($(this).prop('class') != "pan") {
    // if(!$(this).hasClass('pan')) {
        // 판 안에 특정 번째꺼 나타나게 하기 - display: block 
        $('.pan_item').removeClass('pan_active')
        $('.pan_item').eq($(this).index()).addClass('pan_active')
    }
}, function(){
    // 100판 접기
    $('.pan').removeClass('pan_active')
})


/****** 헤더 메뉴 따라다니게 하기 *******/
let h_bot_o_top = $('.h_bot').offset().top - $('.tb_item').height();

$(window).scroll(function(){
    let s_top = $(window).scrollTop();

    if(h_bot_o_top <= s_top) {
        
        // h_bot fixed 로 띄울때 본문 튕김 방지
        if(!$('.h_bot').hasClass('h_bot_active')) {
            $('.wrap').css({
                paddingTop: '+=50px'
            })   
        }

        $('.h_bot').addClass('h_bot_active');

        
    }
    else if(h_bot_o_top > s_top) {
        
        // h_bot 땅에 붙일때 본문 튕김 방지
        if($('.h_bot').hasClass('h_bot_active')) {
            $('.wrap').css({
                paddingTop: '-=50px'
            })   
        }
        
        $('.h_bot').removeClass('h_bot_active')
        
    }
})
