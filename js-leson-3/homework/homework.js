// 1
// --створити масив з:
// - з 5 числових значень - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

/*let arr1 = [1,2,3,4,5,];
let arr2 = ['s1','s2','s3','s4','s5'];
let arr3 = [1,'s4','s5', true, false];
//варіант 1
for (const arr1Element of arr1) {
    console.log(arr1Element)
}
for (const arr2Element of arr2) {
    console.log(arr2Element)
}
for (const arr3Element of arr3) {
    console.log(arr3Element)
}
//варіант 2
console.log(arr1)
console.log(arr2)
console.log(arr3)*/

// 2
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

/*let arr = [];
for(let i = 0; i <= 5; i++){
    arr[i] = i
}
console.log(arr);*/

// 3
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

/*for (let i = 1; i <= 10; i++){
    document.write(`<div>item</div>`)
}*/

//4
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
/*for (let i = 1; i <= 10; i++){
    document.write(`<div>item ${i}</div>`)
}*/

//5
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
/*let i = 1;
while (i <= 20){
    document.write(`<h1>hello octen</h1>`)
    i++
}*/

//6
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
/*let i = 1;
while (i <= 20){
    document.write(`<h1>hello octen ${i}</h1>`)
    i++
}*/

//7
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
/*let arr = [1,2,3,4,5,6,7,8,9,10];
for(let arrElement of arr){
    console.log(arrElement)
}*/

//8
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
/*let arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
for (let arrElement of arr) {
    console.log(arrElement)
}*/

//9
//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
/*let arr = [1, true, '3', false, '5'];
for (let arrElement of arr) {
    console.log(arrElement)
}*/

//10
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
/*let arr3 = [1, 's4', 's5', true, false, 123, '53', 2, 5, 'qwerty'];

for (let i = 0; i < arr3.length; i++){
        if (typeof arr3[i] === 'boolean'){
            console.log(arr3[i])
        }
}*/

//11
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
/*let arr3 = [1, 's4', 's5', true, false, 123, '53', 2, 5, 'qwerty'];

for (let arr3Element of arr3) {
    if (typeof arr3Element === 'number'){
        console.log(arr3Element)
    }
}*/

//12
//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

/*let arr3 = [1, 's4', 's5', true, false, 123, '53', 2, 5, 'qwerty'];

for (let i = 0; i < arr3.length; i++){
        if (typeof arr3[i] === 'string'){
            console.log(arr3[i])
        }
}*/


//13
//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

/*let arr = [];
arr[0] = 1;
arr[1] = 11;
arr[2] = true;
arr[3] = false;
arr[4] = {name: 'Serhii', age: 23};
arr[5] = 'hello owu';
arr[6] = 'Serhii';
arr[7] = 'Hrynchyshyn';
arr[8] = 312;
arr[9] = '1111111';
//варіант1
console.log(arr);
//варіант2
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
//варіант3
for (let arrElement of arr) {
    console.log(arrElement)
}*/


//14
//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
/*for (let i = 0; i < 10; i++){
    console.log(i);
    document.write(i, '<br>');
}*/

//15
//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

//якшо прям потрібно від 1 до 100 то (i = 1; i <= 100) має бути умова така
/*for(let i = 0; i < 100; i++){
    console.log(i);
    document.write(i, '<br>');
}*/

//16
//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
/*for (let i = 0; i < 200; i += 2) {
    console.log(i);
    document.write(i, '<br>');
}*/

//17
//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
/*for (let i = 0; i < 100; i += 2) {
    console.log(i);
    document.write(i, '<br>');
}*/

//18
//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
/*for (let i = 1; i < 100; i += 2){
    console.log(i);
    document.write(i, '<br>');
}*/
