// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку
// считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let forms = document.forms;
// let btn = document.getElementById('btn');
//
// btn.addEventListener('click', () => {
//     for (let formEl of forms) {
//         console.log(formEl.text.value);
//         console.log(formEl.number.value);
//     }
// })


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий -
// кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка,
// з відповідним вмістом.
// (Додатковачастина для завдання)
// let f1 = document.forms['f1'];
// let btn = document.getElementById('btn');
//
// let createTable = () => {
//     let table = document.createElement('table');
//     btn.addEventListener('click', () => {
//         for (let i = 0; i < f1.rows.value; i++) {
//             let tr = document.createElement('tr');
//             table.appendChild(tr);
//             for (let j = 0; j < f1.cells.value; j++) {
//                 let td = document.createElement('td');
//                 td.innerText = f1.contents.value;
//                 tr.appendChild(td);
//             }
//         }
//     })
//     document.body.appendChild(table);
// }
// createTable();

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

// let f1 = document.forms['f1'];
// console.log(f1)
// let btn = document.getElementById('btn');
// let arr = ['q1', 'q2', 'q3'];
// btn.addEventListener('click', () => {
//     for (let i = 0; i < arr.length; i++) {
//         if (f1.text.value === arr[i]) {
//             alert('WARNING!!!!')
//         }
//     }
// })


// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку
// let arr = ['q1', 'q2', 'q3'];
// let f1 = document.forms['f1'];
// let btn = document.getElementById('btn');
// btn.addEventListener('click', () => {
//     for (let i = 0; i < arr.length; i++) {
//         if (f1.text.value.includes(arr[i])) {
//             alert('WARNING!!!!')
//         }
//     }
// })