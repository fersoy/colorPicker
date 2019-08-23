var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
   ]
   var colorBoxes = document.querySelectorAll('.colorBox');
   var pickedColoir = colors[3];
   var colorDisplay = document.getElementById('colorDisplay');

   for (var i = 0; i < colorBoxes.length; i++){
       colorBoxes[i].style.backgroundColor = colors[i];
   }