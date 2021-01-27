// Let define colors for filling the div of the palette and to draw on the white grid
let colorArray = ["red", "orangered", "orange", "yellow", "yellowgreen", "lightgreen", "green", "turquoise", "aqua", "lightskyblue", "dodgerblue", "blue", "darkblue", "indigo", "purple", "violet", "lightpink", "lightgray", "grey", "black", "white"]
let colorDraw = "white";

// Loop to create the divs of the palette, with white border for the black box. Same loop create function eventListener to change the color stored for drawing
for (i = 0; i < 21; i++) {
    var newDiv = document.createElement('div');
    newDiv.style.backgroundColor = colorArray[i];
    if (i==19) {
        newDiv.style.borderColor = 'white';
    }

    // console.log(newDiv.getAttribute("background-color"))
    document.getElementById("sidebar").appendChild(newDiv);
    newDiv.addEventListener("click", function (event) {
        colorDraw = event.target.style.backgroundColor;
        // console.log(colorDraw);
    })
}

// Define what is needed for drawing
let mousedown = false;
let whiteGrid = document.getElementById("whiteGrid");
whiteGrid.addEventListener("mouseup", function (event) {
    mousedown = false;
})

// Loop to create divs of the white grid and functions to draw, with mousedown and mouseover. 
for (col = 0; col < 1440; col++) {
    var divWhite = document.createElement('div');
    divWhite.style.backgroundColor = "white";
    document.getElementById("whiteGrid").appendChild(divWhite);
    // divWhite.addEventListener("click", function (event) {
    //     event.target.style.backgroundColor = colorDraw;
    // })
    divWhite.addEventListener("mousedown", function (event) {
        event.target.style.backgroundColor = colorDraw;
        mousedown = true;
    })
    divWhite.addEventListener("mouseover", function (event) {
        if (mousedown) {
            event.target.style.backgroundColor = colorDraw;
        }
    })

}

// Clear button with a loop on all the white grid elements to clear them (i.e. background color back to white)
let clearButton=document.getElementById("clearButton");
clearButton.addEventListener("click",function(event){
    var colorGrid =whiteGrid.getElementsByTagName("div");
    for (i=0;i<colorGrid.length;i++) {
        colorGrid[i].style.backgroundColor = 'white';
    }
    })