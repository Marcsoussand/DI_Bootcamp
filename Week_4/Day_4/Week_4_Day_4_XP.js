// Exercise 1

const person = {
  name: 'John Doe',
  age: 25,
  location: {
      country: 'Canada',
      city: 'Vancouver',
      coordinates: [49.2827, -123.1207]
  }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);


// Perfect sentence after deconstructing the object. 

// Exercise 2

function displayStudentInfo(object) {
    // console.log(object.first);
  return `Your full name is ${object.first} ${object.last}`;
}

console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));


// Exercise 3

class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);

// We display a new object Person {name:"John"}, so typeof will be object

//Exercise 4

class Dog {
  constructor(name) {
    this.name = name;
  }
};

// good feeling for the number 2 solution, which seems to fit perfectly, 

  // 2
  class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };

  // passing the name as parameter and adding size to the class.