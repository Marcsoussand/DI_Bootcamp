const robots = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://robohash.org/1?200x200'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://robohash.org/2?200x200'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://robohash.org/3?200x200'
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://robohash.org/4?200x200'
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'https://robohash.org/5?200x200'
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://robohash.org/6?200x200'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://robohash.org/7?200x200'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://robohash.org/8?200x200'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        image: 'https://robohash.org/9?200x200'
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        image: 'https://robohash.org/10?200x200'
    }
];

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xhr.responseType = 'json';
xhr.send();
const objectJSON = xhr.response;




let container = document.getElementById("container");

let inputSearch = document.getElementById("inputSearch");
inputSearch.addEventListener('keyup', searchRobot);

function searchRobot() {
    var src = inputSearch.value;
    var robotFilter = robots.filter(word => (word.name.toLowerCase().includes(src) == false));
    for (x in robotFilter) {
        var getCards = document.getElementById("robot" + robotFilter[x].id);
        getCards.setAttribute("style", "display:none");
    }
    console.log(robotFilter)

}

for (x in robots) {
    var newDiv = document.createElement('div');
    var newImage = document.createElement('img');
    newImage.src = robots[x].image;
    var newButton = document.createElement('button');
    var newQuotes = document.createTextNode("Quotes");
    var pName = document.createElement('p');
    var newName = document.createTextNode(robots[x].name);
    var newEmail = document.createTextNode(robots[x].email);
    linebreak = document.createElement("br");
    linebreak2 = document.createElement("br");
    newDiv.appendChild(newImage);
    newDiv.appendChild(linebreak);
    newButton.appendChild(newQuotes);
    pName.appendChild(newName);
    newDiv.appendChild(pName);
    newDiv.appendChild(linebreak2);
    newDiv.appendChild(newEmail);
    newDiv.appendChild(newButton);
    container.appendChild(newDiv);
    newButton.classList.add("buttons");
    newDiv.classList.add("cards");
    newDiv.setAttribute("id", "robot" + robots[x].id);
    var userId = robots[x].id;
    newImage.classList.add("image");
    newDiv.setAttribute("style", "font-size:150%; text-align:center");
    newButton.addEventListener("click", function () {
        xhr.open('GET', `https://jsonplaceholder.typicode.com/posts?userId=${id}`);
        xhr.responseType = 'json';
        xhr.send();
        xhr.onload = function () {
            console.log(xhr.response);
        }
    });
    // newDiv.appendChild(newButton);
}
          



// let xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
// xhr.responseType = 'json';
// xhr.send();

// xhr.onload = function() {
//   createCards(xhr.response);
// };

// const createCards = (arr) => {
//     let div = document.getElementById('root')
//     arr.forEach(item => {
//       const {id,name} = item;
//       let btn = document.createElement('button');
//       btn.innerText = name;
//   div.appendChild(btn);
//       btn.addEventListener('click',function(){
//         xhr.open('GET', `https://jsonplaceholder.typicode.com/posts?userId=${id}`);
//         xhr.responseType = 'json';
//         xhr.send();