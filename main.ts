//* Massiv (Array) ni filterlash
//* 17.01.2023 

import { log } from "console";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

//* masalalar 
let arr: Array<string> = ['Aslbek', 'Aisha', 'Dilshodbek ', 'Umidbek', 'Ilyosbek','Diyorbek','Shokirjon','Sanjarbek','Akmalbek']

// !           indexOf
const index : number =arr.indexOf('Diyorbek')
console.log(index !=-1);

// !           includes
const found :boolean = arr.includes('Diyorbek')
console.log(found);

// !           lastIndexOf
const index2 : number =arr.lastIndexOf('Diyorbek')
console.log(index !=-1);




// !                                        Masalalar
// ? masala 1
// let s:number =0
// for(let i=0; i<arr.length;i++){
// if(arr[i]=='Akmalbek'){
//     console.log(i);
        
// }else{
//     console.log(-1);
    
// }
// }

// ? masala 1 2uusl
// let index = -1
// for(let i=0; i<arr.length;i++){
//     const name: string =arr[i]
//     if(name =='Diyorbek'){
//         index=i
//         break
//     }
// }
// console.log(index);


// ?masala 2
// let yes: boolean = false;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] == 'Aslbek'){
//         yes = true;
//     }
// }
// console.log(yes);
