const obj1={1:'a',2:"b"};
const obj2={3:"c",4:"d"};
// const obj3={...obj1,...obj2};   // modern method using spread operator
// const obj3=Object.assign({},obj1,obj2);
// console.log(obj3);



const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Hamid"
tinderUser.isLoggedIn = false


const regularUser = {
    email: "hamid@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Muhammad",
            lastname: "Hamid"
        }
    }
}

// console.log(regularUser.fullname.userfullname);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



// destructuring of Objects


const course={
    courseName:"React JS",
    price:15000,
    courseInstructor:"Zain Ali"
}
// const {courseInstructor,courseName,price} = course; 
// console.log(`Course:${courseName} , Price:${price} , Instructor:${courseInstructor}`);


// const {courseInstructor:Instructor,courseName,price} = course; // if i want to get dummy name 
// console.log(`Course:${courseName} , Price:${price} , Instructor:${Instructor}`);



