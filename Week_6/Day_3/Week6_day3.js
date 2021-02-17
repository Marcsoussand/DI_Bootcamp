
function missingLetter(str) {
    let start = str.split("")[0].charCodeAt();
// console.log(start);
    for (i=0;i<str.length;i++) {
        // console.log(str.split("")[i]+" " + (start+i));
        if (str.split("")[i].charCodeAt()!=(start+i)) {
            return "Letter "+ String.fromCharCode(start+i)+ " is missing";
        }
        
    }
    return "No letter is missing";
} 

console.log(missingLetter("abcdeg"));
console.log(missingLetter("abcdefg"));