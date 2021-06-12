/*
	Template Name: Cornike - Business HTML5 Template
	Author: Tripples
	Author URI: https://themeforest.net/user/tripples
	Description: Cornike - Business HTML5 Template
	Version: 1.0

	1. Fixed header
	2. Main slideshow
	3. Site search
	4. Owl Carousel
	5. Video popup
	6. Counter
	7. Contact form
	8. Back to top
  
*/


jQuery(function ($) {
	"use strict";

	
	/* ----------------------------------------------------------- */
	/*  Contact Map 
	/* -----------------------------------------------------------*/

	if ($('#map').length > 0) {

		var contactmap = {
			lat: 40.742964,
			lng: -73.992277
		};

		$('#map')
			.gmap3({
				zoom: 13,
				center: contactmap,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				scrollwheel: false
			})

			.marker({
				position: contactmap
			})

			.infowindow({
				position: contactmap,
				content: "NYC Seminar and Conference Center, New York"
			})

			.then(function (infowindow) {
				var map = this.get(0);
				var marker = this.get(1);
				marker.addListener('click', function () {
					infowindow.open(map, marker);
				});
			});
	}



	/* ----------------------------------------------------------- */
	/*  Owl Carousel
	/* ----------------------------------------------------------- */


	//Project slide

	$("#project-slide").owlCarousel({

		loop: true,
		animateOut: 'fadeOut',
		nav: true,
		margin: 15,
		dots: false,
		mouseDrag: true,
		touchDrag: true,
		slideSpeed: 800,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		items: 4,
		responsive: {
			0: {
				items: 2
			},
			600: {
				items: 4
			}
		}

	});


	



	//Partners slide

	$("#partners-carousel").owlCarousel({

		loop: true,
		margin: 20,
		nav: false,
		dots: false,
		mouseDrag: true,
		touchDrag: true,
		items: 5,
		responsive: {
			0: {
				items: 2
			},
			600: {
				items: 5
			}
		}

	});

	


	


	/* ----------------------------------------------------------- */
	/*  Contact form
	/* ----------------------------------------------------------- */

	$('#contact-form').submit(function () {

		var $form = $(this),
			$error = $form.find('.error-container'),
			action = $form.attr('action');

		$error.slideUp(750, function () {
			$error.hide();

			var $name = $form.find('.form-control-name'),
				$email = $form.find('.form-control-email'),
				$subject = $form.find('.form-control-subject'),
				$message = $form.find('.form-control-message');

			$.post(action, {
					name: $name.val(),
					email: $email.val(),
					subject: $subject.val(),
					message: $message.val()
				},
				function (data) {
					$error.html(data);
					$error.slideDown('slow');

					if (data.match('success') != null) {
						$name.val('');
						$email.val('');
						$subject.val('');
						$message.val('');
					}
				}
			);

		});

		return false;

	});





	

});
