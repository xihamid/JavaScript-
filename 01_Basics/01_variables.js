const accountID=1123;
let accountEmail="xihamid@gmail.com";
var accountPassword="12345";
accountCity="Lahore,Pakistan";  // we can declare variable in JS in this way but it is not good method do not use it.
let accountState;  // its value will be undefined. beacuse no value has defined yet but variable is declared.

// accountID=121;     // Not Allowed beacuse its constant and constant cannot be changed once declaired
console.log(accountID);
console.table([accountID,accountEmail,accountPassword,accountCity,accountState]);

/* {} curly braces is a scop.  so var should not use and use let to declare of variable in JS because of scop problem.
-Prefer not to use var
- because of of the issue in block scop and functional scop

*/
