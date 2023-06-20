$('[name="phone"]').mask('+7 (999) 999-99-99');

$('.reviews-slider').slick({
	slidesToShow: 1,
	variableWidth: true,
	appendArrows: '.reviews-slider__nav',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				variableWidth: false,
			}
		}
	]
});

$('.steering-slider').slick({
	slidesToShow: 1,
	variableWidth: true,
	appendArrows: '.steering-slider__nav',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				variableWidth: false,
			}
		}
	]
});

$(".countdown-time").countdowntimer({
	dateAndTime: "2023/06/22 00:00:00",
	labelsFormat: true,
	displayFormat: "HMS",
});

$('.btn-burger').on('click', function () {
	$('.mobile-menu').fadeToggle();
});

$('.mobile-menu__close').on('click', function () {
	$('.mobile-menu').fadeOut();
});

$('.go_to').click(function (e) {
	e.preventDefault();
	var scroll_el = $(this).attr('href');
	if ($(scroll_el).length !== 0) {
		$('html, body').animate({
			scrollTop: $(scroll_el).offset().top
		}, 500);
	}
	$('.mobile-menu').fadeOut();
	return false;
});