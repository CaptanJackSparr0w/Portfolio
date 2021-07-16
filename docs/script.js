const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const sta = document.getElementById("sta");

function jump()
    {
        if(dino.classList != "jump"){
            dino.classList.add("jump");
            setTimeout(function(){
                dino.classList.remove("jump");
            },300);
        }
    }
let isalive = setInterval( function () {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft =parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if  (cactusLeft <=50 && cactusLeft>=0 &&dinoTop >=98){
        console.log("colosion");
        alert("game over");
        cactus.classList.remove("start");
        sta.classList.remove("hide");
    }

},10);

    document.addEventListener("keydown",function(event){
    jump();
}
);
function start()
    {
        sta.classList.add("hide");
        if(cactus.classList != "start"){
            cactus.classList.add("start");
        }
    };