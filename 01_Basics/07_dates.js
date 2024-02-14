// Dates

let myDate= new Date();
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.to);
// console.log(myDate);

let myCreatedDate=new Date("01-14-2024")
let mytimeStamps=Date.now();
// console.log(mytimeStamps);
// console.log(myCreatedDate);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(myCreatedDate.getTime()/100));// convert into seconds and floor for round off

//most use method is toLocalString

// const mytimeStamps = new Date();

// Example 1: Displaying full date and time in a readable format
// const newDate1 = mytimeStamps.toLocaleString('default', {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//     hour: '2-digit',
//     minute: '2-digit',
//     second: '2-digit',
//     timeZoneName: 'short'
// });
// console.log(newDate1);

// // Example 2: Displaying only date with short month and weekday
// const newDate2 = mytimeStamps.toLocaleString('default', {
//     weekday: 'short',
//     month: 'short',
//     day: 'numeric'
// });
// console.log(newDate2);

// // Example 3: Displaying only time with 24-hour format
// const newDate3 = mytimeStamps.toLocaleString('default', {
//     hour: '2-digit',
//     minute: '2-digit',
//     second: '2-digit',
//     hour12: false
// });
// console.log(newDate3);



const timestamp = 1707884023897; // Assuming this is a Unix timestamp in milliseconds

let myDate2= new Date();

const formattedDate = myDate2.toLocaleString('default', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    // hour12: true
});

console.log(myDate2.getTime());
console.log(formattedDate);








// Get the current date and time
const currentDate = new Date();
// console.log(currentDate);


const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

// console.log(`Current Date: ${day}-${month}-${year}`);
// console.log(`Current Time: ${hours}:${minutes}:${seconds}`);

const pakistanTimeZone = 'Asia/Karachi';
const quizStartTime = new Date('2024-02-14 13:00:00');
const quizCurrentTime = new Date();

// Format the dates using toLocaleString with timeZone option
const quizStartTimeString = quizStartTime.toLocaleString('en-US', { timeZone: pakistanTimeZone });
const quizCurrentTimeString = quizCurrentTime.toLocaleString('en-US', { timeZone: pakistanTimeZone });


// console.log(quizStartTime.toLocaleString());
// console.log(quizCurrentTime.toLocaleString());

console.log('Quiz Start Time:', quizStartTimeString);
console.log('Current Time in Pakistan:', quizCurrentTimeString);










const year = formattedDate.substring(0, 2);
const month = formattedDate.substring(3, 5);
const day = formattedDate.substring(6, 8);
const time = formattedDate.substring(11, 21);

const formattedOutput = `${day}/${month}/${year}, ${time}`;

console.log(formattedOutput);


//// practieve for date and time formate 


const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  const formatter = new Intl.DateTimeFormat('en-US', options);











