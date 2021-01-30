let arrayTop = ["", "", "*", "*", "*", "", ""];
let arrayReg = ["", "*", "", "", "", "*", ""];
let arrayMiddle = ["", "*", "*", "*", "*", "*", ""];

let tableStar = document.getElementById("tableStar");

for (i = 0; i < 7; i++) {
    var newLine = document.createElement('tr');
    tableStar.appendChild(newLine);
    for (j = 0; j < 7; j++) {
        var newData = document.createElement('td');
        if (i == 0) {
            var newText = document.createTextNode(arrayTop[j]);
                   }
        else if (i == 3) {
            var newText = document.createTextNode(arrayMiddle[j]);
        }
        else {
            var newText = document.createTextNode(arrayReg[j]);
        }
        newData.appendChild(newText);
        newLine.appendChild(newData);
    }
    
}

