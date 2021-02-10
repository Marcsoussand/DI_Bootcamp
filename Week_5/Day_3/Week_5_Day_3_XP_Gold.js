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


//   Promise.all(urls.map(url =>
//     fetch(url).then(people => people.json())
//   ))
//   .then(array => {
//     console.log('1', array[0])
//     console.log('2', array[1])
//     console.log('3', array[2])
//   })
//   .catch(err => console.log('ughhhh fix it!', err));