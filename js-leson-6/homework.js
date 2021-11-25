// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
// console.log(str1.length)
// console.log(str2.length)
// console.log(str3.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
// console.log(str1.toUpperCase())
// console.log(str2.toUpperCase())
// console.log(str3.toUpperCase())

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str1 = 'HELLO WORLD';
// let str2 = 'LOREM IPSUM';
// let str3 = 'JAVASCRIPT IS COOL';
// console.log(str1.toLowerCase())
// console.log(str2.toLowerCase())
// console.log(str3.toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// let trim = str.trim()
// console.log(trim.length)


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let str = 'Каждый охотник желает знать';
// let stringToarray = (str) => {
//     return str.split(' ')
// }
// console.log(stringToarray(str));


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок,
// що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
// let str = 'Каждый охотник желает знать';
// let delete_characters = (str, length) => {
//     return str.slice(str, length)
// }
// console.log(delete_characters(str, 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-)
// між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let str = "HTML JavaScript PHP";
// let insert_dash = (str) => {
//     return str.replaceAll(' ', '-').toUpperCase();
// }
// console.log(insert_dash(str));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з
// нижнього регістру у верхній.

// let str = 'hello world';
// let getStr = (strEl) => {
//     let up = strEl.charAt(0).toUpperCase();
//     for (let i = 1; i < strEl.length; i++){
//         up += strEl[i];
//     }
//     console.log(up)
// }
// getStr(str);

// - Напишіть функцію capitalize(str), яка повертає рядок,
// у якому кожне слово починається з великої літери.

// let str = 'hello world lorem ipsum javascript cool';
// let capitalize = (strEl) => {
//     let arrElement = strEl.split(' ');
//     for (let i = 0; i < arrElement.length; i++) {
//         let newWord = arrElement[i].charAt(0).toUpperCase();
//         for (let j = 1; j < arrElement[i].length; j++) {
//             newWord += arrElement[i].charAt(j);
//         }
//         arrElement[i] = newWord;
//     }
//     let newString = arrElement.join(' ');
//     console.log(newString)
// }
// capitalize(str)
