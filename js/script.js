$(document).ready( function(){
	var controller;
	var $title = $("#titlewrapper");
	var $headlineX = $title.width() / 2 ;
	var $headlineY = $title.height() / 2; 
	var $scrollind = $("#scrolldown").width() / 2;

	$title.css({"margin-top": - $headlineY, "margin-left": - $headlineX});

	$("#titlewrapper2").css({"margin-top": - $headlineY, "margin-left": - $headlineX});
	$("#titlewrapper3").css({"margin-top": - $headlineY, "margin-left": - $headlineX});
	$("#scrolldown").css({"margin-left": - $scrollind});

	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll == 0) {
		} else {
			$('#scrolldown').addClass("hide");
		}
		console.log(scroll);
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
					{"left": "50%", onComplete: complete(2)}
					);

		var scene = new ScrollScene({triggerElement: "#trigger1", duration: 600})
					.setTween(title2in)
					.addTo(controller);

		var title2out = TweenMax.fromTo("#titlewrapper2", 0.7, 
					{"left": "50%"},
					{"left": "-50%"}
					);

		var scene = new ScrollScene({triggerElement: "#trigger3", duration: 600})
					.setTween(title2out)
					.addTo(controller)

		var title3in = TweenMax.fromTo("#titlewrapper3", 0.7, 
					{"left": "150%"},
					{"left": "50%", onComplete: complete(3)}
					);

		var scene = new ScrollScene({triggerElement: "#trigger3", duration: 600})
					.setTween(title3in)
					.addTo(controller);

		function complete(n) {
			if (n === 2) {
				var title2Pos = $('#titlewrapper2').position.left;
			} else if (n === 3) {
				var title3Pos = $('#titlewrapper3').position.left;
			} else { 
				//do nothing
			}
		}

}

})

