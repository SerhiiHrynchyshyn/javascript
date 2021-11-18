// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
// function getNum(a){
//         if(arguments.length === 1){
//             console.log(a, 'одне число')
//         }else if(arguments.length === 2 ){
//             console.log(arguments[0] + arguments[1], 'два число')
//         }
// }
// getNum('a')
// getNum('a', 'b')
//
// getNum(6)
// getNum(6, 6)

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
// -----
// let arr1 = [1, 2, 3, 4];
// let arr2 = [2, 3, 4, 5];
// let arr3 = [];
//
// function getArr(mas1, mas2, newArr) {
//     for (let i = 0; i < 4; i++) { // можна зробити цикил за довжиною масиву mas1.length
//         newArr[i] = mas1[i] + mas2[i];
//     }
//     return newArr
// }
// console.log(arr1)
// console.log(arr2)
// let newArray = getArr(arr1, arr2, arr3)
// console.log(newArray)
// ------------------------------------------------
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// let newArr = [];
//
// function getArr(users) {
//     for (let user of users) {
//         for (const key in user) {
//             newArr.push(key);
//         }
//     }
//     return newArr;
// }
//
// let userObj = getArr(arr);
// console.log(userObj);
// ------------------------------------------------
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ];

// let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// let newArr = [];
//
// function getArr(users) {
//     for (let user of users) {
//         for (const key in user) {
//             newArr.push(user[key]);
//         }
//     }
//     return newArr;
// }
//
// let userObj = getArr(arr);
// console.log(userObj);
