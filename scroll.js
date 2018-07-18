var headHeight = $('header').outerHeight();

$('.arrowdown').click(function (e) {

    var linkHref = $(this).attr('href');


    $('html, body').animate({
        scrollTop: $(linkHref).offset().top - headHeight
    }, 1000);

    e.preventDefault();
});
