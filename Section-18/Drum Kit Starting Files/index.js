document.addEventListener("keyup", function(E){
    let temp=E.key;
    let l = document.querySelector("."+temp);
    l.style.color="white";
    setTimeout(function(){
        l.style.color = "#DA0463";
    }, 100);
    makeSound(E.key);   
    
});
function makeSound(key){
    let sym = document.querySelector("."+key+" img");
    sym.style.opacity=1;
    switch (key) {
        case "w":
            var aud = new Audio("sounds/tom-1.mp3");
            aud.play();
            break;
        case "a":
            var aud = new Audio("sounds/tom-2.mp3");
            aud.play();
            break;
        case "s":
            var aud = new Audio("sounds/tom-3.mp3");
            aud.play();
            break;
        case "d":
            var aud = new Audio("sounds/tom-4.mp3");
            aud.play();
            break;
        case "j":
            var aud = new Audio("sounds/snare.mp3");
            aud.play();
            break;
        case "k":
            var aud = new Audio("sounds/kick-bass.mp3");
            aud.play();
            break;
        case "l":
            var aud = new Audio("sounds/crash.mp3");
            aud.play();
            break;
        
        default:
            break;
    }
    setTimeout(function(){
        sym.style.opacity=0;
    },100);
    
}
for(let i = 0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",
    function (){
    let btn = this.innerHTML;
    makeSound(btn);
});
}
