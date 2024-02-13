
/*
Note:

"33"  => 33;
"33abc" => NAN;
true => 1; false => 0;


*/



// let age="33";

// console.log(typeof age);// type is string

// let ageInNumbers=Number(age); 
// console.log(typeof ageInNumbers); // now type is number

// ---------------------------------------
// suppose let age="33abc";


// let age2="33abc";
// let ageInNumbers2=Number(age); 
// console.log(typeof ageInNumbers2); 


// It will convert in numbers but the result is NAN. beacuse its string 


// // ---------------- for null 

// let age=null;

// console.log(typeof age);// type is string

// let ageInNumbers=Number(age); 
// console.log(typeof ageInNumbers); 
// console.log(ageInNumbers); // now the value is 0 right now so be carefull


// ---------------- for undefined

// let age=undefined;

// console.log(typeof age);// type is string

// let ageInNumbers=Number(age); 
// console.log(typeof ageInNumbers); 
// console.log(ageInNumbers);// now the output is NAN


// ---------------- for Boolean

// let age=1;

// console.log(typeof age);// type is string

// let ageInNumbers=Boolean(age); 
// console.log(typeof ageInNumbers); 
// console.log(ageInNumbers);// now the result is true or false

//  1 => true; 0 => false;
//  "" => false;
//  "Hamid" => True


// ********************* Operations *****************************

// let value=3;
// let negValue=-value;
// console.log(negValue);



// console.log("1" + 2);// if string is 1st then all will be treated as string
// console.log(1 + "2");
// console.log(1 + 2+3); // if string is at last then 1st operation will be completed then treated as last


// // not prefer these oprations
// console.log(+true); // output will be 1
// console.log(+""); // output will be 0


// --- prefix and post fix operations

// let x = 3;
// const y = x++;  // return value before increament in post fix
// console.log(`x:${x}, y:${y}`);
// // Expected output: "x:4, y:3"

// let a = 3;
// const b = ++a;  // return value after increament in prefix fix
// console.log(`a:${a}, y:${b}`);
// // Expected output: "a:4, b:4"





