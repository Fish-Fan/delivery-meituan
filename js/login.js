/**
 * Created by yanfeng-mac on 16/9/18.
 */
(function(){
    var flag = true;
    $(".switch-model").click(function(){
        if(flag){
            $(".login-header i").replaceWith("<i class='fa fa-mobile'></i>");
            $(".input-group:first").replaceWith('<div class="input-group"><input type="text" class="count-login-input" placeholder="手机号/用户名/邮箱"><i class="fa fa-user"></i></div>')
            $(".input-group:last").replaceWith('<div class="input-group"><input type="password" class="count-ps-input" placeholder="密码"><i class="fa fa-lock"></i></div>');
            flag = false;
        }
        else {
            $(".login-header i").replaceWith("<i class='fa fa-user'></i>");
            $(".input-group:first").replaceWith('<div class="input-group"><input type="text" id="cp-input" placeholder="请输入手机号,未注册将自动注册"><i class="fa fa-mobile"></i><button class="msg-get">免费获取手机动态码</button></div>');
            $(".input-group:last").replaceWith('<div class="input-group"><input type="text" placeholder="动态码" id="num-input"><i class="fa fa-unlock" style="font-size: 20px;top: 8px"></i></div>');
            flag = true;

        }
    });
    $("form").on("focus","input",function(){
        $(this).css("border-color","#FFD705");
        console.log("success");
    });
    $("form").on("blur","input",function(){
        $(this).css("border-color","#aaa");
    });
})();