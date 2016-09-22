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
    $(".price-filter-ul li").click(function(){
        $(".price-filter").text($(this).text());
    });

    $(".delivery-block").mouseenter(function(){
        $(this).append('<div class="hover-container"><i class="fa fa-sort-asc fa-rotate-270"></i><div class="hover-msg-container"><div class="hover-msg-header">商家信息</div><div class="hover-msg-body"><p class="hover-msg"> <i class="icon i-pay inline-block"></i> 该商家支持在线支付</p> <p class="hover-msg"> <i class="icon i-first inline-block"></i> 新用户首次下单,立减12元 <span class="highlight">(手机客户端专享)</span></p><p class="hover-msg"> <i class="icon i-cut inline-block"></i> 满10减3,满20减4 <span class="highlight">(手机客户端专享)</span></p></div><div class="hover-msg-footer"><div class="hover-msg-footer-tit">商家公告</div><div class="hover-retail-msg">本店多年经营大理米线,酸辣粉。味道绝对正宗,小区不送上楼,谢谢理解。感谢每位顾客的光临</div></div></div></div>');
    });
    $(".delivery-block").mouseleave(function(){
        if($(this).has(".hover-container")){
            $(".hover-container").remove();
        }
    });






})();
