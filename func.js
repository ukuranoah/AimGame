var seconds = 10;
var score = 0;
var leaderboard = [];
var el = document.getElementById('secs');

var hb = document.getElementById('hitBox');
var scoreText = document.getElementById('score');
var board = document.getElementById('leaderboard');
function startGame(){
    seconds = 10;
    timer();
    
    newHitBox();
    
}
function timer(){
    var countdown = setInterval(function(){
        seconds--;
        el.innerHTML = seconds;
        if(seconds == 0){
            leaderboard.push(score);
            score = 0;
            clearInterval(countdown);
            createLeaderboard();
        }
    }, 1000);
    
}

hb.addEventListener("click", function(){
        if(seconds > 0){
            score++;
            scoreText.innerHTML = score;
            hb.style.display = "none";
            newHitBox();
        }
        
    })


function newHitBox(){
    hb.style.display = "block";
    hb.style.position = "absolute";
    hb.style.left = Math.floor(Math.random()*370) + "px";
    hb.style.top = Math.floor(Math.random()*370) + "px";
}

function createLeaderboard(){
    board.innerHTML = "<h2>Leaderboard</h2>";
    for(i = 0; i < leaderboard.length; i++){
        console.log('poop');
        var p = document.createElement('p');
        p.innerHTML = leaderboard[i];
        board.appendChild(p);
    }
}


