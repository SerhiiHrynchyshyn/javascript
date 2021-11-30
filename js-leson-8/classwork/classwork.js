// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
// let addClass = document.querySelector('h1');
// addClass.classList.add('mon-year');

// b) робить шириниу елементу ul 400px
// document.querySelector('ul').style.width = '400px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%
// let linkList = document.querySelectorAll('.linkList');
// for(let list of linkList){
//     list.style.width = '50%';
// }

// d) отримує текст який зберігається в елементі з класом listElement2
// let li = document.getElementsByTagName('li');
// console.log(li);
// for(let i = 0; i< li.length; i++){
//     console.log(li[i].innerText)
// }

// e) отримує всі елементи li та змінює ім колір фону на сірий
// for(let i = 0; i< li.length; i++){
//     li[i].style.background = 'silver';
// }

// f) отримує всі елементи 'a' та додає їм клас anchor
// let linkList2 = document.querySelectorAll('a');
// for(let i = 0; i< linkList2.length; i++){
//     linkList2[i].classList.add('anchor');
// }
// console.log(linkList2)

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює
// link3, змінює йому розмір тексту на 40 пікселів
// let linkList3 = document.querySelectorAll('a');
// for(let link of linkList3){
//     if (link.innerText.includes('link3')){
//         link.style.fontSize = '40px';
//     }
// }
// console.log(linkList3);

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX -
// текстовий контент елементу a
// let link = document.getElementsByTagName('a');
// for(let aElem of link){
//     let txt = aElem.innerText;
//     aElem.classList.add(`element_${txt}`);
// }
//
// console.log(link)

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let background = prompt('background color', 'red');
// let arrElement = document.getElementsByClassName('sub-header');
// for (let i = 0; i < arrElement.length; i++){
//     arrElement[i].style.background = background;
// }


// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту
// = content 2 segment . Колір отримати з prompt()
// let color = prompt('red', 'red');
// let subHeader = document.getElementsByClassName('sub-header');
// for(let subHeaders of subHeader){
//     if (subHeaders.innerText.includes('content 2 segment')){
//         subHeaders.style.color = color;
//     }
// }


// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let prom = prompt('some text', 'qwerty')
// let contentOne = document.querySelector('.content_1').innerHTML = prom;


// l) отримати елементи p та змінити їм padding на 20px
// let p = document.getElementsByTagName('p');
// for(let i = 0; i < p.length; i++){
//     p[i].style.padding = '20px';
// }
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let txt = document.querySelector('.text2').innerText = 'sep-2021';

