window.onload = function() {
    document.addEventListener('click', function(evt) {
        console.log(evt.target.parentNode);
        console.log(evt.target.innerText);
        console.log(evt.target.tagName)
        console.log(evt.target.parentNode.id)
        if((evt.target.tagName == "A") && (evt.target.innerText == "Read More")) {
            evt.preventDefault();
            evt.target.parentNode.className = "fs";
            evt.target.innerText = "Go back"
            history.pushState({}, evt.target.parentNode.id + ".html", window.location.href + "/?" + evt.target.parentNode.id);
        } else if((evt.target.tagName == "A") && (evt.target.innerText == "Go back")) {
            history.pushState({}, "Home", "http://kefwmag.github.io/deep");
            evt.preventDefault();
            evt.target.parentNode.className = "";
            evt.target.innerText = "Read More";
        }
    }, false);
    checkURL();
}