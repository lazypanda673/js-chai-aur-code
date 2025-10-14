let score = "33abc"

console.log(score);
console.log(typeof (score));

let valueInNumber = Number(score)

console.log(typeof (valueInNumber));
console.log(valueInNumber); // NaN - Not a Number

// "33" gets comfortably converted in 33 Number
// "33abc" turns into NaN
// true => 1 and false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true | 0 => false
// "" => false
// "sumit" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof stringNumber)
console.log(stringNumber)