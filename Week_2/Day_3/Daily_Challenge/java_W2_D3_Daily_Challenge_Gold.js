//1.Using the .toString() method, convert the array to a string.

const numbers = [5,0,9,1,7,4,2,6,3,8];
let stringnum = "";
for (i=0;i<numbers.length;i++) {
	stringnum +=numbers[i].toString();	
}
console.log(stringnum);

//2.Using the .join(), convert the array to a string. Try passing different values into the join. Eg .join(“+”), .join(” “), .join(“”)


// let joinnum = numbers.join();
let joinnum = numbers.join('');
// let joinnum = numbers.join('-');
console.log(joinnum);

//3.Bonus

//Too late for me, I think I will try again this week-end

// let sortnumbers = numbers;

// var tryit = sortnumbers;
// for (i=numbers.length-1;i<0;i--) {
// 	for (j=numbers.lenth-2;i<0;i--){
// 	if (sortnumbers[i]>sortnumbers[j]) {
// 		var tryit[j]=sortnumbers[i];
// 	}
// }
// }