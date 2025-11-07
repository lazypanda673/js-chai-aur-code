// if

// const isUserLoggedIn = true
// const temperature = 41

// if (temperature === 41) {
//     console.log("less than 50")
// } else {
//     console.log("greater than 50")
// }

// console.log("execute")
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`user power: ${power}`)
// }

// console.log(`user power: ${power}`) // out of scope

// const balance = 1000

// if (balance > 500) console.log("test"); // implicit scope | semi-colon at the end is necessary
// if (balance > 600) console.log("test1"),
// console.log("test2"); // implicit scope| well this works both lines have same scope but its not a good practice, DO NOT use it professionally 

// if (balance < 500) {
//     console.log("less than 500")
// } else if (balance < 750) {
//     console.log("less than 750")
// } else if (balance < 900) {
//     console.log("less than 900")
// } else {
//     console.log("less than 1200")
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2 == 3) {
    console.log("allowed to buy courses")
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in")
}
