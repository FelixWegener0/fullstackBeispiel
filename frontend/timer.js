console.log("Start Timer script")

let initTimeHours = 3;
let addedminutes = 10;

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

const timerIntervall = setInterval(() => {
    let houres = timer / 3600;
    let restSeonds = timer % 3600;
    let minutes = restSeonds / 60;
    let seconds = restSeonds % 60;

    timerComponent.innerHTML = `Timer: ${formatTimer(Math.floor(houres))}:${formatTimer(Math.floor(minutes))}:${formatTimer(seconds)}`;
    localStorage.setItem("timer", timer);

    if (timer <= 0) {
        clearInterval(timerIntervall);
    }

    timer--;
}, 998);

restartTimer.addEventListener("click", () => timer = initTimeHours * 3600);
addTimeButton.addEventListener("click", () => timer = parseInt(timer) + parseInt(60 * addedminutes));
