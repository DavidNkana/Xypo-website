// jQuery toggle menu code

$(document).ready(function(){
    $('#menuBtn').click(function(){
        $('.menu-links').toggleClass('active')
    })
    $(window).scroll(function(){
        $('.list').fadeOut('slow')
    })
    $(window).scroll(function(){
        $('.menu-links').removeClass('active')
    })
});

