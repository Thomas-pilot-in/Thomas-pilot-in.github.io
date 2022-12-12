$(window).bind('scroll', function() {
    if ($(this).scrollTop() > 400) {
        $("#top-link").show("slow");
    }
    else if ($(this).scrollTop() < 400) {
        $("#top-link").hide("slow");

    }
});
$(document).ready(function() {
    $(document).on('click','a[href*=#]:not([href=#], [class$="notScroll"]), a.smoothScroll',function(e) {
        e.preventDefault();
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    }); 
});
