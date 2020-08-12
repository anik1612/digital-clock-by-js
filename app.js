setInterval(timer, 1000);

function timer() {
    var date = new Date();
    var time = date.toLocaleTimeString();
    document.getElementById('clock').innerText = time;
}
