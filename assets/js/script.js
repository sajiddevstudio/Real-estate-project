/*-----------------------------------------------------------------------------------
    Template Name: DAX - IT solutions & Services HTML Template
    Template URI: https://ultimatewebsolutions.net/dax/
    Author: WebTend
    Author URI:  https://ultimatewebsolutions.net/
    Version: 1.0

    Note: This is Main JS File.
-----------------------------------------------------------------------------------
    CSS INDEX
    ===================
    ## Header Style
    ## Dropdown menu
    ## Submenu
    ## Video Popup
    ## Blog Filtering
    ## Timeline Images
    ## Timeline Content
    ## SlideShow Images
    ## Feature Content
    ## Testimonials Slider
    ## Testimonials Slider Two
    ## Testimonials Slider Three
    ## Achievements Counter
    ## Scroll to Top
    ## Nice Select
    ## WOW Animation
    ## Preloader
    ## Blog Filtering
    
-----------------------------------------------------------------------------------*/

(function ($) {

    "use strict";

    $(document).ready(function () {

        // ## Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 250) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }
        headerStyle();


        // ## Dropdown menu
        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');

        navcollapse.hover(function () {
            if ($(window).innerWidth() >= mobileWidth) {
                $(this).children('ul').stop(true, false, true).slideToggle(300);
                $(this).children('.megamenu').stop(true, false, true).slideToggle(300);
            }
        });

        // ## Submenu Dropdown Toggle
        if ($('.main-header .navigation li.dropdown ul').length) {
            $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-chevron-down"></span></div>');

            //Dropdown Button
            $('.main-header .navigation li.dropdown .dropdown-btn').on('click', function () {
                $(this).prev('ul').slideToggle(500);
                $(this).prev('.megamenu').slideToggle(800);
            });

            //Disable dropdown parent link
            $('.navigation li.dropdown > a').on('click', function (e) {
                e.preventDefault();
            });
        }

        //Submenu Dropdown Toggle
        if ($('.main-header .main-menu').length) {
            $('.main-header .main-menu .navbar-toggle').click(function () {
                $(this).prev().prev().next().next().children('li.dropdown').hide();
            });
        }


        // OnePage Nav
        $('.onepage a').on('click', function () {
            $('.navbar-collapse').removeClass('show');
        });


        // ## Video Popup
        if ($('.video-play').length) {
            $('.video-play').magnificPopup({
                type: 'video',
            });
        }

        // ## Video Popup two
        if ($('.video-play-two').length) {
            $('.video-play-two').magnificPopup({
                type: 'video',
            });
        }


        // ## Blog Filtering
        $(".blog-filter li").on('click', function () {
            $(".blog-filter li").removeClass("current");
            $(this).addClass("current");

            var selector = $(this).attr('data-filter');
            $('.blog-active').imagesLoaded(function () {
                $(".blog-active").isotope({
                    itemSelector: '.item',
                    filter: selector,
                });
            });

        });


        // ## Timeline Images
        if ($('.timeline-images').length) {
            $('.timeline-images').slick({
                dots: false,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 5000,
                arrows: false,
                vertical: false,
                speed: 1000,
                fade: true,
                asNavFor: '.timeline-content',
                variableWidth: false,
                focusOnSelect: false,
                slidesToShow: 1,
                slidesToScroll: 1,
            });
        }

        // ## Timeline Content Slider
        if ($('.timeline-content').length) {
            $('.timeline-content').slick({
                dots: false,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 5000,
                arrows: false,
                vertical: true,
                speed: 1000,
                asNavFor: '.timeline-images',
                variableWidth: false,
                focusOnSelect: true,
                slidesToShow: 4,
                slidesToScroll: 1,
            });
        }


        // ## SlideShow Images
        if ($('.slideshow-images').length) {
            var $statuss = $('.slideshowpagi.paginginfo');
            var $slickElementt = $('.slideshow-images');

            $slickElementt.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
                //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
                var i = (currentSlide ? currentSlide : 0) + 1;
                $statuss.text(i + ' / ' + slick.slideCount);
            });

            $slickElementt.slick({
                autoplay: true,
                dots: false,
                prevArrow: '.slideshow-prev',
                nextArrow: '.slideshow-next',
            });
        }

        // ## Feature Content Slider
        if ($('.features-content-slider').length) {
            var $status = $('.featurepagi.paginginfo');
            var $slickElement = $('.features-content-slider');

            $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
                //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
                var i = (currentSlide ? currentSlide : 0) + 1;
                $status.text(i + ' / ' + slick.slideCount);
            });

            $slickElement.slick({
                autoplay: true,
                dots: false,
                prevArrow: '.feature-prev',
                nextArrow: '.feature-next',
            });
        }


        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        })


        // ## Testimonials Slider
        if ($('.testimonials-slider').length) {
            $('.testimonials-slider').slick({
                infinite: true,
                arrows: true,
                dots: false,
                fade: true,
                autoplay: true,
                prevArrow: '<button class="testimonials-prev"><i class="fal fa-long-arrow-left"></i></button>',
                nextArrow: '<button class="testimonials-next"><i class="fal fa-long-arrow-right"></i></button>',
                autoplaySpeed: 5000,
                pauseOnHover: false,
                slidesToScroll: 1,
                slidesToShow: 1,
            });
        }


        // ## Testimonials Slider Two
        if ($('.testimonials-slider-two').length) {
            $('.testimonials-slider-two').slick({
                infinite: true,
                arrows: true,
                dots: false,
                autoplay: false,
                prevArrow: '<button class="testimonials-prev"><i class="fal fa-long-arrow-left"></i></button>',
                nextArrow: '<button class="testimonials-next"><i class="fal fa-long-arrow-right"></i></button>',
                autoplaySpeed: 5000,
                pauseOnHover: false,
                slidesToScroll: 1,
                slidesToShow: 3,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            });
        }


        // ## Testimonials Slider Three
        if ($('.reviews-slider-three').length) {
            $('.reviews-slider-three').slick({
                infinite: true,
                arrows: true,
                dots: false,
                autoplay: false,
                prevArrow: '.review-prev',
                nextArrow: '.review-next',
                autoplaySpeed: 5000,
                pauseOnHover: false,
                slidesToScroll: 1,
                slidesToShow: 1,
            });
        }


        /* ## Achievements Counter */
        if ($('.counter-text-wrap').length) {
            $('.counter-text-wrap').appear(function () {

                var $t = $(this),
                    n = $t.find(".count-text").attr("data-stop"),
                    r = parseInt($t.find(".count-text").attr("data-speed"), 10);

                if (!$t.hasClass("counted")) {
                    $t.addClass("counted");
                    $({
                        countNum: $t.find(".count-text").text()
                    }).animate({
                        countNum: n
                    }, {
                        duration: r,
                        easing: "linear",
                        step: function () {
                            $t.find(".count-text").text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $t.find(".count-text").text(this.countNum);
                        }
                    });
                }

            }, {
                accY: 0
            });
        }



        // ## Scroll to Top
        if ($('.scroll-to-target').length) {
            $(".scroll-to-target").on('click', function () {
                var target = $(this).attr('data-target');
                // animate
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 1000);

            });
        }


        // ## Nice Select
        $('select').niceSelect();


        // ## WOW Animation
        if ($('.wow').length) {
            var wow = new WOW({
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0, // distance to the element when triggering the animation (default is 0)
                mobile: false, // trigger animations on mobile devices (default is true)
                live: true // act on asynchronously loaded content (default is true)
            });
            wow.init();
        }



    });


    /* ==========================================================================
       When document is resize, do
       ========================================================================== */

    $(window).on('resize', function () {
        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');
        navcollapse.children('ul').hide();
        navcollapse.children('.megamenu').hide();

    });


    /* ==========================================================================
       When document is scroll, do
       ========================================================================== */

    $(window).on('scroll', function () {

        // Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 100) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }

        headerStyle();

    });

    /* ==========================================================================
       When document is loaded, do
       ========================================================================== */

    $(window).on('load', function () {

        // ## Preloader
        function handlePreloader() {
            if ($('.preloader').length) {
                $('.preloader').delay(200).fadeOut(500);
            }
        }
        handlePreloader();


        // ## Blog Filtering
        if ($('.blog-active').length) {
            $(this).imagesLoaded(function () {
                $('.blog-active').isotope({
                    // options
                    itemSelector: '.item',
                });
            });
        }


    });

})(window.jQuery);


