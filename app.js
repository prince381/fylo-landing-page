$(document).ready(function() {

    $('.modal-trigger').click(function() {
        $('.modal').css('display','block');
    });

    $('.panel .left-btn').click(function() {
        $('.modal-content').addClass('move');
    });

    $('.panel .right-btn').click(function() {
        $('.modal-content').removeClass('move');
    });

    $(window).click(function(e) {
        if (e.target.classList.contains('modal')) {
            $('.modal').css('display','none');
        }
    });

    const windowWidth = $(window).width();

    if (windowWidth <= 450) {
        $('.hero-bg-img').attr('src','images/bg-curvy-mobile.svg');
    };

});