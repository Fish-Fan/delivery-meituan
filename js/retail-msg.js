/**
 * Created by yanfeng-mac on 2016/9/28.
 */
(function(){

    function initialize(){
        //设置header宽度
        $(".retail-summary-container").width($(".center-container").width() - 132);
        //菜单首亮
        $(".menu-header-ul li a:first").css("border-bottom","3px solid #fa9700");
        $(".menu-ul li a:first").css("color","#fa9700");
    }
    //窗口改变大小时设置header宽度
    $(window).resize(function(){
        $(".retail-summary-container").width($(".center-container").width() - 132);
    });
    //hover三角
    $(".retail-summary-name-container").mouseenter(function(){
        $(".retail-summary-name-tit").next().replaceWith('<i class="fa fa-angle-up icon"></i>')
        //console.log("111");

    });
    $(".retail-summary-name-container").mouseleave(function(){
        $(".retail-summary-name-tit").next().replaceWith('<i class="fa fa-angle-down icon"></i>')
    });

    function onload(){
        initialize();
    }
    onload();
})();