// Exercise 1 : Change the Article

//1. Give to all paragraphs inside the <article> tag the class of para_article.
let article1 = document.body.firstElementChild;
// console.log(article1);
let paragraphs = article1.getElementsByTagName("p");
// console.log(paragraphs);
for (i=0;i<paragraphs.length;i++) {
paragraphs[i].className = "para_article";}
// console.log(paragraphs);


//2.Remove the last paragraph in the article
let lastP = article1.lastElementChild;
lastP.remove();

//3.Add an event listener so that when you click on the h2, it is removed from the DOM.
function delete_h2() {
    let h2div = article1.getElementsByTagName("h2");
    // console.log(h2div);
    h2div[0].remove();
}

//4.Set the font size of the h1 to be a random pixel size from 0 to 100.
let h1div = article1.firstElementChild;
console.log(h1div);
let random=Math.floor(Math.random() * 101);  
console.log(random);
h1div.style.fontSize = random + "px";

//5.Hide the 1st paragraph, when it’s clicked. (use the display property )

function delete_p1() {
    let firstP = paragraphs[0];
    console.log(firstP);
    firstP.remove();
}

//6. Get the values from the inputs and append them to the end of the html, inside a table.
let formResult = document.forms[0];
let form1 = formResult.getElementsByTagName("input");
let form2 = form1[0];
let form3 = form1[1];
form2.value = "Marc";
form3.value = "Good";



// Not finished


// let table = document.createElement("table");
// let newCell1 = document.createTextNode(form2.value);
// let newCell2 = document.createTextNode(form3.value);
// let row = document.createElement("tr");
// let cell1 = document.createElement("td");
// let cell2 = document.createElement("td");
// document.body.appendChild(table);
// document.body.table.appendChild(row);
// document.body.table.row.appendChild(cell1);
// document.body.table.row.appendChild(cell2);


console.log(form2);
console.log(form3);