var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
   ]
   var colorBoxes = document.querySelectorAll('.colorBox');
   var pickedColor = colors[3];
   var colorDisplay = document.getElementById('colorDisplay');
   colorDisplay.textContent = pickedColor;
   var messageDisplay = document.getElementById('messageDisplay');

 

   for (var i = 0; i < colorBoxes.length; i++){

       colorBoxes[i].style.backgroundColor = colors[i];

       colorBoxes[i].addEventListener('click', function(){
           var clickedColor = this.style.backgroundColor;
           if(clickedColor === pickedColor){
            messageDisplay.textContent = 'Correct!'
               }
               else{
                this.style.backgroundColor = '#98b6ad';
                messageDisplay.textContent = 'Try Again!'
           }
       })
   }