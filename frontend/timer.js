console.log("Start Timer script")

let initTimeHours = 3;
let addedminutes = 10;

let timer = localStorage.getItem("timer") || (initTimeHours * 3600);
let timerPaused = false;

let timerComponent = document.getElementById("timerComponent");
let addTimeButton = document.getElementById("addMinuteButton");
let restartTimer = document.getElementById("restartTimer");
let pauseTimer = document.getElementById("pauseTimer");

const formatTimer = (input) => {
    let value;
    input < 10 ? value = "0" + input : value = input;
    return value;
}

const detectPause = () => {
    if (timerPaused) {
        return "PAUSED"
    } else {
        return ""
    }
}

const timerIntervall = setInterval(() => {
    let houres = timer / 3600;
    let restSeonds = timer % 3600;
    let minutes = restSeonds / 60;
    let seconds = restSeonds % 60;

    timerComponent.innerHTML = `Timer: ${formatTimer(Math.floor(houres))}:${formatTimer(Math.floor(minutes))}:${formatTimer(seconds)} ${detectPause()}`;
    localStorage.setItem("timer", timer);

    if (!timerPaused) {
        timer <= 0 ? timer = 0 : timer--;
    }
}, 999);

restartTimer.addEventListener("click", () => timer = initTimeHours * 3600);
addTimeButton.addEventListener("click", () => timer = parseInt(timer) + parseInt(60 * addedminutes));
pauseTimer.addEventListener("click", () => { timerPaused = !timerPaused });
