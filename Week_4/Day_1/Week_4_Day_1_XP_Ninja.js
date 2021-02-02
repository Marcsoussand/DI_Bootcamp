// Exercise 1

let menu = [
    {
      type : "starter",
      name : "Houmous with Pita"
    },
    {
      type : "starter",
      name : "Vegetable Soup with Houmous peas"
    },
    {
      type : "dessert",
      name : "Chocolate Cake"
    }
  ]
//   let result = [];
  
//   function dessert(){
//   menu.forEach((Object) => {
//         result.push(Object.type,Object.name);

//  return result;
//   })
//  result.some("dessert")
//   }


menu.some((Object) => {
    let test = false;
        (Object.type =="dessert") ? (test=true) : ((Object.name=="dessert") ? (test=true) : null); 
        console.log(test);
    return (test);
   
})

menu.every((Object) => {
    console.log(Object.type=="starter");
    return( Object.type=="starter");
})

function mainCourse(arr) {
    (arr.every((Object) => {
        return(Object.type!="main course");
    }) ==true) ? arr.push({type:"main course",name: "Spaghettis"}) : null;
    return arr;
}

console.log(mainCourse(menu));

let vegetarian = ["Vegetable", "Houmous", "Eggs", "Vanilla", "Potatoes" ];

menu.forEach((Object) => {
    var test2 = false;
    for(x in vegetarian) {
        console.log(Object.name.includes(vegetarian[x]));
        Object.name.includes(vegetarian[x]) ? test2 = true : null;
    } 
    Object.vegetarian = test2;
console.log(menu);
return  menu;

}
)




  
