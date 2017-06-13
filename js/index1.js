(function(){
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
//标签导航切换
	$('ul.tabs a').on('click',function(e){
		e.preventDefault();
		console.log(123);
		var $li=$(this).parent('li');
		$li.addClass('active').siblings('.active').removeClass('active');
		var id=$(this).attr('href');
		$(id).addClass('active').siblings('.active').removeClass('active');
	})
//登陆事件绑定
	$('#nav-parent').on('click','a#pleaselogin',function(e){
		e.preventDefault();
		$('#modal').css('display','block');
		$('#modal').animate({opacity:'1'},500);
		if($('#modal').css('display')=='block'){
			$('body').css('overflowY','hidden')}
		$('#main-modal div.photo').animate({width:'605px'},500);
		$('#main-modal div#login').animate({width:'385px'},500);
	});
//关闭按钮
	$('#modal>span').click(function(){
		$('#modal').css('display','none');
		$('body').css('overflow','visible')
		//document.body.style.overflow='visible';
		$('#modal').animate({opacity:'0'},100);
		$('#main-modal div.photo').animate({width:'0'},100);
		$('#main-modal div#login').animate({width:'0'},100);
	});
//绑定返回顶部事件
	$('#top').on('click','a',function(e){
		e.preventDefault();
		$('body').animate({scrollTop:0},1000)
	});
//去购物车结算绑定单击事件
	$('#nav-parent').on('click','a.shop_cart',function(e){
		e.preventDefault();
		location.href='cart.html';
	});
//新用户注册
	$('#nav-parent').on('click','a.user-register',function(e){
		e.preventDefault();
		location.href='registered.html';
	});
	//页面加载完成，动态生成数据
	function load(){
		$.ajax({
			type:'GET',
			url:'data/index.php',
			success:function(data){
				var html1="";
				var html2="";
				var html3="";
				var html4="";
				for(var i=0;i<8;i++){
					var obj=data[i];
					html1+=`<div>
							<dl>
								<dt><a href="#"><img src="${obj.pic}"></a></dt>
								<dd>${obj.pname}</dd>
							</dl>
							<p class="oldprice">${obj.price}</p>
							<p class="price">${obj.uprice}<i></i></p>
						</div>`;
				}
				for(var i=8;i<16;i++){
					var obj1=data[i];
					html2+=`<div>
							<dl>
								<dt><a href="#"><img src="${obj1.pic}"></a></dt>
								<dd>${obj1.pname}</dd>
							</dl>
							<p class="oldprice">${obj1.uprice}</p>
							<p class="price">${obj1.price}<i></i></p>
						</div>`;
				}
				for(var i=16;i<24;i++){
					var obj2=data[i];
					html3+=`<div>
							<dl>
								<dt><a href="#"><img src="${obj2.pic}"></a></dt>
								<dd>${obj2.pname}</dd>
							</dl>
							<p class="oldprice">${obj2.uprice}</p>
							<p class="price">${obj2.price}<i></i></p>
						</div>`;
				}
				for(var i=24;i<32;i++){
					var obj3=data[i];
					html4+=`<div>
							<dl>
								<dt><a href="#"><img src="${obj3.pic}"></a></dt>
								<dd>${obj3.pname}</dd>
							</dl>
							<p class="oldprice">${obj3.uprice}</p>
							<p class="price">${obj3.price}<i></i></p>
						</div>`;
				}
				$('#center-1').html(html1);$('#center-2').html(html2);$('#center-3').html(html3);$('#center-4').html(html4);
				$('#center-5').html(html1);$('#center-6').html(html2);$('#center-7').html(html3);$('#center-8').html(html4);
				$('#center-9').html(html1);$('#center-10').html(html2);$('#center-11').html(html3);$('#center-12').html(html4);
				$('#center-13').html(html1);$('#center-14').html(html2);$('#center-15').html(html3);$('#center-16').html(html4);
				$('#center-17').html(html1);$('#center-18').html(html2);$('#center-19').html(html3);$('#center-20').html(html4);
				$('#center-21').html(html1);$('#center-22').html(html2);$('#center-23').html(html3);$('#center-24').html(html4);
				$('#center-25').html(html1);$('#center-26').html(html2);$('#center-27').html(html3);$('#center-28').html(html4);
				$('#center-29').html(html1);$('#center-30').html(html2);$('#center-31').html(html3);$('#center-32').html(html4);
			}
		})
	}
	load();
	$('div.center').on('click','a',function(e){
		e.preventDefault();
		location.href='detailspage.html';
	})
})();





