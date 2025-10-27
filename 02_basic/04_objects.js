// const tinderUser = new Object()
const tinderUser = {}

// the only difference between the two type of declaration is that line 1 is Singleton while line 2 is not

tinderUser.Id = "123abc"
tinderUser.name = "Sumit"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "sum@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Sumit",
            lastName: "Kumar"
        }
    }
}

// so nested objects are possible and thsi is how you access them
// console.log(regularUser.fullName)
// console.log(regularUser.fullName.userFullName.firstName)

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// const obj3 = {obj1, obj2} // this creates object of the objects, not merge them
// console.log(obj3)

// const obj3 = Object.assign(obj1, obj2) // one syntax
// const obj3 = Object.assign({}, obj1, obj2) // second syntax
//the 2nd makes more sense, as we are assigning {} as the target instead of obj1 in the first one | in 2nd,logically, we are merging into a new object, but in first, we are merging obj2 in obj1 and then storing the result in obj3 | first parameter is the target and the rest are treated as the source

// But these methods are not widely used | we use "spread" method instead

const obj3 = { ...obj1, ...obj2 }

// console.log(obj3)

const users = [
    {
        id: 1,
        emal: "s@gmail.com"
    },
    {
        id: 1,
        emal: "s@gmail.com"
    },
    {
        id: 1,
        emal: "s@gmail.com"
    },
    {
        id: 1,
        emal: "s@gmail.com"
    },
    {
        id: 1,
        emal: "s@gmail.com"
    }
]

users[1].emal
// console.log(tinderUser)

// console.log(Object.keys(tinderUser)) // returns an array of the keys
// console.log(Object.values(tinderUser)) // returns an array of the values
// console.log(Object.entries(tinderUser)) // returns an array of the entries

// console.log(tinderUser.hasOwnProperty('isLoggedIn')) // returns boolean

// De-Structuring

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course
// {key selection: alias of choice(optional)} = Obejct name

// console.log(courseInstructor) // if alias is used, original key name wouldnt work
console.log(instructor)
/* This is the normal way in React | which then will make u use props.company or anything, which seems like a headache ofcourse 
const navbar = () => {

}

Now we have used de-structuring and so, we dont have to write props.company, just company would be all OK

const navbar = ({company}) => {
    
}

navbar(company = "ANUSUMI")
*/

// For API

// this is how an API of JSON format looks | unnamed objects
// {
//     name: "Sumit",
//     courseName: "js in hindi",
//     price: "free"
// }

// sometimes API is array of objects
[
    {},
    {},
    {}
]

