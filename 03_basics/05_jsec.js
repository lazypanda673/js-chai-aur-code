// Javascript Execution Context

const { useContext } = require("react")

// This entails how does the javaScript runs and executes the code | It runs the code in two phases

// Global execution context is stored in "this" keyword
// For browsers GEC is window object | for standalone engines like Node, its an empty object 

// the second is Function Execution Context 

// Sometimes there is third type Eval execution context
// even in interview, if you talk about the first throw, its fine

// the two phases
// 1. {} -> Memory Creation Phase | also called just "Creation Phase"
// 2. Execution Phase

/*take this sample code
    let val1 = 20
    let val2 = 4
    function addNum(num1, num2){
    let total = num1 + num2
    return total
    }
    let result1 = addNum(val1, val2)
    let result2 = addNum(23, 33)
*/

// so in first phase, creation phase - it scans the whole code, doesnt execute them and allocates memory for variables and sets up the execution Context (global and/or functional), sets up "this" keyword initially with the global object
// and the second phase is the execution phase, when the actual execution takes place starting with the semantics

// For convinience, we can divide it into three phases 
// 1 setting up the execution Context
// 2 Memory phase - allocation of the memory to variables
// 3 execution phase - when the code actually starts executing
/*
from the above example
1. global execution phase
2. Memory phase -
    val1 -> <uninitialized>
    val2 -> <uninitialized>
    addNum -> definition
    result1 -> <uninitialized>
    result2 -> <uninitialized>

3. Execution phase
    val1 <- 20
    val2 <- 4
    addNum -> creates a new executional context for the function
    after the function executes, it returns result to the global execution context and the functional execution context is deleted then
    result1 = 24
    similarly (step 5), again a new executional context is created as the function has been called once MutationRecord. the process repeats and then
    result2 = 56

4. New variable + execution thread
    i. memory phase
        num1 -> <uninitialized>
        num2 -> <uninitialized>
        total -> <uninitialized>
    ii. execution context
        num1 -> 20
        num2 -> 4
        total -> 24
    
5. New variable environment + execution context
    i. memory phase
        num1 -> <uninitialized>
        num2 -> <uninitialized>
        total -> <uninitialized>
    ii. execution phase
        num1 -> 23
        num2 -> 33
        total -> 56
*/
// NOTE: when a variable is declared by "let" its value in memory phase is uninitialized in the Temporal Dead Zone (TDZ) whereas, if its declared by "var" its value is "undefined"
// accessing let variable before its assigneed a value would throw ReferenceError whereas var one would show value as undefined.
// TDZ - its a time period of a variable during which the variable exists but it cannot be accessed. It applies to variable declared by let and const.
// TDZ starts at the start of a block, global or function and ends when its declared and assigned a value
// so, if let name then name = 7 | when name was declared, TDZ actually ends and name is assigned undefined then in the next line its assigned 7 as value but for var name name = 7 | its never uninitialized and starts with undefined
    