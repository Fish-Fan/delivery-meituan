/**
 * Created by yanfeng-mac on 16/9/20.
 */
(function(){
    //为筛选条件列表绑定事件
    $(".discount-filter-ul label").click(function(){
        if($(this).children("input").prop("checked")){
            $(this).children("input").prop("checked",false);
            $(this).css("color","#898989");
        }
        else {
            $(this).children("input").prop("checked",true);
            $(this).css("color","#fa9700");
        }

    });
    //价格筛选变化事件
    $(".price-filter-ul li").click(function(){
        $(".price-filter").text($(this).text());
    });
    //商家详细信息浮动框
    $(".delivery-block").mouseenter(function(){
        if($(this).is(".delivery-block-container .delivery-block:last-child")){
            $(this).append('<div class="hover-container-reverse"><i class="fa fa-sort-asc fa-rotate-90"></i><div class="hover-msg-container"><div class="hover-msg-header">商家信息</div><div class="hover-msg-body"><p class="hover-msg"> <i class="icon i-pay inline-block"></i> 该商家支持在线支付</p> <p class="hover-msg"> <i class="icon i-first inline-block"></i> 新用户首次下单,立减12元 <span class="highlight">(手机客户端专享)</span></p><p class="hover-msg"> <i class="icon i-cut inline-block"></i> 满10减3,满20减4 <span class="highlight">(手机客户端专享)</span></p></div><div class="hover-msg-footer"><div class="hover-msg-footer-tit">商家公告</div><div class="hover-retail-msg">本店多年经营大理米线,酸辣粉。味道绝对正宗,小区不送上楼,谢谢理解。感谢每位顾客的光临</div></div></div></div>');
        }
        else {
            $(this).append('<div class="hover-container"><i class="fa fa-sort-asc fa-rotate-270"></i><div class="hover-msg-container"><div class="hover-msg-header">商家信息</div><div class="hover-msg-body"><p class="hover-msg"> <i class="icon i-pay inline-block"></i> 该商家支持在线支付</p> <p class="hover-msg"> <i class="icon i-first inline-block"></i> 新用户首次下单,立减12元 <span class="highlight">(手机客户端专享)</span></p><p class="hover-msg"> <i class="icon i-cut inline-block"></i> 满10减3,满20减4 <span class="highlight">(手机客户端专享)</span></p></div><div class="hover-msg-footer"><div class="hover-msg-footer-tit">商家公告</div><div class="hover-retail-msg">本店多年经营大理米线,酸辣粉。味道绝对正宗,小区不送上楼,谢谢理解。感谢每位顾客的光临</div></div></div></div>');

        }
    });
    $(".delivery-block").mouseleave(function(){
        if($(this).has(".hover-container")){
            $(".hover-container").remove();
        }
        if($(this).has(".hover-container-reverse")){
            $(".hover-container-reverse").remove();
        }
    });

    //scroll事件
    $(document).scroll(function(){
        var scrollHeight = $(".main-body").offset().top;
        var scrollTop = $(document).scrollTop();
        if(scrollTop > scrollHeight){
              $(".header-fix").slideDown();

        }
        else {
            $(".header-fix").slideUp();
        }
    });






})();
