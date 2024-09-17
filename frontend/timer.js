console.log("Start Timer script")

let initTimeHours = 3;
let initTimeMinutes = 0;
let initTimeSeconds = 0;

let addedminutes = 10;

let timer = localStorage.getItem("timer") || (initTimeHours * 3600);
let timerPaused = localStorage.getItem("paused") || false;
let deaths = localStorage.getItem("deaths") || 0;

let timerComponent = document.getElementById("timerComponent");
let addTimeButton = document.getElementById("addMinuteButton");
let restartTimer = document.getElementById("restartTimer");
let pauseTimer = document.getElementById("pauseTimer");
let deathCounter = document.getElementById("deathCounter");

addTimeButton.innerHTML = `Add Death to Timer and counter`;
deathCounter.innerHTML = `Deaths: ${deaths}`;
timerPaused ? pauseTimer.innerHTML = "Unpause Timer" : pauseTimer.innerHTML = "Pause Timer";

function formatTimer(input) {
    let value;
    input < 10 ? value = "0" + input : value = input;
    return value;
}

function detectPause () {
    return timerPaused ? "Paused" : "";
}

function setPausedEvent() {
    localStorage.setItem("paused", !timerPaused);
    timerPaused = !timerPaused;
    timerPaused ? pauseTimer.innerHTML = "Unpause Timer" : pauseTimer.innerHTML = "Pause Timer";
}

function addTimeEvent() {
    timer = parseInt(timer) + parseInt(60 * addedminutes);
    deaths++;
    deathCounter.innerHTML = `Deaths: ${deaths}`;
    localStorage.setItem("deaths", deaths);
}

function restartTimerEvent() {
    timer = initTimeHours * 3600 + initTimeMinutes * 60 + initTimeSeconds;
    deaths = 0;
    localStorage.setItem("deaths", 0);
    deathCounter.innerHTML = `Deaths: ${deaths}`;
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

restartTimer.addEventListener("click", () => restartTimerEvent());
addTimeButton.addEventListener("click", () => addTimeEvent());
pauseTimer.addEventListener("click", () => setPausedEvent());
