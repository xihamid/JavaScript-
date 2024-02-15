// JavaSctipt array copy operation make shallow copy not deep copies
// The change in shallow copy also change orignal copy
// deep copy do not share the same reference


const myarray=[0,1,2,3,4,5];
// const herosName=['Ali','Zain','Hamid','Bilal'];
// const myNewArray= new Array(1,2,3,4,5)
// console.log(myarray[1]);
// console.log(myNewArray[1]);

// Arrays Methods

// myarray.push(6); // to add new in array
// myarray.push(7);
// myarray.pop() // just remove last element from the array
// console.log(myarray);
// myarray.unshift(9)  // add 9 at start     The unshift() method of Array instances adds the specified elements to the beginning of an array
// myarray.shift(); //The shift() method of Array instances removes the first element from an array and returns that removed element
// console.log(myarray);


// console.log(myarray.includes(9));
// console.log(myarray.indexOf(3));



// const myNewArray=myarray.join(); // convert araay into strings and data type is string
// console.log(myarray);
// console.log(myNewArray);
// console.log(typeof myNewArray);


// slice and splice

// console.log("A",myarray);
// const myn1=myarray.slice(1,4);
// console.log(myn1);
// console.log("B",myarray);
// const myn2=myarray.splice(1,4);
// console.log(myn2);
// console.log("C",myarray);

// -----------------------output


// slice will excract and return new array without effecting orignal array
// splice will excract and return new array and orignal array holds only elements remaining...
// splice => orignal array sy  jo data nikal lia orignal sy delete ho ja ega or new array bn jae ga. 

// A [ 0, 1, 2, 3, 4, 5 ]
// [ 1, 2, 3 ]
// B [ 0, 1, 2, 3, 4, 5 ]
// [ 1, 2, 3, 4 ]
// C [ 0, 5 ]




const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros =[...marvel_heros,...dc_heros]
console.log(all_new_heros);



const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hamid"))
console.log(Array.from("Hamid"))
console.log(Array.from({name: "Hamid"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));






