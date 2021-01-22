// Exercise 1
// output 10
var num = 8;
var num = 10;
console.log(num);

// Exercise 2
// let instead of var

function numbers() {
    
    for (let i = 0; i < 5; i += 1) {
      console.log(i);
    }
    // i=undefined;
      console.log(i);
  }
  numbers();

//Exercise 3
 let globalAmount = 10000;
 var vAT = 0.2;
 var expensesRevenue = [150,-250,600,-1000,3000,-250];

 for (i=0;i<expensesRevenue.length;i++){
        if(expensesRevenue[i]<0) {
            expensesRevenue[i] *=(1+vAT);
        } 
 }
console.log("My expenses with VAT and Revenue : "+expensesRevenue);
for (i=0;i<expensesRevenue.length;i++) {
    globalAmount +=expensesRevenue[i];
}

console.log("At the end, I will have : " +globalAmount);