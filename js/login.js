$("[type='button']").click(function(){
    //3:获取用户名和密码
    var u = $("#usename").val();
    var p = $("#usepwd").val();
    console.log(u,p)
    ////4:发送ajax请求
    $.ajax({
        type: 'GET',
        url: 'data/login.php',
        data: {uname:u, upwd:p},
        success: function (data) {
            var rs = parseInt(data);
            console.log(rs)
            if (rs < 0) {
               alert("用户名或密码错误")
            } else {
                //$("#modal").css('display','none');
                //document.body.style.overflow='visible';
                //$('#modal').animate({opacity:'0'},100);
                //$('#main-modal div.photo').animate({width:'0'},100);
                //$('#main-modal div#login').animate({width:'0'},100);
                sessionStorage['loginUname']=u;
                sessionStorage['loginUid']=data;
                location.href='index1.html';
            }
        },
        error: function () {
            alert("响应消息有错！请检查网络");
        }
    });
});