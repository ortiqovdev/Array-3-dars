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


// Yangi masalalar👇👇👇
// typescript ga prompt ulash uchun 👇
import { log } from "console";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

// Masalani yechilishi 👇
let names: string[] = []
let soni: number = 5
for (let i = 1; i <= 5; i++) {
    let name: string = prompt(`${i}-Ismlarni kiriting: `)
    names.push(name)
}
console.log(names);
console.log('Ammallar :');
console.log('1. Ism topish');
console.log('2. Ism qo`shish');
console.log('3. Ism o`chirish');

while (true) {
    const op: string = prompt('Qaysi amal? :')

    if (op == '1') {
        let name: string = prompt('Qaysi ism: ')
        let index: number = names.indexOf(name)
        console.log(index);

    } else if (op == '2') {
        let name: string = prompt('Ism kiriting: ')
        names.push(name)
        console.log(names);
    }
    else if (op == '3') {
        let index: number = +prompt('Nechanchi ism: ')
        names.splice(index, 1)
        console.log(names);

    } else if (op == 'exit') {
        break
    }
    else {
        throw new Error("Amal " + op + "topilmadi");

    }
}

