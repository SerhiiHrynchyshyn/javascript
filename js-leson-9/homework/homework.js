// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let div = document.createElement('div');
// div.classList.add('wrap', 'collapse', 'alpha', 'beta');
// div.innerText = 'hello okten';
// div.style.background = 'black';
// div.style.color = 'white';
// div.style.fontSize = '30px';
// document.body.appendChild(div);
//
// let node = div.cloneNode(true);
// document.body.appendChild(node);
// --------------------------------------------------------------------------------------
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює
// li та додає його до блоку .menu
// let arr = ['Main', 'Products', 'About us', 'Contacts'];
// let menu = document.querySelector('.menu');
// let addArrLi = (array) => {
//     for (let arrElement of array) {
//         let li = document.createElement('li');
//         li.innerText = arrElement;
//         menu.appendChild(li);
//     }
// }
// addArrLi(arr);

// --------------------------------------------------------------------------------------
// Завдання робити через цикли.
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let arrObj = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         let p = document.createElement('p');
//         p.innerText = `${array[i].title} - ${array[i].monthDuration}`;
//         document.body.appendChild(p);
//     }
// }
//
// arrObj(coursesAndDurationArray);
// --------------------------------------------------------------------------------------
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з
// monthDuration елементу.
//Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let arrObj = (array) => {
//     for (let arrElement of array) {
//         let div = document.createElement('div');
//         let h1 = document.createElement('h1');
//         let p = document.createElement('description');
//         div.classList.add('item');
//         h1.classList.add('heading');
//         div.appendChild(h1);
//         div.appendChild(p);
//         h1.innerText = `${arrElement.title}`;
//         p.innerText = `${arrElement.monthDuration}`;
//         document.body.appendChild(div);
//     }
// }
// arrObj(coursesAndDurationArray);
