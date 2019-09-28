function setLinkInVideo(target) {
    switch (target.getAttribute("id")) {
        case "openSyllable":
            document.getElementById("video").setAttribute("src", "https://www.youtube.com/embed/" + "yOtbJsH6zcU" + "?start=" + "169" );
            document.getElementById("video").click();
            break;
        case "closedSyllable":
            document.getElementById("video").setAttribute("src", "https://www.youtube.com/embed/" + "yOtbJsH6zcU" + "?start=" + "181" + "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "without impact":
            document.getElementById("video").setAttribute("src", "https://www.youtube.com/embed/" + "yOtbJsH6zcU" + "?start=" + "366" + "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "er":
            document.getElementById("video").setAttribute("src", "https://www.youtube.com/embed/" + "kd-M-FwWt9Q" + "?start=" + "202" + "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "ere,ear":
            document.getElementById("video").setAttribute("src", "https://www.youtube.com/embed/" + "kd-M-FwWt9Q" + "?start=" + "222" + "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "ea,ee":
            document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/" + "d5cAwnS78sg" + "?start=" + "78" + "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "ea+d":
            document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/" + "d5cAwnS78sg" + "?start=" + "185" + "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "ea+слгл":
            document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/" + "d5cAwnS78sg" + "?start=" + "235" + "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "-ei/ey":
            document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/" + "NHT1Pe7cb8Q" + "?start=" + "311" + "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "-er":
            document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/" + "NHT1Pe7cb8Q" + "?start=" + "509" + "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "-ew":
            document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/" + "NHT1Pe7cb8Q" + "?start=" + "352" + "&autoplay=1");
            document.getElementById("video").click();
            break;
    }
}