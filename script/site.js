function scrollUpdate() {
	var scrolled = $(window).scrollTop();
	var mod = 285;

	var logoOpacity = ((mod - scrolled) / mod);
	logoOpacity = logoOpacity <= 0 ? 0 : logoOpacity;

	$("#header-background img").css('opacity', logoOpacity);

	if (scrolled > mod) {
		$('header').addClass('fixed');
		$('main').addClass('correctTop');
		$('footer').addClass('correctTop');
		$('#header-background').addClass('pointer');
		$("#header-background a").hide();
	} else {
		$('header').removeClass('fixed');
		$('main').removeClass('correctTop');
		$('footer').removeClass('correctTop');
		$('#header-background').removeClass('pointer');
		$("#header-background a").show();
	}
}

$(document).ready(function() {
	$(window).bind('scroll', scrollUpdate);
	scrollUpdate();

	$('#header-background').click(function() {
		var scrolled = $(window).scrollTop();
		var mod = 285;

		if (scrolled > mod) {
			$('html, body').animate({ scrollTop: 0 }, "slow");
		}
	});
});