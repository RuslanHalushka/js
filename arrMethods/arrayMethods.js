// let arr = [4, 31, 21, 54, 1, 5454, 211, 43, 67, 876, 44, 8, 10, 20, 32, 3];

// let maxNum = arr.reduce((acc, value) =>{
//     if (acc > value){
//         return acc
//     }
//     return value
// })
//
// console.log(maxNum);


// let sortedArr = arr.sort((a, b) =>{
//     return a - b;
// })
//
// console.log(sortedArr);


// let filtredArr = arr.filter(value => !(value % 3))
// console.log(filtredArr);


// arr.forEach(num => {
//     console.log(num)
// });


// let newArr = arr.map(value => value * 2);
// console.log(newArr);


// let arr2 = ['Andriy', 'Vasya', 'Luda', 'Dima', 'Ira', 'Nastya', 'Oleg', 'Homer'];

// let sortedArr = arr2.sort((a, b) => {
//     if (a > b) return -1
//     return 1
// });
//
// console.log(sortedArr);


// let newArr2 = arr2.filter(value => value.length < 5)
//
// console.log(newArr2);


// let newArr = arr2.map(value => value += '!');
// console.log(newArr);


let users = [
    {name: 'Vasya', age: 31, status: false},
    {name: 'Ihor', age: 23, status: false},
    {name: 'Nastya', age: 19, status: true},
    {name: 'Luda', age: 43, status: false},
    {name: 'Bart', age: 22, status: true}
]

// let sortedUsers = users.sort((a, b) =>{
//     return a.age - b.age
// })
// console.log(sortedUsers);

// let sortedUsers = users.sort((a, b) => b.age - a.age)
//
// console.log(sortedUsers);

// let sortedUsersByNameLength = users.sort((a, b) =>{
//     return a.name.length - b.name.length
// })
//
// console.log(sortedUsersByNameLength);


// let newUsersArr = JSON.parse(JSON.stringify(users));
//
// let arrWithId = newUsersArr.map((value, index) => {
//     value.id = index
//     return value
// })
//
// console.log(arrWithId);
// console.log(users);


// function calculate(a, b, callback){
//     return callback(a, b)
// }
//
// let result = calculate(2, 4, (a, b)=>{
//     return a + b
// })
// console.log(result);


// function calculate(a,b,c, callback){
//     return callback(a,b,c)
// }
//
// let res = calculate(12, 43, 22, (a,b,c)=>{
//     return a + b - c
// })
//
// console.log(res);






