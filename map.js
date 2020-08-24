//https://dev.to/alexdevero/introduction-to-maps-in-javascript-all-you-need-to-know-52jg

//Map creation

const myMap = new Map([
  ['name',  'Jackie'],
  ['gender', 'female'],
  ['age', 23]
])
console.log(myMap)

//Object to Map

const myObj = {
  subject: 'Math',
  level: '1',
  difficulty: 'Medium'
}

// Create new map from "myObj"
const mp = new Map(Object.entries(myObj))

// Log the content of "myMap" map
console.log(mp)