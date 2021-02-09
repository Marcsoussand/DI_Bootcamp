// Use Chuck Norris API : https://api.chucknorris.io/
// Retrieve a random chuck joke in JSON format : https://api.chucknorris.io/jokes/random

// 1. Create a new XMLHttpRequest object
let xhr = new XMLHttpRequest();

// 2. Configure it: GET-request for the URL 
// xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=7563ef3m5HZFgVfd8Ca5tlW0ICrHJsdX&q=hilarious&rating=g');
xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=4pLGPCW1xDUAsCABCsBrVjFp5CzwlG83&q=ryan');
//before the send() method

//set the type of the response to Parse the JSON Object into a Javascript Object
xhr.responseType = 'json';
// 3. Send the request over the network
xhr.send();

// 4. This will be called after the response is received
xhr.onload = function () {
  if (xhr.status != 200) { // analyze HTTP status of the response
    alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
  } else { // show the result
    const objectJSON = xhr.response;
    // console.log(`${xhr.response}`);
    console.log(objectJSON);
    for (i=0;i<50;i++){
      var div = document.getElementById("div1");
          var newImg = document.createElement("img");
          newImg.src = objectJSON.data[i].url;
          div.appendChild(newImg);
      }
    
    // response is the server
  }
};


    xhr.onerror = function () {
      alert("Request failed");
    };