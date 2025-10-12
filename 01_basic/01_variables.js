const accountId = 113443
let accountEmail = "sumitemail@xojo.in"
var accountPassword = "243652"
accountCity = "Patna" // possible but do not declare variable like this
let accountState; // ; is optional

// accountId = 2222 | not allowed, its a const
accountEmail = "sumitssss@ksf.im"
accountPassword = "32352525"
accountCity = "Gaya"

/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])