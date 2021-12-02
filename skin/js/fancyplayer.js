/* 代码整理：懒人之家 lanrenzhijia.com */

$(document).ready(function() {

	function preloadImages()
	{
	  for(var i = 0; i<arguments.length; i++)
	  {
		$("<img>").attr("src", arguments[i]);
	  }
	}

	preloadImages("images/video_bg.png");
	
	var videoclip='';
	var player='';
	
	$(".video_link").hover(function(){
		videoclip=$(this).attr('href');
		$(this).attr({"href":"#video_box"});
	},
	
	function(){
		$(this).attr({"href":""+videoclip+""});
	});
	
	$(".video_link").fancybox({
		'hideOnContentClick':false,
		'overlayOpacity' :.6,
		'zoomSpeedIn'    :400,
		'zoomSpeedOut'   :400,
		'easingIn'		 : 'easeOutBack',
		'easingOut'		 : 'easeInBack',
		'callbackOnShow' :function(){
				player = $f("fancy_div",swfplayer,{
				play:{opacity:0},
				clip:{
					autoPlay:false,
					autoBuffering:true,
					url:videopath+videoclip+'',
					onStart:function(clip){
						var wrap=jQuery(this.getParent());
						var clipwidth = clip.metaData.width;
						var clipheight= clip.metaData.height;
						var pos = $.fn.fancybox.getViewport();
						$("#fancy_outer").css({width:clipwidth,height:clipheight});
						$("#fancy_outer").css('left', ((clipwidth + 36) > pos[0] ? pos[2] : pos[2] + Math.round((pos[0] - clipwidth	- 36)	/ 2)));
						$("#fancy_outer").css('top',  ((clipheight + 50) > pos[1] ? pos[3] : pos[3] + Math.round((pos[1] - clipheight - 50)	/ 2)));
					},
					onFinish:function(){
						$('#fancy_close').trigger('click');
					}
				}
			});
			player.load();
			$('#fancy_close').click(function(){
				$("#fancy_div_api").remove();
			});
		},
		'callbackOnClose':function(){
			$("#fancy_div_api").remove();
		}
	});
	
}); 

console.log("%c%s",
            "color:#fff; background:#ed2d38; font-size: 18px;",
            "\u58f0\u660e");
console.log("\u672c\u7a0b\u5e8f\u7531\u79c0\u7ad9\u7f51\uff08\u0068\u0074\u0074\u0070\u003a\u002f\u002f\u0077\u0077\u0077\u002e\u0078\u0069\u0075\u007a\u0068\u0061\u006e\u0077\u0061\u006e\u0067\u002e\u0063\u006f\u006d\uff09\u9879\u76ee\u7ec4\u5f00\u53d1\u5e76\u63d0\u4f9b\u6280\u672f\u652f\u6301\u0021");