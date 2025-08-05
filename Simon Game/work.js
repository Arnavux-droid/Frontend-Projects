let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let ranIdx = Math.floor(Math.random()*3);
    let randColor = btns[ranIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    // console.log(ranIdx);
    // console.log(randColor);
    gameSeq.push(randColor);
    gameFlash(randbtn);
}

function checkAns(idx) {
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br>Press any key to start.`;
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150)
        document.querySelector("body").style.backgroundColor = "red";
        reset();
    }
}

function btnPress() {
    
   let btn = this;
   userflash(btn);

   userColor = btn.getAttribute("id");
   userSeq.push(userColor);
   checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

//Reset the game 
function reset(){
    started = false;
    gameSeq=[];
    userSeq=[];
    level = 0;
}