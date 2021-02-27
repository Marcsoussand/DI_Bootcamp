let loginContainer = document.getElementById("loginContainer");
let container = document.getElementById("container");
let username = document.getElementById("username");
let welcome = document.getElementById("welcome");

// cards array holds all cards
let card = document.getElementsByClassName("card");
let cards = [...card];
console.log(cards);


// deck of all cards in game
const deck = document.getElementById("card-deck");

// declaring move variable
let moves = 0;
let counter = document.querySelector(".moves");

// declaring variable of matchedCards
let matchedCard = document.getElementsByClassName("match");

// close icon in modal
let closeicon = document.querySelector(".close");

// declare modal
let modal = document.getElementById("popup1");

// array for opened cards
var openedCards = [];


// @description hide the login, show the game
function begin() {
    loginContainer.style.display = "none";
    container.style.display = "flex";
    welcome.innerText = "Welcome " + player.value;
}

//@description, clean the username, hide the game and show the login
function logout() {
    player.value="";
    loginContainer.style.display = "block";
    container.style.display = "none";
}



// @description shuffles cards
// @param {array}
// @returns shuffledarray
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

// @description shuffles cards when page is refreshed / loads
document.body.onload = startGame();

// @description function to start a new play 
function startGame() {

    // empty the openCards array
    openedCards = [];

    // shuffle deck
    cards = shuffle(cards);
    // remove all existing classes from each card
    for (var i = 0; i < cards.length; i++) {
        deck.innerHTML = "";
        [].forEach.call(cards, function (item) {
            deck.appendChild(item);
        });
        cards[i].classList.remove("match", "disabled", "unmatched");
        cards[i].firstElementChild.classList.remove("show");
        // cards[i].lastElementChild.classList.remove("hide");
    }
    // reset moves
    moves = 0;
    counter.innerHTML = moves;
    //reset timer
    second = 0;
    minute = 0;
    hour = 0;
    var timer = document.querySelector(".timer");
    timer.innerHTML = "0 mins 0 secs";
    clearInterval(interval);
}

// @description toggles open and show class to display cards
var displayCard = function () {
    this.classList.toggle("disabled");
    this.firstElementChild.classList.toggle("show");
};


// @description add opened cards to OpenedCards list and check if cards are match or not
function cardOpen() {
    openedCards.push(this);
    var len = openedCards.length;
    if (len === 2) {
        moveCounter();
        if (openedCards[0].type === openedCards[1].type) {
            matched();
        } else {
            unmatched();
        }
    }
};

// @description when cards match
function matched() {
    openedCards[0].classList.add("match", "disabled");
    openedCards[1].classList.add("match", "disabled");
    openedCards[0].classList.remove("no-event");
    openedCards[1].classList.remove("no-event");
    openedCards = [];
}


// description when cards don't match
function unmatched() {
    openedCards[0].classList.add("unmatched");
    openedCards[1].classList.add("unmatched");
    disable();
    setTimeout(function () {
        openedCards[0].classList.remove("no-event", "unmatched");
        openedCards[1].classList.remove("no-event", "unmatched");
        openedCards[0].firstElementChild.classList.remove("show");
        openedCards[1].firstElementChild.classList.remove("show");
        // openedCards[0].lastElementChild.classList.remove("hide");
        // openedCards[1].lastElementChild.classList.remove("hide");
        enable();
        openedCards = [];
    }, 1100);
}

// @description disable cards temporarily
function disable() {
    Array.prototype.filter.call(cards, function (card) {
        card.classList.add('disabled');
    });
}

// @description enable cards and disable matched cards
function enable() {
    Array.prototype.filter.call(cards, function (card) {
        card.classList.remove('disabled');
        for (var i = 0; i < matchedCard.length; i++) {
            matchedCard[i].classList.add("disabled");

        }
    });
}

// @description count player's moves
function moveCounter() {
    moves++;
    counter.innerHTML = moves;
    //start timer on first click
    if (moves == 1) {
        second = 0;
        minute = 0;
        hour = 0;
        startTimer();
    }
}

// @description game timer
var second = 0, minute = 0; hour = 0;
var timer = document.querySelector(".timer");
var interval;
function startTimer() {
    interval = setInterval(function () {
        timer.innerHTML = minute + " mins " + second + " secs";

        second++;
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
        }
    }, 1000);
}

// @description congratulations when all cards match, show modal and moves, time and rating
async function congratulations() {
    if (matchedCard.length == 8) {

        clearInterval(interval);
        // console.log(second - 1);
        finalTime = timer.innerHTML;
        await sendData();
        // show congratulations modal
        modal.classList.add("show");

        //showing name, move, time on modal
        document.getElementById("playerName").innerHTML = player.value;
        document.getElementById("finalMove").innerHTML = moves;
        document.getElementById("totalTime").innerHTML = finalTime;



        getData();

        //closeicon on modal
        closeModal();
    };
}

// @description close icon on modal
function closeModal() {
    closeicon.addEventListener("click", function (e) {
        modal.classList.remove("show");
        startGame();
    });
}

// @desciption for user to play Again 
function playAgain() {
    modal.classList.remove("show");
    startGame();
}


// loop to add event listeners to each card
for (var i = 0; i < cards.length; i++) {
    card = cards[i];
    card.addEventListener("click", displayCard);
    card.addEventListener("click", cardOpen);
    card.addEventListener("click", congratulations);
};




async function sendData() {
    let secondBoard = second - 1;
    let player = document.getElementById('player').value;
    let playerdata = {
        player,
        moves,
        finalTime,
        secondBoard,
    }
    await fetch('http://localhost:3000/player', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(playerdata)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        })
}


function getData() {
    fetch('http://localhost:3000/show')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            showPlayers(data);

        })
}

function showPlayers(data) {
    let root = document.getElementById('root');
    root.innerHTML = "";
    let x = 1;
    try {

        data.forEach(item => {

            let div = document.createElement('div');
            div.innerText = `${x}. ${item.player_name} : ${item.moves} moves, ${item.final_time}`;
            if (x == 1) {
                div.style.color = "gold";
            }
            else if (x == 2) {
                div.style.color = "silver";
            }
            else if (x == 3) {
                div.style.color = "#ccb66f";
            }
            root.appendChild(div)
            x++;
            if (x == 11) throw endlist;
        })
    }
    catch (e) {
        console.log("no more lines");
    }


}