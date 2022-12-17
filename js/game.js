let canvas;
let world;
let keyboard = new Keyboard();
let mexicoSound = new Audio('audio/backgroundsound.mp3');

function init() {
    canvas = document.getElementById('canvas');
    touchEvents();
}

function startGame() {
    document.getElementById('start-screen').classList.remove('start-screen');
    document.getElementById('start-screen').classList.add('d-none');
    document.getElementById('canvas').classList.remove('d-none');
    document.getElementById('canvas').classList.add('canvas');
    initLevel1();
    world = new World(canvas, keyboard);

    setInterval(() => this.backgroundSound(), 400);
}


function replayLose() {
    document.getElementById('lose-screen').classList.remove('start-screen');
    document.getElementById('lose-screen').classList.add('d-none');
    document.getElementById('canvas').classList.remove('d-none');
    document.getElementById('canvas').classList.add('canvas');

    initLevel1();
    world = new World(canvas, keyboard);

    setInterval(() => this.backgroundSound(), 400);
}


function stopGameLose() {
    document.getElementById('lose-screen').classList.remove('d-none');
    document.getElementById('lose-screen').classList.add('start-screen');
    document.getElementById('canvas').classList.add('d-none');
    document.getElementById('canvas').classList.remove('canvas');

    for (let i = 1; i < 9999; i++) window.clearInterval(i);
}


function replayWin() {
    document.getElementById('win-screen').classList.remove('start-screen');
    document.getElementById('win-screen').classList.add('d-none');
    document.getElementById('canvas').classList.remove('d-none');
    document.getElementById('canvas').classList.add('canvas');

    initLevel1();
    world = new World(canvas, keyboard);

    setInterval(() => this.backgroundSound(), 400);
}


function stopGameWin() {
    document.getElementById('win-screen').classList.remove('d-none');
    document.getElementById('win-screen').classList.add('start-screen');
    document.getElementById('canvas').classList.add('d-none');
    document.getElementById('canvas').classList.remove('canvas');

    for (let i = 1; i < 9999; i++) window.clearInterval(i);
}


function backgroundSound() {
    mexicoSound.play();
}


window.addEventListener("keydown", (e) => {

    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }

    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }

    if (e.keyCode == 38) {
        keyboard.UP = true;
    }

    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }
});


window.addEventListener("keyup", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }

    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }

    if (e.keyCode == 38) {
        keyboard.UP = false;
    }

    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
});




function touchEvents() {
    leftTouchButtons();
    rightTouchButtons();
    jumpTouchButtons();
    throwTouchButtons();
}

function leftTouchButtons() {
    document.getElementById('left').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    });

    document.getElementById('left').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.LEFT = false;
    });
}

function rightTouchButtons() {
    document.getElementById('right').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    });

    document.getElementById('right').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
    });
}

function jumpTouchButtons() {
    document.getElementById('up').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.UP = true;
    });

    document.getElementById('up').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.UP = false;
    });
}

function throwTouchButtons() {
    document.getElementById('throw').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.SPACE = true;
    });

    document.getElementById('throw').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.SPACE = false;
    });
}