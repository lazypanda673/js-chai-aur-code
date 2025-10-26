const marvel_heroes = ["thor", "Ironman", "Spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1])

// const allHeroes = marvel_heroes.concat(dc_heroes) // returns a new merged array
// console.log(marvel_heroes)
// console.log(allHeroes)

const allNewHeroes = [...marvel_heroes, ...dc_heroes] // no limits to how much you can "spread"; unlike concat which only takes one arg
// console.log(allNewHeroes)

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realAnotherArray = anotherArray.flat(Infinity) // not a good practice to use infinity but its okay..

// console.log(realAnotherArray)

// console.log(Array.isArray("Sumit"))
// console.log(Array.from("Sumit"))
// console.log(Array.from({name: "Sumit"})) // interesting case, more on this later

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3))