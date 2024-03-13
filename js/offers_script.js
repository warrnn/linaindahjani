$(document).ready(function () {
    let title = $('#title');
    let leaf = $('#par4');
    let panda = $('#par2');
    let blue = $('#par3');
    let table = $('#par1');

    window.addEventListener('scroll', function () {
        let value = window.scrollY;

        title.css('marginTop', value * 0.8 + 'px');
        leaf.css('top', value * -0.8 + 'px');
        leaf.css('left', value * 0.8 + 'px');
        panda.css('left', value * 0.8 + 'px');
        blue.css('left', value * -0.8 + 'px');
        blue.css('top', value * 0.8 + 'px');
        table.css('top', value * 0.3 + 'px');
    })
});