// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    console.log(`DB CONNECTED`)
})(); // here semi-colon is important to end the iife

//()(); // first parenthesis is where we define the function; they create a scope where we can work; then the second parenthesis run the functions
// this is used to escape the possible pollution caused by the global scope as it may interfere with the function's variables

// ( () => {
//     console.log(`DB CONNECTED TWO`)
// } )()
// The above will throw erroe as there's no semi-colon at the end
(function aurcode() {
    console.log(`DB CONNECTED THREE`)
} )(); // named iife

( () => {
    console.log(`DB CONNECTED FOUR`)
} )(); // unnamed iifee

((name) => {
    console.log(`DB CONNECRED ${name}`)
})("sumit") // unnamed iife with parameters