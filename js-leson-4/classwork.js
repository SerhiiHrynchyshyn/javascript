// 1- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function getNum(a,b,c){
//     if (a < b && a < c){
//         console.log(a)
//     }else if (b < a && b < c){
//         console.log(b)
//     }else if (c < b && c < a){
//         console.log(c)
//     }else {
//         console.log('числа рівні')
//     }
// }
// getNum(2,3,5)
//-----------------------------------------------------------------------
// 2- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
/*function getNum(a,b,c){
    if (a > b && a > c){
        console.log(a)
    }else if (b > a && b > c){
        console.log(b)
    }else if (c > b && c > a){
        console.log(c)
    }else {
        console.log('числа рівні')
    }
}
getNum(7,8,5)*/
//-----------------------------------------------------------------------
// 3- створити функцію яка повертає найбільше число з масиву
// let arr = [30, 40, 15];
// function getNum(mass) {
//     let index = 0;
//     for (let i = 0; i < mass.length; i++) {
//         if (mass[i] > index ){
//             index = mass[i]
//         }
//     }
//     return index
// }
// console.log(getNum(arr))
//-----------------------------------------------------------------------
// 4- створити функцію яка повертає найменьше число з масиву
// let arr = [90, 40, 50];
// function getNum(mass) {
//     let index = mass[0];
//     for (let i = 0; i < mass.length; i++) {
//         if (mass[i] < index ){
//             index = mass[i]
//         }
//     }
//     return index
// }
// console.log(getNum(arr))
//-----------------------------------------------------------------------
// 5- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr = [1, 2, 10];
//
// function getArr(arrElement) {
//     let resultat = 0;
//     for (let i = 0; i < arrElement.length; i++) {
//         resultat += arrElement[i]
//     }
//     return resultat
// }
//
// console.log(getArr(arr));
//-----------------------------------------------------------------------
// 6- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arr = [1, 2, 3, 4];
// function getArr(mass){
//     let res = 0;
//     for (let i = 0; i < mass.length; i++) {
//         res += mass[i] / mass.length;
//     }
//     return res;
// }
// console.log(getArr(arr))
//-----------------------------------------------------------------------
// 7- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function getNum(){
    let bigNum = arguments[0];
    let smallNum = arguments[0];
    for (let i = 0; i< arguments.length;i++){
        if(arguments[i] > bigNum){
            bigNum = arguments[i];
        }
        if(arguments[i] < smallNum){
            smallNum = arguments[i];
        }
    }
    console.log(bigNum, 'я більше число')
    return smallNum;
}
let small = getNum(50,40,30)
console.log(small, 'я менше число')
//-----------------------------------------------------------------------
// 8- створити функцію яка заповнює масив рандомними числами
// let arr = [];
//
// function pushArr(array) {
//     for (let i = 0; i < 10; i++) {
//         let random = Math.round(Math.random() * 100);
//         array.push(random);
//     }
// }
//
// pushArr(arr);
// console.log(arr);
//-----------------------------------------------------------------------
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// 9- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує
// кінцеве значення діапазону.
// let arr = [];
//
// function pushArr(array, limit) {
//     for (let i = 0; i < 10; i++) {
//         let random = Math.round(Math.random() * limit);
//         array.push(random);
//     }
// }
//
// pushArr(arr, 50);
// console.log(arr);
//-----------------------------------------------------------------------
// 10- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
/*let arr = [1, 2, 3, 4, 5, 6, 7];

function getArr(arrElement) {
    let newArr = [];
    for (let i = 0; i < arrElement.length; i++) {
        newArr.push(arrElement[i])
    }
    newArr.reverse()
    console.log(newArr)
}
console.log(arr)
getArr(arr)*/
