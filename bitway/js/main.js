/*=========================================

Template Name: Bitway - Crypto Currency HTML5 Template
Author: Theme_Choices
Version: 1.0
Design and Developed by: Theme_Choices

=========================================*/

(function($) {
    "use strict";

    var $window = $(window),
        $body = $('body');
		
	 /*=============================
         Sticky Header Background
    ==============================*/	
				
		$(window).on("scroll", function() {
			if($(window).scrollTop() > 50) {
				$(".home-header").addClass("home-header-new");
			} else {
				//remove the background property so it comes transparent again (defined in your css)
			   $(".home-header").removeClass("home-header-new");
			}
		});

    /*=============================
                Smoothscroll js
    ==============================*/
    $('.banner-btn, .about-btn').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 70
        }, 1000);
        event.preventDefault();
    });

    /*=============================
                PRELOADER JS
    ==============================*/

    $(window).on('load', function() {
        $('.preloader').fadeOut(1000);
    });

    /*==========================
            Back To Top
    ============================*/
    $(".scrollup").hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 400) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
    $('.scrollup').on('click', function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    /*=============================
            WOW js
    ==============================*/
    new WOW({
        mobile: false
    }).init();

    /*=============================
            COUNTER JS
    ==============================*/
    $('.counter').counterUp({
        delay: 3,
        time: 600
    });

    /*=============================
            MOBILE MENU
    ==============================*/

    $('nav#mobile-nav').meanmenu({
        siteLogo: "<a href='index.html'><img src='images/header-banner/header-logo.png' /></a>"
    });

	/*=============================
            JQUERY FORM VALIDATION
    ==============================*/
		$(".new-contact-form").validate();

    /*===================================
           Owl Carousel Reviews
    ====================================*/
    $(".reviews-list").owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
		navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
	
        // Add minus icon for collapse element which is open by default
        $(".collapse.in").each(function(){
        	$(this).siblings(".panel-heading").find(".fa").addClass("fa-minus").removeClass("fa-plus");
        });
        
        // Toggle plus minus icon on show hide of collapse element
        $(".collapse").on('show.bs.collapse', function(){
        	$(this).parent().find(".fa").removeClass("fa-plus").addClass("fa-minus");
        }).on('hide.bs.collapse', function(){
        	$(this).parent().find(".fa").removeClass("fa-minus").addClass("fa-plus");
        });
		 $('.panel-title').on('click', function(e) {
         $('.collapse').collapse('hide');
       });

})(jQuery);