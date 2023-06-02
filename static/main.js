function fontResize() {
    //Set default resolution and font size
    var resolution = 1024;
    var font = 85;

    //Get window width
    var width = $(window).width();

    //Set new font size
    var newFont = font * (width/resolution);
    $(".navigation > nav > ul > li").animate({fontSize: newFont});
};


$(document).ready(function()
             {       
                 fontResize();
                 $(window).bind('resize', function() {
                     fontResize();
                 });
             }
        );

// Closes the sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $(".site-navigation").toggleClass("active");
        $("#menu-toggle > i").toggleClass("fa-bars fa-times");
    });

    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $(".site-navigation").toggleClass("active");
        $("#menu-toggle > i").toggleClass("fa-bars fa-times");
    });

    // Scrolls to the selected menu item on the page
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });