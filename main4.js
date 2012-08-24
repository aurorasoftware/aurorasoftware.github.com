var container;

$(function() {
    container = $("#screenshot-container");

    $("a[img]").each(function(i, e) {
        var elem = $(this);
        var width = elem.width();
        var height = elem.height();
        var pos = elem.position();
        var src = "media/img/" + elem.attr("img");
        img = new Image()
        img.src = src;

        elem.hover(function() {
            $("img#screenshot").attr("src", src);
            container.removeClass("fadeout");
            container.addClass("fadein");
            container.css({left: pos.left + (width - 200) / 2 + "px", top: pos.top + height + 12 + "px" });
        }, function() {
            container.removeClass("fadein");
            container.addClass("fadeout");
        });
    });
});
