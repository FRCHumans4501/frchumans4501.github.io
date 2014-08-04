function scrollUpdate() {
	var scrolled = $(window).scrollTop();
	var mod = 300;

	if (scrolled > mod) {
		$('nav').addClass('fixed');
	} else {
		$('nav').removeClass('fixed');
	}
}