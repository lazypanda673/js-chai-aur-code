var c = 300

let a = 100

if (true) {
    let a = 10
    const b = 20
    c = 30
    // console.log(a)
}

// console.log(a)
// console.log(b) doesnt print
// console.log(c) // prints even though its inside an if block
// note var c gets overwritten by 30

// Those blocks are called the scope
// This is the global scope
// {} makes the scope specific to that one block ie. block scope, earlier it was an if block, naturally what you do inside the block stay inside a block BUT var doesnt follow the logic of scope
// as you observed, declraomg variables by let is much safer; it follows the scope logic

// global scope is different when its in code editor, and its different when its in a browser. THIS IS is very IMPORTANT for interviews.

function one(){
    const username = "sumit"

    function two(){
        const website = "youtube"
        // console.log(username)
    }
    // console.log(website)
    two()
}

one()

if (true){
    const username = "Sumit"
    if (username === "Sumit"){
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)

//  -----------------INTERESTING-----------------------

console.log(addOne(6))
function addOne(num){
    return num + 1
}

addTwo(5) // This throws error as it cannot access the function addTwo                
const addTwo = function(num){
    return num + 3
}
 