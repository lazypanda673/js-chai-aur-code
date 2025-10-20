// Two classfications
// 1. Primitive
// 2. Non-Primitive

// # Primitive (call by value)

// total 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100
const scoreValue = 100.4 // (all number are just "Number" no decimal float double EventCounts)

// const isLoggedIn = false
const outsideTemp = null
// let userEmail (this is enough for undefined but you can also do = undefined)

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)
console.log(typeof(anotherId))
console.log(typeof(id))

// both id and anotherId are symbols but still different

const bigNumber = 29834782596976997528n
// adding n at the end decalres it as BigInt

// # Reference (Non-Primitive)

// three types - Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // array

// these are objects, that is within curly braces
let myObj = {
    name: "sumit",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof bigNumber)
console.log(typeof outsideTemp)
console.log(typeof scoreValue)
console.log(typeof myFunction) // object function
// non-primitive have return type Object always

//---------------------------------------------------------------------------------------

// MEMORY in JS

// Stack (Primitive), Heap (Non-Primitive)
// when stack is used, you get a copy of the variable you define wheraas in heap, you get the original ReferenceError, so you can mutate the original data

let myName = "sumitkumar"
let anotherName = myName // when you use the variable myName here, you are given a copy of it
// anotherName = myName
anotherName = "anuaursumi" // so, when you change the value of anotherName to something else and check the values
console.log(myName) // you get sumitkumar i.e, the original value
console.log(anotherName) // but here, you get the changed value i.e, anuaursumi
// SO, the original variable's value remains unfazed, STACK behaviour

let userOne = {
    email: "user@zoho.in",
    upiId: "userone@ybl"
}

let userTwo = userOne

// Firstly, we know that object is non-primitive data type, so its stored in heap memory
// so when we declare another object and give the data of userOne to the new userTwo object, it gets the original data "reference" instead of the copy data we got in the Primitive data types

userTwo.email = "user@zohomail.in"
console.log(userOne.email)
console.log(userTwo.email)
// which means, if i change the value via userTwo, it'll reflect on the original data, so you get the updated value for both the objects, userOne and userTwo