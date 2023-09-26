const ITEM_LIST = [
    // best
    [
        {item_no: 1, src: '1.jpg', title: '얼핏보면 전등같은 빗자루세트', o_price: 90000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
        {item_no: 2, src: '2.jpg', title: '하얀 원통', o_price: 20000, s_price: 70000, desc: '상품에 대한 설명이 표시됩니다.'}, 
        {item_no: 3, src: '3.jpg', title: '원피스 같지만 알고보면 앞치마', o_price: 30000, s_price: 20000, desc: '상품에 대한 설명이 표시됩니다.'}, 
        {item_no: 4, src: '4.jpg', title: '검정 핸드백 같은 토트백', o_price: 40000, s_price: 40000, desc: '상품에 대한 설명이 표시됩니다.'}, 
        {item_no: 5, src: '5.jpg', title: '상의 같지만 뎅뎅이 하의', o_price: 50000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
        {item_no:6, src: '6.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:7, src: '7.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:8, src: '8.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        
        {item_no:2, src: '2.jpg', title:'더콤마-베스트222', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:1, src: '1.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:3, src: '3.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:8, src: '8.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:4, src: '4.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:6, src: '6.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:7, src: '7.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:5, src: '5.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        
        {item_no:1, src: '1.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:4, src: '4.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:2, src: '2.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:6, src: '6.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:3, src: '3.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:8, src: '8.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'}
    ]
    ,
    // new
    [ 
        {item_no:1, covered_src: '4.jpg', src: '1.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:2, covered_src: '8.jpg', src: '2.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:3, covered_src: '6.jpg', src: '3.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:4, covered_src: '7.jpg', src: '4.jpg', title:'더콤마000-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:5, covered_src: '8.jpg', src: '5.jpg', title:'더콤마333-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:6, covered_src: '2.jpg', src: '6.jpg', title:'더콤마222-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:7, covered_src: '4.jpg', src: '7.jpg', title:'더콤마111-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:8, covered_src: '1.jpg', src: '8.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        
        {item_no:9, covered_src: '7.jpg', src: '4.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:10, covered_src: '8.jpg', src: '5.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:11, covered_src: '2.jpg', src: '6.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:12, covered_src: '4.jpg', src: '7.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:13, covered_src: '1.jpg', src: '8.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
         
    ],
    [],
    [],
    [],
    [],
    []
]

// url 에서 현재 넘어온 cate_no 로 페이지 제목이랑 이미지 띄우기

const menu_array = ['best','new','outer','top','bottom','acc','bag_shoes'];
const title_array = ['BEST ITEM','NEW 5%','OUTER','TOP','BOTTOM','ACC','BAG & SHOES'];
const img_addr = "img/theComma/items/"; 
 
function get_url_info(key) {
    let url =location.href; // 263.theComma(item).html?cate_no=0&item_no=8#with_item
    url = url.split("?")[1] // cate_no=0&item_no=8#with_item
    
    if(url.length > 1) {
        url = url.split("&") // [cateNo=0  ,  item_no=8#with_item]
        for(let i=0; i<url.length; i++) {
            let tmp_url = url[i].split("="); // 0-> cateNo=0 => [cateNo  ,  0#with_item]
                                            // 1-> item_no=8#with_item => [itemNo  ,  8#with_item]

            if(tmp_url[0] == key) {
                return tmp_url[1].split("#")[0]; // [0  ,  with_item]
            }
        }
    }
    else {
        console.log("없어")
        alert("잘못된 접근입니다.");
        location.replace('261.theComma(index).html')
    }
} 

function load_items(cate_no, qty) {  
    let item_length = $(`#${menu_array[cate_no]} .item_container > li`).length;

    
    /*내가 계산한(24번꺼) 개수가 db에 있는거보다 크면 그냥 db의 끝방까지만 불러오고
    작으면 내가 계산한 번째까지 불러와라*/
    let qty_limit = item_length+qty;
    if(item_length+qty > ITEM_LIST[cate_no].length) { 
        qty_limit = ITEM_LIST[cate_no].length 
    } 
    // let qty_limit = (item_length+qty)>ITEM_LIST[cate_no].length?ITEM_LIST[cate_no].length:(item_length+qty)
    for(let i=item_length; i<qty_limit; i++) {
        let item = ITEM_LIST[cate_no][i];
 
        // new 섹션에만 이미지가 두장 들어가기 때문에 for_new에 해당 이미디 넣어놓고 삼항연산자로 cato_no==1 일때만 넣기
        let for_new = '';
        if(cate_no == 1) {
            for_new = `<img src="./img/theComma/items/${menu_array[cate_no]}/${ITEM_LIST[cate_no][i].covered_src}" alt=""> `
        }
            

        let list = `<li class="item ${menu_array[cate_no]}_item_li item_init">
                        <a href="263.theComma(item).html?cate_no=${cate_no}&item_no=${ITEM_LIST[cate_no][i].item_no}">
                            <div class="item_img">
                                <img src="./img/theComma/items/${menu_array[cate_no]}/${ITEM_LIST[cate_no][i].src}" alt=""> 
                                ${cate_no==1?for_new:'' /* 여기가 for_new 쓰는곳 */}
                            </div>
                            <div class="item_info">
                                <div class="item_desc_title">${ITEM_LIST[cate_no][i].title}</div>
                                <div class="origin_price"><del>${ITEM_LIST[cate_no][i].o_price.toLocaleString("ko")}원</del></div>
                                <div class="sale_price">${comma(ITEM_LIST[cate_no][i].s_price)}원</div>
                                <div class="item_desc">${ITEM_LIST[cate_no][i].desc}</div>
                            </div>
                        </a>
                    </li>`;

        $(`#${menu_array[cate_no]} .item_container`).append(list)
    }


}

function comma(num){
    /*  
        / - 정규식의 맨 앞과 끝에 넣음
        \B - 시작과 끝을 말함. EX) 1234 에서 1의 앞 4의 뒤를 의미
             우리는 1234
        (\d{3}) - 숫자 3자리
        +(?!\d) - +는 앞의 표현식이 1회 이상 연속으로 반복
                  x(?!y) - x 뒤에 y가 없는 경우에만 x에 일치
                  여기서 (?!\d) 는 뒤에 더이상 숫자가 없는 경우 라는 뜻
                  (\d{3})+(?!\d) 는 숫자가 3번 나타난다 라는 뜻
        (?=   ) - 앞 뒤 조건 모두 만족 이라는 뜻
                    (\d{3}) 부터 +(?!\d)) 까지 만족할때 라는 뜻
        g - 전역 검색
    */
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
}
 