function randomInteger(min, max) {
    var num = min + Math.floor(Math.random() * max);
    if (Math.random() < 0.5) {
        return -1 * num;
    }
    else {
        return num;
    }
}

var spans;
var sentences = ["We are a boutique software development firm located in sunny *Beverly Hills, California*."];
var fadeins = [];
var duration = 1000;
var interval = 6000;

function randomTransform() {
    var s = "translate(" + randomInteger(1000, 3000) + "px, " + randomInteger(1000, 3000) + "px) scale(" + Math.random() * 10 + ")";
    return {
        "-webkit-transform": s,
        "-moz-transform": s,
        "-ms-transform": s,
        "-o-transform": s,
        "transform": s}
}

var emptyTransform = {
    "-webkit-transform": "none",
    "-moz-transform": "none",
    "-ms-transform": "none",
    "-o-transform": "none",
    "transform": "none"}

$(function() {
    displaySentence();
    setTimeout(function() {
        fadeout(0);
    }, interval - duration);

    setInterval(function() {
        displaySentence();

        setTimeout(function() {
            fadeout(0);
        }, interval - duration);
    }, interval);
});

function displaySentence() {
    var sentence = sentences[Math.floor(Math.random()*sentences.length)];
    var formattedSentence = "";
    var inLink = false;
    for (var i=0; i<sentence.length; i++) {
        if (sentence[i] === "*") {
            if (inLink) {
                inLink = false;
                formattedSentence += "</a>";
            }
            else {
                inLink = true;
                formattedSentence += "<a href='#'>";
            }
        }
        else {
            formattedSentence += "<span class='letter'>" + sentence[i] + "</span>";
        }
    }
    $("#sentence").addClass("invisible");
    $("#sentence").html(formattedSentence);

    positions = [];
    spans = $("#sentence span");
    fadeins = [];

    spans.each(function(i, elem) {
        position = $(elem).position();
        positions.push(position);
    });

    spans.each(function(i, elem) {
        $(elem).css({position: "absolute", top: positions[i].top, left: positions[i].left});
        $(elem).css(randomTransform());
    });

    $("#sentence").removeClass("invisible");
    setTimeout(function() {
        fadein(0);
    }, 5);
}

function fadein(i) {
    if (i < spans.length) {
        $(spans[i]).css(emptyTransform);
        setTimeout(function() {
            fadein(i+1);
        }, 5);
    }
}

function fadeout(i) {
    if (i < spans.length) {
        $(spans[i]).css(randomTransform());
        setTimeout(function() {
            fadeout(i+1);
        }, 5);
    }
}

