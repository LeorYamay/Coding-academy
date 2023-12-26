function onInit() {
    randomTimedEvent()
}
var sound =new Audio('audio/mixkit-click-balloon-small-burst-3070.wav') 
function randomBalloon() {
    // debugger;
    var randomchance = Math.random();
    if (randomchance>0.5){
        var newDivBalloon = document.createElement('div');
        newDivBalloon.classList.add('balloon');
        newDivBalloon.style.left = Math.random() * 90 + '%';
        newDivBalloon.addEventListener('click',function(){
            pop(newDivBalloon);
        })
        document.body.appendChild(newDivBalloon);
    }
}

function randomTimedEvent() {
    randomBalloon();
    floatBalloons();
    setTimeout(randomTimedEvent, 1000);
}
function floatBalloons() {
    var balloons = document.querySelectorAll('.balloon');
    balloons.forEach(function (balloon) {
        var balloonBottomPercent = currentBottomPercent(balloon.style.bottom);
        if (balloonBottomPercent<=100 && balloonBottomPercent >= 0)
        {
            balloon.style.bottom = addToBottom(balloonBottomPercent);
        }
        else{
            balloon.remove();
        }
    })
}
function pop(balloon){
    balloon.classList.add('poppedBalloon');
    sound.play();
}
function addToBottom(currentPercent) {

        if (currentPercent >= 0 && currentPercent <= 100) {
            var newPercent = currentPercent + Math.min(currentPercent + 1, 100) + '%';
            return newPercent;
        }
    return '5%';
}
function currentBottomPercent(currentBottom) {
    if (currentBottom) {
        var currentPercent = parseFloat(currentBottom);
        if (!isNaN(currentPercent)) {
            return currentPercent;
        }
    }
    return 0;
}
