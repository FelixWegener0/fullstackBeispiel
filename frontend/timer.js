console.log("Start Timer script")

let initTimeHours = 3;
let timer = localStorage.getItem("timer") || (initTimeHours * 3600);

let timerComponent = document.getElementById("timerComponent");
let addTimeButton = document.getElementById("addMinuteButton");
let restartTimer = document.getElementById("restartTimer");

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
    let houres = timer / 3600;
    let restSeonds = timer % 3600;
    let minutes = restSeonds / 60;
    let seconds = restSeonds % 60;

    timerComponent.innerHTML = `Timer: ${formatTimer(Math.floor(houres))}:${formatTimer(Math.floor(minutes))}:${formatTimer(seconds)}`;
    localStorage.setItem("timer", timer);

    timer--;
}, 1000);

restartTimer.addEventListener("click", () => timer = initTimeHours * 3600);
addTimeButton.addEventListener("click", () => timer  = parseInt(timer) + parseInt(600));
