const name="Hamid";
const nameCount=10;
// use back ticks ``  for modern type 

// console.log(`Hello my name is ${name} and repo count is ${nameCount}`);


// another way for string is:
const gameName=new String("Pakistan");
// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2)); // which is placed at 2
// console.log(gameName.indexOf('t')); // tell me index of t

// const newString=gameName.substring(0,4);  // start from 0 to 4 but 4 not include
// console.log(newString);
// const anotherString=gameName.slice(2,-4);
// // const anotherString = gameName.slice(-3, 1);
// console.log(anotherString);





const url="google.com/pakistan%2Hamid";  // replace in string
// console.log(url.replace("%2","-"));

// console.log(url.includes('Hamid'));


const abc='Hamid-dot-com';
console.log(abc.split('-'));
