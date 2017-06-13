(function(){
    $("[type='submit']").click(function(){
        //3:获取用户名和密码
        var u = $("#usename").val();
        var p = $("#usepwd").val();
        ////4:发送ajax请求
        $.ajax({
            type: 'POST',
            url:'data/login.php',
            data:{uname:u, upwd:p},
            success: function(data){
                console.log(data);
                var rs = parseInt(data);
                console.log(rs)
                if (rs < 0) {
                    alert("用户名或密码错误")
                } else {
                    $("#modal").css('display','none');
                    document.body.style.overflow='visible';
                    $('#modal').animate({opacity:'0'},100);
                    $('#main-modal div.photo').animate({width:'0'},100);
                    $('#main-modal div#login').animate({width:'0'},100);
                    sessionStorage['loginUname']=u;
                    sessionStorage['loginUid']=data;
                }
            },
            error: function () {
                alert("响应消息有错！请检查网络");
            }
        });
    });
    //绑定退出事件
    $("#nav-parent").on('click','a.exit',function(e){
        e.preventDefault();
        sessionStorage['loginUname']="";
        sessionStorage['loginUid']="";
        location.href='login.html';
    })
})()
