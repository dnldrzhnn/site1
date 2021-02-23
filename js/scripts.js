var winds =document.getElementById('winds');
var btns = document.getElementById("opens");
var spans = document.getElementsByClassName('closes')[0];

btns.onclick = function() {
    winds.style.display = "block";
}

spans.onclick = function() {
    winds.style.display ="none";
}

window.onclick = function(event) {
    if (event.target == winds){
        windows.style.display = "none";
    }
}
