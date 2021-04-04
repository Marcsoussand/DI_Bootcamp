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
flag.src = "./Images/UK.png";
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


//Language Switch for texts 
language.onchange = function (event) {
    let choice = event.target.value;
    switch (choice) {
        case "english":
            flag.src = "./Images/UK.png";
            searchText.innerHTML = "Ready for a little treasure hunt ?";
            buttonSearch.innerHTML = "Let's go !";
            instructionsText.innerHTML = "=> First Move : Look at the bigger picture !";
            buttonInstruction1.innerHTML = "Or Even Bigger !";
            instructions2Text.innerHTML = "=> Second Move : Looks like there is something near Ashdod";
            buttonInstruction2.innerHTML = "Zoom on it";
            finalText.innerHTML = "Hello, I am Marc Soussand, ready to work !";
            break;
        case "french":
            flag.src = "./Images/france.png";
            searchText.innerHTML = "Prêt pour une petite chasse au trésor ?";
            buttonSearch.innerHTML = "Allons-y !";
            instructionsText.innerHTML = "=> Première étape : Prendre du recul !";
            buttonInstruction1.innerHTML = "Encore un peu plus !";
            instructions2Text.innerHTML = "=> Deuxième étape : On dirait qu'il y a quelque chose près d'Ashdod";
            buttonInstruction2.innerHTML = "Regarder de plus près";
            finalText.innerHTML = "Bonjour, Marc Soussand, pour vous servir";
            break;
        case "hebrew":
            flag.src = "./Images/Israel.png";
            searchText.innerHTML = " מוכן לחפש את האוצר"
            buttonSearch.innerHTML = "קדימה !"
            instructionsText.innerHTML = "צעד ראשון : תסתכלו על התמונה יותר גדולה"+" <=";
            buttonInstruction1.innerHTML = "!או אפילו גדול יותר";
            instructions2Text.innerHTML = "צעד שני : כנראה יש משהו ליד אשדוד"+" <=";
            buttonInstruction2.innerHTML = "תתקרבו אליו";
            finalText.innerHTML = "שלום, מארק סוסן, מוכן לפעולה";
            break;


        default:
            break;
    }
}

//2.Map Container // Treasure hunt
let mapContainer = document.createElement('div');
document.body.appendChild(mapContainer);
mapContainer.id = "mapContainer";
//2.1 Searching Div
let searchLaunch = document.createElement('div');
searchLaunch.id = "searchLaunch";
let searchText = document.createElement('span');
searchText.id = "searchText";
let searchContent = document.createTextNode('Ready for a little treasure hunt ?');
searchText.appendChild(searchContent);
let buttonSearch = document.createElement('button');
buttonSearch.type = "button";
buttonSearch.id = "buttonSearch";

let buttonContent = document.createTextNode("Let's go !");
buttonSearch.appendChild(buttonContent);
searchLaunch.appendChild(searchText);
searchLaunch.appendChild(buttonSearch);
mapContainer.appendChild(searchLaunch);

// OnClick function for first block 
buttonSearch.onclick = function () {
    instructions.style.visibility = "visible";
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 32.0532071, lng: 34.7723798 },
        zoom: 14,
    });
}



//2.2 Map Div
let map = document.createElement('div');
mapContainer.appendChild(map);
map.id = "map";


function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 32.0532071, lng: 34.7723798 },
        zoom: 18,
    });
    const marker = new google.maps.Marker({ position: { lat: 32.0532071, lng: 34.7723798 }, map: map });
}



// 2.3 Treasure Hunt Step 2

let instructions = document.createElement('div');
let instructionsText = document.createElement('p');
let instructionsTextContent = document.createTextNode("=> First Move : Look at the bigger picture !");
instructionsText.appendChild(instructionsTextContent);
instructions.appendChild(instructionsText);
instructions.id = "instructions";
instructionsText.id = "instructionsText";
let buttonInstruction1 = document.createElement('button');
buttonInstruction1.type = "button";
buttonInstruction1.classList = "buttonInstruction";
let buttonInstText = document.createTextNode("Or Even Bigger !");
buttonInstruction1.appendChild(buttonInstText);
instructions.appendChild(buttonInstruction1);
mapContainer.appendChild(instructions);



buttonInstruction1.onclick = function () {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 32.0532071, lng: 34.7723798 },
        zoom: 10,
    })
    const marker2 = new google.maps.Marker({ position: { lat: 31.789357, lng: 34.646227 }, animation: google.maps.Animation.DROP, map: map });;
    instructions2.style.visibility = "visible";
}


//2.4 Treasure Hunt part 3

let instructions2 = document.createElement('div');
let instructions2Text = document.createElement('p');
let instructions2TextContent = document.createTextNode("=> Second Move : Looks like there is something near Ashdod");
instructions2Text.appendChild(instructions2TextContent);
instructions2.appendChild(instructions2Text);
instructions2.id = "instructions2";
instructions2Text.id = "instructions2Text";
let buttonInstruction2 = document.createElement('button');
buttonInstruction2.type = "button";
buttonInstruction2.classList = "buttonInstruction";
let buttonInst2Text = document.createTextNode("Zoom on it");
buttonInstruction2.appendChild(buttonInst2Text);
instructions2.appendChild(buttonInstruction2);
mapContainer.appendChild(instructions2);

buttonInstruction2.onclick = function () {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 31.789357, lng: 34.646227 },
        zoom: 18,
    })
    const marker2 = new google.maps.Marker({ position: { lat: 31.789357, lng: 34.646227 }, animation: google.maps.Animation.DROP, title: "Click Me", map: map });
    //OnClick Marker function    
    marker2.addListener("click", () => {
        finalBox.style.visibility = "visible";
    });
}


//2.5 Treasure Hunt final

let finalBox = document.createElement('div');
let final = document.createElement('img');
let finalText = document.createElement('p');
let finalTextContent = document.createTextNode('Hello, I am Marc Soussand, ready to work !');
finalBox.id = "finalBox";
final.id = "final";
final.src = "./Images/Marc_Soussand.jpg";
finalText.id = "finalText";
finalBox.appendChild(final);
finalText.appendChild(finalTextContent);
finalBox.appendChild(finalText);
mapContainer.appendChild(finalBox);





//3.Creation of the footer
let footer = document.createElement('footer');
let textFooter = document.createTextNode('I do not know if I will get the intern position, but at least I enjoyed working on it. Thank you !');
let github = document.createElement('div');
let githubLink = document.createElement('a');
let githubFA = document.createElement('i');
let githubText = document.createTextNode('Project on GitHub - ');
githubLink.href=
githubFA.classList = "fab fa-github"
github.appendChild(githubText);
github.appendChild(githubFA);
footer.appendChild(textFooter);
footer.appendChild(github);
document.body.appendChild(footer);