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

    // look more
    $('.webcamlist').each(function () {
        const $list = $(this).find('ul li');
        const $btn = $(this).find('.lookmore');

        if ($list.length <= 3) {
            $btn.hide();
        } else {
            $list.slice(3).hide();
        }
    });

    $('.lookmore').on('click', function () {
        const $btn = $(this);
        const $wrap = $btn.closest('.webcamlist');
        const $items = $wrap.find('ul li');

        const isOpen = $btn.attr('data-open') === 'true';

        if (isOpen) {
            $items.slice(3).slideUp();
            $btn
                .attr('data-open', 'false')
        } else {
            $items.slideDown();
            $btn
                .attr('data-open', 'true')
        }
    });

    // style select
    if ($('select').length) {
        $('.styledselect').select2({
            placeholder: "Select a state",
            minimumResultsForSearch: Infinity,
        });
    }

    // favorite btn
    $('.favoriteall-btn, .setfav, .favorite').on('click', function () {
        $(this).toggleClass('active');
    });

    // readmore

    $('.readmore').on('click', function () {
        const $btn = $(this);
        const isOpen = $btn.attr('data-open') === 'true';

        if (isOpen) {
            $btn
                .attr('data-open', 'false')
        } else {
            $btn
                .attr('data-open', 'true')
        }

        $('.hidden-content').slideToggle()
    });

    // weather slider
    var swiper = new Swiper(".weather-slider", {
        slidesPerView: 7,
        spaceBetween: 40,
        speed: 700,
        breakpoints: {
            576: {
                slidesPerView: 5.5,
                spaceBetween: 5,
            },
            768: {
                slidesPerView: 7,
                spaceBetween: 5,
            },
            992: {
                slidesPerView: 7,
                spaceBetween: 10,
            },
            1200: {
                slidesPerView: 7,
                spaceBetween: 20,
            },
            1600: {
                slidesPerView: 7,
                spaceBetween: 40,
            },
        },
    });

});