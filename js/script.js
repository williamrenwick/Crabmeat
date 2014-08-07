$(document).ready( function(){
	var controller;

	var $titlewrappers = $(".titlewrapper");
	var $headlineX = $titlewrappers.width() / 2 ;
	var $headlineY = $titlewrappers.height() / 2;
	var $scrollind = $("#scrolldown").width() / 2;

	$titlewrappers.css({
		"margin-top": - $headlineY,
		"margin-left": - $headlineX
	});

	$("#scrolldown").css({"margin-left": - $scrollind});

	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll == 0) {
		} else {
			$('#scrolldown').addClass("hide");
		}
	});

	controller = new ScrollMagic();
		var tweenleft = TweenMax.fromTo("#left-claw", 0.3,
					{rotation:0},
					{rotation: 10,
					 repeat: -1,
					 yoyo: true,
					 ease: Quad.easeInOut}
					);
		var scene = new ScrollScene({triggerElement:"#dear", duration: 700})
					.setTween(tweenleft)
					.addTo(controller);

		var tweenright = TweenMax.fromTo("#right-claw", 0.3,
					{rotation:0},
					{rotation: 10,
					 repeat: -1,
					 yoyo: true,
					 ease: Quad.easeInOut}
					);

		var scene = new ScrollScene({triggerElement:"#dear", duration: 700})
					.setTween(tweenright)
					.addTo(controller);

		var title1out = TweenMax.fromTo("#titlewrapper", 0.7,
					{"left": "50%"},
					{"left": "-50%"}
					);

		var scene = new ScrollScene({triggerElement: "#trigger1", duration: 600})
					.setTween(title1out)
					.addTo(controller);

		var title2in = TweenMax.fromTo("#titlewrapper2", 0.7,
			{"left": "150%"},
			{"left": "50%" }
		);

		var scene = new ScrollScene({triggerElement: "#trigger1", duration: 600})
					.setTween(title2in)
					.addTo(controller);

		var title2out = TweenMax.to("#titlewrapper2", 0.7,
			{ "left": "-50%" }
		);

		var scene = new ScrollScene({triggerElement: "#trigger2", duration: 600})
					.setTween(title2out)
					.addTo(controller)

		var title3in = TweenMax.fromTo("#titlewrapper3", 0.7,
			{"left": "150%"},
			{"left": "50%" }
		);

		var scene = new ScrollScene({triggerElement: "#trigger2", duration: 600})
			.setTween(title3in)
			.addTo(controller);

		var title3out = TweenMax.to("#titlewrapper3", 0.7,
			{ "left": "-50%" }
		);

		var scene = new ScrollScene({triggerElement: "#trigger3", duration: 600})
					.setTween(title3out)
					.addTo(controller)

		var title4in = TweenMax.fromTo("#titlewrapper4", 0.7,
			{"left": "150%"},
			{"left": "50%" }
		);

		var scene = new ScrollScene({triggerElement: "#trigger3", duration: 600})
			.setTween(title4in)
			.addTo(controller);

})

