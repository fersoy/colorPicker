var boxNum = 6;
var colors = generateRandomColors(boxNum);
var h1 = document.querySelector('h1');
var colorBoxes = document.querySelectorAll('.colorBox');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
colorDisplay.textContent = pickedColor;
var messageDisplay = document.getElementById('messageDisplay');
var resetButton = document.getElementById('reset');
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    boxNum = 3;
    colors = generateRandomColors(boxNum);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < colorBoxes.length; i++){
        if(colors[i]){
        colorBoxes[i].style.background = colors[i];
        }
        else{
            colorBoxes[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add('selected');
    easyBtn.classList.remove('selected');
    boxNum = 6;
    colors = generateRandomColors(boxNum);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < colorBoxes.length; i++){
        
        colorBoxes[i].style.background = colors[i];
        colorBoxes[i].style.display = 'block';
        
    }
});

resetButton.addEventListener("click", function(){
    colors = generateRandomColors(boxNum);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < colorBoxes.length; i++){
        colorBoxes[i].style.background = colors[i];
    }
    h1.style.background = 'steelblue';
})

 

   for (var i = 0; i < colorBoxes.length; i++){

       colorBoxes[i].style.backgroundColor = colors[i];

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