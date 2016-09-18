(function(){
    function center(){
        //获取窗口高度
        var windowHeight = $(window).height();

        //设置body的高度
        var bodyHeight = windowHeight-44;
        $(".main-body").css("height",bodyHeight + "px");

        //对address进行居中定位
        $(".address").css("top",(bodyHeight-80)/2 + "px");
    }

    function dialog(){
        //对showDialog进行定位
        var showDialogOffsetHeight = $(".address").offset().top + 72;
        var showDialogOffsetWidth = $(".address").offset().left;

        var showDialogOffsetHeight2 = $(".his-address").offset().top+312;
        var showDialogOffsetWidth2 = $(".his-address").offset().left;

        $(".address-dialog").offset({top:showDialogOffsetHeight,left:showDialogOffsetWidth});
        $(".his-address-dialog").offset({top:showDialogOffsetHeight2,left:showDialogOffsetWidth2});

        //对sort-up-container定位
        $(".showIcon:first").offset({top:showDialogOffsetHeight-16,left:showDialogOffsetWidth});
        $(".showIcon:last").offset({top:showDialogOffsetHeight2-16,left:showDialogOffsetWidth2});
        //对sort-up进行定位
        $(".showIcon i").css({
            "display":"block",
            "position": "absolute",
            "left": "60px",
            "top": "3px",
            "font-size": "36px",
            "color": "#fff"
        });

        $(".showIcon").css("display","none");
        $(".address-dialog").css("display","none");
        $(".his-address-dialog").css("display","none");

    }


    function showDia(){
        $(".showIcon:first").css("display","block");
        $(".address-dialog").css("display","block");
    }
    function showDia2(){
        $(".showIcon:last").css("display","block");
        $(".his-address-dialog").css("display","block");
    }
    function hideDia(){
        $(".showIcon").css("display","none");
        $(".address-dialog").css("display","none");
    }
    function hideDia2(){
        $(".showIcon:last").css("display","none");
        $(".his-address-dialog").css("display","none");
    }
    $(".city").click(function(){
        showDia();
    });
    $(".his-address").click(function(){
        showDia2();
    });

    $("body").mouseup(function(e){
        var target = e.target;
        var dialog = $(".address-dialog");
        if(!dialog.is(target) && dialog.has(target).length === 0) {
            hideDia();
            hideDia2();

        }
    });

    //禁用城市列表a标签的默认行为
    function forbiddenA(){
        $(".location-list a").attr("href","javascript:;");
    }

    //城市列表a标签绑定事件
    $(".location-list").on("click","a",function(){
        $(".cityIn:first a").text($(this).text());
    });
    function onload(){
        center();
        dialog();
        forbiddenA();
    }
    onload();
})();
/**
 * Created by yanfeng-mac on 16/9/15.
 */
