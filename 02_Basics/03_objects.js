

//interview question  => take a symbol and add it into keys of object

const mySymb=Symbol("key1");

const UserObject={
    name:"Hamid",
    [mySymb]:"myKey1", // syntax for declare symbol in keys of object [keyName]
    age:25,
    address:"Lahore,Pakistan",

};
// console.log(UserObject.name);
// console.log(UserObject["name"]);
// console.log(UserObject["address"]);
// console.log(typeof UserObject[mySymb]); 
// console.log(UserObject[mySymb]); // how to print symbol or access of symbol method use []



// UserObject.name="Ali RAza";
// Object.freeze(UserObject);  //freez object then no any will change data in object without showing any error
// UserObject.name="Zain Ali";
// console.log(UserObject.name);



UserObject.greeting=function(){
    console.log(`Hello User :${this.name}`);  // this keyword us to access all data withing object
}
console.log(UserObject.greeting());