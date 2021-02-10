// Exercise 1

async function fetchStarship() {
    try {
        const response = await fetch('https://swapi.dev/api/starships/9/')
        const data = await response.json();
        console.log(data);
    } catch (e) {
        console.log(e);
    }
}
fetchStarship()

// Exercise 2

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

//calling then 2 seconds after, the resolveafter2seconds