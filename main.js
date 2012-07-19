function randomInteger() {
    return Math.floor(Math.random() * 255);
}

$(function() {
    setTimeout(function() {
        window.scrollTo(0, 1);
    }, 1000);

    setInterval(function() {
        $('body').css("background", "rgb(" + randomInteger() + ", " + randomInteger() + ", " + randomInteger() + ")");
    }, 2000);
});

