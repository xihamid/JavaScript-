// function sum(number1,number2){
// let number3=number1+number2;
// console.log(number3);
// }
// sum(2,3);// it will console 5


// to store in variable

// function sum(number1,number2){
//     let number3=number1+number2;
//     console.log(number3);
//     }

//     let result=sum(2,3);
//     console.log(result); // the result will console 5 and undeifned - undefined is beacuse function expect some returns





// function sum(number1,number2){
//     let number3=number1+number2;
//    return number3;
//     }
//     console.log(sum(2,3));



// function loggedUder(message){
//     return `${message} just logged in`;
// }

function loggedUder(message){
    if (!message) {
        return `Please Login in`;
}
    else{

        return `${message} just logged in`;
    }
}



// console.log(loggedUder()); // id argument empt then output will be undefined because no any value is assigned
// console.log(loggedUder("Hamid"));

// function to calculate the total price of all products in cart
// here we use rest operator ... which means to gather elemnts at one place.
function caclulateCartPrice(...prices){
    let sum=0;
    for (let index = 0; index < prices.length; index++) {
        sum=prices[index]+sum;
    }
    return sum;
}

console.log(caclulateCartPrice(200,100,50));




