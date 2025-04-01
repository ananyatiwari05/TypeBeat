for(var i=0;i<7;i++)
{
    document.getElementsByClassName("drum")[i].addEventListener("click",function(){
    var buttonInnerHTML= this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});
}

document.addEventListener("keydown",function(event){
    var keyy=event.key;
    makeSound(keyy);
    buttonAnimation(keyy);
}
);

function makeSound(key)
{
    switch(key)
    {
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            audio= new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default: console.log(buttonInnerHTML);
    }
}
function buttonAnimation(currentKey)
{
    var activeButton= document.querySelector("."+ currentKey);
    //concatenate '.' to make a class selector
    //currentKey will get the values 'w','a','s', etc from above function calls
    activeButton.classList.add("pressed");
    //we already have a class defined pressed in our css
    //we just want to change our basic styling to the presses button styling
    setTimeout(function()
    {
        activeButton.classList.remove("pressed");
    } , 100);
}



