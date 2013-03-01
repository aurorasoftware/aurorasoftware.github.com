var container;
var fadingIn = false;

$(function() {
    container = $("#screenshot-container");

    $("a[img]").each(function(i, e) {
        var elem = $(this);
        var width = elem.width();
        var height = elem.height();
        var pos = elem.position();
        var src = "static/img/" + elem.attr("img");
        img = new Image()
        img.src = src;

        elem.hover(function() {
            $("img#screenshot").attr("src", src);
            container.removeClass("fadeout");
            container.addClass("fadein");
            container.css({left: pos.left - 2 + (width - 200) / 2 + "px", top: pos.top + height + 12 + "px" });
            fadingIn = true;
        }, function() {
            container.removeClass("fadein");
            container.addClass("fadeout");
            fadingIn = false;
        });
    });

    container.bind('animationend webkitAnimationEnd MSAnimationEnd', function() {
        if (!fadingIn) {
            container.css({top: "-140px", left: "-210px"});
        }
    });
});
