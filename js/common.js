$('[name="phone"]').mask('+7 (999) 999-99-99');

$('.reviews-slider').slick({
	slidesToShow: 1,
	variableWidth: true,
	appendArrows: '.reviews-slider__nav',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
});

$('.steering-slider').slick({
	slidesToShow: 1,
	variableWidth: true,
	appendArrows: '.steering-slider__nav',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
});

$(".countdown-time").countdowntimer({
	dateAndTime: "2023/06/21 00:00:00",
	labelsFormat: true,
	displayFormat: "HMS",
	// currentTime: true,
});