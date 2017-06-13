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
//购物车按钮加减
$('ul.summary-z').on('click','button',function(){
    var bt=$(this).text();
    if(bt=='-'){
        var nt=$(this).next().text();
        if(nt>1)
            nt--;
        $(this).next().text(nt);
    }else{
        var np=$(this).prev().text();
        np++;
        $(this).prev().text(np)
    }

});
    //立即购买
$('#r-detail').on('click','a.shop',function(e){
    e.preventDefault();
    location.href='cart.html';
});
//放大镜
     //常量
     const LIWIDTH = 62;//li的宽
     const OFFSET = 20;//ul的起始left
     const MSIZE = 175;//mask的大小
     const SMSIZE = 350;//superMask的大小
     var licount = document.querySelectorAll("#icon_list>li").length;//li的个数
     console.log(licount);
     var move = 0;//左移的li个数
     //找到两个按钮a
     var aForward = document.querySelector("a.forward");
     var aBackward = document.querySelector("a.backward");
     ////为两个按钮绑定单机事件
     aForward.addEventListener("click", li_move);
     aBackward.addEventListener("click", li_move);
     function li_move() {
         //this->a
         //如果当前a的class中没有disabled
         if (this.className.indexOf("disabled") == -1) {
             if (this.className == "forward")
                 move++;
             else
                 move--;
             //设置ul的left为-LIWIDTH*moved+OFFSET
             this.parentNode.lastElementChild
                 .style.left = -LIWIDTH * move + OFFSET + "px";
             checkeA();
         }
     }
     //检查两个按钮的状态；
     function checkeA() {
         //当move等于0
         if (move == 0) {
             //为aBackward的class添加disabled
             aBackward.className += " disabled";
         }
         else if (licount - move == 5) {
             //否则,如果licount-move等于5
             //为aForward的class添加disabled
             aForward.className += " disabled";
         } else {
             aBackward.className = "backward";
             aForward.className = "forward";
         }
     }

     var mImg = document.getElementById("mImg");
     //利用冒泡为ul里的li绑定鼠标移入事件
     document.getElementById("icon_list").addEventListener("mouseover", function (e) {
         //如果当前的元素是img
         if (e.target.nodeName == "IMG") {
             var src = e.target.src;
             //获得最后一个.的位置
             var i = src.lastIndexOf(".");
             src = src.slice(0, i) + "-m" + src.slice(i);
             mImg.src = src;
         }
     });
     var sm = document.getElementById("superMask");
     var mk = document.getElementById("mask");
     var lgDiv = document.getElementById("largeDiv");
     //鼠标移入事件
     sm.addEventListener("mouseover", function () {
         mk.style.diaplay = "block";
         lgDiv.style.display = "block";
         var src = mImg.src;
         var i = src.lastIndexOf(".");
         src = src.slice(0, i - 1) + "l" + src.slice(i);
         lgDiv.style.backgroundImage = "url(" + src + ")";
     });
     //鼠标移出事件
     sm.addEventListener("mouseout", function () {
         mk.style.display = "";
         lgDiv.style.display = "";
     });
     //声明变量max等于supermark的宽度减去Mark的宽度
     var max = SMSIZE - MSIZE;
     sm.addEventListener("mousemove", function (e) {
         var x = e.offsetX, y = e.offsetY;
         var top = y - max / 2, left = x - max / 2;
         if (top < 0)
             top = 0;
         else if (top > max)
             top = max;
         if (left < 0)
             left = 0;
         else if (left > max)
             left = max;
         mk.style.cssText = "display:block;left:" + left + "px;top:" + top + "px";
         lgDiv.style.backgroundPosition = -left * 2 + "px " + -top * 2 + "px";
     });
//下方图片位移
     const OFST=30;//图片初始left宽度
     const AWIDTH=165;//图片的位移宽度
     var acount=document.querySelectorAll("div.r-product a").length; //a的个数
     var sp=document.querySelector("span.prev");
     var sn=document.querySelector("span.next");
     sn.addEventListener("click",span_move);
     sp.addEventListener("click",span_move);
     var movee=0;//左移的a的个数
     function span_move(){
         //如果当前元素的class里不包含disabled
         if(this.className.indexOf("disabled")==-1){
             if(this.className=="next")
                 movee++;
             else
                 movee--;
             //设置div的left为-LIWIDTH*moved+OFST
             this.parentNode.lastElementChild
                 .style.left=-move*AWIDTH-OFST*(movee-1)+"px";
             checkA();
             console.log(-movee*AWIDTH-OFST*(movee-1));
             console.log(movee);
         }
     }
     function checkA(){
         //当move等于0
         if(move==0)
         //为sp的class添加disabled
             sp.className+=" disabled";
         else if(acount-move==6){
             //否则,如果acount-move等于6
             //为sn的class添加disabled
             sn.className+=" disabled";
         }else{
             sn.className="next";
             sp.className="prev";
         }
     }
//规格参数。。。。导航固定定位
    $(window).scroll(function(){
        var top=$(window).scrollTop();
        var div=$("#m-right div.flex3");
        if(top>906)
            div.addClass("active");
        else
            div.removeClass("active");});


