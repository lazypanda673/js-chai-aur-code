// Singleton - if object literals are made by constructors

//Object Literals

const mySym = Symbol(22)
const mySym2 = Symbol("key2")

const JsUser = {
    name: "Sumit", // here name is considered a string whether you specify or not BUT on RHS, it can be anything
    mySym: "mykey1", // wrong syntax, this makes mySys a string literal, not THE symbol
    [mySym2]: 88, // correct syntax
    age: 18,
    email: "sumit@zoho.com",
    "current location": "Krishnapur",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

console.log(JsUser.email) // this choice is much more preferred
console.log(JsUser["email"]) // not a popular choice

// Note - you cant access a key like "current location" with the dot way\

console.log(JsUser.current) // undefined; cant even type the full key
console.log(JsUser["current location"]) // Krishnapur, which is correct

console.log(typeof JsUser.mySym) // returns string
console.log(typeof JsUser[mySym2]) // returns number
console.log(JsUser.mySym)
console.log(JsUser[mySym2])

JsUser.email = "sk@outlook.in"
// Object.freeze(JsUser)
JsUser.email = "sk@outlook.out" // since the object is frozen, any change would not be reflected in the object
console.log(JsUser["email"])

JsUser.greeting = function(){
    console.log("Hello Js Usre")
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())