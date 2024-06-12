score = 0;
cross = true;
gameOverMusic = new Audio('GameOver.mp3');
gameMusic = new Audio('music.mp3');
setInterval(() => {
    gameMusic.play();
}, 100);

document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        mario = document.querySelector(".mario");
        mario.classList.add('animateMario');
        setTimeout(() => {
            mario.classList.remove('animateMario');
        }, 700);
    }
    else if (e.keyCode == 39) {
        mario = document.querySelector(".mario");
        marioX = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
        console.log(marioX)
        mario.style.left = (marioX + 100) + 'px';

    }
    else if (e.keyCode == 37) {
        mario = document.querySelector(".mario");
        marioX = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
        mario.style.left = (marioX - 100) + 'px';

    }
}
setInterval(() => {
    mario = document.querySelector(".mario");
    gameOver = document.querySelector(".gameOver");
    Obstacle = document.querySelector(".Obstacle");

    dx = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(mario, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(Obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(Obstacle, null).getPropertyValue('top'));

    offSetX = Math.abs(dx - ox);
    offSetY = Math.abs(dy - oy);
    console.log(offSetX, offSetY)
     if (offSetX < 100 && offSetY <= 66) {
        gameOver.innerHTML="Game Over - Reload to Play Again"
        Obstacle.classList.remove('obstacleAni')
        setTimeout(() => {
            gameOverMusic.play();
            gameMusic.pause();
            gameOverMusic.pause();
        }, 100);
    }
    
    else if (offSetX < 100  && cross) {
        score++;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(Obstacle, null).getPropertyValue('animation-duration'))
            // console.log(aniDur)
            if (aniDur>3) { 
                newDur = aniDur-0.3;
            }
             else{
                newDur = aniDur;
             }
            console.log(newDur)
            Obstacle.style.animationDuration = newDur + 's'; 
        }, 500);
    }
    
}, 10);

function updateScore(score) {
    scoreCount.innerHTML = "Your Score: " + score;
}