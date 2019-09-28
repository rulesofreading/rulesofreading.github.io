function setLinkInVideo(target) {
    switch (target.getAttribute("id")) {
        case "openSyllable":
            document.getElementById("video").setAttribute("src", "https://www.youtube.com/embed/" + "4Rn-fAOcM_k" + "?start=" + "369"+ "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "closedSyllable":
            document.getElementById("video").setAttribute("src", "https://www.youtube.com/embed/" + "4Rn-fAOcM_k" + "?start=" + "389"+ "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "without impact":
            document.getElementById("video").setAttribute("src", "https://www.youtube.com/embed/" +  "4Rn-fAOcM_k" + "?start=" + "401"+ "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "ir":
            document.getElementById("video").setAttribute("src", "https://www.youtube.com/embed/" + "4Rn-fAOcM_k" + "?start=" + "531"+ "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "ire,iar":
            document.getElementById("video").setAttribute("src", "https://www.youtube.com/embed/" + "4Rn-fAOcM_k" + "?start=" + "639"+ "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "ie":
            document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/" + "lUyufSzgBGc" + "?start=" + "212"+ "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "ie_":
            document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/" + "lUyufSzgBGc" + "?start=" + "245" + "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "igh,ig+n,ind,ild,ign":
            document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/" + "lUyufSzgBGc" + "?start=" + "362"+ "&autoplay=1");
            document.getElementById("video").click();
            break;
    }
}