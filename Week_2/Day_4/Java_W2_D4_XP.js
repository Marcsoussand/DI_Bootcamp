// Exercise 1 : Keyless Car 

function checkDriverAge(age) {
    if (age<18) {
        return "Sorry, you are too young to drive this car. Powering off";
    } else if (age == 18) {
        return "Congratulations on your first year of driving. Enjoy the ride!";
    } else {
        return "You are old enough to drive, Powering On. Enjoy the ride!"
    }
}

// Solution for the prompt question
let ageString=prompt("Please give me you age :");
let ageNumber = parseInt(ageString);
let result = checkDriverAge (ageNumber); 
console.log("With prompt : "+ result);

// Solution without prompt
console.log("Without prompt : "+checkDriverAge(18));

// Exercise 2 : What's in My Wallet

let wallet = {
    Quarters: 0.25,
    Dimes: 0.10,
    Nickels: 0.05,
    Pennies: 0.01
}
function changeEnough([qu, di, ni, pe], pay) {
    let total = qu*wallet.Quarters + di*wallet.Dimes + ni*wallet.Nickels + pe*wallet.Pennies;
    if (pay <= total) {
        return "true"
    } else {
        return "false"
    }
}

// Choose the line you want to use
// let enough = changeEnough([25, 20, 5, 0], 4.25);
// let enough = changeEnough([2, 100, 0, 0], 14.11);
let enough = changeEnough([0, 0, 20, 5], 0.75);
console.log(enough);


// Exercise 3 : Find the multiples of 23

let sum=0;

function multiples() {
    console.log("Elements : ")
    for (i=0;i<=500;i+=23) {
        console.log(i);
        sum +=i;
    }
    return "Sum : " +sum;
}

let multiple23=multiples();
console.log(multiple23);

// Exercise 4 : Amazon Shopping

let amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
}

function checkBasket() {
    let want = prompt("Which item do you want ?");
    if (want in amazonBasket === true) {
            console.log("Lucky you, we have it in our Basket !");
    } else {
        console.log("Sadly, we just sold our last item of it");
    }
}

let solution = checkBasket();
console.log(solution);

// Exercise 5 : Shopping List

let shoppingList = ["banana","orange","apple"];

let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 


function myBill() {
    var spent=0;
    for (i=0;i<shoppingList.length;i++) {
            spent +=prices[shoppingList[i]];  
        }
    return spent;
}
console.log("myBill : Price spent on shopping : "+myBill());

function myBillBonus() {
    var spentBonus=0;
    for (i=0;i<shoppingList.length;i++) {
        if (stock[shoppingList[i]]>0) {
            spentBonus +=prices[shoppingList[i]];
            stock[shoppingList[i]] = stock[shoppingList[i]]-1;
        }
        else console.log("myBillBonus : Sorry, we don't have " + shoppingList[i]);
    }
    return spentBonus;
}

console.log(" Price spent on shopping : "+myBillBonus());


//Exercise 6 : Tips

let list = prompt("Please enter a list of bills in $ separated with comma");
let array = list.split(",");
let arraytips = array;
console.log(array);
function tips(){
    for (i=0;i<array.length;i++) {
        if (array[i]<50) {
            arraytips[i]=[0.2*array[i],1.2*array[i]];
            
        } else if (array[i]>=50 && array[i]<200) {
            arraytips[i]=[0.15*array[i],1.15*array[i]]
        } else {
            arraytips[i]=[0.1*array[i],1.1*array[i]]
        }
       
    }
    return arraytips
}

console.log(tips());
let arrayfinaltips = [arraytips[0][0],arraytips[1][0],arraytips[2][0]];
let arraytotal = [arraytips[0][1],arraytips[1][1],arraytips[2][1]];

console.log(arrayfinaltips);
console.log(arraytotal);

//Exercise 7 : Vacation Costs

//1.Define a function called hotel_cost()
let nights = ""
let price =0;
function hotelCost(){
    var test=false;
        while (test===false) {
            nights = prompt("How many nights do you want to stay ?");
            // console.log(Number.isInteger(parseInt(nights)));
            if (Number.isInteger(parseInt(nights))) {
                test =true;
                price = 140*nights;
            } else {
                test=false;
            }
        }
        return price;
}

// console.log(hotelCost());

//2.Define a function called plane_ride_cost()
let city="";
let plane=0;
function plane_ride_cost() {
    var test2=false;
        while (test2===false) {
            city = prompt("What is you destination ?");
            // console.log(Number.isInteger(parseInt(nights)));
            if (typeof city === 'string') {
                test2 =true;
            } else {
                test=false;
            }
        }
        if (city == "London" || city=="london") {
            plane=183;
        } else if (city=="Paris"|| city=="paris"){
            plane=220;
        } else {
            plane=300;
        }
        return plane;
}

// console.log(plane_ride_cost());

//3.Define a function called rental_car_cost().

let days=false;
let car=0;
function rental_car_cost() {
    var test=false;
        while (test===false) {
            days = prompt("How many days do you want to rent the car ?");
            // console.log(Number.isInteger(parseInt(nights)));
            if (Number.isInteger(parseInt(days))) {
                test =true;
            } else {
                test=false;
            }
        }
        if (days>10) {
            car = 40*days*0.95;
        } else {
            car=40*days;
        }
        return car;
}

// console.log(rental_car_cost());

//4.Define a function called total_vacation_cost() that returns the total cost of the user’s vacation depending on the 3 functions that you created above.
let totalPrice = "";
function total_vacation_cost() {
    totalPrice="The hotel cost : $"+hotelCost()+", The plane cost : $"+plane_ride_cost()+", The car cost : $"+rental_car_cost();
return totalPrice;
}

console.log(total_vacation_cost());

// Almost 2am, still have the daily challenge to do, I will skip the bonus