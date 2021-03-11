$('.item-1').on('click', function () {
    $('.fon1').removeClass('is-visibl')
    $('.fon2, .fon3').addClass('is-visibl')
});

$('.item-2').on('click', function () {
    $('.fon2').removeClass('is-visibl')
    $('.fon1, .fon3').addClass('is-visibl')
});

$('.item-3').on('click', function () {
    $('.fon3').removeClass('is-visibl')
    $('.fon1, .fon2').addClass('is-visibl')
});