function randomInteger() {
    return Math.floor(Math.random() * 255);
}

$(function() {
    setInterval(function() {
        $('body').css("background", "rgb(" + randomInteger() + ", " + randomInteger() + ", " + randomInteger() + ")");
    }, 2000);
});

