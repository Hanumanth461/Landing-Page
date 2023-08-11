$(function(){
    $("header .header-main ul.drop-down").before('<div class="mobile-trigger"><i></i></div>')
    $('.mobile-trigger').click(function(){
        $(this).toggleClass('menu-open')
        $('header').toggleClass('mobile-open')
        $('.drop-down').toggleClass('dropdown-active')
        $('.drop-down').slideToggle()
    });
    });