new WOW().init();
// Select all links with hashes
$('a[href="#home"],a[href="#our-story"],a[href="#games"],a[href="#contact"]')
// Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    }
                    ;
                });
            }
        }
    });



$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

    // Show/hide menu on scroll
    //if (scrollDistance >= 850) {
    //		$('nav').fadeIn("fast");
    //} else {
    //		$('nav').fadeOut("fast");
    //}

    // Assign active class to nav links while scolling
    $('#home, #our-story ,#games, #contact').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
            $('.nav-item.active').removeClass('active');
            $('.nav-item').eq(i).addClass('active');
        }
    });
}).scroll();

$(".nav .nav-item").on("click", function(){
    $(".nav").find(".active").removeClass("active");
    $(this).addClass("active");
});

var totalItems = $('#carouselExampleIndicators .carousel-item').length;
var currentIndex = $('#carouselExampleIndicators .carousel-item.active').index() + 1;
$('.num').html('0' + currentIndex + '<sub>/ 0' + totalItems + '</sub>');


$('#carouselExampleIndicators').on('slide.bs.carousel', function () {
    currentIndex = $('#carouselExampleIndicators .carousel-item.active').index() + 1;
    $('.num').html('0' + currentIndex + '<sub>/ 0' + totalItems + '</sub>');
    // $('.current-num').text(currentIndex);
    // $('.total-num').text(totalItems);
});


$(window).scroll(function () {
    if ($(window).scrollTop() >= 300) {
        $('nav').addClass('fixed-top navbar-light-fixed');
    }
    else {
        $('nav').removeClass('fixed-top navbar-light-fixed');
    }
});

// This triggers after each slide change
















