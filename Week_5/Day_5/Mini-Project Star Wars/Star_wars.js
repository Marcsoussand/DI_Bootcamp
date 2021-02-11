
// Definition in DOM of all used events
let findButton = document.getElementById("findButton");
let nameP = document.getElementById("name");
let height = document.getElementById("height");
let gender = document.getElementById("gender");
let birth = document.getElementById("birth");
let home = document.getElementById("home");
let waiting = document.getElementById("waiting");

// Add an event listener on click
findButton.addEventListener('click',randomPeople);

// Function to get data from API
function randomPeople() {
    // Display the waiting icon
    waiting.style.display= 'block';
    // There are 82 people in the API, so my random function will be on 82 possibilities
    let rand = Math.round(Math.random() * 82);
    // console.log(rand);
    
    async function fetchPeople(x) {
        try {
            const response = await fetch('https://swapi.dev/api/people/' + x + '/')
            const people = await response.json();
            //homeworld is not a string, it's a new url to another object, so let get's it
            const planet = await fetch(people.homeworld);
            const planetData = await planet.json();
            //Now we may remove the waiting icon
            waiting.style.display ='none';
            // Let's put the random people data inside the html
            nameP.innerText=people.name;
            height.innerText="Height : "+people.height;
            gender.innerText="Gender : "+people.gender;
            birth.innerText="Birth Year : "+people.birth_year;
            home.innerText="Home World : "+planetData.name;
        }
        catch (e) {
            console.log(e);
        }
    }
    fetchPeople(rand);
   
}

