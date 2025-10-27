// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 <= 1)
// console.log(2 < 1)
// console.log(2 != 1)

// console.log("2" > 1) //creates a problem as different data types are being compared, its unpredictable
// console.log("02" > 1)

// console.log(null > 0)
// console.log(null < 0)
// console.log(null == 0) // this doesnt convert null hence it gives false
// console.log(null <= 0) // this converts the null to 0, hence it shows true
// console.log(null >= 0) // this too, and it goes for all comparision except ==

// same unpredictable behaviour but it results in all false
console.log(undefined > 0)
console.log(undefined < 0)
console.log(undefined == 0)
console.log(undefined <= 0)
console.log(undefined >= 0)

// ===

console.log("2" === 2) // compares strictly, not just the literals but also the data type