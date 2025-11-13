// for of | usually used for Arrays; so this loop is array-specific

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

// for (const element of object) {
    
// }

for (const num of arr){
    // console.log(num)
}

const greetings = "Hello World!"

for (const greet of greetings){
    // console.log(greet)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India") // contains only unique values and keeps the order intact

// console.log(map)

// This prints arrays of the values
// for (const key of map){
//     console.log(key)
// }

// this is how you access both the keys and values of a map
// for (const [key, value] of map){
//     console.log(key, ':-', value)
// }

const myObject1 = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

const myObject2 = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}
/*
// myObject1 is not iteratable
for (const [key, value] of myObject1){
    console.log(key, ":-", value)
}

// myObject2 is also not iteratable
for (const [key, value] of myObject2){
    console.log(key, ":-", value)
}

But maps are defenitely iteratable.
*/
