//Math objects

const PI = Math.PI
console.log(PI)

console.log(Math.round(PI))

console.log(Math.floor(PI))

console.log(Math.ceil(PI))

console.log(Math.min(1,2,3,4,5))

console.log(Math.max(1,2,3,4,5))

const randNum = Math.random() //random number between 0 and 0.999
console.log(randNum)

const num = Math.floor(Math.random() *11) //random number between 0 and 10

//absolute value
console.log(Math.abs(-10))

//square root value
console.log(Math.sqrt(100))

//power value
console.log(Math.pow(3,2))

//trigonometry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)

//----------------------------------------------------------------
//Strings

let space = ' '
let firstName = 'Maju'
let lastName = 'Kohler'
let country = 'Brazil'
let city = 'Joinville'
let language = 'JavaScript'
let job = 'student'
let age = 19

let fullName =firstName + space + lastName
let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country;

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.`
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`

console.log(personInfoOne)
console.log(personInfoTwo)
console.log(personInfoThree)

console.log(`The sum of 2 and 3 is 5`)
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`)

let string = 'JavaScript'

console.log(string.substring(0,4))     // Java
console.log(string.substring(4,10))    // Script
console.log(string.substring(4))       // Script

let stringi = '30 Days Of JavaScript'

console.log(stringi.split())     // Changes to an array
console.log(stringi.split(' '))  // Split to an array at space

let stringy = '30 Days Of JavaScript'
console.log(stringy.replace('JavaScript', 'Python'))

let stringui = '30'
console.log(stringui.concat("Days", "Of", "JavaScript"))

//----------------------------------------------------------------
//Casting - changing types
let num = '10'
let numInt = parseInt(num)
console.log(numInt)

let num2 = '9.81'
let numFloat = parseFloat(num)

console.log(numFloat)