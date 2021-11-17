//1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function square(a,b){
//     return a * b
//
// }
// console.log(square(10, 23))

//2 - створити функцію яка обчислює та повертає площу кола з радіусом r
/*function areaCircle(r) {
    let radius = r ** 2;
    let PI = 3.14 * radius;
    return PI;
}
console.log(areaCircle(10))*/

//3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function radius(r, h){
//     const PI = 3.14;
//     return PI * (r / 2) ** 2 * h;
// }
// console.log(radius(8, 10))

//4 - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [1, '2', true, false, [1, 2, 3], {}, 3];
// function getArr(array){
//     for (let i = 0; i < array.length; i++){
//         console.log(array[i]);
//     }
// }
// getArr(arr);

//5 - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function p(txt){
//     document.write(`<p>${txt}</p>`)
// }
// p('hello okten')

//6 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function list(txt){
//     document.write('<ul>');
//     document.write(`<li>${txt}</li>`);
//     document.write(`<li>${txt}</li>`);
//     document.write(`<li>${txt}</li>`);
//     document.write('</ul>');
// //-----або-----
// //     document.write(`<ul><li>${txt}</li><li>${txt}</li><li>${txt}</li></ul>`);
// }
// list('hello okten')

//7 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function list(txt, num) {
//     document.write('<ul>');
//     for (let i = 1; i <= num; i++) {
//         document.write(`<li>${txt}${i}</li>`);
//     }
//     document.write('</ul>');
// }
// list('hello', 25)
//8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr = [1, '2', true, false, 3, '4', 5, '6'];
// function getArr(mass) {
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${mass[i]}</li>`);
//     }
// }
// getArr(arr)

//9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

// let arrObj = [
//     {
//         id: 1,
//         name: 'Serhii',
//         age: 23
//     },
//     {
//         id: 2,
//         name: 'Vasya',
//         age: 50
//     },
//     {
//         id: 3,
//         name: 'Petro',
//         age: 30
//     }
// ];

// function getArrObj(arr){
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<div>${arr[i].id} ${arr[i].name} ${arr[i].age}</div>`)
//     }
// }
// getArrObj(arrObj)
