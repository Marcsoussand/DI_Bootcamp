

/*
Write a function called pangrams that will
take one string, s as input.
A pangram is a sentence that contains
every letter of the alphabet.
The goal of this function is to determine
if the sentence given is a pangram or not.
If it is not a pangram, the function will return not pangram.
If it is a pangram,
the function will return pangram. Here is an example:
"The quick brown fox jumps over the lazy dog"
"We promptly judged antique ivory buckles for the prize"
x is missing
*/

let str = "We promptly judged antique ivory buckles for the prizex";


function pangram(str) {
    var result = "pangram"
    for (i = 0; i < 26; i++) {
        var test = String.fromCharCode(97 + i);
        if (!str.toLowerCase().includes(test)) {
            result = "not a pangram";
            return result;
        }
    }
    return result;
}

console.log(pangram(str));

// function pangrams(s) {
//     let alphabet = "abcdefghijklmnopqrstuvwxyz";
//     // let regex = /\s/g;
//     // let lowercase = s.toLowerCase().replace(regex, "");
//     let lowercase = s.toLowerCase().split(" ").join("")
//     for(let i = 0; i < alphabet.length; i++){
//      if(lowercase.indexOf(alphabet[i]) === -1){
//        return "not pangram";
//      }
//     }
//    return "pangram";
//  }
//  console.log(pangrams("We promptly judged antique ivory buckles for the prize"));