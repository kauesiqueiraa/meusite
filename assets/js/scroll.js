$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $('header').addClass("sticky");
            $('.menu-icon').addClass("sticky");
        } else {
            $('header').removeClass("sticky");
            $('.menu-icon').removeClass("sticky");
        }

        if(this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $('.scroll-up-btn').click(function() {
        $('html').animate({scrollTop: 0});
    });
})