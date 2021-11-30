// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!

// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//1 -- отримує текст з параграфа з id "content"

// let elementId = document.getElementById('content').innerText;
// console.log(elementId);

//2 -- отримує текст з блоку з id "rules"
// let blockRules = document.querySelector('#rules').innerText;
// console.log(blockRules);

//3 -- замініть текст параграфа з id 'content' на будь-який інший
// let elementId = document.getElementById('content');
// elementId.innerText = 'hello I am Vasya';

//4 -- замініть текст параграфа з id 'rules' на будь-який інший
// document.querySelector('#rules').innerText = 'hello okten';

//5 -- змініть кожному елементу колір фону на червоний
// let bodyElements = document.body.children;
// for (let element of bodyElements) {
//     element.style.background = 'red'
// }

//6 -- змініть кожному елементу колір тексту на синій
// let bodyElements = document.body.children;
// for (let element of bodyElements) {
//     element.style.color = 'blue'
// }

//7 -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// let id = document.getElementById('rules');
// console.log(id.classList);

//8 -- поміняти колір тексту у всіх елементів fc_rules на червоний
// let colorTxt = document.getElementsByClassName('fc_rules');
// for (let i = 0; i < colorTxt.length; i++){
//     colorTxt[i].style.background = 'red'
// }

