// The function fetch() is part of the global window object.
// It is a modern replacement for XMLHttpRequest.
// This can be used in code almost any part of the context.

// Fetch
// The fetch() has required one mandatory argument that is the URL
// of the resource.
// It returns a promise that resolves the response.

// GET Request.
// fetch('https://jsonplaceholder.typicode.com/users',{
//   method: "POST"
// });
// .then(response => {
//     return response.json()
//   })  // convert to json
//   .then(data => {
//     console.log(data)
//   })    // print data to console
//   .catch(err => {
//     console.log('Request Failed', err)
//   }); // Catch errors

/**
 * Fetch API
 * The option with * is the default
 */
// {
//   method: "POST", // *GET, POST, PUT, DELETE, etc.
//   mode: "cors", // no-cors, cors, *same-origin
//   cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//   credentials: "same-origin", // include, *same-origin, omit
//   headers: {
//     "Content-Type": "application/json",
//     // "Content-Type": "application/x-www-form-urlencoded",
//   },
//   redirect: "follow", // manual, *follow, error
//   referrer: "no-referrer", // no-referrer, *client,
//   body: JSON.stringify(data)
// }


// Sample POST request with request options
// fetch('/save/data', {
//   method: 'POST',
//   body: JSON.stringify(data),// if sending data as array or object
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })


// If HTML form as data the body will be
// body: new FormData(form), // post body as form data
// headers: {
//     'Content-Type': 'application/x-www-form-urlencoded'
// }

/**
 * Fetch API
 * Response object methods
 */

// fetch('https://zivuch.github.io/emails.xml')
// .then(res => {
//   // return res.text()       // response body (=> Promise)
//   // return res.json()      // parse via JSON (=> Promise)
//   console.log(res.status  )     //=> 200
//   console.log(res.statusText)   //=> 'OK'
//   console.log(res.redirected )  //=> false
//   console.log(res.ok        )   //=> true
//   console.log(res.url     )     //=> 'http://site.com/data.json'
//   console.log(res.type     )    //=> 'basic'
//                    //   ('cors' 'default' 'error'
//                    //    'opaque' 'opaqueredirect')
//   console.log(res.headers.get('Content-Type'))
// })
// .then(data => {
//   console.log(data);
// })


fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {
    return response.json;
});
.then(data =>
    console.log(data);)

