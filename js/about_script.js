$(document).ready(function () {
    let rabbit = $("#rab");
    let name = $("#title");
    let hand = $("#hand");

    rabbit.css('left', '5vh');

    window.addEventListener("scroll", function () {
        let value = window.scrollY;

        name.css("marginTop", value * 0.8 + "px");
        rabbit.css("top", value * 0.6 + "px");
        rabbit.css("left", value * 1.6 + "px");
        if (value < window.innerWidth * 0.5) {
            hand.css("left", value * 0.3 + "px");
        }
    });
});
