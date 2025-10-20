const name = "sumit"
const repoCount = 5

// console.log(name + repoCount + "Value")// this is outdated syntax

console.log(`Hello! my name is ${name} and my repo count is ${repoCount}`) // this is the new syntax, its called String Interpolation

const gameName = new String('sumit-kmr') // the result is the same as name declared in line 1, both are objects

console.log(gameName[0]) // prints the value at key 0 of the string
console.log(gameName.__proto__) // if you want to print the output as object {}

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName) // as you can see, original values were not changed as this is a primitive data type
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0, 4)// negative values will be ignored here, it'll replace it with 0
console.log(newString)

const anotherString = gameName.slice(-5, 9) // can enter negative values which indicates reverse order

console.log(anotherString)

const newStringOne = "   sumit    kumar    "
console.log(newStringOne.trim()) // only woeks on whitespaces and line terminators \n

const url = "https://sumit.com/sumit%20kumar" // there are no spaces in url, so it gets replaced by %20

console.log(url.replace('%20', '-'))
console.log(url.includes('sumit'))
console.log(url.includes('sumi0t'))
console.log(gameName.split())
console.log(gameName.split(""))
console.log(gameName.split(" "))
console.log(gameName.split("-"))
console.log(gameName.split("-"))
console.log(gameName.split("m"))
// returns array of strings

