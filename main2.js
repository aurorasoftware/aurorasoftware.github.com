var sentences = ["We are a boutique software development firm located in sunny *Beverly Hills, California*."];
var spans = [];
var positions = [];

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
    $("#sentence").html(formattedSentence);

    positions = [];

    spans = $("#sentence span");
    spans.each(function(i, elem) {
        position = $(elem).offset();
        positions.push(position);
    });
}

$(function() {
    displaySentence();

    $(document).mousemove(function(e) {
        for (var i=0; i<positions.length; i++) {
            var position = positions[i];
            dy = position.top - e.pageY;
            dx = position.left - e.pageX;
            if (dy*dy + dx*dx < 50) {
                $(spans[i]).
                console.log(position);
            }
        }
    });
});
