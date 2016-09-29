//设置宽度
var widthUl = $(".footer-ul").width();
$(".footer-ul .footer-ul-last-li").width(widthUl*0.4-163);

//关闭下载手机客户端
$(".download-client-container i:last").click(function(){
    $(this).parent().remove();
});
//返回页面顶部
$(".scrollTop-container").click(function(){
    $("html,body").animate({
            //获取要滚动到的节点距文档(document)顶部的位置
            scrollTop:0
        },
        //定义动画执行的时间
        500
    );
});/**
 * Created by yanfeng-mac on 2016/9/28.
 */
