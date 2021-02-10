const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});


let promiseAll = ([...arr]) => {
    try {return new Promise(async resolve => {
        let res = []
        for (let promise of arr.map(Promise.resolve,Promise)) {
            res.push(await promise.then(async resolved => await resolved))
            if (res.length === arr.length) resolve(res)
        }
    })}
    catch {console.log("error");}
}

promiseAll([promise1,promise2,promise3])
.then(result =>console.log(result))
