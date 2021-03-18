$('.carousel[data-type="multi"] .item').each(function() {
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < 2; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});
$(document).ready(function () {
    $("#accordion li > h4").click(function () {

        if ($(this).next().is(':visible')) {
            $(this).next().slideUp(300);
            $(this).children(".plusminus").text('+');
        } else {
            $(this).next("#accordion ul").slideDown(300);
            $(this).children(".plusminus").text('-');
        }
    });
});