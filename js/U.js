function setLinkInVideo(target) {
    switch (target.getAttribute("id")) {
        case "openSyllable":
            document.getElementById("video").setAttribute("src", "https://www.youtube.com/embed/" + "r7Eqn8ZTZNQ" + "?start=" + "41" + "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "closedSyllable":
            document.getElementById("video").setAttribute("src", "https://www.youtube.com/embed/" + "r7Eqn8ZTZNQ" + "?start=" + "56" + "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "without impact":
            document.getElementById("video").setAttribute("src", "https://www.youtube.com/embed/" + "r7Eqn8ZTZNQ" + "?start=" + "" + "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "ur":
            document.getElementById("video").setAttribute("src", "https://www.youtube.com/embed/" + "r7Eqn8ZTZNQ" + "?start=" + "196" + "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "ur+":
            document.getElementById("video").setAttribute("src", "https://www.youtube.com/embed/" + "r7Eqn8ZTZNQ" + "?start=" + "314" + "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "b/f/p+U+sh/ll":
            document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/" + "r7Eqn8ZTZNQ" + "?start=" + "403" + "&autoplay=1");
            document.getElementById("video").click();
            break;
    }
}