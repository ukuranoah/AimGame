seconds = 10;
score = 0;
var el = document.getElementById('secs');
var width = document.getElementById('canvas').offsetWidth;
var height = document.getElementById('canvas').offsetHeight;
var hb = document.getElementById('hitBox');
var scoreText = document.getElementById('score');
function startGame(){
    setInterval(timer, 1000);
    newHitBox();
    hb.addEventListener("click", function(){
        if(seconds > 0){
            score++;
            scoreText.innerHTML = score;
            hb.style.display = "none";
            newHitBox();
        }
        
        
    })
seconds = 10
}
function timer(){
    if(seconds > 0){
        seconds -= 1;
        el.innerText = seconds;
        hb.style.left = Math.random(width);
        hb.style.top = Math.random(height);
    }
    else{
        //todo SCORE
    }
}



function newHitBox(){
    hb.style.display = "block";
    hb.style.position = "absolute";
    hb.style.left = Math.floor(Math.random()*370) + "px";
    hb.style.top = Math.floor(Math.random()*370) + "px";
}



