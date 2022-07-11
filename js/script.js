$(document).ready(function () {

    AOS.init({
        once: true
     })

    $(".navbar-toggler").click(function (e) {
        $(this).toggleClass("open");
        $(".navbar-menu").toggleClass("show");
        $("html").toggleClass("overflowSection");
        e.preventDefault();
    });

    $(".menu-close").click(function (e) {
        $(".navbar-toggler").removeClass("open");
        $(".navbar-menu").removeClass("show");
        $("html").removeClass("overflowSection");
        e.preventDefault();
    });

    $('.work-slider').slick({
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="slick-prev slick-arrow"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M25.3749 38.9861C26.1343 38.2268 26.1343 36.9956 25.3749 36.2363L15.0832 25.9446L37.6111 25.9446C38.685 25.9446 39.5555 25.074 39.5555 24.0001C39.5555 22.9262 38.685 22.0557 37.6111 22.0557L15.0832 22.0557L25.3749 11.7639C26.1343 11.0046 26.1343 9.77343 25.3749 9.01408C24.6156 8.25472 23.3844 8.25472 22.6251 9.01408L9.01395 22.6252C8.64579 22.9933 8.45613 23.4724 8.44496 23.9548C8.44423 23.9861 8.44426 24.0173 8.44503 24.0485C8.45094 24.2904 8.50101 24.5213 8.58748 24.7335C8.6824 24.9669 8.82455 25.1856 9.01395 25.375L22.6251 38.9861C23.3844 39.7455 24.6156 39.7455 25.3749 38.9861Z" fill="#212121"/><mask id="mask0_303_1307" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="8" y="8" width="32" height="32"><path fill-rule="evenodd" clip-rule="evenodd" d="M25.3749 38.9861C26.1343 38.2268 26.1343 36.9956 25.3749 36.2363L15.0832 25.9446L37.6111 25.9446C38.685 25.9446 39.5555 25.074 39.5555 24.0001C39.5555 22.9262 38.685 22.0557 37.6111 22.0557L15.0832 22.0557L25.3749 11.7639C26.1343 11.0046 26.1343 9.77343 25.3749 9.01408C24.6156 8.25472 23.3844 8.25472 22.6251 9.01408L9.01395 22.6252C8.64579 22.9933 8.45613 23.4724 8.44496 23.9548C8.44423 23.9861 8.44426 24.0173 8.44503 24.0485C8.45094 24.2904 8.50101 24.5213 8.58748 24.7335C8.6824 24.9669 8.82455 25.1856 9.01395 25.375L22.6251 38.9861C23.3844 39.7455 24.6156 39.7455 25.3749 38.9861Z" fill="white"/></mask><g mask="url(#mask0_303_1307)"><rect x="47.3333" y="47.3335" width="46.6667" height="46.6667" transform="rotate(-180 47.3333 47.3335)" fill="#464447"/></g></svg></div>',
        nextArrow: '<div class="slick-next slick-arrow"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.6251 9.01409C21.8657 9.77345 21.8657 11.0046 22.6251 11.764L32.9168 22.0557H10.3889C9.31498 22.0557 8.44443 22.9262 8.44443 24.0001C8.44443 25.074 9.31498 25.9446 10.3889 25.9446H32.9168L22.6251 36.2363C21.8657 36.9957 21.8657 38.2268 22.6251 38.9862C23.3844 39.7455 24.6156 39.7455 25.3749 38.9862L38.986 25.3751C39.3542 25.0069 39.5438 24.5278 39.555 24.0454C39.5557 24.0142 39.5557 23.9829 39.5549 23.9517C39.549 23.7099 39.499 23.479 39.4125 23.2668C39.3176 23.0333 39.1754 22.8146 38.986 22.6252L25.3749 9.01409C24.6156 8.25474 23.3844 8.25474 22.6251 9.01409Z" fill="#212121"/><mask id="mask0_303_13077" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="8" y="8" width="32" height="32"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.6251 9.01409C21.8657 9.77345 21.8657 11.0046 22.6251 11.764L32 9168 22.0557H10.3889C9.31498 22.0557 8.44443 22.9262 8.44443 24.0001C8.44443 25.074 9.31498 25.9446 10.3889 25.9446H32.9168L22.6251 36.2363C21.8657 36.9957 21.8657 38.2268 22.6251 38.9862C23.3844 39.7455 24.6156 39.7455 25.3749 38.9862L38.986 25.3751C39.3542 25.0069 39.5438 24.5278 39.555 24.0454C39.5557 24.0142 39.5557 23.9829 39.5549 23.9517C39.549 23.7099 39.499 23.479 39.4125 23.2668C39.3176 23.0333 39.1754 22.8146 38.986 22.6252L25.3749 9.01409C24.6156 8.25474 23.3844 8.25474 22.6251 9.01409Z" fill="white"/></mask><g mask="url(#mask0_303_13077)"><rect x="0.666656" y="0.666748" width="46.6667" height="46.6667" fill="#464447"/></g></svg></div>',
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 374,
            settings: {
                slidesToShow: 1,
            }
        },
        ]
    });
    $('.media-slider').slick({
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="slick-prev slick-arrow"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.58958 13.4227C7.91502 13.0972 7.91502 12.5696 7.58958 12.2442L3.17883 7.83342L12.8337 7.83341C13.2939 7.83341 13.667 7.46032 13.667 7.00008C13.667 6.53984 13.2939 6.16675 12.8337 6.16675L3.17884 6.16675L7.58958 1.75601C7.91502 1.43057 7.91502 0.902933 7.58958 0.577496C7.26414 0.25206 6.7365 0.25206 6.41107 0.577496L0.577736 6.41083C0.419613 6.56895 0.338319 6.77481 0.333853 6.98201C0.333594 6.99406 0.333594 7.00611 0.333853 7.01815C0.336098 7.12367 0.357954 7.22436 0.395924 7.31672C0.436599 7.41589 0.497203 7.50881 0.577736 7.58934L6.41107 13.4227C6.73651 13.7481 7.26414 13.7481 7.58958 13.4227Z" fill="#212121"/></svg></div>',
        nextArrow: '<div class="slick-next slick-arrow"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.41042 0.57741C6.08498 0.902847 6.08498 1.43048 6.41042 1.75592L10.8212 6.16667H1.16634C0.706104 6.16667 0.333008 6.53976 0.333008 7C0.333008 7.46024 0.706104 7.83333 1.16634 7.83333H10.8212L6.41042 12.2441C6.08498 12.5695 6.08498 13.0971 6.41042 13.4226C6.73586 13.748 7.26349 13.748 7.58893 13.4226L13.4223 7.58925C13.5804 7.43113 13.6617 7.22527 13.6661 7.01807C13.6664 7.00602 13.6664 6.99397 13.6661 6.98193C13.6639 6.87641 13.642 6.77572 13.6041 6.68336C13.5634 6.58419 13.5028 6.49127 13.4223 6.41074L7.58893 0.57741C7.26349 0.251973 6.73586 0.251973 6.41042 0.57741Z" fill="#212121"/></svg></div>',
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 374,
            settings: {
                slidesToShow: 1,
            }
        },
        ]
    });


    $('.portfolio-slider').slick({
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="slick-prev slick-arrow"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M25.3749 38.9861C26.1343 38.2268 26.1343 36.9956 25.3749 36.2363L15.0832 25.9446L37.6111 25.9446C38.685 25.9446 39.5555 25.074 39.5555 24.0001C39.5555 22.9262 38.685 22.0557 37.6111 22.0557L15.0832 22.0557L25.3749 11.7639C26.1343 11.0046 26.1343 9.77343 25.3749 9.01408C24.6156 8.25472 23.3844 8.25472 22.6251 9.01408L9.01395 22.6252C8.64579 22.9933 8.45613 23.4724 8.44496 23.9548C8.44423 23.9861 8.44426 24.0173 8.44503 24.0485C8.45094 24.2904 8.50101 24.5213 8.58748 24.7335C8.6824 24.9669 8.82455 25.1856 9.01395 25.375L22.6251 38.9861C23.3844 39.7455 24.6156 39.7455 25.3749 38.9861Z" fill="#212121"/><mask id="mask0_303" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="8" y="8" width="32" height="32"><path fill-rule="evenodd" clip-rule="evenodd" d="M25.3749 38.9861C26.1343 38.2268 26.1343 36.9956 25.3749 36.2363L15.0832 25.9446L37.6111 25.9446C38.685 25.9446 39.5555 25.074 39.5555 24.0001C39.5555 22.9262 38.685 22.0557 37.6111 22.0557L15.0832 22.0557L25.3749 11.7639C26.1343 11.0046 26.1343 9.77343 25.3749 9.01408C24.6156 8.25472 23.3844 8.25472 22.6251 9.01408L9.01395 22.6252C8.64579 22.9933 8.45613 23.4724 8.44496 23.9548C8.44423 23.9861 8.44426 24.0173 8.44503 24.0485C8.45094 24.2904 8.50101 24.5213 8.58748 24.7335C8.6824 24.9669 8.82455 25.1856 9.01395 25.375L22.6251 38.9861C23.3844 39.7455 24.6156 39.7455 25.3749 38.9861Z" fill="white"/></mask><g mask="url(#mask0_303)"><rect x="47.3333" y="47.3335" width="46.6667" height="46.6667" transform="rotate(-180 47.3333 47.3335)" fill="#464447"/></g></svg></div>',
        nextArrow: '<div class="slick-next slick-arrow"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.6251 9.01409C21.8657 9.77345 21.8657 11.0046 22.6251 11.764L32.9168 22.0557H10.3889C9.31498 22.0557 8.44443 22.9262 8.44443 24.0001C8.44443 25.074 9.31498 25.9446 10.3889 25.9446H32.9168L22.6251 36.2363C21.8657 36.9957 21.8657 38.2268 22.6251 38.9862C23.3844 39.7455 24.6156 39.7455 25.3749 38.9862L38.986 25.3751C39.3542 25.0069 39.5438 24.5278 39.555 24.0454C39.5557 24.0142 39.5557 23.9829 39.5549 23.9517C39.549 23.7099 39.499 23.479 39.4125 23.2668C39.3176 23.0333 39.1754 22.8146 38.986 22.6252L25.3749 9.01409C24.6156 8.25474 23.3844 8.25474 22.6251 9.01409Z" fill="#212121"/><mask id="mask0_303_131" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="8" y="8" width="32" height="32"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.6251 9.01409C21.8657 9.77345 21.8657 11.0046 22.6251 11.764L32 9168 22.0557H10.3889C9.31498 22.0557 8.44443 22.9262 8.44443 24.0001C8.44443 25.074 9.31498 25.9446 10.3889 25.9446H32.9168L22.6251 36.2363C21.8657 36.9957 21.8657 38.2268 22.6251 38.9862C23.3844 39.7455 24.6156 39.7455 25.3749 38.9862L38.986 25.3751C39.3542 25.0069 39.5438 24.5278 39.555 24.0454C39.5557 24.0142 39.5557 23.9829 39.5549 23.9517C39.549 23.7099 39.499 23.479 39.4125 23.2668C39.3176 23.0333 39.1754 22.8146 38.986 22.6252L25.3749 9.01409C24.6156 8.25474 23.3844 8.25474 22.6251 9.01409Z" fill="white"/></mask><g mask="url(#mask0_303_131)"><rect x="0.666656" y="0.666748" width="46.6667" height="46.6667" fill="#464447"/></g></svg></div>',

    });

    $('.modal').on('shown.bs.modal', function () {
    })

    $('.gallery-modal').on('shown.bs.modal', function (e) {
        $('.gallery-slider').slick({
            dots: false,
            arrows: true,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="slick-prev slick-arrow"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6 22.6L28.6 10.6C29 10.2 29.4 10 30 10C30.6 10 31 10.2 31.4 10.6C32.2 11.4 32.2 12.6 31.4 13.4L20.8 24L31.4 34.6C32.2 35.4 32.2 36.6 31.4 37.4C30.6 38.2 29.4 38.2 28.6 37.4L16.6 25.4C15.8 24.6 15.8 23.4 16.6 22.6Z" fill="#F9F9F9"/></svg></div>',
            nextArrow: '<div class="slick-next slick-arrow"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.4 25.4L19.4 37.4C19 37.8 18.6 38 18 38C17.4 38 17 37.8 16.6 37.4C15.8 36.6 15.8 35.4 16.6 34.6L27.2 24L16.6 13.4C15.8 12.6 15.8 11.4 16.6 10.6C17.4 9.8 18.6 9.8 19.4 10.6L31.4 22.6C32.2 23.4 32.2 24.6 31.4 25.4Z" fill="#F9F9F9"/></svg></div>',
    
        });
	});

	// $('.gallery-modal').bind('slide.bs.carousel', function (e) {
	// 	setTimeout(function () {
	// 		$('.gallery-slider').slick('setPosition');
	// 	}, 500);
	// });
       
    $('a[data-slide]').click(function(e) {
        var slideno = $(this).data('slide');
        $('.gallery-slider').slick('slickGoTo', slideno - 1);
		e.preventDefault();
	});

    $('#send').attr('disabled', 'disabled');

    $('.contact-form').keyup(function() {
        var empty = false;
        if ($('.contact-form [name="email"]').val() != "" && $('.contact-form [name="email"]').val() != ""  && $('.contact-form [name="subject"]').val() != ""  && $('.contact-form [name="message"]').val() != "") {
            empty = true;
        }
        if (empty == false) {
            $('#send').attr('disabled', 'disabled');
            
        } else {
            $('#send').removeAttr('disabled');
        }
    });
    
    objectFitImages();
    
});

