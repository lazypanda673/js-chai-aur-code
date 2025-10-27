// const score = 400
// console.log(score)

// const balance = new Number(100)
// console.log(balance) 
// // shows a different output, both are number of course, but the second declaration's output, specifically mentions that it is a number

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

// const otherNumber = 23.9894

// console.log(otherNumber.toPrecision(13))
// console.log(otherNumber.toPrecision(1))
// console.log(otherNumber.toPrecision(3))
// console.log(otherNumber.toPrecision(4))

// const hundreds = 10000000
// console.log(hundreds.toLocaleString())
// console.log(hundreds.toLocaleString('en-US'))
// above methods are pretty self-explanatory, just run and observe
//console.clear() // clears the console or the terminal
// ----------------------------------------------------------------------------------------------------------------
// Maths

// console.log(Math.abs(-4)) // gives you absolute value
// console.log(Math.round(4.6)) // rounds off normally
// console.log(Math.ceil(4.2)) // closest large number
// console.log(Math.floor(4.2)) // closest small number
// console.log(Math.min(4, 6, 7, 2))
// console.log(Math.max(4, 6, 7, 2))

console.log(Math.random()) // always return a random value between 0 and 1
console.log(Math.random() * 10) // 0.45 to 4.5
console.log((Math.random() * 10) + 1) // confirms it'll be between 1-10

const min = 10
const max = 20

console.log(Math.random() * (max - min + 1))
console.log(Math.floor(Math.random() * (max - min + 1)))
console.log(Math.floor(Math.random() * (max - min + 1)) + min)