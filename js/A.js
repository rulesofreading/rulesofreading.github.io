function setLinkInVideo(target) {
    switch (target.getAttribute("id")) {
        case "openSyllable":
            document.getElementById("video").setAttribute("src", "https://www.youtube.com/embed/" + "hBCfA7bOiUk" + "?start=" + "267" + "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "closedSyllable":
            document.getElementById("video").setAttribute("src", "https://www.youtube.com/embed/" + "hBCfA7bOiUk" + "?start=" + "290" + "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "without impact":
            document.getElementById("video").setAttribute("src", "https://www.youtube.com/embed/" + "hBCfA7bOiUk" + "?start=" + "623" + "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "ar":
            document.getElementById("video").setAttribute("src", "https://www.youtube.com/embed/" + "S-8Ei6mZ8hQ" + "?start=" + "105" + "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "are,air":
            document.getElementById("video").setAttribute("src", "https://www.youtube.com/embed/" + "S-8Ei6mZ8hQ" + "?start=" + "134" + "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "ai,ay":
            document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/" + "MbP1zM0Oj9U" + "?start=" + "95" + "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "au,aw":
            document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/" + "MbP1zM0Oj9U" + "?start=" + "197" + "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "al+":
            document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/" + "MbP1zM0Oj9U" + "?start=" + "270" + "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "as+":
            document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/" + "MbP1zM0Oj9U" + "?start=" + "405" + "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "ay":
            document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/" + "NHT1Pe7cb8Q" + "?start=" + "287" + "&autoplay=1");
            document.getElementById("video").click();
            break;
    }
}