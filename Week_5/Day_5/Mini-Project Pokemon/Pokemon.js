// Let define all the elements

let circleB = document.getElementById("circleB");
let leftB = document.getElementById("leftB");
let rightB = document.getElementById("rightB");
let pokeImg = document.getElementById("pokeImg");
let pokeText = document.getElementById("pokeText");
let namePoke = document.getElementById("namePoke");
let idPoke = document.getElementById("idPoke");
let heightPoke = document.getElementById("heightPoke");
let weightPoke = document.getElementById("weightPoke");
let typePoke = document.getElementById("typePoke");
let waiting = document.getElementById("waiting");
let nPoke = 2;

// We will have 3 buttons to interact

circleB.addEventListener('click', getPoke);
leftB.addEventListener('click', previous);
rightB.addEventListener('click', next);

// The main function on the green button to fetch Pokemon data
async function getPoke() {
    // Initialize the screen with the waiting element displayed each time we click.
    pokeImg.src = "#";
    namePoke.innerText = "";
    idPoke.innerText = "";
    heightPoke.innerText = "";
    weightPoke.innerText = "";
    typePoke.innerText = ""
    waiting.style.display = 'block';
    try {
        // The random function used to get a pokemon
        nPoke = Math.round(Math.random() * 898);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nPoke}`)
        const pokeApi = await response.json();
        console.log(pokeApi);
        // We store all the elements we need
        var imgPoke = pokeApi.sprites.front_default;
        var pokeName = pokeApi.name.toUpperCase();
        var pokeId = pokeApi.id;
        var pokeHeight = pokeApi.height;
        var pokeWeight = pokeApi.weight;
        //Some Pokemons have one type, some others two, so we will display differently both cases (No Pokemons have three or more types)
        var pokeType = "";
        var nb = 0;
        if (pokeApi.types.length == 1) {
            pokeType = pokeApi.types[0].type.name;
        }
        else {
            nb = 1;
            pokeType = pokeApi.types[0].type.name + ", " + pokeApi.types[1].type.name;
        }
        // console.log(pokeType);
        // Let's remove the waiting gif and show all the elements
        waiting.style.display = "none";
        pokeImg.src = imgPoke;
        namePoke.innerText = pokeName;
        idPoke.innerText = "Pokemon n°: " + pokeId;
        heightPoke.innerText = "Height: " + pokeHeight + "cm";
        weightPoke.innerText = "Weight: " + pokeWeight + "kg";
        if (nb == 0) {
            typePoke.innerText = "Type: " + pokeType;
        }
        else {
            typePoke.innerText = "Types: " + pokeType;
        }

    }
    catch { namePoke.innerText = "We're sorry, but the Pokemon you asked is hiding right now" }
}

// Same function but seeking for the previous pokemon, nPoke is decreased by 1 in the end.
async function previous() {
    pokeImg.src = "#";
    namePoke.innerText = "";
    idPoke.innerText = "";
    heightPoke.innerText = "";
    weightPoke.innerText = "";
    typePoke.innerText = ""
    waiting.style.display = 'block';
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nPoke - 1}`)
        const pokeApi = await response.json();
        console.log(pokeApi);
        var imgPoke = pokeApi.sprites.front_default;
        var pokeName = pokeApi.name.toUpperCase();
        var pokeId = pokeApi.id;
        var pokeHeight = pokeApi.height;
        var pokeWeight = pokeApi.weight;
        var pokeType = "";
        var nb = 0;
        if (pokeApi.types.length == 1) {
            pokeType = pokeApi.types[0].type.name;
        }
        else {
            nb = 1;
            pokeType = pokeApi.types[0].type.name + ", " + pokeApi.types[1].type.name;
        }
        // console.log(pokeType);
        waiting.style.display = "none";
        pokeImg.src = imgPoke;
        namePoke.innerText = pokeName;
        idPoke.innerText = "Pokemon n°: " + pokeId;
        heightPoke.innerText = "Height: " + pokeHeight + "cm";
        weightPoke.innerText = "Weight: " + pokeWeight + "kg";
        if (nb == 0) {
            typePoke.innerText = "Type: " + pokeType;
        }
        else {
            typePoke.innerText = "Types: " + pokeType;
        }
        nPoke--;
    }
    catch { namePoke.innerText = "We're sorry, but the Pokemon you asked is hiding right now" }
}

// Same function but seeking for the next pokemon, nPoke is increased by 1 in the end.
async function next() {
    pokeImg.src = "#";
    namePoke.innerText = "";
    idPoke.innerText = "";
    heightPoke.innerText = "";
    weightPoke.innerText = "";
    typePoke.innerText = ""
    waiting.style.display = 'block';
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nPoke + 1}`)
        const pokeApi = await response.json();
        console.log(pokeApi);
        var imgPoke = pokeApi.sprites.front_default;
        var pokeName = pokeApi.name.toUpperCase();
        var pokeId = pokeApi.id;
        var pokeHeight = pokeApi.height;
        var pokeWeight = pokeApi.weight;
        var pokeType = "";
        var nb = 0;
        if (pokeApi.types.length == 1) {
            pokeType = pokeApi.types[0].type.name;
        }
        else {
            nb = 1;
            pokeType = pokeApi.types[0].type.name + ", " + pokeApi.types[1].type.name;
        }
        // console.log(pokeType);
        waiting.style.display = "none";
        pokeImg.src = imgPoke;
        namePoke.innerText = pokeName;
        idPoke.innerText = "Pokemon n°: " + pokeId;
        heightPoke.innerText = "Height: " + pokeHeight + "cm";
        weightPoke.innerText = "Weight: " + pokeWeight + "kg";
        if (nb == 0) {
            typePoke.innerText = "Type: " + pokeType;
        }
        else {
            typePoke.innerText = "Types: " + pokeType;
        }
        nPoke++;
    }
    catch { namePoke.innerText = "We're sorry, but the Pokemon you asked is hiding right now" }
}
