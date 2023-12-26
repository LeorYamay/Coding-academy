const gameRefreshRate = 1000;
const balloonFloatRate = 10;
const balloonCreateChance = 0.5;
const sound = new Audio('audio/mixkit-click-balloon-small-burst-3070.wav')

function onInit() {
    gameInterval()
}
const maybeCreateBalloon = () => {
    const randomchance = Math.random();
    if (randomchance > balloonCreateChance) {
        placeRandomBalloon();
    }

    function placeRandomBalloon() {
        const newDivBalloon = document.createElement('div');
        newDivBalloon.classList.add('balloon');
        newDivBalloon.style.left = Math.random() * 90 + '%';
        newDivBalloon.addEventListener('click', function () {
            pop(newDivBalloon);
        });
        document.body.appendChild(newDivBalloon);
    }
}

function gameInterval() {
    maybeCreateBalloon();
    floatBalloons();
    setTimeout(gameInterval, gameRefreshRate);
}

function floatBalloons() {
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach(function (balloon) {
        moveOrRemove(balloon);
    })

    function moveOrRemove(balloon) {
        const balloonBottomPercent = getCurrentBottomPercent(balloon.style.bottom);
        if (balloonBottomPercent <= 100 && balloonBottomPercent >= 0) {
            balloon.style.bottom = Math.min(balloonBottomPercent + balloonFloatRate, 100) + '%';
        }
        else {
            balloon.remove();
        }
    }
}
function pop(balloon) {
    balloon.classList.add('poppedBalloon');
    sound.play();
}

function getCurrentBottomPercent(currentBottom) {
    if (currentBottom) {
        var currentPercent = parseFloat(currentBottom);
        if (!isNaN(currentPercent)) {
            return currentPercent;
        }
    }
    return 5;
}
