var totalItems = $('#carouselExampleIndicators .carousel-item').length;
var currentIndex = $('#carouselExampleIndicators .carousel-item.active').index() + 1;
$('.num').html('0'+currentIndex+'<sub>/ 0'+totalItems+'</sub>');


$('#carouselExampleIndicators').on('slide.bs.carousel', function() {
    currentIndex = $('#carouselExampleIndicators .carousel-item.active').index() + 1;
    $('.num').html('0'+currentIndex+'<sub>/ 0'+totalItems+'</sub>');
    // $('.current-num').text(currentIndex);
    // $('.total-num').text(totalItems);
});


// This triggers after each slide change
















