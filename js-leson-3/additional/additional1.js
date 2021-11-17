// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
/*let a = []
for (let i = 1; i <= 50; i++) {
    a.push(i * 2)
}
console.log(a)*/
//     b. заповнити його 50 непарними числами за допомоги циклу.
// варіант 1
/*let b = []
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 1) {
        b.push(i)
    }
}
console.log(b)*/
// варіант 2
/*let b = []
for (let i = 1; i <= 50; i++) {
    b.push(i * 2 - 1)
}
console.log(b)*/

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
/*let c = [];
for (let i = 0; i < 20; i++){
    let number = Math.floor(Math.random() * 21)
    c[i] = number
}
console.log(c)*/

//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
/*let c = [];
for (let i = 0; i < 20; i++){
    let number = Math.floor(Math.random() * 733)
    if(number >= 8 && number <= 738){
        c[i] = number
    }
}
console.log(c)*/


// 2. Вивести за допомогою console.log кожен третій елемен

// тут від 3 елементу починається -->
/*for (let i = 1; i < 10; i++) {
    console.log(i * 3 );
}*/

// тут від 1 елементу починається
/*for (let i = 1; i < 10; i++) {
    console.log(i * 3 - 2);
}*/

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
/*for (let i = 1; i < 50; i+=3) {
    if (i % 2 === 0){
        console.log(i);
    }
}*/
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
/*let arr = [];
for (let i = 1; i < 50; i+=3) {
    if (i % 2 === 0){
        arr.push(i)
    }
}
console.log(arr)*/
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
/*let a = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) {
        console.log(a[i])
    }
}*/
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
/*let a = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let i = 1; i < a.length; i++) {
    if (a[i] % 2 === 0) {
        console.log(a[i-1])
    }
}*/
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
/*let arr = [100, 250, 50, 168, 120, 345, 188];
let res = 0;
for (let i = 0; i < arr.length; i++) {
    res += arr[i]
}
console.log(res)
res /= arr.length;
console.log(res)*/
//
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
/*let c = [];
let b = [1,2,3,4,5];
for (let i = 0; i < 20; i++){
    let number = Math.floor(Math.random() * 100)
        c[i] = number * 5
        b.push(c[i])
}
console.log("я c")
console.log(c)
console.log("я b")
console.log(b)*/
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
/*let arr = ['я перший масив', 1, 2, 3, true, false, 's1', 55, 'hello', 123, 15];
let arr1 = [];
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
        arr1.push(arr[i])
    }
}
console.log(arr)
console.log('я другий масив')
console.log(arr1)*/
//
//
//----------------------------------------------------------------
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             TO BE CONTINUED .....
// ]
//
//
//
//
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
