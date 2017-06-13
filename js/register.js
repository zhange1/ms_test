/**
 * Created by Administrator on 2017/4/8 0008.
 */
//获得name为txt和pwd的表单元素绑定焦点事件
var form=document.querySelector('form');
var username=document.querySelector("[name='username']");
var pwd=document.querySelector("[name='pwd']");
var rpwd=document.querySelector("[name='rpwd']");
username.onfocus=getfocus;
pwd.onfocus=getfocus;
function getfocus(){
    var span=this.nextElementSibling;
    span.className='';
}
username.onblur=function(){
    vali(this,/^\w{6,10}$/);
};
pwd.onblur=function(){
    vali(this,/^\d{6,}$/);
};
function vali(txt,reg){
    var span=txt.nextElementSibling;
    if(reg.test(txt.value)){
        span.className="vali_success";
        return true;
    }else{
        span.className="vali_fail";
        return false;
    }
}
rpwd.onblur=function() {
    var val1 = pwd.value;
    var val2 = this.value;
    var span = this.nextElementSibling;
    span.className = "";
    if (val1 == val2 && val1 != "") {//第一次输入密码的值与再次输入密码的值相同，且第一次输入的密码不能为空
        span.className = "vali_success";
        return true;
    } else {
        span.className = "vali_fail";
        return false;
    }
};
//绑定注册事件
var check=document.getElementById('chkbox');
check.onchange=function(){
    if(this.checked){
        $("[name='sub']").click(function(){
            var u=$(username).val();
            var p=$(pwd).val();
            $.ajax({
                type:'POST',
                url:'data/register.php',
                data:{uname:u,upwd:p},
                success:function(data){
                    var n=parseInt(data);
                    if(n>0){
                        alert("注册成功");
                    }else{
                        alert('注册失败');
                    }
                }
            })
        });
    }
}

