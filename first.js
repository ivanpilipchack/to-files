$(document).ready(() => {

    //valid login


    $(function() {
        $('form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                }
            },
            messages: {
                name: {
                    required: "Поле 'Имя' обязательно к заполнению",
                    minlength: "Введите не менее 2-х символов в поле 'Имя'"
                },
                email: {
                    required: "Поле 'Email' обязательно к заполнению",
                    email: "Необходим формат адреса email"
                },
                url: "Поле 'Сайт' обязательно к заполнению"
            }
        });
    });

    //end
    //validate Form

    $('.shoe-details').show();

    $('.more-details-button').on('click', event => {
        $(event.currentTarget).closest('.product-details').next().slideToggle();
        $(event.currentTarget).find('img').toggleClass('rotate');
    });
});
//size slide

var $itemOne = $('.one');
var $itemTwo = $('.two');
var $itemThree = $('.three');
var $itemFour = $('.four');
var $itemFive = $('.five');


$itemOne.on('click', (event) => {
    $(event.currentTarget).closest('.shoe-details').siblings('.product-photo').children('.product_img').attr('src', 'img/size.png');
    $('.price').text('$33').css('color', 'brown');
    $('.details_head').css('color', 'brown');
});
$itemTwo.on('click', () => {
    $(event.currentTarget).closest('.shoe-details').siblings('.product-photo').children('.product_img').attr('src', 'img/size9.png');
    $('.price').text('$36').css('color', 'orange');
    $('.details_head').css('color', 'orange');
});
$itemThree.on('click', () => {
    $(event.currentTarget).closest('.shoe-details').siblings('.product-photo').children('.product_img').attr('src', 'img/size10.png');
    $('.price').text('$39').css('color', 'pinck');
    $('.details_head').css('color', 'pinck');
});
$itemFour.on('click', () => {
    $(event.currentTarget).closest('.shoe-details').siblings('.product-photo').children('.product_img').attr('src', 'img/size11.png');
    $('.price').text('$32').css('color', 'green');
    $('.details_head').css('color', 'green');

});
$itemFive.on('click', () => {
    $(event.currentTarget).closest('.shoe-details').siblings('.product-photo').children('.product_img').attr('src', 'img/size12.jpg');
    $('.price').text('$30').css('color', 'blue');
    $('.details_head').css('color', 'blue');

});

$('.top').on('mouseleave', () => {
    $('.product_img:first').attr('src', 'https://s3.amazonaws.com/codecademy-content/courses/jquery/audit/images/sole-air-ii.png');
});
$('.inside').on('mouseleave', () => {
    $('.second').attr('src', 'https://s3.amazonaws.com/codecademy-content/courses/jquery/audit/images/tidal-x.png');
});
$('.footer').on('mouseleave', () => {
    $('.last').attr('src', 'https://s3.amazonaws.com/codecademy-content/courses/jquery/audit/images/dark-sole-original.png');
});
$('.product_img').on('click', (event) => {
        $(event.currentTarget).addClass('add_select');
        $(event.currentTarget).siblings('.product_select').show(400);
        $(event.currentTarget).parent('.product-photo').siblings('.shoe-details')
            .find('.size').unbind().addClass('end_select');
    })
    //end
    //slider effect
var $buttonEfect = $('.size');

$buttonEfect.on('click', () => {
    $(event.currentTarget).addClass('addSizes');
});
$buttonEfect.on('mouseleave', () => {
        $(event.currentTarget).removeClass('addSizes');
    })
    //end section
    //add Card
$('.disabled h3').on('mouseenter', (event) => {
    $(event.currentTarget).siblings('.card_img').show();
});
$('.card_img').on('click', (event) => {
    $(event.currentTarget).toggleClass('add_cart');
    $(event.currentTarget).siblings('.add_buy').toggleClass('addSimple');
    $(event.currentTarget).parent('.disabled').siblings('.credit').fadeToggle(700);

})

//end
//animate card
$('.cart_phone').on('focus', () => {
    $(event.currentTarget).parent('.cart_form').siblings('.cart_wrap').addClass('add_wrap');

});
$('.cart_phone').on('blur', () => {
    $(event.currentTarget).parent('.cart_form').siblings('.cart_wrap').addClass('add_wrap_leave');
    $(event.currentTarget).parent('.cart_form').siblings('.cart_wrap').removeClass('addKeyup');
});
$('.credit').on('mouseenter', () => {
    $(event.currentTarget).find('.cart_number').show();
});
$('.cart_phone').on('keyup', (event) => {
        $(event.currentTarget).parent('.cart_form').siblings('.cart_wrap').addClass('addKeyup');
        $(event.currentTarget).parent('.cart_form').siblings('.cart_wrap')
            .children('.cart_number').html($(event.currentTarget).val());
    })
    //end
    //formCart send
$('.cart_form').on('keyup submit', (event) => {
        event.preventDefault();
        var phone = $('.cart_phone');

        if (phone.val().length == 0) {
            phone.css('borderBottom', '1px solid gold')
            event.preventDefault();
            $('.number_eror').hide();
            $('.number_clear').show().addClass('add_cart');
        } else if (phone.val().length < 10) {
            phone.css('borderBottom', '1px solid red')
            $('.number_clear').hide();
            $('.number_result').hide();
            $('.number_eror').show();



        } else if (phone.val().length > 10) {
            phone.css('borderBottom', '1px solid blue');
            $('.cart_form').unbind('submit');
            $('.number_result').show();
            $('.number_eror').hide();

        }
    })
    //end

$('.shoe-details li').on('click', event => {
    $(event.currentTarget).addClass('active');
    $(event.currentTarget).siblings().removeClass('active')
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