// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';

// let filter = (name) => {
//     let res = name.replaceAll('.', ' ').replaceAll('-', ' ').replaceAll('_', ' ');
//     console.log(res);
// }


// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
// let name = (str, symbol) => {
//
//     let newArr = [];
//     if (str.includes(symbol)) {
//         let a = str.split(symbol)
//         a.forEach((item) => {
//             if (item) newArr.push(item);
//         })
//     }
//     console.log(newArr.join(' '))
//
// }
//
// name(n1, '.')
// name(n2, '-')
// name(n3, '_')

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let fun = (limit) => {
//     let arr = [];
//     for (let i = 0; i < limit; i++) {
//         arr[i] =  Math.round(Math.random() * 100);
//
//     }
//     return arr
// }
// console.log(fun(3));
// console.log(fun(5));
// console.log(fun(10));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих
// числових значень. Відсортувати його за допомоги sort
// let fun = (limit) => {
//     let arr = [];
//     for (let i = 0; i < limit; i++) {
//         arr[i] = Math.round(Math.random() * 100);
//     }
//     return arr.sort()
// }
// console.log(fun(3));
// console.log(fun(5));
// console.log(fun(10));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// ..........варіант 1............
// let fun = (limit) => {
//     let arr = [];
//     for (let i = 0; i < limit; i++) {
//         arr[i] = Math.round(Math.random() * 100);
//     }
//     return arr.filter(value => value % 2 === 0)
// }
// console.log(fun(20));

// ..........варіант 2............
// let fun = (limit) => {
//     let arr = [];
//     for (let i = 0; i < limit; i++) {
//         arr[i] = Math.round(Math.random() * 100);
//     }
//     let filter = arr.filter(value => {
//         if (value % 2 === 0) {
//             return value
//         }
//     })
//     return filter
// }
// console.log(fun(20));


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції)
// . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let fun = (limit) => {
//     let arr = [];
//     for (let i = 0; i < limit; i++) {
//         arr[i] = Math.round(Math.random() * 100);
//     }
//     console.log(arr.map(num => num.toString()));
//
// }
// fun(5);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]


// let sortNums = (number, direction) => {
//     let num = [];
//     if (direction === 'ascending'){
//         num = number.sort((a, b) => a - b);
//     }else if(direction === 'descending'){
//         num = number.sort((a, b) => b - a)
//     }
//      return num
// }
// console.log(sortNums([4,2,1,8,6,5], 'ascending'));
// console.log(sortNums([5,2,1,8,3,4], 'descending'));


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// console.log(coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration));
//
// console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]


// let cutString = (str, n) => {
//     let arr = [];
//     for (; str.length;) {
//         arr.push(str.substring(0, n));
//         str = str.slice(n);
//     }
//     console.log(arr);
// };
// cutString('наслаждение', 3);













