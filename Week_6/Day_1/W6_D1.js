

function fibonacci(n) {
    var j=[0];
    if (n==0) {
        console.log(0);
    }
    else {

    
    for (i=1;i<=n;i++) {
        if(i==1) {
            j.push(1);
        }
        else {
        j.push(j[i-1]+j[i-2])
    }}
}
return(j.join(','));
}

console.log(fibonacci(8));