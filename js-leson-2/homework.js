//1  - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
/*let time = +prompt('число');
if(time >= 0 && time < 15){
    console.log('в першу частину години');
}else if(time >= 15 && time < 30){
    console.log('в другу частину години');
}else if(time >= 30 && time < 45){
    console.log('в третю частину години');
}else if(time >= 45 && time < 60){
    console.log('в четверту частину години');
}else {
    alert('введіть число від 0 до 59');
}*/
//2- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
/*let day = +prompt('число від 1 до 31');
if(day >= 1 && day < 10){
    console.log('в першу частину');
}else if(day >= 10 && day < 21){
    console.log('в другу частину');
}else if(day >= 21 && day <= 31){
    console.log('в третю частину');
}else {
    alert('введіть число від 1 до 31');
}*/
//3 - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

//варіант 1
/*let test = confirm('yes & no ?');
console.log(test === true ? 'вірно' : 'Неправильно');
console.log(test === !true ? 'Неправильно' : 'вірно'); // незнаю чи рахується це за другий варіан тернарного
*/

//варіант 2
/*let test = confirm('yes & no ?');
if(test === true){
    console.log('вірно');
}else {
    console.log('Неправильно');
}*/

//3  Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

//варіатн 1
/*let a = +prompt();
if(a !== 0){
    console.log('Вірно');
}else {
    console.log('Невірно');
}*/

//варіатн 2
/*let a = +prompt();
console.log(a !== 0 ? 'Вірно' : 'Невірно');*/

//4 - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
/*let number = +prompt('введіть день тижня');
switch (number) {
    case 1 :
        console.log('понеділок лекція 1')
        break;
    case 2 :
        console.log('вівторок практика 1')
        break;
    case 3 :
        console.log('середа лекція 2')
        break;
    case 4 :
        console.log('четверг приктика 2')
        break;
    case 5 :
        console.log('пятниця лекція 3')
        break;
    case 6 :
        console.log('субота лекція англійської 1')
        break;
    case 7 :
        console.log('неділя воконання всіх дз + превю')
        break;
    default :
        console.log('ше раз!?')
}*/

// 5 - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
/*let vS = +prompt('100', 100);
if (vS % 4 === 0) {
    console.log('Високосний');
}else {
    console.log('ne Високосний')
}*/

//6 - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
// let mess = prompt('Яка «офіційна» назва JavaScript?', 'ECMAScript');
// if(mess === 'ECMAScript'){
//     console.log('Правильно!')
// }else {
//     console.log('Не знаєте? ECMAScript!')
// }
