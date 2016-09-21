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
})();
