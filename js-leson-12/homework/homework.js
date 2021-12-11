// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css,
// щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(users => {
//         for (let user of users) {
//             const container = document.createElement('div');
//             const divPost = document.createElement('div');
//             divPost.classList.add('post');
//             document.body.appendChild(divPost);
//             for (let key in user) {
//                 const wrap = document.createElement('div');
//                 wrap.innerText = ` ${key} - ${user[key]} -`;
//                 divPost.appendChild(wrap);
//             }
//         }
//     })



// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

// fetch('https://jsonplaceholder.typicode.com/comments').then(response => response.json())
//     .then(users => {
//         for (let user of users) {
//             let divComment = document.createElement('div');
//             divComment.style.width = '100%';
//             for (let key in user) {
//                 let block = document.createElement('div');
//                 block.innerText = `${key} - ${user[key]}`
//                 divComment.appendChild(block);
//             }
//             document.body.appendChild(divComment)
//         }
//     })
