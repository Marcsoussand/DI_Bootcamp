//Define the elements that we will need
let op = {
    argument1: "",
    argument2: "",
    operator: "",
    result: 0
}
console.log(op.operator);
console.log(parseFloat(3+'.'+4));
let varResult = 0;

// Let's dive in
function my_f(argument) {

    // if = is prompted, then we do the calculation with what we have in the arguments
    // Display in the console log, as I do not know how to bring it back to the html.
    if (argument == '=') {
        varResult = calculation();
        console.log(op.argument1 + op.operator + op.argument2 + "=" + op.result)
    } else if (op.operator == "" &&Number.isInteger(argument) === true){
        op.argument1 += argument;
        console.log(op.argument1);}
        else if (op.operator == "" && argument ===  '.') {
            op.argument1 += argument;
            console.log(op.argument1);
        
    } else if (op.operator.length == 1 && Number.isInteger(argument) === true) {
        op.argument2 += argument;
        console.log(op.argument1 + op.operator + op.argument2);
    }
    else if (op.operator.length == 1 && argument ===  '.') {
        op.argument2 += argument;
        console.log(op.argument1 + op.operator + op.argument2);
    }
    else {
        op.operator = argument;
        console.log(op.argument1 + op.operator)
    }

    // Final calculation after filling all the elements
    // Display in the console log, as I do not know how to bring it back to the html. 
    function calculation() {
        
        if (op.operator === '+') {
            op.result = Number.parseFloat(op.argument1) + Number.parseFloat(op.argument2);


        } else if (op.operator === '-') {
            op.result = parseFloat(op.argument1) - parseFloat(op.argument2);

        } else if (op.operator === '*') {
            op.result = parseFloat(op.argument1) * parseFloat(op.argument2);

        }
        else if (op.operator === '/' && op.argument2 != 0) {
            op.result = parseFloat(op.argument1) / parseFloat(op.argument2);

        } else { op.result = parseInt(op.argument1, 10); }
    }
    
    return op;

}
// console.log(op);
// console.log(my_f(1));
// console.log(my_f(2));
// console.log(my_f('+'));
// console.log(my_f(2));
// console.log(my_f(3));
// console.log(my_f('='));
// console.log(my_f('*'));



