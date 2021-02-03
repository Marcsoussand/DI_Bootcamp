// Exercise 1

console.log([1, 2, 3].map(num => {
    if (typeof num === 'number') return num * 2;
    return ;
  }))

  // guess return [2,4,6]; Map with numbers multiplied by 2
  // correct

  // Exercise 2

  console.log([[0, 1], [2, 3]].reduce(
    (acc, cur) => {
      return acc.concat(cur);
    },
    [1, 2],
  ))

  // guess return [0,3] with a concat of the two element of the array then a reduce of 1,2

  // Well, didn't read properly at all :) the cur used in the concat is the 1,2 in the end, so added after the reduction of 0,1 and 2,3 in one 0,1,2,3

  // Exercise 3

  const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    // alert(num);
    return num * 2;
})
 
// i is the index of arrayNum so from 0 to 5


// Exercise 4

// 1.
const array = [[1],[2],[3],[[[4]]],[[[5]]]]

var flatArray =array.flat();
// console.log(flatArray);

//2.

const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]; 
let function red(array)= array.reduce((str,strNext) => {
    return `${str} ${strNext}`;
})
let arrayGreeting = greeting.forEach((array) => {
        return red(array);
    })

})

console.log(arrayGreeting);





  