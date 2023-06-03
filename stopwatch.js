const stopwatchDisplay=document.querySelector("#stopwatchDisplay");
const startButton=document.querySelector("#startButton");
const stopButton=document.querySelector("#stopButton");
const resetButton=document.querySelector("#resetButton");

let startTime=0;
let elapsedTime=0;
let paused=true;
let intervalID;
let hours=0;
let minutes=0;
let seconds=0;
let centiseconds=0;

startButton.addEventListener("click", () => {
    if (paused){
        paused=false;
        startTime=Date.now()-elapsedTime;
        intervalID=setInterval(updateTime,10);
    }
});
stopButton.addEventListener("click", () => {
    if (!paused){
        paused=true;
        elapsedTime=Date.now()-startTime;
        clearInterval(intervalID);
    }
});
resetButton.addEventListener("click", () => {
    paused=true;
    clearInterval(intervalID);
    startTime=0;
    elapsedTime=0;
    hours=0;
    minutes=0;
    seconds=0;
    centiseconds=0;
    stopwatchDisplay.textContent=`00:00:00.00`;
});

function updateTime(){
    elapsedTime=Date.now()-startTime;
    centiseconds=Math.floor((elapsedTime/10)%100);
    seconds=Math.floor(elapsedTime/1000%60);
    minutes=Math.floor((elapsedTime/(1000*60))%60);
    hours=Math.floor((elapsedTime/(1000*3600))%60);
    centiseconds=pad(centiseconds)
    seconds=pad(seconds);
    minutes=pad(minutes);
    hours=pad(hours);
    stopwatchDisplay.textContent=`${hours}:${minutes}:${seconds}.${centiseconds}`;
}
function pad(unit){
    return (("0")+unit).length > 2 ? unit:"0"+unit;
}