var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var colorPicked = pickColor();
var colorDisplay = document.querySelector(".colorDisplay");
var message = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
colorDisplay.textContent = colorPicked;
var h1 = document.querySelector("h1");
var easyBtn = document.querySelector("#easyBtn");
 var hardBtn = document.querySelector("#hardBtn");
// var modeButtons = document.querySelectorAll(".mode");


// for(var i = 0; i < modeButtons.length; i++) {
//     modeButtons[i].addEventListener("click", function() {
//         modeButtons[0].classList.remove("selected");
//         modeButtons[1].classList.remove("selected");
//         this.classList.add("selected");
        
//         this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
//         reset();
//     });
// }

// function reset() {
//     colors = generateRandomColors(numSquares);
//     colorPicked = pickColor();
//     colorDisplay.textContent = colorPicked;
//     resetButton.textContent = "New Colors";
//     messageDisplay.textContent = "";

//     for(var i = 0; i < squares.length; i++) {
//         if(colors[i]){
//             squares[i].style.display  = "block";
//             squares[i].style.background = colors[i];
//         } else {
//             squares[i].style.display  = "none";
//         }

//     }


 easyBtn.addEventListener("click", function() {
    hardBtn.classList.remove("selected");
     easyBtn.classList.add("selected");
    numSquares = 3;
     colors = generateRandomColors(numSquares);
     colorPicked = pickColor();
    colorDisplay.textContent = colorPicked;
     for(var i = 0; i < squares.length; i++) {
         if(colors[i]) {
            squares[i].style.background = colors[i];
        } else {
             squares[i].style.display = "none";
        }
    }
 });

hardBtn.addEventListener("click", function() {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    colorPicked = pickColor();
    colorDisplay.textContent = colorPicked;
    for(var i = 0; i < squares.length; i++) {
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
      
    }
});

resetButton.addEventListener("click", function() {
// reset();

colors = generateRandomColors(numSquares);
colorPicked = pickColor();
colorDisplay.textContent = colorPicked;

message.textContent = "";
this.textContent = "New Colors"


for(var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
}
h1.style.background = "steelbue";
})

colorDisplay.textContent = colorPicked;

for (var i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i]

squares[i].addEventListener("click", function() {
    var clickedColor = this.style.background

    if(clickedColor === colorPicked) {
        message.textContent = "correct"
        changeColor(clickedColor);
        h1.style.backgroundColor = colorPicked
        resetButton.textContent = "Play Again";
       
     } else {
        this.style.background = "#232323";
        message.textContent = "Try again";

     }   
}
 
)

}


function changeColor(color) {
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}


function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return  colors[random];
}




function generateRandomColors(num) {
    var arr = []
    for( var i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    return arr;
}


function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}4