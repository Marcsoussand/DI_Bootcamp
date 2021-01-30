let array = document.getElementsByTagName("li");


// 1.Change the name “Pete” to “Richard”
array[1].textContent = "Richard";

// 2. Change each first name of the <ul> by your name

for (i=0;i<array.length;i++){
    array[i].textContent = "Marc";
}
// 3.Add at the end of each <ul>, a <li> that says “Hey students”

let arrayUl =document.getElementsByTagName('ul');

for (i=0;i<2;i++) {
let student = document.createElement('li');
let studentText = document.createTextNode("Hey Students");
student.appendChild(studentText);
arrayUl[i].appendChild(student);
}


// 4. Delete the <li> Sarah

let Sarah= array[3];
arrayUl[1].removeChild(Sarah);

// 5.Bonus
// Add a class “student_list” to both of the <ul>
// Add the class “university” and “attendance” to the first <ul>

arrayUl[0].classList.add("student_list","university","attendance");

arrayUl[1].classList.add("student_list");

console.log(arrayUl[0].className);
console.log(arrayUl[1].className);