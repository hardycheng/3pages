/**
 * Created by xchou on 7/29/15.
 */
if (confirm("Begin Game?") == 1) {
    //var backgroundAudioPlayer = document.getElementById("Background-AudioPlayer");
    //backgroundAudioPlayer.play();
    var snake = new createSnake();
    var snakeCanvas = document.getElementById("Snake-Canvas");
    var canvasContext = snakeCanvas.getContext("2d");
    snake.IniGame();
    snake.m_nGameStatus = 1;
    Timer();//loop
}
else {
    alert("Bye bye!");
}

function createPoint(x, y) {
    this.x = x;
    this.y = y;
}

function keyPressed(event) {
    switch (event.keyCode) {
        case 38://up
            snake.m_nDirect = 4;
            break;
        case 40://down
            snake.m_nDirect = 3;
            break;
        case 37://left
            snake.m_nDirect = 2;
            break;
        case 39://right
            snake.m_nDirect = 1;
            break;
    }
}


function Timer() {

    var uTag = 0;
    var uPoint = new createPoint(snake.m_aBody[0].x, snake.m_aBody[0].y);
    switch (snake.m_nDirect) {
        case 1:
            uPoint.x += 5;
            if (uPoint.x > 295) {
                uTag = 1;
            }
            break;
        case 2:
            uPoint.x -= 5;
            if (uPoint.x < 0) {
                uTag = 1;
            }
            break;
        case 3:
            uPoint.y += 5;
            if (uPoint.y > 145) {
                uTag = 1;
            }
            break;
        case 4:
            uPoint.y -= 5;
            if (uPoint.y < 0) {
                uTag = 1;
            }
            break;
    }

    if (uTag == 0) {
        var i = 0;
        for (i in snake.m_aBody) {
            if ((snake.m_aBody[i].x == uPoint.x) && (snake.m_aBody[i].y == uPoint.y)) {
                uTag = 1;
                break;
            }
        }
    }

    if (uTag == 0) {
        if ((snake.m_aBody[0].x == snake.m_pAim.x) && (snake.m_aBody[0].y == snake.m_pAim.y)) {
            snake.m_nCount++;
            snake.m_aBody[snake.m_nCount + 2] = new createPoint();
            snake.ReDisplay(snake.m_pAim.x, snake.m_pAim.y);
            //var scoreAudioPlayer = document.getElementById("Score-AudioPlayer");
            //scoreAudioPlayer.play();
            snake.IniAim();
        }

        var tempPoint = new createPoint(snake.m_aBody[snake.m_nCount + 2].x, snake.m_aBody[snake.m_nCount + 2].y);
        for (var i = snake.m_nCount + 2; i > 0; i--) {
            snake.m_aBody[i].x = snake.m_aBody[i - 1].x;
            snake.m_aBody[i].y = snake.m_aBody[i - 1].y;
        }
        snake.m_aBody[0].x = uPoint.x;
        snake.m_aBody[0].y = uPoint.y;
        snake.ReDisplay(tempPoint.x, tempPoint.y);
    }

    canvasContext.beginPath();
    canvasContext.fillStyle = "green";
    canvasContext.fillRect(snake.m_pAim.x, snake.m_pAim.y, 5, 5);
    canvasContext.fillStyle = "red";
    var i = 0;
    for (i in snake.m_aBody) {
        canvasContext.fillRect(snake.m_aBody[i].x, snake.m_aBody[i].y, 5, 5);
    }

    if (uTag == 1) {
        snake.m_nGameStatus = 0;
        //var gameoverAudioPlayer = document.getElementById("GameOver-AudioPlayer");
        //backgroundAudioPlayer.pause();
        //gameoverAudioPlayer.play();
        if (confirm("Game Over !Do you want to try again?")) {
            canvasContext.clearRect(0, 0, 300, 150);
            snake.IniGame();
            snake.m_nGameStatus = 1;
            //backgroundAudioPlayer.load();
            //backgroundAudioPlayer.play();
        }
    }

    snake.m_nTime += 0.5;
    var snakeTime = document.getElementById("Snake-Time");
    if (snake.m_nTime % 1 == 0)
        snakeTime.innerText = snake.m_nTime;
    document.getElementById("Snake-Score").innerText = snake.m_nCount;
    var length = snake.m_nCount + 3;
    document.getElementById("Snake-Length").innerText = length;

    if (snake.m_nGameStatus)
        setTimeout("Timer()", 100 / snake.m_aBody.length);
}
