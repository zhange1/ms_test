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
//手风琴
$($("#accordion .acc-left").on('click','h3',function(){
    if($(this).next("ul").hasClass("active")&&$(this).children("b").hasClass('active')){
        $(this).next("ul").removeClass("active");
        $(this).children("b").removeClass("active");

    }else{
    $(this).next("ul").addClass("active").
        parent("div").siblings("div").
        children("ul").removeClass("active");
    $(this).children("b").addClass("active");
    $(this). parent("div").siblings("div").
        children("h3").children("b").removeClass("active");
    }
}));
/*上架，更新，....*/
$("div.acc-top ul.flex2").on('click','li',function(){
    if($(this).hasClass('active')){
        $(this).removeClass('active');
    }else{
        $(this).addClass('active').siblings('.active').removeClass('active');
    };
    var i=$(this).children();
    if($(i).hasClass('active')){
        $(i).removeClass('active');
    }else{
        $(i).addClass('active').parent('li').siblings('li').children('i').removeClass('active');
    }
});
/*对比，喜欢*/
$("div.acc-right").on("click","a.contrast",function(e){
	e.preventDefault();
	if($(this).hasClass("active"))
	$(this).removeClass("active");
	else
	$(this).addClass("active");
});
$("div.acc-right").on("click","a.like",function(e){
	e.preventDefault();
	if($(this).hasClass("active"))
		$(this).removeClass("active");
	else
		$(this).addClass("active");
});
//点击翻页
$("ul.acc-page").on('click','a',function(e){
	e.preventDefault();
	var p=$(this).text();
	loadpage(p);
	$(this).parent("li").addClass("active");
	$(this).parent("li").siblings("li").removeClass("active");
	if(p==1){
		$("li.prev").addClass("act");
	}
	if(p==4){
		$("li.next").addClass("act")
	}
	if(p<4){
		$("li.next").removeClass("act");
	}
	if(p>1){
		$("li.prev").removeClass("act");
	}
});
	//下一页
	$("li.next").click(next);
	function next(){
		$("li.prev").removeClass("act");
		//找到当前元素的兄弟元素中有class为active的元素，并获得其文本内容
		var page=$(this).siblings(".active").children().text();
		if(page<4) {
			page++;
			loadpage(page);
			var li = $(this).siblings(".active").next();
			$(li).addClass("active").siblings("li").removeClass("active");
			if (page==4){$(this).addClass("act");}
		}
	}
//上一页
	$("li.prev").click(prev);
	function prev(){
		$("li.next").removeClass("act");
		var page=$(this).siblings(".active").children().text();
		if(page>1) {
			page--;
			loadpage(page);
			var li = $(this).siblings(".active").prev();
			$(li).addClass("active").siblings("li").removeClass("active");
			if (page==1) {$(this).addClass("act");}
		}
	}
/*顶部点击翻页*/
	/*点击下一页*/
$("div.acc-top").on('click','b.rr',function(){
	var p=$(this).prev("span").children("a").text();
	if(p<4)
		p++;
	$(this).prev("span").children("a").text(p);
	loadpage(p);
});
	/*点击上一页*/
	$("div.acc-top").on('click','b.ll',function(){
		var p=$(this).next("span").children("a").text();
		console.log(p);
		if(p>1)
			p--;
		$(this).next("span").children("a").text(p);
		loadpage(p);
	});
