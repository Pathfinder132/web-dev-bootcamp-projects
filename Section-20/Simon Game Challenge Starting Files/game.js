var p = document.querySelectorAll(".btn");
var mt = [];
let nt = [];
let i=1;
var green = new Audio('sounds/green.mp3');
var red = new Audio('sounds/red.mp3');
var yellow = new Audio('sounds/yellow.mp3');
var blue = new Audio('sounds/blue.mp3');
var wrng = new Audio('sounds/wrong.mp3');
var wr = document.querySelector("#level-title");
let currentidx = 0;
function playSound(audio) {
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}
for(let o=0;o<4;o++){
    p[o].addEventListener("click",function(){
        if(document.querySelector("#level-title").textContent=="Click!"){
            p[o].classList.add("pressed");
            setTimeout(() => {
                p[o].classList.remove("pressed");    
            }, 100);
            
            nt.push(o);
            checkAns();
        }
    });
}   
document.addEventListener("keypress", function(E){
    if(E.key=="Enter" && document.querySelector("#level-title").textContent=="Press Enter Key to Start"){
        document.querySelector("#level-title").textContent="Level "+i;
        setTimeout(() => {
            callAfunc(i);
        }, 1000);
        
    }
});
function callAfunc(i){
    setTimeout(() => {
        
    }, 500);
    mt=[];
    nt=[];
    currentidx=0;
    for(let j=0;j<i;j++){
        let k=Math.floor(Math.random() * (4));
        mt.push(k);
        console.log(mt);
        setTimeout(() => {
            p[k].classList.add("pressed");
            setTimeout(() => {
                p[k].classList.remove("pressed");    
            }, 500);
        }, j*1000);      
    }
    setTimeout(() => {
        document.querySelector("#level-title").textContent="Click!";
    }, i*800);
    
}
function checkAns(){
    let chk = 0;
    currentidx = nt.length-1;
            if(mt[currentidx] != nt[currentidx]){
                playSound(wrng);
                document.querySelector("#level-title").textContent = "Wrong Order, Try Again!";

                setTimeout(() => {
                    document.querySelector("#level-title").textContent = "Level 1";
                    i = 1;
                    setTimeout(() => {
                        callAfunc(i);
                    }, 1000);
                }, 1000);
                return;
            }
            else {
                if (mt[currentidx] === 3) playSound(blue);
                else if (mt[currentidx] === 2) playSound(yellow);
                else if (mt[currentidx] === 1) playSound(red);
                else if (mt[currentidx] === 0) playSound(green);
            }
        if(nt.length===mt.length){
            i++;
            document.querySelector("#level-title").textContent="Level "+i;
            if(document.querySelector("#level-title").textContent!="Level 11"){
            setTimeout(() => {
                callAfunc(i);
            }, 2000); 
            }
            else{
                document.querySelector("#level-title").textContent="Congrats! You Win!";
            }
        }
    
}

    