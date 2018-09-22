$(document).ready(() => {

    //valid login
    $("form").submit(function(event) {
        if ($("input:first").val() === "correct") {
            $("span").text("Validated...").show();
            return;
        }

        $(".valid").text("Not valid!").show().fadeOut(3000);
        event.preventDefault();
    });
    //end

    $('.shoe-details').show();

    $('.more-details-button').on('click', event => {
        $(event.currentTarget).closest('.product-details').next().toggle();
        $(event.currentTarget).find('img').toggleClass('rotate');
    });
});

$('.shoe-details li').on('click', event => {
    $(event.currentTarget).addClass('active');

    $(event.currentTarget).siblings().removeClass('active')

    $(event.currentTarget).closest('.shoe-details').children().removeClass('disabled')
    $('.product-detalis').closest('active').next();


});
//active gallerry
$('.product-photo').on('mouseenter', (event) => {
    $(event.currentTarget).addClass('photo-active');
}).on('mouseleave', (event) => {
    $(event.currentTarget).removeClass('photo-active');
});
//end


///////////////////////////////////////////
$('.login-button').on('click', () => {
    $('.login-form').slideToggle(500, 'linear', () => {
        $('.registr').addClass('active');
        $('.registr').show(1700, 'linear').delay(5000).hide(400, 'linear');
    });
    $('.login-button').toggleClass('button-active');
});

$('.product-photo').on('mouseenter', () => {
    $(this).addClass('photo-active');
}).on('mouseleave', function() {
    $(this).removeClass('photo-active');
});

const $menuButton = $('.menu-button');
const $navDropdown = $('#nav-dropdown');
$menuButton.on('click', () => {
    $navDropdown.slideToggle(500);
    $menuButton.toggleClass('button-active');
});
$menuButton.on('mouseenter', () => {
    $menuButton.css('color', '#C3FF00');
    $menuButton.animate({ fontSize: '24px' });
}).on('mouseleave', () => {
    $menuButton.css('color', '#EFEFEF');
    $menuButton.animate({ fontSize: '18px' });
});
const $prepend = $('.addTo');
const $prependTwo = $('.addAnd')
$prepend.on('mouseenter', (event) => {
    $(event.currentTarget).prepend('{{ ').addClass('active');
    $(event.currentTarget).append(' }}');


}).on('mouseleave', () => {
    $(event.currentTarget).text('warnning')
        .removeClass('active');
});
$prependTwo.on('mouseenter', (event) => {
    $(event.currentTarget).prepend('&& ').addClass('active');

}).on('mouseleave', () => {
    $(event.currentTarget).text('warnning').removeClass('active');
});