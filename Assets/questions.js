/**set the time to zero*/
var timer = 75;
var timeCount;
/**this is the timer funtion which will start counting as soon as the quiz starts*/
function setupTimer() {
    timeCount = setInterval(function () {
        timer--;
        var timeReset = timeElement.textContent = "Time:" + " " + timer;
       timer = timer;
        if (timer <= 0) {         
            clearInterval(timeCount);
              
            timeElement.textContent = timeReset;
             
        }
    }, 1000)
}
 
/**  Here is the event listener to start the timer and hide the quiz button*/
document.addEventListener("click", function (event) {
    if (event.target === btnElement) {
        wrapperElement.style.display = "none";
        setupTimer()
        displayQuestions();
    }

})
