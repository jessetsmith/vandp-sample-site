/*
	Hyperbolic by Pixelarity
	pixelarity.com | hello@pixelarity.com
	License: pixelarity.com/license
*/



(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$nav = $('#nav'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			default:   ['1681px',   null       ],
			xlarge:    ['1281px',   '1680px'   ],
			large:     ['981px',    '1280px'   ],
			medium:    ['737px',    '980px'    ],
			small:     ['481px',    '736px'    ],
			xsmall:    ['361px',    '480px'    ],
			xxsmall:   [null,       '360px'    ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			alignment: 'right',
			hideDelay: 350,
			baseZIndex: 100000
		});

	// Menu.
		$('<a href="#navPanel" class="navPanelToggle">Menu</a>')
			.appendTo($header);

		$(	'<div id="navPanel">' +
				'<nav>' +
					$nav.navList() +
				'</nav>' +
				'<a href="#navPanel" class="close"></a>' +
			'</div>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					target: $body,
					visibleClass: 'is-navPanel-visible',
					side: 'right'
				});

				// if($header.hasClass('reveal')){
				
				// 	$('.navPanelToggle').css('color', 'black');
					
				// } else {
				// 	$('.navPanelToggle').css('color', '#ffffff');
				// }
				// https://vandpdigital.github.io/v-p_site_0.1/index.html

				// if (location.href === 'file:///Users/jessesmith/Desktop/V&P/v&p_site_0.1/index.html'){
				// 	$window.scroll(function(){
				// 		let scroll = $window.scrollTop();
				// 		if(scroll > 300) {
				// 		$('.navPanelToggle').css('color', 'black');
				// 	}else {
				// 			$('.navPanelToggle').css('color', '#ffffff');
		
				// 			}
				// 	})
				// }else if($header.hasClass('reveal')){
				
				// 	$('.navPanelToggle').css('color', 'black');
					
				// }
			


		
				// if($window.scroll(function() {
				// 	let scroll = $window.scrollTop();
				// 	if(scroll > 300) {
				// 		$('.navPanelToggle').css('color', 'black');
				// 	}
				// 	else {
				// 		$('.navPanelToggle').css('color', '#ffffff');

				// 	}
				// }))

	// Scrolly.
		$('.scrolly').scrolly({
			offset: function() { return $header.outerHeight() - 5 - 64; }
		});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$body.addClass('header-alt');

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() - 64,
				terminate:	function() { $header.removeClass('alt'); $body.removeClass('header-alt'); },
				enter:		function() { $header.addClass('alt'); $body.addClass('header-alt'); $header.removeClass('reveal')},
				leave:		function() { $header.removeClass('alt'); $body.removeClass('header-alt'); $header.addClass('reveal')}
			});

			
		}


	// Banner.

		// Hack: Fix flex min-height on IE.
			if (browser.name == 'ie') {
				$window.on('resize.ie-banner-fix', function() {

					var h = $banner.height();

					if (h > $window.height())
						$banner.css('height', 'auto');
					else
						$banner.css('height', h);

				}).trigger('resize.ie-banner-fix');
			}

})(jQuery);

// Video Play Button Function

const playButton = document.getElementById("videoButton");
const video = document.getElementById("welcomeVid")

playButton.addEventListener('click', function playVideo(){ 
	playButton.style.display = 'none';
	video.play();

})

video.addEventListener('click', function pauseVideo() {
	video.pause();
	playButton.style.display = 'block';

})

// Cookies Script


$('.accept-button').click(function () {
	$('.cookie-container').fadeOut(500);
	$('#cookie-toast-1').delay(800).fadeIn(500).delay(1000).fadeOut(500);
});





