// Higher order loop

const myObject = {
    js: "JavaScript",
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by Apple'
}

// for in

// prints the LHS values (keys)
// for (const key in myObject){
//     console.log(key)
// }

// prints both the keys and their values
// for (const key in myObject) {
//     console.log(`${key} shorcut is for ${myObject[key]}`)
// }

const programming = ["js", "rb", "py", "java", "cpp"]

// prints just the index of the array
// for (const key in programming){
//     console.log(key)
// }

// now it prints the array elements
// for (const key in programming){
//     console.log(programming[key])
// }

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")

// this will print nothing as its not iterable
// for (const key in map){
//     console.log(key)
// }


