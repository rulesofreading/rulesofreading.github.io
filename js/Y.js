function setLinkInVideo(target) {
    switch (target.getAttribute("id")) {
        case "1":
            document.getElementById("video").setAttribute("src", "https://www.youtube.com/embed/" + "NHT1Pe7cb8Q" + "?start=" + "86" + "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "2":
            document.getElementById("video").setAttribute("src", "https://www.youtube.com/embed/" + "NHT1Pe7cb8Q" + "?start=" + "168" + "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "3":
            document.getElementById("video").setAttribute("src", "https://www.youtube.com/embed/" + "NHT1Pe7cb8Q" + "?start=" + "201" + "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "4":
            document.getElementById("video").setAttribute("src", "https://www.youtube.com/embed/" + "NHT1Pe7cb8Q" + "?start=" + "428" + "&autoplay=1");
            document.getElementById("video").click();
            break;
    }
}