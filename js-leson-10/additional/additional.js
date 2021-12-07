// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
// let body = document.body;
// let p = document.createElement('div');
// p.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, voluptas.';
// p.classList.add('text');
// p.setAttribute('id', 'myId');
// p.style.width = '100%';
// p.style.height = '30px';
// body.appendChild(p);
// document.onclick = function (e){
//     console.log(`tag ${e.target.tagName}, список класів ${e.target.className}, список ід, ${e.target.id}, ширина ${e.target.style.width}, висота ${e.target.style.height}`)
// }

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
// let p = document.createElement('div');
// p.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, voluptas.';
// p.classList.add('text');
// p.setAttribute('id', 'myId');
// p.style.width = '100%';
// p.style.height = '30px';
//
// let body = document.body;
// let container = document.createElement('div');
// container.style.width = '100%';
// container.style.height = '100vh';
// container.style.background = 'rgba(0, 0, 0, 0.8)';
// container.style.position = 'absolute';
// container.style.top = '0';
// let popup = document.createElement('div');
// popup.style.width = '300px';
// popup.style.height = '500px';
// popup.style.position = 'relative';
// popup.style.top = '10%';
// popup.style.left = '40%';
// popup.style.background = 'silver';
// body.appendChild(container)
// body.appendChild(p)
// container.appendChild(popup)
// container.style.display = 'none';
// document.onclick = function (e) {
//     container.style.display = 'block';
//     popup.innerText = `tag ${e.target.tagName}, список класів ${e.target.className}, список ід, ${e.target.id}, ширина ${e.target.style.width}, висота ${e.target.style.height}`;
// }


// -- взять массив пользователей
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива.
// Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
let body = document.body;
let f1 = document.createElement("form");
let checkboxOne = document.createElement("input");
let checkboxTwo = document.createElement("input");
let checkboxTree = document.createElement("input");
f1.setAttribute('id', 'f1');
checkboxOne.type = 'checkbox';
checkboxOne.setAttribute('name', 'one');
checkboxTwo.type = 'checkbox';
checkboxTwo.setAttribute('name', 'two');
checkboxTree.type = 'checkbox';
checkboxTree.setAttribute('name', 'tree');
f1.append(checkboxOne, checkboxTwo, checkboxTree)
body.appendChild(f1);

// function users(userEl) {
//     f1.one.onclick = function () {
//         if (f1.one.checked) {
//             for (let userElement of userEl) {
//                 for (let key in userElement) {
//                     document.write(userElement.filter(value => value.status === false))
//                 }
//
//             }
//         }
//     }
// }
//
// users(usersWithAddress)

//
//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// let f1 = document.forms['f1'];
// console.log(f1)
// let carousel = document.getElementsByTagName('img');
// console.log(carousel)
// f1.next.addEventListener('click', (counter) => {
//     for (let i = 0; i < carousel.length; i++) {
//         console.log(i)
//
//     }
// })


// f1.prev.addEventListener('click', () => {
//
// })
//
//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
