$(document).ready(function($) {

/*change active language*/
	$('.change-lng img').on('click', function(index) {
		$('.change-lng img').removeClass("active");
		$(this).addClass("active");
	});

/*fucntion for Header Contacts Tabs*/
	$(".tab-item").not(":first").hide();
	$(".wrapper .tab").click(function(index) {
		$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab-item").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");

/*Hamburger menu func*/
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});

	$('#nav-icon3').click(function() {
		$('.h-nav').slideToggle();
		return false
	});

/*Parallax effect for section-4*/
	$.stellar({
		 responsive: true,
		 horizontalOffset: 0
	});

/*Popup for section-4*/
	$(".container-fluid .item1").magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});

/*Carousel for section-5*/
	$('.owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		navText: "",
		loop: true,
		smartSpeed: 600,
		fluidSpeed: 600,
		autoplaySpeed: 600,
		navSpeed: 600,
		dotsSpeed: 600,
		dragEndSpeed: 600
	});

/*Visibility rocket*/
	$(window).scroll(function() {
		// var a = window.pageYOffset;
		var a = $(window).scrollTop();
		var b = $("header").height();
		if (a <= b) {
			$(".button-top").addClass('off');
		} else {
			$(".button-top").removeClass('off');
		}
	});

/*Scrolling for menu*/
	$(".arrow-down, a[href='#sec-1']").click(function() {
		$("html, body").animate({ scrollTop: $('.section-1').offset().top+10 }, 1000);
	});

	$("a[href='#sec-2']").click(function() {
		$("html, body").animate({ scrollTop: $('.section-2').offset().top }, 1000);
	});

	$("a[href='#sec-3']").click(function() {
		$("html, body").animate({ scrollTop: $('.section-3').offset().top+10 }, 1000);
	});

	$("a[href='#sec-4']").click(function() {
		$("html, body").animate({ scrollTop: $('.section-4').offset().top }, 1000);
	});

	$("a[href='#sec-5']").click(function() {
		$("html, body").animate({ scrollTop: $('.section-5').offset().top }, 1000);
	});

	$("a[href='#footer']").click(function() {
		$("html, body").animate({ scrollTop: $('.foot').offset().top}, 1000);
	});

	$(".button-top").click(function() {
		$("html, body").animate({ scrollTop: $('header').offset().top }, 1000);
	});

/*Animation content*/
	$(".s-head").animated("fadeInRight");

	$(".section-1").waypoint(function() {

		$(".section-1 .card").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("card-off").addClass("card-on");
			}, 200*index);
		});

	}, {
		offset : "20%"
	});

	$(".s-b-button").animated("rotateInUpLeft");

	/*animation section-3*/
	$(".main-img").animated("lightSpeedIn");

	$(".img-item").animated("bounceInUp");

	/*animation section-4*/
		var animClose = $(window).width();
		if (animClose >= 768) {
			$(".masonry-container .item").animated("zoomInUp");
		}

	/*animation section-5*/
	$(".owl-carousel").animated("rollIn");

	/*animation footer*/
	$("footer .form").animated("zoomIn");



/*Drawsvg animation for section-2*/
	var waypointsvg = new Waypoint({

		element: $(".section-2"),
		handler: function(dir) {
			
			if (dir === "down") {

				$(".section-2 .op-item").each(function(index) {
					var ths = $(this);
					setTimeout(function() {
						var myAnimation = new DrawFillSVG({
							elementId: "op-svg-" + index
						});
						ths.children(".op-content").addClass("op-content-on");
					}, 500*index);
				});

			};
			this.destroy();
		},
		offset: '35%'
	});

/*popup for form*/
	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

/*check how is form*/
$('a[href="#callback"]').click(function() {
	$('#callback .formname').val($(this).data('form'))
});

/*Ajax form submit*/
		$(".callback").submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			$(".success").addClass("visible");
			setTimeout(function() {
				$(".success").removeClass("visible");
				$.magnificPopup.close();
				th.trigger("reset");
			}, 2500);
		});
		return false;
	});

//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

});

$(window).load(function() {
	/*Massonry-img for section-4*/
	var $container = $(".masonry-container");
	$container.imagesLoaded(function () {
		$container.masonry({
			columnWidth: ".item",
			itemSelector: ".item"
		});
		$('.item').imagefill();
	});
});

