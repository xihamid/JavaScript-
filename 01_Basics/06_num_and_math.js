const balance=new Number(100);
console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // set to fixdd mean to set digit after decimal for specially eCommerce

// const otherNumber=123.8966;
// console.log(otherNumber.toPrecision(4)); // how many digit wants and afetr taking 4 it will round to 123.9


// const hundreds=1000000;
// console.log(hundreds.toLocaleString()); // set US standard for digit


// console.log(Math);
// console.log(Math.round(4.3));
// console.log(Math.random());  // always between 0 and 1
// math.floor() always round value
// console.log(Math.random()*10); // we want to get greater than 1 then multiply by  *10 
// console.log((Math.random()*10)+1); // as it is b/w 0 and 1 it can be zero 0 to avoid zero add 1

//  generate b/q min and max
const min=10;
const max=20;

//  console.log(Math.random() * (max - min + 1 )); 
 console.log(Math.floor(Math.random() * (max - min + 1 ))+min); 








