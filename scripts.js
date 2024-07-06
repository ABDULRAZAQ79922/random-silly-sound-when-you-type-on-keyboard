const mySillySounds = [
    'sounds/silly1.mp3',
    'sounds/silly2.mp3',
    'sounds/silly3.mp3',
    'sounds/silly4.mp3',
    'sounds/silly5.mp3',
    'sounds/silly6.mp3'
];

const myFunGradients = [
    'linear-gradient(to right, #ffadad, #ffd6a5)',
    'linear-gradient(to right, #fdffb6, #caffbf)',
    'linear-gradient(to right, #9bf6ff, #a0c4ff)',
    'linear-gradient(to right, #bdb2ff, #ffc6ff)',
    'linear-gradient(to right, #ff9a9e, #fecfef)',
    'linear-gradient(to right, #ffdde1, #ee9ca7)',
    'linear-gradient(to right, #a1c4fd, #c2e9fb)',
    'linear-gradient(to right, #fbc2eb, #a6c1ee)'
];

function myPlayRandomSillySound() {
    const myRandomIndex = Math.floor(Math.random() * mySillySounds.length);
    const myAudio = new Audio(mySillySounds[myRandomIndex]);
    myAudio.play();
}

function myChangeBackgroundGradient() {
    const myRandomGradient = myFunGradients[Math.floor(Math.random() * myFunGradients.length)];
    document.body.style.backgroundImage = myRandomGradient;
}

function myDisplayPressedKey(event) {
    myKeyDisplay.textContent = `You pressed: ${event.key}`;
}

const myInputField = document.getElementById('myInputField');
const myKeyDisplay = document.getElementById('myKeyDisplay');
myInputField.addEventListener('keydown', (event) => {
    myPlayRandomSillySound();
    myChangeBackgroundGradient();
    myDisplayPressedKey(event);
});