// Exercise 1

const mergeWords = (string) => (nextString) => (nextString === undefined) ? string : mergeWords(string+' '+nextString);

console.log(mergeWords("Hello")("to")("Ziv")());



