$(document).ready(function(){   
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    $('.navbar li a').click(function(e) {

        $('.navbar li.active').removeClass('active');

        var $parent = $(this).parent();
        $parent.addClass('active');
        e.preventDefault();
    });
      
});