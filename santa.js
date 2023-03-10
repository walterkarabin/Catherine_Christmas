// initialize global variables
var hatPoofDegNum = 15;
var armDegNum = -135;
var hatDirection = 0.75;
var armDirection = 0.75;
var sleighVel = 3;
var numDirChanges = 0;
var mosleighVeleft = true;
var moveRight = false;
var sleighX = window.innerWidth;
var beardTop = 50;
var autoscroll = true;
const sleigh = document.getElementById('sleigh');
const santa = document.getElementById('santa');
const canv = document.querySelector('#myCanvas1');
const title = document.getElementById('Title');

// functions for Santa's Sleigh
function santaHat() {
    const hatPoof = document.getElementById('hatPoof');

    if (hatPoofDegNum >= 30) {
        hatDirection *= -1;
    }
    else if (hatPoofDegNum <= 0) {
        hatDirection *= -1;
    }
    hatPoofDegNum += hatDirection;
    hatPoof.style.transform = `rotate(${hatPoofDegNum}deg)`;
    // console.log(degNum);

}

function santaWave() {
    const arm = document.getElementById('arm');

    if (armDegNum >= -110) {
        armDirection *= -1;
    }
    else if (armDegNum <= -160) {
        armDirection *= -1;
    }
    armDegNum += armDirection;

    arm.style.transform = `rotateZ(${armDegNum}deg)`;
}

function sleighMove() {
    sleighX -= sleighVel;
    // update position
    sleigh.style.left = `${sleighX}`;

    if (sleighX > -300 && mosleighVeleft) {
    }
    else if (sleighX <= 50 && mosleighVeleft) {
        mosleighVeleft = false;
        moveRight = true;
        sleighVel *= -1;
        sleigh.style.transform = `rotateY(180deg)`;
        numDirChanges++;
    }

    else if (sleighX < (window.innerWidth + (100)) && moveRight) {
    }
    else {
        mosleighVeleft = true;
        moveRight = false;
        sleighVel *= -1;
        sleigh.style.transform = `rotateY(0deg)`;
        numDirChanges++;
    }
}

function santaLaugh() {
    const beard = document.getElementById('beard');
    var amplitude = 2;
    const oscillationPeriod = 1;

    beardTop = amplitude * Math.sin(Date.now() / 100 / oscillationPeriod) + 25;
    // console.log(beardTop)

    beard.style.top = `${beardTop}px`;
}

function setTitleColor(pos) {
    if (sleighX < (window.innerWidth / 2)) {
        title.style.color = 'red';
        // title.style.webkitTextFillColor = 'red';
    } else {
        title.style.color = 'white';
        // title.style.webkitTextFillColor = 'white';
    }
}


// animation control for Santa
function updateSanta() {

    const period = 1;

    var sleighY = 0;
    // console.log(sleigh.style.left);


    if (sleigh.style.left <= 100) {
        // rotate and change hatDirection
    }
    else if (sleighX > window.innerWidth) {
        // rotate and change hatDirection
    }

    sleighMove();
    // setInterval(santaLaugh, 500);
    const sineValue = Math.sin(Date.now() / 1000 / period);
    if (sineValue > 0) {
        // call the function during positive sine values
        santaLaugh();
        // add the hohoho initialization here
    }
    else {
        santaHat();
    }
    santaWave();
    if (sineValue > 0.5 || sineValue < -0.5) {
    }

    if (numDirChanges >= 2 && autoscroll) {
        endAnimation();
        autoscroll = false;
        // return;
    }
    // setTitleColor(sleighX);
    // console.log(numDirChanges);
    requestAnimationFrame(updateSanta);
}

requestAnimationFrame(updateSanta);


// not related to santa... meant for scroll
function endAnimation() {
    canv.scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener("keypress", function () {
    const div = document.querySelector('#myCanvas1');

    div.scrollIntoView({ behavior: 'smooth' });
});