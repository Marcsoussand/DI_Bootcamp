const urls = [
    'https://swapi.dev/api/people/1',
    'https://swapi.dev/api/people/2',
    'https://swapi.dev/api/people/3',
    'https://swapi.dev/api/people/4'
  ]

  let starWars = Promise.all(urls.map(url => fetch(url)))
  .then(responses => {
	return Promise.all(responses.map(function (response) {
		return response.json();
	}))})
  .then(result => console.log(result))
  .catch(error => console.log(error+"Oops, something went wrong"))
