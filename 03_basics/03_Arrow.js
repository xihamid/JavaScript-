// this keyword is used for current context

const user={
    name:"Hamid",
    webiste:"Google",
    price:1200,
    WelcomeMessage:function(){
        return `${this.name} Welcome to Website`;
    }
}

// console.log(user.WelcomeMessage());
// console.log(user.name="Ali");
// console.log(user.WelcomeMessage());







//this function is moslty used in object not inside function


// function hello(){
//     name="Pakistan";
//     console.log(this.name); // output will be undefined -- this keywork does not work here
// }
// hello()




// const myFunction=function(){
//         name="Pakistan";
//     console.log(this.name); // output will be undefined -- this keywork does not work here
// }
// console.log(myFunction());



//arrow function

// basic structure   ()=>{}
// assing to variable   const addSum=()=>{}
const arrowFunc=()=>{
        name="Pakistan";
    console.log(this.name); // output will be undefined -- this keywork does not work here
}
// console.log(arrowFunc());


// const addSum=(num1,num2)=>{
//     return num1+num2;
// }


// impicit function is same but: maan lia hum curly braces may likh sakty hein lakin hum aik line may b likh skty hein without return
// explicit ka mtlb culry braces may return laganay pry ga lakin emplicit ka mtlb aik line may likh dia without return
// const addSum=(num1,num2)=> num1 + num2;

// if we write inside culry braces then use return else if we use () not need to write return


// const addSum=(num1,num2)=> (num1 + num2);
// console.log(addSum(3,4));



// return object in arrow function

// curly braces sy phly () lgana zrori ({}) sytax for object return in arrow function wrna kaam return ni ae ga
const addSum=(num1,num2)=> ({ username:"Hamid"}); 
console.log(addSum(3,4)); // output { username: 'Hamid' }
 