+function(){
    //引用头部信息
    $("#nav-parent").load("data/header.php",function(){
        if(sessionStorage['loginUname']){
            $('a.a-register').css('display','none');
            $('#pleaselogin').css('display','none');
            $('a.welcome').css('display','block').html('欢迎回来'+sessionStorage['loginUname']);
            $('a.exit').css('display','block').html('退出');
        }else{
            $('a.a-register').css('display','block');
            $('a.welcome').css('display','none');
            $('a.exit').css('display','none');
        }
    });
    $('#container').load('data/headerlogo.php');
    $('#header').load('data/section.php');
//引用底部信息
    $('footer').load('data/footer.php');
    //页面加载完成发送异步请求
    function load(){
        $.ajax({
            type:'GET',
            url:'data/shop_cart.php',
            data:{uid:sessionStorage['loginUid']},
            success:function(data){
                var html="";
                for(var i=0;i<data.length;i++){
                    var obj=data[i];
                    html+=`<tr>
                    <td>
                        <input type="checkbox" name="check">
                        <input type="hidden" value="${obj.id}">
                        <div><img src=${obj.pic} alt=""/></div>
                    </td>
                    <td><a href="">${obj.pname}</a></td>
                    <td>${obj.price}</td>
                    <td>
                        <button class="${obj.id}">-</button>
                        <input type="text" value="${obj.count}">
                        <button class="${obj.id}">+</button>
                    </td>
                    <td><span class="p-price">${parseInt(obj.price*obj.count).toFixed(2)}</span></td>
                    <td><a href=${obj.id}>删除</a></td>
                </tr>`
                }
                $("tbody").html(html);
            }
        });
    }
    load();
    //绑定删除事件
    $("tbody").on('click','a',function(e){
        e.preventDefault();
        if($(this).text()=="删除"){
            var d=$(this).attr("href");
            var that=this;
            var choice=window.confirm("确认要移除该商品吗?");
            if(choice){
                $.ajax({
                    type:'POST',
                    url:'data/delete.php',
                    data:{id:d},
                    success:function(data){
                        var n=parseInt(data.code);
                        if(n<0){
                            alert(data.msg);
                        }else if(n>0){
                            $(that).parent().parent().remove();
                        }
                    },
                    error:function(){
                        alert("删除失败，请检查网页");
                    }
                });
            }
        }
    });
    //为button绑定单击事件"+""-"
    $("tbody").on('click','button:contains('+')',function(){
        var that=this;
        var id=$(this).attr("class");
        $.get("data/cart-update-add.php?id="+id,function(data){
           var  input=$(that).prev();
            input.val(parseInt(input.val())+1);
            var price=$(that).parent().prev().html();
            var nextInput=$(that).parent().next().children('span');
            nextInput.html(parseInt(input.val()*price))
        })
    });
    $('tbody').on('click',"button:contains('-')",function(){
        var that=this;
        var id=$(this).attr('class');
        $.get("data/cart-update-sub.php?id="+id,function(data){
            var input=$(that).next();
            if(input.val()>1){
                input.val(parseInt(input.val())-1);
                var price=$(that).parent().prev().html();
                var nextInput=$(that).parent().next().children('span');
                nextInput.html(parseInt(input.val()*price));
            }
        })
    });
    //绑定结算事件
        var num=0;
        var span=$('.price-count');
        $("tbody").on('change',"[name='check']",function(){
            var n=$(this).parent().siblings().children('span').text();
            n=parseInt(n);
            if(this.checked){
                num+=n;
                span.text(num);

            }else{
                num-=n;
                span.text(num);
            }
        });
    //绑定全选反全选事件
    $('#selAll').click(function(){
        var input=document.querySelectorAll("[name='check']");
        if(this.checked){
            for(var i=0;i<input.length;i++){
                var n=$(input[i]).parent().siblings().children('span').text();
                n=parseInt(n);
                num+=n;
                span.text(num);
                input[i].checked=true;
            }
        }else{
            for(var i=0;i<input.length;i++){
                var n1=$(input[i]).parent().siblings().children('span').text();
                n1=parseInt(n1);
                input[i].checked=false;
                num-=n1;
                span.text(num);
            }
        }
    });
    $("tbody").on('click',"[name='check']",function(){
        selAll.checked=true;
        var input=document.querySelectorAll("[name='check']");
        for(var i=0;i<input.length;i++){
            selAll.checked=input[i].checked&&selAll.checked;
        }
    });

}();