// ## Get Current Date
function getCurrentDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    return today;
}

// ## Schedule Calendar
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialDate: getCurrentDate(),
        firstDay: 1,
        editable: false,
        selectable: false,
        businessHours: true,
        dayMaxEvents: true, // allow "more" link when too many events
        events: [
            {
                title: '09:00 AM - 05:00 PM',
                start: '2023-05-29',
                end: '2023-06-02'
            },
            {
                title: '09:00 AM - 01:00 PM',
                start: '2023-06-02',
                end: '2023-06-04'
            },
            {
                title: 'Day Off',
                start: '2023-06-04',
                end: '2023-06-04',
                color: '#D9DFE7',
                textColor: '#4A515B'
            },
            {
                title: '09:00 AM - 05:00 PM',
                start: '2023-06-05',
                end: '2023-06-09'
            },
            {
                title: '09:00 AM - 01:00 PM',
                start: '2023-06-09',
                end: '2023-06-11'
            },
            {
                title: 'Day Off',
                start: '2023-06-11',
                end: '2023-06-11',
                color: '#D9DFE7',
                textColor: '#4A515B'
            },
            {
                title: '09:00 AM - 05:00 PM',
                start: '2023-06-12',
                end: '2023-06-16'
            },
            {
                title: '09:00 AM - 01:00 PM',
                start: '2023-06-16',
                end: '2023-06-18'
            },
            {
                title: 'Day Off',
                start: '2023-06-18',
                end: '2023-06-18',
                color: '#D9DFE7',
                textColor: '#4A515B'
            },
            {
                title: '09:00 AM - 05:00 PM',
                start: '2023-06-19',
                end: '2023-06-22'
            },
            {
                title: 'Day Off',
                start: '2023-06-22',
                end: '2023-06-22',
                color: '#D9DFE7',
                textColor: '#4A515B'
            },
            {
                title: '09:00 AM - 01:00 PM',
                start: '2023-06-23',
                end: '2023-06-25'
            },
            {
                title: 'Day Off',
                start: '2023-06-25',
                end: '2023-06-25',
                color: '#D9DFE7',
                textColor: '#4A515B'
            },
            {
                title: 'Holiday',
                start: '2023-06-26',
                end: '2023-07-03',
                color: '#D9DFE7',
                textColor: '#4A515B'
            },
            // End of June
        ]
    });

    calendar.render();
});