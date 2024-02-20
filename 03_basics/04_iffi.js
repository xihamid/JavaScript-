// Immediately involked functions

 // ( function funxtionName(){ }) ();    // ()() 1st parenthsesis function definationa and 2nd for excecution

 // interview question why we use iffi or Immediately involked
 //Answer: 
 //      Globel scope k variables sy populution hoti kai baar to us k hatany k lie iffi use krty hein

//  named iffi kesy likhty   following method
(function hello(){
    console.log("DB Connected");
})();    // terminate lazmi kry wrna error a jae ga

// using arrow function

// unnamed iffi kesy likhgty followng maethod
(
    ()=>{
        console.log(`DB Connected susscessfully `);
    }
)();

// pass paramter to unnameed iffi

(
    (db)=>{
        console.log(`${db} DB Connected `);
    }
)('Oracle');