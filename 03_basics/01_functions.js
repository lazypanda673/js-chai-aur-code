function funcName() {
    console.log("H")
    console.log("I")
    console.log("T")
    console.log("E")
    console.log("S")
    console.log("H")

}

// execution
// funcName()

function addition(num1, num2) { // parameters declared
    console.log(num1 + num2)
}
addition(5, 5) // arguments passed

function addition(num1, num2) {
    // let result = num1 + num2
    // return result
    return num2 + num1
}
// in JS if you define multiple functions with the same name, JS will only consider the last defined function as the final and discard all the previous ones

const result = addition(5, 5)
// console.log("Result: ", result)

function loginUserMessage(username) {
    if (username === undefined) {
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Sumit"))
// console.log(loginUserMessage())

// part 2

function calculateCartPrice(...num1) { // ... rest operator - it means n number of arguments maybe passed
    return num1
}

// console.log(calculateCartPrice(2)) // when rest operator was not used
// console.log(calculateCartPrice(200, 500, 300, 2000))

const user = {
    username: "Sumit",
    price: 109
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// NO typechecking done by JS, if the instead of price we write it prices, instead of errors, JS would run the code and log value of price as undefined

// handleObject(user)
// handleObject({
//     username: "Sam",
//     price: 390
// })

const myNewArray = [200, 499, 4893, 3434]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([345, 36463, 6363, 363]))