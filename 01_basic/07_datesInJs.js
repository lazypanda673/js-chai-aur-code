// Dates

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toDateString())

console.log(typeof myDate)

let myCreatedDate = new Date(2025, 0, 23) // month starts from 0
// console.log(myCreatedDate)
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString())

let newDate = new Date("2025-03-23") // month start from 1
// console.log(newDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(newDate.getTime())
// console.log(Math.floor(Date.now() / 1000))

let newerDate = new Date()
console.log(newerDate.getMonth())
console.log(newerDate.getDay())

// console.log(`${newDate.getDate()} and the time is ${newDate.getTime()}`)

newDate.toLocaleString('default', {
    weekday: "long",
})