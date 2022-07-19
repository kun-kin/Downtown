$(window).scroll(function() {
    // var headerHeight = $(".header").outerHeight();
    // kiểm tra điều kiện > header thì mới addClass 
    if ($(window).scrollTop() > 400) {
        $('.header-main').addClass('fixed');
    } else {
        $('.header-main').removeClass('fixed');
    }
});
/* back to top */
var btn = $('#backtotop');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '1000');
});




$(document).ready(function() {

    $(".menu-stack").click(function() {
        $(this).toggleClass("menu-open");
        $(".primary-nav").toggleClass("menu-show");
        $(".menu-item").removeClass('current');
    });

    $('.couter').counterUp({
        delay: 10,
        time: 2000
    });

    $(function() {
        $("#date1").datepicker();
        $("#date2").datepicker();
    });

    $(".menu-item .menu-link").click(function() {
        $(this).parent(".menu-item").addClass('current');
    });

    $(".menu-item .drop-menu .back").click(function() {
        $(this).parent(".drop-menu").parent(".menu-item").removeClass('current');
    });
});