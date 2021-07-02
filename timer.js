var hrsElement = document.getElementById('hours');
var minsElement = document.getElementById('minutes');
var secsElement = document.getElementById('seconds');

const convertSeconds = (tsecs) => {
    const hrs = Math.floor(tsecs/(60*60));
    const mins = Math.floor((tsecs - hrs*60*60)/60);
    const secs = tsecs - hrs*60*60 - mins*60;
    return [
        hrs.toString().padStart(2, '0'), 
        mins.toString().padStart(2, '0'), 
        secs.toString().padStart(2, '0')
    ]
}


const startTimer = () => {
    hrsElement.disabled = true;
    minsElement.disabled = true;
    secsElement.disabled = true;

    hours = parseInt(hrsElement.value);
    minutes = parseInt(minsElement.value);
    seconds = parseInt(secsElement.value);

    timeRemaining = totalSeconds = hours*60*60 + minutes*60 + seconds;
    // console.log(totalSeconds)

    intID = setInterval(() => {
        if(timeRemaining > 0) {
            timeRemaining -= 1;
            let [hrsLeft, minsLeft, secsLeft] = convertSeconds(timeRemaining);
            hrsElement.value = hrsLeft;
            minsElement.value = minsLeft;
            secsElement.value = secsLeft;
        } else {
            clearInterval(intID)
            hrsElement.disabled = false;
            minsElement.disabled = false;
            secsElement.disabled = false;
            // console.log("Timer stopped");
        }
    }, 1000)
    // console.log(`${hours}hrs ${minutes}mins ${seconds}secs`)
}

const pauseTimer = () => {
    clearInterval(intID)
    hrsElement.disabled = false;
    minsElement.disabled = false;
    secsElement.disabled = false;
    // console.log("Timer paused")
}

const resetTimer = () => {
    clearInterval(intID);
    hrsElement.disabled = false;
    minsElement.disabled = false;
    secsElement.disabled = false;
    let [hrs, mins, secs] = convertSeconds(totalSeconds);
    hrsElement.value = hrs;
    minsElement.value = mins;
    secsElement.value = secs;
    // console.log("Timer reset")
}