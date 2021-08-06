var character = document.getElementById("character");
var boxes = document.getElementById("boxes");
var counter=0;
function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let boxesLeft = parseInt(window.getComputedStyle(boxes).getPropertyValue("left"));
    if(boxesLeft<20 && boxesLeft>-20 && characterTop>=130){
        boxes.style.animation = "none";
        alert(" Oh You Hitted by a Box !  Your Score: "+Math.floor(counter/100));
        counter=0;
       boxes.style.animation = "boxes 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);