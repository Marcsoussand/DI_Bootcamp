//1.Creation of the NavBar
//1.1 Full Navbar and simple text
let navBar = document.createElement('nav');
let newTextNode = document.createTextNode('Looking for the next Twik talent');
navBar.appendChild(newTextNode);
document.body.appendChild(navBar);

//1.2 Language Selector
let languageContainer = document.createElement('div');
let flag = document.createElement('img');
flag.id = "flag";
flag.src = "UK.png";
let language = document.createElement('select');
language.id = "language";
let englishChoice = document.createElement('option');
englishChoice.value = "english";
let textEnglish = document.createTextNode('English');
englishChoice.appendChild(textEnglish);
let frenchChoice = document.createElement('option');
let textFrench = document.createTextNode('French');
frenchChoice.appendChild(textFrench);
frenchChoice.value = "french";
let hebrewChoice = document.createElement('option');
let textHebrew = document.createTextNode('עברית');
hebrewChoice.appendChild(textHebrew);
hebrewChoice.value = "hebrew"
language.appendChild(englishChoice);
language.appendChild(frenchChoice);
language.appendChild(hebrewChoice);
languageContainer.appendChild(flag);
languageContainer.appendChild(language);
navBar.appendChild(languageContainer);

language.onchange = function (event){
        let choice = event.target.value;
        switch (choice) {
            case "english":
                flag.src = "UK.png";
                searchText.innerHTML = "Ready for a little treasure hunt ?"
                buttonSearch.innerHTML = "Let's go !"
    
                break;
            case "french":
                flag.src = "france.png";
                searchText.innerHTML = "Prêt pour une petite chasse au trésor ?"
                buttonSearch.innerHTML = "Allons-y !"

                break;
            case "hebrew":
                flag.src = "Israel.png";
                searchText.innerHTML = " מוכן לחפש את האוצר"
                buttonSearch.innerHTML = "קדימה !"
    
                break;
    
    
            default:
                break;
        }
    }

//Map Container
let mapContainer = document.createElement('div');
document.body.appendChild(mapContainer);
mapContainer.id="mapContainer";
//Searching Div
let searchLaunch = document.createElement('div');
searchLaunch.id="searchLaunch";
let searchText = document.createElement('span');
searchText.id="searchText";
let searchContent = document.createTextNode('Ready for a little treasure hunt ?');
searchText.appendChild(searchContent);
let buttonSearch = document.createElement('button');
buttonSearch.type="button";
buttonSearch.id="buttonSearch";

let buttonContent = document.createTextNode("Let's go !");
buttonSearch.appendChild(buttonContent);
searchLaunch.appendChild(searchText);
searchLaunch.appendChild(buttonSearch);
mapContainer.appendChild(searchLaunch);



//Map Div
let map = document.createElement('div');
mapContainer.appendChild(map);
map.id = "map";


//Creation of the footer
let footer = document.createElement('footer');
let textFooter = document.createTextNode('Footer Marc');
footer.appendChild(textFooter);
document.body.appendChild(footer);


function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 32.0532071, lng: 34.7723798 },
        zoom: 18,
    });
}


// Treasure hunt
let instructions = document.createElement('div');
let instructionsText = document.createTextNode("=> First Move : Look at the bigger picture !");
instructions.appendChild(instructionsText);
instructions.id="instructions";
let buttonInstruction1 = document.createElement('button');
buttonInstruction1.type="button";
buttonInstruction1.classList="buttonInstruction";
let buttonInstText = document.createTextNode("Or Even Bigger !");
buttonInstruction1.appendChild(buttonInstText);
let br = document.createElement('br');
instructions.appendChild(br);
instructions.appendChild(buttonInstruction1);


mapContainer.appendChild(instructions);

buttonSearch.onclick= function() {
    instructions.style.visibility="visible";
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 32.0532071, lng: 34.7723798 },
        zoom: 14,
    });

}