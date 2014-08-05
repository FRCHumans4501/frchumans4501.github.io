function scrollUpdate() {
	var scrolled = $(window).scrollTop();
	var mod = 285;

	if (scrolled > mod) {
		$('header').addClass('fixed');
		$('#header-background').addClass('pointer');
	} else {
		$('header').removeClass('fixed');
		$('#header-background').removeClass('pointer');
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