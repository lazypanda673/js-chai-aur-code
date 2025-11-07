// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = 3
const month = "march"

switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break; // commeting this would also print case 4
    case 4:
        console.log("April")
        break;
    case "jan":
        console.log("January")
        break;
    case "feb":
        console.log("February")
        break;
    case "march":
        console.log("March")
        break; // commeting this would also print case 4
    case "april":
        console.log("April")
        break;
    default:
        console.log("default case matched")
        break;
}

// NOTE: if break is missing from a case which is going to be executed, all the case blocks will be executed after that including itself except default case | as here, if month key is 3 and its break is missing, case 4 will also be printed