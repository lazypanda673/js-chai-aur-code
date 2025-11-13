// Higher order loop

const coding = ['js', 'ruby', 'python', 'java', 'cpp']

// for each
// callbackfn - callback function do not have name
// item is the variable for grabbing elements of the array
// {} - we can now write what we want to do with the values inside the braces

// coding.forEach(function (item) {
//     console.log(item)
// })

// for arrow function
// coding.forEach( (item) => {
//     console.log(item)
// })

// when the function is already defined, you just pass the function as an argument in forEach
function printMe(item) {
    console.log(item)
}

// coding.forEach(printMe)

// now you know, forEach also has index and the whole array as parameters

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr)
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFile: "name.js"
    },
    {
        languageName: "java",
        languageFile: "name.java"
    },
    {
        languageName: "python",
        languageFile: "name.py"
    }
]

// name of all objects become item; as that's how we access them inside the loop. "." is used to access the keys' values as shown in the example.
myCoding.forEach((item) => {
    console.log(item.languageName)
    console.log(item.languageFile)
})
