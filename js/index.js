/**
 * Created by Administrator on 2017/4/8 0008.
 */
if(!window.jQuery){
	throw new Error('index.js依赖于jQuery！')
}
//轮播广告调用
jQuery.fn.carousel=function(){
	//this指类数组的jQuery对象
	var $imgList=this.find('img');//所有img组成的类数组对象
	var $liList=this.find('li');//所有li组成的类数组对象
	var cur=0;//当前显示的图片序号
	var next=1;//即将以要显示的图片序号
	var interval=5000;//每个5s轮换一张
	//var duration=500;//每次轮换动画持续时间
	var tab=function(){
		$imgList.eq(cur).removeClass('active');
		$imgList.eq(next).addClass('active');
		//为下一个li添加.active，并清除其他li的.active 属性
		$liList.eq(next).addClass('active').siblings('.active').removeClass('active');
		cur=next;
		next++;
		//如果next的值大于等于$imgList的length，就让next=0;
		if(next>=$imgList.length)
		next=0;
	}
	//开启定时器，每隔多长时间启动一次广告轮换
	var timer=setInterval(tab,interval);
	$imgList.mouseenter(function(){
		clearInterval(timer);
		timer=null;
	});
	$imgList.mouseleave(function(){
		timer=setInterval(tab,interval);
	})
	//为每个li添加监听事件，单击后直接显示指定图片
	$liList.click(function(){
		//cur:0  next:1 点击某个li，让next等于该li的序号
		var i=$liList.index(this);
		next=i;
		tab();
	})
};
//标签页点击互换
jQuery.fn.tab=function(){
	this.click(function(e){
		e.preventDefault();
		//为当前a添加.active并且清除其他兄弟元素的.active属性
		$(this).addClass('active').siblings('.active').removeClass('active');
		//为当前a的子元素b添加.active;并且清楚其他a的子元素的b的.active
		var b=$(this).children('b');
		$(b).addClass('active').parent('a').siblings('a').children('b').removeClass('active');
		//为下方当前显示div添加.active并且清楚其他div的.active
		var id=$(this).attr('href');
		$(id).addClass('active').siblings('.active').removeClass('active');
	})
};
/**
 * 滚动监听插件
 * $(window).scrollspy(options)
 */
jQuery.fn.scrollspy = function(options){
	var $liList = $(options.target).find('li');
	//点击附加导航中的某个超链接时，页面主体滚动到指定楼层位置
	$liList.on('click','a', function(e){
		e.preventDefault();
		//this => a
		//根据a的href属性，找到其对应的楼层的距离页面顶部的偏移量
		var floorId = $(this).attr('href');
		var top = $(floorId).offset().top;
		//让页面主体滚动到指定的高度
		$('body').animate({scrollTop: top}, 500);
	})
	//监听页面的滚动事件，进行楼层开关的点亮
	//window.onscroll = function(){}
	$(window).scroll(function(){
		var top = $(window).scrollTop();//获取window距离滚动条顶部滚动的距离
		if(top<1490){ //现在滚动到1楼上方
			$(options.target).fadeOut();
		}else if(top>6200){   //现在滚动到8楼下方
			$(options.target).fadeOut();
		}else { //现在滚动到1楼和8楼之间
			$(options.target).fadeIn();
			//点亮当前滚动到的楼层的开关
			//思路：遍历每个楼层开关，查看当前window滚动偏移量超过哪个楼层的偏移量
			$liList.each(function(a,li){
				//li => a .href  =>  div.floor => offset().top
				var floorId = $(this).children('a').attr('href');
				var floorTop = $(floorId).offset().top;//每个楼层距离页面顶部的偏移量
				if(top>=floorTop){ //窗口已经滚动到特定的楼层
					$(li).addClass('active').siblings('.active').removeClass('active');
					//用变量接住
					var tt=$(li).next('li').data('name');
					var txt=$(floorId).attr('title');
					var data =$(li).prev('li').data("name");
					$(li).children('a').text(txt);
					$(li).prev('li').children('a').text(data);
					$(li).next('li').children('a').text(tt);
				}
			});
		}
	})
}
//固定搜索框
jQuery.fn.scrolls=function(options){
	$(window).scroll(function(){
		var top=$(window).scrollTop();
		if(top>700){
			$(options.target).css("height","70px");
		}else{
			$(options.target).css("height","0px");
		}
	})
}