// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою
// let f1 = (a, b) => {
//     return a * b;
// }
//
// console.log(f1(10, 23));

// - створити функцію яка обчислює та повертає площу кола
// let f2 = (r) => {
//     let PI = 3.14 * (r ** 2);
//     return PI
// }
//
// console.log(f2(10));

// - створити функцію яка обчислює та повертає площу циліндру
// let f3 = (r, h) => {
//     return 3.14 * (r / 2) ** 2 * h
// }
//
// console.log(f3(8, 10))

// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [1, 2, 3, 4, 5];
//
// let f4 = (arrElement) => {
//     for (let arrNumbers of arrElement) {
//         console.log(arrNumbers)
//     }
// }
// f4(arr)

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// let list = (txt) => {
//     document.write(`<p>${txt}</p>`);
// }
//
// list('hello okten');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let list = (liTxt) => {
//     document.write(`<ul><li>${liTxt}</li><li>${liTxt}</li><li>${liTxt}</li></ul>`)
// }
//
// list('hello okten')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let ul = (li, number) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i ++){
//         document.write(`<li>${li}</li>`)
//     }
//     document.write(`</ul>`)
// }
// ul('hello okten', 5);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr = [1, '2', 3, true, false, '5', 6];
//
// let listNumbers = (arrElement) => {
//     for (let arrElements of arrElement) {
//         document.write(`<li>${arrElements}</li>`)
//     }
// }
//
// listNumbers(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та
// виводить їх в документ. Для кожного об'єкту окремий блок.
// let arr = [
//     {id: 1, name: 'Serhii', age: 23},
//     {id: 2, name: 'Natalya', age: 27},
//     {id: 3, name: 'Yroslav', age: 30}
// ];
//
// let arrObj = (arrElement) => {
//     for (let arrElements of arrElement) {
//             document.write(`<div>${arrElements.id} ${arrElements.name} ${arrElements.age}</div>`)
//     }
// }
//
// arrObj(arr);


