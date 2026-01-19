$(document).ready(function () {
    // lang
    $('.language__current').click(function () {
        $('.language__list').toggleClass('active');
        $(this).toggleClass('open');
    })

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.language').length) {
            $('.language__list').removeClass('active');
            $('.language__current').removeClass('open');
        }
    });


});