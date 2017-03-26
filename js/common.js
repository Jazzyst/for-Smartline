$(document).ready(function() {


	

	$('.single-item').slick({
		infinite: true,
		dots: true,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1000,
		arrows: false
	});

	$('.responsive').slick({
	focusOnSelect: true,
	dots: false,
	arrows: false,
	infinite: true,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 1,
	nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
	prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
				arrows: false
			}
		},
		{
			breakpoint: 960,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
				arrows: true
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: true
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true
			}

		},
		{
			breakpoint: 320,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true
			}

		}
	]
});

	$('.custom-select').niceSelect();
				$(document).on('click', 'ul.tabs__caption li:not(.active)', function() {
					$(this)
					.addClass('active').siblings().removeClass('active')
					.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
				});
	

	$(".slider-bottom-item").click(function(){
		$(".slider-bottom-item").removeClass("active");
		$(this).addClass("active");
	});

	$(".toggle_mnu").click(function() {
			$(this).toggleClass("on");
			$(".main-mnu").slideToggle();
			$(".sandwich").toggleClass("active");
		});


	$('.main-mnu li').click(function(){
    $(".main-mnu").slideToggle();
    $(".sandwich").toggleClass("active");
  });

  	


	$(".button").mPageScroll2id();
	$("nav ul a").mPageScroll2id();

	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Дякуємо за реєстрацію!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


	
});

$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});


function initialize() {

  var styleArray = [
    {
      featureType: 'all',
      stylers: [
        { saturation: -100 }
      ]
    }
  ];

  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(50.43718550000001,30.522465499999953),
    styles: styleArray
  };

  var map = new google.maps.Map(document.getElementById('gmap_canvas'),
    mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);

