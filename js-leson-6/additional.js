// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика,
// крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

// let email1 = 'someemail@gmail.com';
// let email2 = 'someeMAIL@gmail.com';
// let email3 = 'someeMAIL@i.ua';
// let email4 = 'some.email@gmail.com';
//
//
// function validator(mail) {
//     mail.toLowerCase();
//
//
//     if (mail.includes('@')) {
//         let arr = mail.split('@');
//         let arr1 = arr[1].split('.');
//
//         if (arr1[0] === '' || arr[0].includes('.') || arr1[0].length <= 2) {
//             console.log('Email is invalid!');
//         } else {
//             console.log(`Email - ${mail} - is valid`);
//         }
//     } else {
//         console.log('Email is invalid!');
//     }
// }
//
// validator(email4);


// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.

// - є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

// coursesArray.sort((a, b) => b.modules.length - a.modules.length);
// console.log(coursesArray)

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.

// let count = (str, stringsearch) => {
//     return str.split(stringsearch).length - 1;
// };
// let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb))


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.

let cutstring = (str,n)=>{
   return str.split(' ').slice(0,n).join(' ')
}
let str = "Сила тяжести приложена к центру масс тела";
document.writeln(cutstring(str, 5)) // 'Сила тяжести приложена к центру'
