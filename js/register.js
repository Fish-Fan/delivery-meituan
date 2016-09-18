/**
 * Created by yanfeng-mac on 16/9/17.
 */
(function(){
    function load(){
        $(".reg-failed").css("display","none");
        $(".reg-success").css("display","none");
    }
    //清空焦点框之外的提示信息
    $("input").focus(function(){
        $(this).next(".reg-failed").css("display","none").next(".reg-success").css("display","none");
        //$(this).next().next(".reg-success").css("display","none");

    });
    //验证手机号
    $("#cp-input").blur(function(){
        var reg = /^0?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/;
        if(reg.test($(this).val())){
            $(this).next().next(".reg-success").css("display","inline-block");
        }
        if($(this).val() == ""){
            $(this).next(".reg-failed").css("display","inline-block");
        }
    });
    //延时发送信息
    var time = 10;
    function timefun(){
        if(time > 0){
            time--;
            $(".msg-get").text(time+"s后可以重新获取");
            var timer = setTimeout(timefun,1000);
        }
        else {
            clearTimeout(timer);
            $(".msg-get").text("重新获取");
            $(".msg-get").css({"background-color":"#e9e9e9","color":"#333"});
        }
    }
    $(".msg-get").click(function(){
        time = 10;
        $(this).css({"background-color":"#eee","color":"#999"});
        setTimeout(timefun,1000);

    });
    //验证密码强度
    $("#ps-input").keyup(function(){
        var reg1 = /^(?:\d+|[a-zA-Z]+|[!@#$%^&*]+)$/;
        var reg2 = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/;
        var reg3 = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![\d!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/;
        var value = $(this).val();

        if(reg1.test(value)){
            $(".ps-strong li:first").css("background-color","#CC0E0E").next().css("background-color","#eee").next().css("background-color","#eee");
        }
        if(reg2.test(value)){
            $(".ps-strong li:not(:last)").css("background-color","#ff8900").next(".ps-strong li:last").css("background-color","#eee");
        }
        if(reg3.test(value)){
            $(".ps-strong li").css("background-color","#5bab3c");
        }
        if(value == ""){
            $(".ps-strong li").css("background-color","#eee");
        }
    });
    //二次确认密码
    $("#ps-confirm").blur(function(){
        if($("#ps-input").val() != $("#ps-confirm").val()){
            $(this).next(".reg-failed").css("display","inline-block");
        }
        else {
            if($(this).val() != ""){
                $(this).next().next(".reg-success").css("display","inline-block");
            }

        }
    });

    //主函数
    function start(){
        load();
    }
    start();

})();
