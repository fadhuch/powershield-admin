// React App Initialization Script
// This script handles the initialization of jQuery plugins and prevents errors

$(document).ready(function() {
    // Ensure content is visible by removing any preloader overlays
    setTimeout(function() {
        // Remove any preloader overlays that might be blocking content
        $('#jpreOverlay, .jpreLoader, #preloader, .preloader').fadeOut();
        $('body').removeClass('loading');
        $('body').css('overflow', 'visible');
    }, 500);
    
    // Check if jpreLoader exists before calling it
    if (typeof $.fn.jpreLoader !== 'undefined') {
        $("body").jpreLoader({
            showSplash: false,
            loaderVPos: '50%',
            autoClose: true,
            showPercentage: false
        });
    }

    // Initialize WOW.js for animations
    if (typeof WOW !== 'undefined') {
        new WOW().init();
    }

    // Initialize other plugins safely
    if (typeof $.fn.owlCarousel !== 'undefined') {
        $('.owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            nav: true,
            dots: false
        });
    }

    // Initialize Magnific Popup
    if (typeof $.fn.magnificPopup !== 'undefined') {
        $('.popup-image').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    }

    // Initialize counter animations
    if (typeof $.fn.countTo !== 'undefined') {
        $('.timer').countTo();
    }

    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(e) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 1000);
        }
    });

    // Mobile menu toggle
    $('.menu-toggle').on('click', function() {
        $(this).toggleClass('active');
        $('#mainmenu').toggleClass('menu-open');
    });

    // Form validation and submission
    $('.contact-form').on('submit', function(e) {
        // Let React handle form submission
        // This is just for additional styling
    });

    // Stellar parallax (if available)
    if (typeof $.fn.stellar !== 'undefined') {
        // Initialize Stellar with a delay to ensure DOM is ready
        setTimeout(function() {
            $(window).stellar({
                responsive: true,
                horizontalScrolling: false,
                verticalOffset: 0,
                hideDistantElements: false
            });
        }, 100);
    }

    // Header scroll effect
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('header').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
        }
    });
});
