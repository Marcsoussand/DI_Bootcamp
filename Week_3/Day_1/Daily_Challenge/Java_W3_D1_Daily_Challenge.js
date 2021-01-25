let solarSystem = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturne", "Uranus", "Neptune"];


for (i=0;i<solarSystem.length;i++) {
    let newDiv = document.createElement('div');
    let newPlanet = document.createTextNode(solarSystem[i]);
    newDiv.className = 'planet';
    newDiv.classList.add(solarSystem[i]);
    newDiv.appendChild(newPlanet);
    document.body.appendChild(newDiv);
  
}


