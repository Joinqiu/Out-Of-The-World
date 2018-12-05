$(function() {
		// 顶部小猫轮播
				$('.top').animate({
			'left':50
		},10000);
			$('.top').animate({
			'top':400
		},2000);
			$('.top').animate({
			'left':-2000
		},800);
	// 标题显示淡入
	$('.welcome').fadeIn(5000);
	$('.bt').slideDown(2000);
	// logo动画
	$('.logo').animate({
		'top':5
	},3000);
	setInterval(function () {

			$('.ico').animate({
				'top':180
			},1000);
			$('.ico').animate({
				'top':200
			},1000);
			})
	// 标题动画
	$('.bt2').animate({
		'left':950
	},4000);
	$('.bt3').animate({
		'left':350
	},2000);
	// 置顶侧咨询与服务二维码显示
	$('.ding img').hover(function() {
		$('.in').show();
	}, function() {
		$('.in').hide();
	});
	// 页面滚动表头固定，换背景色；置顶栏显示
	$(window).scroll(function() {
		console.log($(window).scrollTop())
		if ($(window).scrollTop() > 0) {
			$('.header').css('background-image', 'url(image/one.jpg)');
			$('.ding').show();
		} else {
			$('.header').css('background', '');
			$('.ding').hide();
		}
		if ($(window).scrollTop() > 100) {
			$('.h').slideUp(600);
		} else if ($(window).scrollTop() <= 0){
			$('.h').slideDown(300);
		}
		if ($(window).scrollTop() > 300) {
			$('.header').css('z-index', 2);
		} else {
			$('.header').css('z-index',10);
		}
		
	});
	// 点击置顶按钮置顶
	$('.back a').click(function() {
		$('body,html').animate({
			scrollTop: 0
		});
		return false;
	});
	// 大轮播实现 
    // 计时器自动轮播
    var index = 0;
    clearInterval(flag);
    var flag = setInterval(function() {
		index++;
		if(index==4) {
			index=0;
		}
		$('.img li').eq(index).addClass('show').siblings().removeClass();
    $('.four li').eq(index).find('button').show().end().find('img').css('opacity', 0.3);
    $('.four li').eq(index).siblings().find('button').hide().end().find('img').css('opacity','');
	},2000);
    // 鼠标进入大图片停止轮播，离开继续轮播
	$('.img img').hover(function () {
		clearInterval(flag);
		$('.four li').eq($(this).parent().index()).find('button').show().end().find('img').css('opacity', 0.3);
	},function () {
		// 开启计时器
     flag = setInterval(function() {
		index++;
		if(index==5) {
			index=0;
		}
		$('.img li').eq(index).addClass('show').siblings().removeClass();
    $('.four li').eq(index).find('button').show().end().find('img').css('opacity', 0.3);
    $('.four li').eq(index).siblings().find('button').hide().end().find('img').css('opacity','');
	},2000);
	});
	// // 四大类型鼠标进入选中效果,和离开效果消失
	$('.four li').hover(function() {
		// 清除计时器，停止轮播
		clearInterval(flag);
		$(this).find('button').show().end().siblings().find('button').hide();
		$(this).find('img').css('opacity', 0.3).end().siblings().find('img').css('opacity','');
	  // 鼠标进入小图大图显示对应图片
		$('.img li').eq($(this).index()).addClass('show').siblings().removeClass();
	}, function() {
		$(this).find('button').hide();
		$(this).find('img').css('opacity', '');
		// 鼠标离开大图正常轮播
		// 开启计时器
    flag = setInterval(function() {
		index++;
		if(index==5) {
			index=0;
		}
		$('.img li').eq(index).addClass('show').siblings().removeClass();
    $('.four li').eq(index).find('button').show().end().find('img').css('opacity', 0.3);
    $('.four li').eq(index).siblings().find('button').hide().end().find('img').css('opacity','');
	},2000);
	});
	// 滚动到底部联系方式弹出来,qq,微信闪现
	$(window).scroll(function() {
		console.log($(window).scrollTop())
		if ($(window).scrollTop() > 1550) {
			$('.t_icon li').eq(0).fadeIn(500).next().fadeIn(600).next().fadeIn(800);
		} else {
			$('.t_icon li').hide();
		}
	});
});



