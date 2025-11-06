const user = {
    username: "sumit",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sam" // this changes the context and the below would change sumit to sam
// user.welcomeMessage()

// console.log(this)

// When we are in a node environment "this" refers to an empty object | there is no global context in this case 
// BUT things changes when you do this in the browser : console.log(this) in the console would print window object
// IMPORTANT - when we are in browser, the context (object as returned by "this") is "window" that's why we are able to capture window events, clicks, form submission etc

// most widely used global object is "window" object in a browser

// and in standalone engines like NODE, the global object is empty

// function chai(){
//     let username = "sumit"
//     // console.log(this.username) // cannot use this inside the function, returns undefined
//     console.log(this) // shows a lot of data about the function
// }
// chai()

// const chai = function(){
//     let username = "Sumit"
//     console.log(this.username) // this also returns undefined
// }

// const chai = () => {
//     let username = "Sumit"
//     console.log(this.username) // this also returns undefined
//     console.log(this) // this returns empty object
// }

// chai()

// ----------------ARROW Function--------------------

// const addThree = (num1, num2, num3) => {
//     return num1 + num2 + num3
// } this is explicit return

// console.log(addThree(3, 6, 56))

// const addThree = (num1, num2, num3) => num1 + num2 + num3 // this is implicit return
// const addThree = (num1, num2, num3) => (num1 + num2 + num3) // this is implicit return
// const addThree = (num1, num2, num3) => {username: "sumit"} // cannot return objects like this
const addThree = (num1, num2, num3) => ({ username: "sumit" }) // this is the correct method

// when you've defined an arrow function and used curly braces, you have to use return keyword
// if you've defined an arrow function and did not use curly braces instead used a small braces or none at all; you dont use return keyword 
// This concept is used extensively used in react

console.log(addThree(3, 6, 56))