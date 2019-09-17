var boxNum = 6;
var colors = [];
var h1 = document.querySelector('h1');
var colorBoxes = document.querySelectorAll('.colorBox');
var pickedColor;
var colorDisplay = document.getElementById('colorDisplay');
colorDisplay.textContent = pickedColor;
var messageDisplay = document.getElementById('messageDisplay');
var resetButton = document.getElementById('reset');
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
           modeButtons[0].classList.remove("selected");
           modeButtons[1].classList.remove("selected");
           this.classList.add("selected");
           this.textContent === "Easy" ? boxNum = 3: boxNum = 6;
           reset();
        })
    }
    for (var i = 0; i < colorBoxes.length; i++){

        colorBoxes[i].addEventListener('click', function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
             messageDisplay.textContent = 'Correct!'
             resetButton.textContent = 'Play Again?';
             changeColors(clickedColor);
             h1.style.background = clickedColor;
                }
                else{
                 this.style.backgroundColor = '#98b6ad';
                 messageDisplay.textContent = 'Try Again!'
            }
        })
    }
reset();
}



function reset(){
    colors = generateRandomColors(boxNum);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = 'New Colors';
    messageDisplay.textContent = '';
    for(var i = 0; i < colorBoxes.length; i++){
        if(colors[i]){
            colorBoxes[i].style.display = "block";
            colorBoxes[i].style.background = colors[i]; 
        }else{
        colorBoxes[i].style.display = 'none';
        }
    }
    h1.style.background = 'steelblue';
    
}


resetButton.addEventListener("click", function(){
    reset();
})


   
   function changeColors(color){
       for (var i = 0; i < colorBoxes.length; i++){
         colorBoxes[i].style.background = color;  
       }
   }
   function pickColor(){
     var random = Math.floor(Math.random() * colors.length);
     return colors[random];
   }
   function generateRandomColors(num){
       var arr = [];
       for (var i = 0; i < num; i++){
           arr.push(randomColor())
       } 
       return arr;
   }

   function randomColor(){
       var r = Math.floor(Math.random() * 256);
       var g = Math.floor(Math.random() * 256);
       var b = Math.floor(Math.random() * 256);
return "rgb(" + r + ", " + g + ", " + b + ")";
   }