$(document).ready(function () {
  $('.btn-vertical-slider').on('click', function () {
    if ($(this).attr('data-slide') == 'next') {
        $('#myCarousel2').carousel('next')
    }
    if ($(this).attr('data-slide') == 'prev') {
        $('#myCarousel2').carousel('prev')
    }
});
});
