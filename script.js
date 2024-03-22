let gameField = document.querySelector('.game');
let spaceShip = document.getElementById('spaceship');
let o1 = document.getElementById('obstacle1');
let o2 = document.getElementById('obstacle2');
let o3 = document.getElementById('obstacle3');
let score = document.querySelector('.score');

function dateFunc() {

    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let day = new Date().getDate();

    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();

    let currentDate = new Date(`${month} ${day} ${year} ${hour}:${minutes}:${seconds}`).toLocaleTimeString();

    let time = document.querySelector('.time');
    time.innerHTML = 'Time: ' + currentDate;
}
setInterval(dateFunc, 0);

score.innerHTML = 0;
setInterval(() => {
    score.innerHTML++;
}, 1200);

function saveSkin(skinColor) {
    localStorage.setItem('selectedSkin', skinColor);
}

function loadSkin() {
    const selectedSkin = localStorage.getItem('selectedSkin');
    if (selectedSkin) {
        spaceShip.style.backgroundColor = selectedSkin;
    }
}

window.addEventListener('load', loadSkin);

function checkCollision() {
    let spaceShipRect = spaceShip.getBoundingClientRect();
    let o1Rect = o1.getBoundingClientRect();
    let o2Rect = o2.getBoundingClientRect();
    let o3Rect = o3.getBoundingClientRect();

    if (spaceShipRect.right > o1Rect.left &&
        spaceShipRect.left < o1Rect.right &&
        spaceShipRect.bottom > o1Rect.top &&
        spaceShipRect.top < o1Rect.bottom) {
        window.alert(`You lost! Your score is: ${score.innerHTML}. Refresh the page to try again!`);
            o1.classList.remove('obstacle1');
            o2.classList.remove('obstacle2');
            o3.classList.remove('obstacle3');
            spaceShip.classList.remove('up');
            spaceShip.classList.remove('down');
            setInterval(() => {
                score.innerHTML = 0;
            }, 0);
    } else if (spaceShipRect.right > o2Rect.left &&
        spaceShipRect.left < o2Rect.right &&
        spaceShipRect.bottom > o2Rect.top &&
        spaceShipRect.top < o2Rect.bottom) {
        window.alert(`You lost! Your score is: ${score.innerHTML}. Refresh the page to try again!`);
            o1.classList.remove('obstacle1');
            o2.classList.remove('obstacle2');
            o3.classList.remove('obstacle3');
            spaceShip.classList.remove('up');
            spaceShip.classList.remove('down');
            setInterval(() => {
                score.innerHTML = 0;
            }, 0);
    } else if (spaceShipRect.right > o3Rect.left &&
        spaceShipRect.left < o3Rect.right &&
        spaceShipRect.bottom > o3Rect.top &&
        spaceShipRect.top < o3Rect.bottom) {
        window.alert(`You lost! Your score is: ${score.innerHTML}. Refresh the page to try again!`);
            o1.classList.remove('obstacle1');
            o2.classList.remove('obstacle2');
            o3.classList.remove('obstacle3');
            spaceShip.classList.remove('up');
            spaceShip.classList.remove('down');
            setInterval(() => {
                score.innerHTML = 0;
            }, 0);
    }
}

function game() {
    document.body.addEventListener('keydown', (e) => {
        if (e.key == 'ArrowUp') {
            spaceShip.classList.add('up');
            checkCollision();

            setTimeout(() => {
                spaceShip.classList.remove('up');
            }, 650);
        }
        else if (e.key == 'ArrowDown') {
            spaceShip.classList.add('down');
            checkCollision();

            setTimeout(() => {
                spaceShip.classList.remove('down');
            }, 650);
        }
        else if (e.key == 'ArrowLeft') {
            let dirUp = 'up';
            let dirDown = 'down';

            let directions = [dirUp, dirDown];

            let randomDirection = Math.floor(Math.random() * directions.length);
        
            spaceShip.classList.add(directions[randomDirection]);
            checkCollision();

            setTimeout(() => {
                spaceShip.classList.remove('up');
                spaceShip.classList.remove('down');
            }, 650);
        }
    });
    setInterval(checkCollision, 10);
}
game();

function upBtnClick() {

    spaceShip.classList.add('up');
    checkCollision();

    setTimeout(() => {
        spaceShip.classList.remove('up');
    }, 650);
}
function downBtnClick() {

    spaceShip.classList.add('down');
    checkCollision();

    setTimeout(() => {
        spaceShip.classList.remove('down');
    }, 650);
}
function randomBtnClick() {

    let dirUp = 'up';
    let dirDown = 'down';

    let directions = [dirUp, dirDown];

    let randomDirection = Math.floor(Math.random() * directions.length);

    spaceShip.classList.add(directions[randomDirection]);
    checkCollision();

    setTimeout(() => {
        spaceShip.classList.remove('up');
        spaceShip.classList.remove('down');
    }, 650);
}
function blackColor() {
    gameField.style.background = '#000';
    saveBackgroundColor('#000');
}

function resetBackgroundColor() {
    gameField.style.background = "url('background.png')";
    saveBackgroundColor("url('background.png')");
}

function saveBackgroundColor(color) {
    localStorage.setItem('selectedBackgroundColor', color);
}

function loadBackgroundColor() {
    const selectedBackgroundColor = localStorage.getItem('selectedBackgroundColor');
    if (selectedBackgroundColor) {
        gameField.style.background = selectedBackgroundColor;
    }
}
window.addEventListener('load', loadBackgroundColor);



function impostorSkin() {
    spaceShip.style.backgroundColor = '#ff0000';
    saveSkin('#ff0000');
}
function orangeSkin() {
    spaceShip.style.backgroundColor = '#ff7300';
    saveSkin('#ff7300');
}
function yellowSkin() {
    spaceShip.style.backgroundColor = '#eeee2d';
    saveSkin('#eeee2d');
}
function whiteSkin() {
    spaceShip.style.backgroundColor = '#fff';
    saveSkin('#fff');
}
function pinkSkin() {
    spaceShip.style.backgroundColor = '#eb3bc5';
    saveSkin('#eb3bc5');
}
function greySkin() {
    spaceShip.style.backgroundColor = '#414040';
    saveSkin('#414040');
}


document.addEventListener('keydown', (e) => {
    if (e.key == 'ArrowUp') {
        document.getElementById('upButton').classList.add('highlighted');
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key == 'ArrowUp') {
        document.getElementById('upButton').classList.remove('highlighted');
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key == 'ArrowDown') {
        document.getElementById('downButton').classList.add('highlighted');
    }
});
document.addEventListener('keyup', (e) => {
    if (e.key == 'ArrowDown') {
        document.getElementById('downButton').classList.remove('highlighted');
    }
});
document.addEventListener('keydown', (e) => {
    if (e.key == 'ArrowLeft') {
        document.getElementById('leftButton').classList.add('highlighted');
    }
});
document.addEventListener('keyup', (e) => {
    if (e.key == 'ArrowLeft') {
        document.getElementById('leftButton').classList.remove('highlighted');
    }
});