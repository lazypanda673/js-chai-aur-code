// array

/* JS arrays are resizable and can contain a mix of data types without any problems
    They arent associative, so cant be accessed using arbitrary strings as indexes but non-negative integers instead (0-based indexing)
    myArr['one'] this is forbidden
    myArr[2] this is valid ofc
    JS array-copy operations create shallow copy meaning the copied instance and the original have smae reference, changing one will also change the other, on the other hand, deep copies create copies which have different references, changing one do not affect the other
*/
const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj", true, 12]

const myArr2 = new Array(1, 23, 4, 4, 5)

// console.log(myArr[3])

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(myArr)

// myArr.unshift(9) // adds the element at the first index and shift other elements to right by one
// console.log(myArr)

// myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(9)) // returns true or false
// console.log(myArr.indexOf(9)) // returns -1 if doesnt exist, index if exists

// const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr)
// console.log(typeof(myArr))
// console.log(typeof(newArr))

// slice and splice

console.log("A ", myArr)
const myn1 = myArr.slice(1, 3)
console.log(myn1)
console.log("B ", myArr)

console.log("C ", myArr)
const myn2 = myArr.splice(1, 3)
console.log(myn2)
console.log("D ", myArr)