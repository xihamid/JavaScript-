const arr=[1,2,3,4,5];
// for (const num of arr){
//     console.log(`Number:${num}`);
// }



// maps
// map unique value k lie jana jata or order of data b yad rakhta 
const map=new Map();
map.set('pk','Pakistan');
map.set('FR','France');

// for(const [key,value] of map){
//     console.log(key,":-",value);
// }


const myObj={
    js:"JAvaScripy",
    cpp:"C++"
}

for(const key in myObj){
    console.log(`${key} means: ${myObj[key]}`);
}

