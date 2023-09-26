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



/**********   레이어팝업   *************/
// 버튼6개에 호버하면 해당꺼 큰 이미지 나오기
$('.popup_img').eq(0).fadeIn(0);
$('.popup_btn').mouseenter(function(){
    $('.popup_img').fadeOut(200);
    $('.popup_img').eq($(this).index()).stop(true).fadeIn(200);
})

$('.close_popup').click(function(){
    // $('.layer_popup').remove();
    $('.layer_popup').css({
        display: 'none'
    })
})

$('.close_for_today').click(function(){
    setCookie('layer_cookie','true', 1)

    $('.layer_popup').css({
        display: 'none'
    })
})


// 쿠키 읽고
let result_cookie = getCookie("layer_cookie"); // 내가 찾을 쿠키의 이름(abc)
console.log("result_cookie: "+ result_cookie)
if(result_cookie != null) {
    console.log("쿠키 있음")
    $('.layer_popup').css({
        display: 'none'
    })
    // $('.layer_popup').remove();
} 

// 쿠키 읽기
function getCookie(c_name) {
    let tmp_cookie = document.cookie.split(";"); 
    console.log(tmp_cookie)
    
    for(let i=0; i<tmp_cookie.length; i++) { 
        let tmp = tmp_cookie[i].split("=");      

        if(tmp[0].trim() == c_name) {
            console.log("같아유")
            return unescape(tmp[1]); 
        }
    }
    return null;
}
// 쿠키 생성
function setCookie( name, value, exp) {
    let dt = new Date();
    dt.setTime(dt.getTime() + (1000 * 10 * exp))
    // dt.setTime(dt.getTime() + (1000*60*60*24 * exp))

    console.log(`${name}=${value};expires=${dt.toUTCString()};path=/`)

    document.cookie = `${name}=${value};expires=${dt.toUTCString()};path=/`
}

// 레이어팝업 끌고 다니기
let mouseX = 0;
let mouseY = 0;
$('.layer_popup').mousedown(function(event){
    // event.preventDefault();

    // 화면 왼쪽 위 기준 마우스 좌표 구하기
    mouseX = event.clientX - $('.layer_popup').position().left;
    mouseY = event.clientY - $('.layer_popup').position().top;

    $(document).on('mousemove', function(event){
        let m_x = event.clientX;
        let m_y = event.clientY;
 

        $('.layer_popup').css({
            left: m_x - mouseX,
            top: m_y - mouseY
        })
    });    
});

$(document).mouseup(function(event){
    $(document).off('mousemove')
});


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
