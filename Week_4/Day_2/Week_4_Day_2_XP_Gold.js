let landscape = function()
{
 let result = "";
 let flat = function(x)
 {
   for(let count = 0; count<x; count++)
   {
     result = result + "_";
   }
 }
 let mountain = function(x)
 {
   result = result + "/"
   for(let counter = 0; counter<x; counter++)
   {
     result = result + "'"
   }
   result = result + "\\"
 }

flat(4);
mountain(4);
flat(4)
return result;
}

//What is the outcome and explain how you came to this conclusion.

//first flat(4) should return 4 times _ in result, so "____"
//second mountain(4) should return result using the result already modified by flat(4) so  ____ then / then four times ' then \\, so something like this : ____/''''\\
// The last flat 4 will add again ____ in the end, so I think it will display ____/''''\\____

// Let's check

console.log(landscape());

// Ok, there is only one difference, the \\ which print a \.
// If I take one out in the text, it's like it's missing something, maybe only one \ is used for a root,
// so in order to get \ we need to use two \\