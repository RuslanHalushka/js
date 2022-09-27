// let arr = ['h', 'e', 'l', 'l', 'o'];
//
// let str = '';
// for (let i of arr){
//     str += i;
// }
// console.log(str)

// let i = 0;
//
// while (i < arr.length){
//     str += arr[i];
//     i++
// }
// console.log(str);

// for (let i =0; i< arr.length; i++){
//     str += arr[i];
// }
// console.log(str);

// let arr = [2, 4, 54, 32, 33, 59, 1];
//
// let i = 1;
//
// while (i < arr.length){
//     console.log(arr[i]);
//     i += 2;
// }


// let arr = [];
// let i = 0;
//
// while (i < 50){
//     let someNum = parseInt(Math.random() * (100 - 1) + 1);
//     if (someNum % 2 == 0){
//         arr.push(someNum);
//         i++;
//     }else i = i;
// }
// console.log(arr);


let arr = [];

for (let i = 0; i< 10; i++) {
    let num = parseInt(Math.random() * (100 - 1) + 1);
    arr.push(num);
}
console.log(arr);

let arr2 = [];
for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 != 0){
        arr2.push(arr[i + 1])
    }
}
console.log(arr2);
