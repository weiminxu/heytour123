

 //移动
        function Domove( obj,victor,target,endfn) {  //endfn为回调函数
            clearInterval(obj.timer);
            obj.timer = setInterval(function () {
                 var stop = true;
                var cur = parseInt(getstyle(obj, victor));
                var speed = (target - cur) / 8;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                /* if(num > 0 && speed > target || num < 0 && speed < target) {
                    speed = target;
                }*/
               if(cur != target){
                stop = false;
                obj.style[victor] = cur + speed + 'px';
            }
                if (stop) {
                    clearInterval(obj.timer);
                    obj.timer = null;
                    endfn && endfn();
                }
                /*if(endfn){
                 endfn();  //如果有回调函数，就执行，没有就不管
                 }*/
            }, 20);
        }

        //获取样式
        function getstyle(obj,attr) {
            return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
        }
        //加样式
          function hasClass(obj, cls) {
            return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
        }

        function addClass(obj, cls) {
            if (!this.hasClass(obj, cls)) obj.className += " " + cls;
        }

        function removeClass(obj, cls) {
            if (hasClass(obj, cls)) {
                var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
                obj.className = obj.className.replace(reg, ' ');
            }
        }   

function newsplay(Odiv){
     var box=document.getElementById(Odiv),can=true;
            box.innerHTML+=box.innerHTML;
            box.onmouseover=function(){can=false};
            box.onmouseout=function(){can=true};
            new function (){
                var stop=box.scrollTop%18==0&&!can;
                if(!stop)box.scrollTop==parseInt(box.scrollHeight/2)?box.scrollTop=-70:box.scrollTop++;
                setTimeout(arguments.callee,box.scrollTop%70?10:1800);
            };
        
}	

function BackTop(){
     $(window).scroll(function() {  
        var a = $(window).scrollTop();
        if(a > 600){
            $('.backtop').fadeIn();
        }else if(a < 500){
            $('.backtop').fadeOut();
        }
    });
     
    $('.backtop').click(function(){
                var winH = $(window).height();
                if($(window).scrollTop()>winH){
                    $('body,html').animate({scrollTop: 0},600);
                }
            })  
}

function checked(Class){
    var a = document.querySelector(Class);
    var Ochek = a.querySelectorAll('.check-la');
    var Oradio = a.querySelectorAll('.CmRadio');
    var OName = a.querySelector('.other');
  
    for(var i=0;i<Ochek.length;i++){
        Ochek[i].index = i;
    Ochek[i].onclick = function(){
        for(var j=0;j<Oradio.length;j++){
            Oradio[j].className = 'CmRadio';
        }
         /*$(".CmRadio").addClass("CmChecked");*/
         Oradio[this.index].className = 'CmChecked CmRadio';
        }


    }

}

function checkName(Class,target){
    var a = document.querySelector(Class);
    var Ochek = a.querySelectorAll('.check-la');
    var Oradio = a.querySelectorAll('.CmRadio');
    var OName = a.querySelector('.other');
  
    for(var i=0;i<Ochek.length;i++){
        Ochek[i].index = i;
    Ochek[i].onclick = function(){
        for(var j=0;j<Oradio.length;j++){
            Oradio[j].className = 'CmRadio';
            OName.name = '';
        }
         /*$(".CmRadio").addClass("CmChecked");*/
         Oradio[this.index].className = 'CmChecked CmRadio';
        }
        Ochek[Ochek.length-1].onclick = function(){
            for(var j=0;j<Oradio.length;j++){
            Oradio[j].className = 'CmRadio';
            OName.name = '';
        }
            Oradio[this.index].className = 'CmChecked CmRadio';
            OName.name = target;
        }

    }

}


function bannerDotNone(pro){
    var banner = document.querySelector(pro);
    var dot = banner.querySelectorAll('.owl-dot');
    if(dot.length == 1){
        dot[0].style.display = "none";
    }
}






console.log("%c%s",
            "color:#fff; background:#ed2d38; font-size: 18px;",
            "\u58f0\u660e");
console.log("\u672c\u7a0b\u5e8f\u7531\u79c0\u7ad9\u7f51\uff08\u0068\u0074\u0074\u0070\u003a\u002f\u002f\u0077\u0077\u0077\u002e\u0078\u0069\u0075\u007a\u0068\u0061\u006e\u0077\u0061\u006e\u0067\u002e\u0063\u006f\u006d\uff09\u9879\u76ee\u7ec4\u5f00\u53d1\u5e76\u63d0\u4f9b\u6280\u672f\u652f\u6301\u0021");