//*左侧产品展示手风琴*/
$("div.item-bt").on('mouseenter','ul.tabcon',function(){
    $(this).addClass("active");
    $(this).children("li.sw").addClass("active");
    $(this).children("li.hdn").addClass("active");
    $(this).siblings("ul").removeClass("active");
    $(this).siblings("ul").children("li.sw").removeClass("active");
    $(this).siblings("ul").children("li.hdn").removeClass("active");
});
//动态生成页面内容
function loadpage(page){
	$.ajax({
		type:'GET',
		url:'data/product_msl.php',
		data:{page:page},
		success:function(data){
			var html="";
			for(var i=0;i<data.length;i++){
				var obj=data[i];
				html+=`<div class="itdt rela">
							<img src="${obj.pic}">
							<p>${obj.pname}</p>
							<b class="b1">￥${obj.price}</b>
							<b class="b2">￥${obj.uprice}</b>
							<ul class="flex2">
								<li>
									<a href="#">48</a>
									<p>商品销量</p>
								</li>
								<li>
									<a href="#">3</a>
									<p>用户评论</p>
								</li>
								<li>
									<a href="#">50</a>
									<p>关注人气</p>
								</li>
							</ul>
							<div class="flex2">
								<a href="${obj.id}" class="ilblock contrast"></a>
								<a href="${obj.id}" class="ilblock like"></a>
							</div>
							<a href="${obj.id}" class="abso">加入购物车</a>
						</div>`;
			}
			$(".acc-right").html(html);
			},
		error:function(){
			alert("添加错误");
		}
})
}
loadpage(1);
//左侧图片动态生成
$.ajax({
	url:'data/product_left_msl.php',
	success:function(data){
		var html="<h3>销量排行榜</h3>";
		for(var i=0;i<data.length;i++){
			var obj=data[i];
			html+=` <ul class="tabcon rela">
                    <li class="sw">
                        <span>${obj.id}</span>
                        <p>${obj.pname}</p>
                    </li>
                    <li class="hdn">
                        <span>${obj.id}</span>
                        <img src="${obj.pic}">
                        <a href="#" class="flex3">${obj.pname}<b>${obj.price}</b></a>
                    </li>
                </ul>`
		}
		$("div.item-bt").html(html);
	},
	error:function(){
		alert("添加失败，网页有错误")
	}
});
//**********************************************************
	//点击加入购物车添加到右侧购物车里
	var img1='';
	var ul=$("<ul class='cart-detail'></ul>");//获得动态生成的父元素
	var li='';
	var body=$('body');//找到body
	var w=$(window).width();//浏览器可视区域宽度
	var h=$(window).height();//浏览器可是区域高度
	$('ul.cart-affix').css({top:h/2.5,right:'10px'})
	$('div.acc-right').on('click','a.abso',function(e){
	e.preventDefault();
	var dh=$(this).parent().height();//当前父元素的高度
	var y=$(this).offset().top-$(window).scrollTop()-dh;//当前元素距离父元素的高度减去页面滚动距离再减去父元素的高度
	var x=$(this).offset().left;//当前元素距离页面左侧的宽度
	var pid=$(this).attr('href');//获得图片的id
	var img=$(this).parent().children('img').clone();//克隆一个img
	var ss=img.attr('src');//获得当前商品的图片的地址
	var content=$(this).parent().children('p').text();//获得当前商品的简介内容
	var price=$(this).parent().children('b.b1').text();//获得当前商品的价格
	price=price.slice(1);
	var span1=$('span.content');
	$.ajax({
		type:'POST',
		url:'data/cart.php',
		data:{uid:sessionStorage['loginUid'],pid:pid},
		success:function(data){
			var n=data;//商品的数量
			if(data>0){
				var html=`<img src="${ss}">
					<div>
					<h5>${content}</h5>
					<span>${price}×${n}</span>
					</div>
					<b>×</b>`//动态生成购买商品数量
				  li=$(`<li class="${pid}"></li>`);
					li.html(html);
				var li1=$("ul.cart-detail li");//找到ul里的所有li
				for(var i=0;i<li1.length;i++){
					if($(li1[i]).attr('class')==li.attr('class'))
						$(li1[i]).replaceWith(li);//旧元素替换新元素
				}
				img1=li.children('img');//获得要添加的li里的图片
				$(ul).append($(li));//添加li到ul中
				var span2=document.querySelectorAll('ul.cart-detail span');//商品的价格和数量
				var count=0;
				for(var i=0;i<span2.length;i++){
					var s1=span2[i].innerHTML;
					s1=parseInt(s1.slice(s1.length-1));//购买数量的和
					count+=s1;
				}
				span1.text(count);//将购买数量的和添加到购物车中
				img.appendTo(body);//添加到body中
				img.css({
					position:'fixed',
					top:y,left:x,
					border:'1px solid #ddd',
					borderRadius:'0',
					width:'200px',
					height:'200px',
					zIndex:'100'})//设置img样式
				img.animate({
					top:h/2,
					left:w,
					borderRadius:'100%',
					width:'10px',
					height:'10px'
				},800);
			}else{//账户登录
				$('#modal').css('display','block');
				$('#modal').animate({opacity:'1'},500);
				if($('#modal').css('display')=='block'){
					$('body').css('overflowY','hidden')}
				$(' div.photo').animate({width:'605px'},500);
				$('div#login').animate({width:'385px'},500);
				sessionStorage['loginUname']=$('#usename').val();
			}
		},
		error:function(){
			alert("添加商品出错,请检查网络")
		}
	});
});
	$('#settlement').append(ul);
	//购物车跳转
	$('#nav-parent').on('click','a.shop_cart',function(e){
		e.preventDefault();
		console.log($(this))
		location.href='cart.html';
	});
	//页面加载完成自动生成右侧购物车里的内容
	$.ajax({
		type:'GET',
		url:'data/shop_cart.php',
		data:{uid:sessionStorage['loginUid']},
		success:function(data){
			var n=0;
			var html=`<a href="cart.html">去购物车结算</a><ul class="cart-detail">`;
			for(var i=0;i<data.length;i++){
				var obj=data[i];
				html+=`<li>
                    <img src="${obj.pic}">
                    <div>
                        <h5>${obj.pname}</h5>
                        <span>${obj.price}×${obj.count}</span>
                    </div>
                    <a href="${obj.id}" class="delete">×</a>
                    </li>`;
				n+=parseInt(obj.count);
			}
			html+=`</ul>`;
			$('#settlement').html(html);
			$('span.content').text(n);
		}
	});
	//绑定删除事件
	$('#settlement').on('click','a.delete',function(e){
		e.preventDefault();
		var d=$(this).attr('href');
		var that=this;
		$.ajax({
			type:'POST',
			url:'data/delete.php',
			data:{id:d},
			success:function(data){
				var n=parseInt(data.code);
				if(n<0){
					alert(data.msg);
				}else if(n>0){
					console.log($(that));
					$(that).parent().remove();//移出li
				}
			},
			error:function(){
				alert("删除失败，请检查网页")
			}
		});
	});
	$('div.acc-right').on('click','img',function(){
		location.href='Details.html';
	})
}();

