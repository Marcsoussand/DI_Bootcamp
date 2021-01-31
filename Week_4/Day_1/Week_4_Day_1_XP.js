// Exercise 1

let colors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

colors.forEach((Text, i, result1) => {
    result1[i] = i + 1 + "# choice is " + Text;
    console.log(result1[i]);
}
)

// Exercise 2

let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let ordinal = ["th", "st", "nd", "rd"]

color.forEach((Text, i, result2) => {
    var place = "";
    (i == 0) ? (place = ordinal[1]) : ((i == 1) ? (place = ordinal[2]) : ((i == 2) ? (place = ordinal[3]) : place = ordinal[0]));
    result2[i] = i + 1 + place + " choice is " + Text;
    console.log(result2[i]);
}
)

// Exercise 3

let result3 = [];
function is_string(input) {
    let array = input.split('');
    
    array.forEach((Text, i) => {
        console.log(Text);
        console.log(typeof Text);
        (typeof Text == "string") ? result3[i] = true : result3[i] = false;
         }  
    )
    console.log(result3);
    return result3.every((value) => {return (value == true)})
}


console.log(is_string('hello')); 

// Exercise 4

let bankAmount = Number(prompt("Enter your initial amount : "));
const vat = 0.17;
let details = ["+200", "-100", "+146", "+167", "-2900"];
let monthExpenses =0;

details.forEach((expenses,i,arr) =>{
    // arr[i] = expenses *(1+vat);
    monthExpenses +=expenses*(1+vat);
})
let bankAccount = bankAmount+monthExpenses;
// console.log(details);
// console.log(monthExpenses);
console.log(bankAmount+monthExpenses);
