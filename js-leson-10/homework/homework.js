// - Создать произвольный елемент с id = text.  Используя JavaScript, с
// делайте так, чтобы при клике на кнопку
// исчезал элемент с id="text".

// let div = document.createElement('div');
// let btn = document.createElement('button');
// div.innerText = 'hello';
// btn.innerText = 'click';
// div.setAttribute('id', 'text');
// document.body.appendChild(div);
// document.body.appendChild(btn);
// btn.onclick = function (){
//     div.style.display = 'none'
// }


// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let btn = document.createElement('button');
// btn.innerText = 'click';
// document.body.appendChild(btn);
// btn.onclick = function (){
//     this.style.display = 'none';
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні
// на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це
// користувача

// let input = document.createElement("input");
// let btn = document.createElement('button');
// btn.type = 'submit';
// btn.innerText = 'click';
// document.body.appendChild(btn);
// document.body.appendChild(input);
// btn.addEventListener('click', () => {
//     if (input.value < 18) {
//         alert('тобі менше 18');
//     } else {
//         alert('Доступ дозволено')
//     }
// })


// - Создайте меню, которое раскрывается/сворачивается при клике

// --------(((в html структура)))
// let menu = document.querySelector('#menu');
// let subMenu = document.querySelector('#subMenu');
// menu.addEventListener('click', () => {
//     subMenu.classList.toggle('displayNone');
// })

// - Создать список комментариев , пример объекта коментария -
// {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
// Добавьте каждому комментарию по кнопке для сворачивания его body.

// let comments = [
//     {title: 'lorem1', body: 'lorem ipsum dolo sit ameti1'},
//     {title: 'lorem2', body: 'lorem ipsum dolo sit ameti2'},
//     {title: 'lorem3', body: 'lorem ipsum dolo sit ameti3'},
//     {title: 'lorem4', body: 'lorem ipsum dolo sit ameti4'}
// ];
//
// let getDescription = (arr) => {
//     for (let arrElement of arr) {
//         let btn = document.createElement('button');
//         let div = document.createElement('div');
//         btn.innerText = 'submit';
//         for (let arrKey in arrElement) {
//             let childDiv = document.createElement('div');
//             childDiv.innerText = arrElement[arrKey];
//             div.appendChild(childDiv);
//             btn.onclick = function () {
//                 childDiv.style.display = 'none';
//             }
//         }
//         div.appendChild(btn);
//         document.body.appendChild(div);
//     }
// }
// getDescription(comments);