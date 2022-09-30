
// function arr(result = []){
//     console.log(result)
// }
//
// arr([2, 3, 'fe', 33]);
// arr();

// function arr(){
//     let arr2 = [];
//     for (let i = 0; i < 10; i++) {
//
//         let randomNum = parseInt(Math.random() * (100 - 1) + 1);
//         arr2.push(randomNum)
//     }
//     console.log(arr2)
// }
//
// arr();
// arr();

// function numbers(first = 2, second = 6, third =4){
//     let arr = [first, second, third];
//     let minNum = arr[0];
//     for (const number of arr) {
//         if (number < minNum){
//             minNum = number;
//         }
//         console.log(minNum)
//     }
//     return minNum
// }
//
// result = numbers(6,1,7);
// console.log(result);

// let expr = (first, second, third) =>{
//     let arr = [first, second, third];
//     let maxNum = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > maxNum){
//             maxNum = arr[i];
//         }
//     }
//     console.log(maxNum);
//     return maxNum;
// }
//
// result = expr(4,5,3);
// console.log(result);

//
// function numbers(){
//     console.log(arguments)
//     let min = arguments[0];
//     let max = arguments[0];
//     for (let num in arguments){
//         if (arguments[num] < min) {
//             min = arguments[num];
//         }
//         if (arguments[num] > max){
//             max = arguments[num];
//         }
//     }
//     console.log(min);
//     return max;
// }
//
//
// let someNum = numbers(3, 2, 45, 42, 12, 5, 65);
// console.log(someNum);

// function serednye(arr){
//     let num = 0;
//     for (let i = 0; i < arr.length; i++){
//         num += arr[i];
//     }
//     let result = num / arr.length
//     return result
// }
//
//
// let znach = serednye([1,2,3])
//
// console.log(znach);

// function sumator(arr1, arr2){
//     let arrOfSum = [];
//     for (let i = 0; i < arr1.length; i++){
//         let indexSum = arr1[i] + arr2[i];
//         arrOfSum.push(indexSum);
//     }
//     return arrOfSum
// }
//
//
// let mySum = sumator([1,3,4,2], [3,2,6,7])
// console.log(mySum);

//
// function smth(arr, index){
//     let resArr = [];
//     for (i = 0; i < arr.length; i++){
//         if (i === index){
//             resArr.push(arr[i+1]);
//             resArr.push(arr[i]);
//             i++
//         } else resArr.push(arr[i])
//     }
//     return resArr;
//
// }
//
// let result = smth([2,4,5,1,5,6,1,7,54], 3)
// console.log(result);


function newArr(arr){
    let finalArr = [];
    let counter = 0;
    for (let i = 0; i < arr.length; i++){
        arr[i] === 0 ? counter += 1 : finalArr.push(arr[i])
    }
    for (let i = 0; i < counter; i++){
        finalArr.push(0)
    }
    console.log(arr);
    return finalArr
}


let changedArr = newArr([4,2,0,2,0,6,0,1,0,4,0,65]);
console.log(changedArr);
























