// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let numbers = (num1, num2, num3) => {
//     if (num1 < num2 && num1 < num3) {
//         console.log(num1)
//     } else if (num2 < num1 && num2 < num3) {
//         console.log(num2)
//     } else if (num3 < num1 && num3 < num2) {
//         console.log(num3)
//     } else {
//         return 0
//     }
// }
//
// numbers(5, 15, 10)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let numbers = (num1, num2, num3) => {
//     if (num1 > num2 && num1 > num3) {
//         console.log(num1)
//     } else if (num2 > num1 && num2 > num3) {
//         console.log(num2)
//     } else if (num3 > num1 && num3 > num2) {
//         console.log(num3)
//     } else {
//         return 0
//     }
// }

// numbers(5, 15, 10)

// - створити функцію яка повертає найбільше число з масиву
// let arr = [5, 15, 10];
//
// let number = (arrElem) => {
//     let count = arrElem[0];
//     for (let i = 0; i < arrElem.length; i++){
//         if (arrElem[i] > count){
//             return count = arrElem[i]
//         }
//     }
//     return count
// }
// console.log(number(arr));

// // - створити функцію яка повертає найменьше число з масиву
// let arr = [4, 15, 5];
// let number = (arrElem) => {
//     let count = arrElem[0];
//     for (let i = 0; i < arrElem.length; i++) {
//         if (arrElem[i] < count) {
//             count = arrElem[i]
//         }
//     }
//     return count
// }
// console.log(number(arr))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13
// let arr = [1, 2, 10];
// let getArr = (arrElements) => {
//     let count = 0;
//     for (let arrElement of arrElements) {
//         count += arrElement
//     }
//     return count
// }
// console.log(getArr(arr));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arr = [1, 2, 3, 4, 5];
//
// let getArr = (arrEl) => {
//     let count = 0;
//     for (let arrElement of arrEl) {
//         count += arrElement
//     }
//     return count / arrEl.length
// }
//
// console.log(getArr(arr));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);

// let getNumber = (...arg) => {
//     let count1 = arg[0];
//     let count2 = arg[0];
//     for (let i = 0; i < arg.length; i++){
//         if (arg[i] > count1){
//             count1 = arg[i]
//         }
//         if (arg[i] < count2){
//             count2 = arg[i]
//         }
//     }
//     console.log(count1);
//     return count2
// }
// console.log(getNumber(1, 2, 3, 4, 5));


// - створити функцію яка заповнює масив рандомними числами

// let arr = [];
// let pushArr = (arrEl) => {
//     for (let i = 0; i < 10; i++) {
//         let random = Math.round(Math.random() * 100);
//         arrEl.push(random);
//     }
//
// }
// pushArr(arr);
// console.log(arr);

// - створити функцію яка заповнює масив рандомними числами в діапазоні
// від 0 до limit. limit - аргумент, який характеризує кінцеве значення
// діапазону.
// let arr = [];
//
// let pushArr = (array, limit) => {
//     for (let i = 0; i < 10; i++) {
//         let random = Math.round(Math.random() * limit);
//         array.push(random);
//     }
// }
//
// pushArr(arr, 50);
// console.log(arr);
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let arr = [1, 2, 3, 4, 5, 6, 7];
//
// let getArr =(arrElement) => {
//     let newArr = [];
//     for (let i = 0; i < arrElement.length; i++) {
//         newArr.push(arrElement[i])
//     }
//     newArr.reverse()
//     console.log(newArr)
// }
// console.log(arr)
// getArr(arr)












