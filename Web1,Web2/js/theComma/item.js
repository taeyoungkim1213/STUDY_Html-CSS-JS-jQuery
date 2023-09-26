$(document).ready(function(){
    let cate_no = get_url_info("cate_no");
    let item_no = get_url_info("item_no");

    console.log(ITEM_LIST[cate_no][item_no-1])
    
    const ITEM = ITEM_LIST[cate_no][item_no-1];
    

    let list = `<div class="big_img">
                    <img src="./img/theComma/items/${menu_array[cate_no]}/${ITEM.src}" alt="">
                    <div class="magnifier" style="background: url('./img/theComma/items/${menu_array[cate_no]}/${ITEM.src}')"></div>
                </div>
                <div class="item_info">
                    <div class="item_title">${ITEM.title}</div>                    
                    <div class="item_opt">
                        <table class="item_sec1">
                            <tbody>
                                <tr>
                                    <td class="tb_title">소비자가</td>
                                    <td><del>${ITEM.o_price.toLocaleString("ko")}원</del></td>
                                </tr>
                                <tr>
                                    <td class="tb_title">판매가</td>
                                    <td class="tb_s_price">${ITEM.s_price.toLocaleString("ko")}원</td>
                                </tr>
                                <tr>
                                    <td class="tb_title">배송비</td>
                                    <td>
                                        <select class="pay_method">
                                            <option value="">주문시 결제(선결제)</option>
                                            <option value="">수령시 결제(착불)</option>
                                        </select>
                                        <div>2,500원 (3,000,000원 이상 구매 시 무료)</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="tb_title">적립금</td>
                                    <td>10,000원(20%)</td>
                                </tr>
                            </tbody>
                        </table>

                        <table class="item_sec1">
                            <tbody>
                                <tr>
                                    <td>색상</td>
                                    <td>
                                        <div class="color_box_container">
                                            <div class="color_box">
                                                <div class="cb_black">black</div>
                                            </div>
                                            <div class="color_box">
                                                <div class="cb_white">white</div>
                                            </div>
                                            <div class="color_box">
                                                <div class="cb_gray">gray</div>
                                            </div>
                                        </div>
                                        <div class="div">[필수] 옵션을 선택해 주세요</div>
                                    </td>
                                </tr> 
                            </tbody>
                        </table> 
                        <div class="min_limit">(최소주문수량 1개 이상)</div>
                        <div class="sel_opt_container">
                            
                        </div>
                        <div class="total_price_box">
                            TOTAL: <span class="total_price">0원</span> (0개)
                        </div>

                        <div class="btn_box">
                            <div class="btn_buy_it_now">BUY IT NOW</div>
                            <div class="btn_add_cart">ADD TO CART</div>
                            <div class="btn_wish_list">WISH LIST</div>
                        </div>
                        
                    </div>`;

    $('.detail_area').prepend(list)


    // 색 옵션 이미 선택해놨었는지 확인하는 용도
    let btn_chk = [false, false, false]; 
    // $('.color_box').click(function(){
    $(document).on('click', '.color_box', function(){
        if(!btn_chk[$(this).index()]) {

            btn_chk[$(this).index()]=true;

            let sel_opt = `<div class="opt_item">
                                <div class="opt_name">
                                    <div>마켓디자인</div>
                                    <div>-${$(this).text()}</div>
                                </div>
                                <div class="opt_qty">
                                    <input type="button" value="-" class="btn_qty btn_minus">
                                    <input type="text" value="1" class="txt_qty">
                                    <input type="button" value="+" class="btn_qty btn_plus">

                                    <img src="img/theComma/product/btn_price_delete.gif" alt="" class="btn_close_opt">
                                    <input type="hidden" value="${$(this).index()}" class="opt_order">
                                    
                                </div>
                                <div class="opt_price">
                                    <div>${$('.tb_s_price').text()}</div>
                                    <div>(적립 10,000원)</div>
                                </div>
                            </div>`;

            $('.sel_opt_container').append(sel_opt)
            
        
            total_price();
        }
        else {
            alert("이미 선택한 옵션 입니다.")
        }
    })

    $(document).on('click', '.btn_plus', function(){
        let tmp_qty = +$(this).prev('.txt_qty').val()  + 1  
        $(this).prev('.txt_qty').val(tmp_qty)
        
        total_price();
    })
    $(document).on('click', '.btn_minus', function(){
        if(+$(this).next('.txt_qty').val()  - 1  > 0) {
            let tmp_qty = +$(this).next('.txt_qty').val()  - 1  
            $(this).next('.txt_qty').val(tmp_qty)

        
            total_price();
        }
    })
    
    $(document).on('click', '.btn_close_opt', function(e){
        $(this).parent().parent('.opt_item').remove();

        console.log(btn_chk)
        let tmp_idx = $(this).next().val(); // 현재 클릭한 X 다음 요소(몇번째꺼냐 btn_chk = [false, false, false]; )
        btn_chk[tmp_idx] = false;
        console.log(btn_chk)
        
        total_price();
    })

    function total_price() {
        
        let total_price = 0;

        for(let i=0; i<$('.txt_qty').length; i++) {
            console.log($('.txt_qty').eq(i).val() , $('.tb_s_price').text().replace("원","").replace(",","")    )
            total_price += $('.txt_qty').eq(i).val() * $('.tb_s_price').text().replace("원","").replace(",","")    
        }
        $('.total_price').text(total_price.toLocaleString("ko")+"원")
        

    }


    // 돋보기 움직임 감지
    $(document).on('mousemove', '.big_img', function(event){
        // 부모 영역내 마우스 위치 찾기
        let mouseX = event.pageX - $('.big_img').offset().left;
        let mouseY = event.pageY - $('.big_img').offset().top;

        // 마우스가 돋보기 가운데 오기 하기(transform: translate(-50%, -50%) 나 마찬가지)
        let posx = mouseX - $('.magnifier').width() / 2;
        let posy = mouseY - $('.magnifier').height() / 2;

        // 배경 이미지가 원의 가운데 오게 하기
        let bg_x = -mouseX + $('.magnifier').width() / 2;
        let bg_y = -mouseY + $('.magnifier').height() / 2;
        

        $('.magnifier').css({
            left: posx,
            top: posy,

            backgroundPosition: `${bg_x}px ${bg_y}px`,
            backgroundSize: `${$('.big_img').width() }px ${$('.big_img').height() }px`,
        })

        
        console.log(event.offsetX, event.offsetY) 
    });

    
    // $(document).on('mouseleave', '.big_img', function(event){
    //     $('.magnifier').css({
    //         opacity: 0
    //     })
    // });
    // $(document).on('mouseenter', '.big_img', function(event){
    //     $('.magnifier').css({
    //         opacity: 1
    //     })
    // });

})