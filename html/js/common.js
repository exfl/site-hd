// slide
// http://gallery-lounge.com/demo/flexslider2/
$(window).load(function() {
	$('.flexslider').flexslider({
		animation: "fade",
		slideshow: true,
		slideshowSpeed: 4000,
		controlNav: true,
		animationLoop: true,
		touch: true,
	});
});

// scroll
$(function(){
	$('a[href^=#]').click(function() {
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, "slow", 'swing');
		return false;
	});
});

// 折りたたみ
$(function(){
	$(".more-content .more-content-btn").on("click", function() {
		$(this).next().slideToggle();
		$(this).toggleClass('active');
		// $(this).parent(".more-content").toggleClass('open');
		// $(this).parent(".more-content").toggleClass('close');
	});
});
