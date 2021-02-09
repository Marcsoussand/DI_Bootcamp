console.log(flip());

function flip() {
    let coin = Math.random();
    console.log(coin);
    if (coin<0.5) {
        return "Headers";
    } 
    return "Tails";
}