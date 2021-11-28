// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

// let a = {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//         }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//     }
// }


// class CreateObject {
//     constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs) {
//         this.id = id
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.phone = phone;
//         this.website = website;
//         this.address = {
//             street: street,
//             suite: suite,
//             city: city,
//             zipcode: zipcode,
//             geo: {
//                 lat: lat,
//                 lng: lng
//             }
//         }
//         this.company = {
//             name: companyName,
//             catchPhrase: catchPhrase,
//             bs: bs
//         }
//     }
// }
//
// let createObject = new CreateObject(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets');
// console.log(createObject)


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
//    }

// class DescriptionTag {
//     constructor(titleOfTag, action, titleOfAttr, actionOfAttr,actionOfAttrOne, actionOfAttrTwo) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = [
//             {titleOfAttr: actionOfAttr, actionOfAttr: actionOfAttr, },
//             {actionOfAttrTwo: actionOfAttrTwo, actionOfAttrOne: actionOfAttrOne },
//         ]
//     }
//
// }
//
// let a  = new DescriptionTag('<a>', ' В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь.', 'accesskey', 'Активация ссылки с помощью комбинации клавиш.', 'href', 'Задает адрес документа, на который следует перейти.');
// let div  = new DescriptionTag('<div>', ' <div>', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', 'align', 'Задает выравнивание содержимого тега <div>.', 'title', 'Добавляет всплывающую подсказку к содержимому.');
// let h1  = new DescriptionTag(' <h1>', 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка.', 'align', 'Определяет выравнивание заголовка.');
// let span  = new DescriptionTag('<span>', ' <span>', 'Тег <span> предназначен для определения строчных элементов документа.', 'Атрибуты', 'Для этого тега доступны универсальные атрибуты и события.');
// let input  = new DescriptionTag('<input>', ' <input>', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. ', 'size', 'Ширина текстового поля.', 'src', 'Адрес графического файла для поля с изображением.');
// let form  = new DescriptionTag(' <form>', 'Связывает поле с формой по её идентификатору. Такая связь необходима в случае, когда поле располагается за пределами <form>, например, при создании её программно или по соображениям дизайна.', 'id', 'Идентификатор формы (значение атрибута id тега <form>');
// let option  = new DescriptionTag(' <option>', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.', 'selected', 'Заранее устанавливает определенный пункт списка выделенным', 'value', 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.');
// let select  = new DescriptionTag(' <select>', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее', 'multiple', 'Позволяет одновременно выбирать сразу несколько элементов списка', 'name', 'Имя элемента для отправки на сервер или обращения через скрипты.');
//
// console.log(a);
// console.log(div);
// console.log(h1);
// console.log(span);
// console.log(input);
// console.log(form);
// console.log(option);
// console.log(select);
