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

function loginUserMessage(username){
    if (username === undefined) {
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Sumit"))
console.log(loginUserMessage())