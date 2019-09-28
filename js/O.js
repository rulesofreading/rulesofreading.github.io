function setLinkInVideo(target) {
    switch (target.getAttribute("id")) {
        case "openSyllable":
            document.getElementById("video").setAttribute("src", "https://www.youtube.com/embed/" + "6dqThIbK5gQ" + "?start=" + "278" + "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "closedSyllable":
            document.getElementById("video").setAttribute("src", "https://www.youtube.com/embed/" + "6dqThIbK5gQ" + "?start=" + "313" + "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "without impact":
            document.getElementById("video").setAttribute("src", "https://www.youtube.com/embed/" + "" + "?start=" + "" + "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "or,ore":
            document.getElementById("video").setAttribute("src", "https://www.youtube.com/embed/" + "6dqThIbK5gQ" + "?start=" + "422" + "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "m,n,th,v":
            document.getElementById("video").setAttribute("src", "https://www.youtube.com/embed/" + "6dqThIbK5gQ" + "?start=" + "449" + "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "oi,oy":
            document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/" + "6dqThIbK5gQ" + "?start=" + "630" + "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "oo":
            document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/" + "lWbgOL-MV_Q" + "?start=" + "102" + "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "ou":
            document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/" + "lWbgOL-MV_Q" + "?start=" + "118" + "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "oa":
            document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/" + "lWbgOL-MV_Q" + "?start=" + "133" + "&autoplay=1");
            document.getElementById("video").click();
            break;
        case "ow":
            document.getElementById("video").setAttribute("src","https://www.youtube.com/embed/" + "lWbgOL-MV_Q" + "?start=" + "351" + "&autoplay=1");
            document.getElementById("video").click();
            break;
    }
}