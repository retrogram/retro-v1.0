var content = document.getElementById("stories");
var button = document.getElementById("read-more");

button.onclick = function() {
    if(content.className == "open") {
        // shrink the box
        content.className = "";
        button.innerHTML = "Show more stories";
    } else {
        // expand the box
        content.className = "open";
        button.innerHTML = "Show less stories";
    }
};