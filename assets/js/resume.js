function openProject(e, t) {
    var a, o = document.getElementsByClassName("project-hideme"),
        l = document.getElementsByClassName("fa-li fa fa-chevron-down");
    for (a = 0; a < o.length; a++) o[a].style.display = "none";
    for (a = 0; a < l.length; a++) l[a].className = l[a].className.replace(" fa-chevron-down", " fa-chevron-right");
    document.getElementById(e).style.display = "block";
    var s = document.getElementById(t);
    s.className = s.className.replace(" fa-chevron-right", " fa-chevron-down"), $("html,body").animate({
        scrollTop: $("#projects").offset().top
    }, "slow")
}! function(e) {
    "use strict";
    e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var t = e(this.hash);
            if ((t = t.length ? t : e("[name=" + this.hash.slice(1) + "]")).length) return e("html, body").animate({
                scrollTop: t.offset().top
            }, 1e3, "easeInOutExpo"), !1
        }
    }), e(".js-scroll-trigger").click(function() {
        e(".navbar-collapse").collapse("hide")
    }), e("body").scrollspy({
        target: "#sideNav"
    })
}(jQuery);