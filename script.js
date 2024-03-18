const startBtnEle = document.getElementById("start");
const stopBtnEle = document.getElementById("stop");
const resetBtnEle = document.getElementById("reset");
const timerEle = document.querySelector(".timer");

let [seconds, minutes, hours] = [0, 0, 0];
let interval = null;

startBtnEle.addEventListener('click', (event) => {
    event.preventDefault();
    startTimer();
});

stopBtnEle.addEventListener('click', (event) => {
    event.preventDefault();
    stopTimer();
});

resetBtnEle.addEventListener('click', (event) => {
    event.preventDefault();
    resetTimer();
});

function setTimerEle(h, m, s) {
    timerEle.textContent = `${h}:${m}:${s}`;
}

function timer() {
    seconds++;
    if(seconds == 60) {
        seconds = 0;
        minutes++;

        if(minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    setTimerEle(h, m, s);
}

function startTimer() {
    if(interval) {
        return false;
    }
    interval = setInterval(timer, 1000);
}

function stopTimer() {
    if(interval) {
        clearInterval(interval);
        interval = null; 
    }
}

function resetTimer() {
    stopTimer();
    hours = 0;
    minutes = 0; 
    seconds = 0;
    setTimerEle("00", "00", "00");
}