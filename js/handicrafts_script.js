$(document).ready(function () {
    let title = $('.title');
    let teddy = $('#teddy');

    window.addEventListener('scroll', function () {
        let value = window.scrollY;
        title.css('marginTop', value * 0.8 + 'px');
        teddy.css('top', value * 0.5 + 'px');
    })
});