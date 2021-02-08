// Use Chuck Norris API : https://api.chucknorris.io/
// Retrieve a random chuck joke in JSON format : https://api.chucknorris.io/jokes/random

// 1. Create a new XMLHttpRequest object
let xhr = new XMLHttpRequest();

// 2. Configure it: GET-request for the URL 
xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=dc6zaTOxFJmzC');

//before the send() method

//set the type of the response to Parse the JSON Object into a Javascript Object
xhr.responseType ='json'
// 3. Send the request over the network
xhr.send();

// 4. This will be called after the response is received
xhr.onload = function() {
  if (xhr.status != 200) { // analyze HTTP status of the response
    alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
  } else { // show the result
    var objectJSON=xhr.response;
    // console.log(`${xhr.response}`);
    console.log(objectJSON);
   // response is the server
  }
};

xhr.onerror = function() {
  alert("Request failed");
};
