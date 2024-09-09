console.log("Start Timer script")

let timer = localStorage.getItem("timer") || 0;
let timerComponent = document.getElementById("timerComponent");

const formatTimer = (input) => {
    let value;

    if (input < 10) {
        value = "0" + input;
    } else {
        value = input;
    }
    return value;
}

setInterval(() => {
    let houres = localStorage.getItem("timer") / 3600;
    let restSeonds = localStorage.getItem("timer") % 3600;
    let minutes = restSeonds / 60;
    let seconds = restSeonds % 60;

    timerComponent.innerHTML = `online since: ${formatTimer(Math.floor(houres))}:${formatTimer(Math.floor(minutes))}:${formatTimer(seconds)}`;

    timer++;
    localStorage.setItem("timer", timer);
}, 1000);
