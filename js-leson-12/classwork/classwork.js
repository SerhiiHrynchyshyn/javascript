// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в
// окремий блок всі коментарі поточного поста
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(post => {
//         let popup = document.createElement('div');
//         popup.style.width = '300px';
//         popup.style.position = 'absolute';
//         popup.style.top = '10%';
//         popup.style.left = '40%';
//         popup.style.background = 'silver';
//         popup.style.display = 'none';
//
//         for (let postElement of post) {
//             let post = document.createElement('div');
//             let postBtn = document.createElement('button');
//
//             post.classList.add('post');
//             postBtn.innerText = 'comments';
//
//             for (let key in postElement) {
//                 let div = document.createElement('div');
//                 div.innerText = `${key} - ${postElement[key]}`
//                 post.appendChild(div)
//             }
//
//             postBtn.onclick = function () {
//                 popup.style.display = 'block';
//                 popup.innerText = `userId- ${postElement.userId},id- ${postElement.id}, title- ${postElement.title}, body- ${postElement.body}`;
//             }
//
//             document.body.appendChild(post);
//             document.body.appendChild(popup);
//             post.appendChild(postBtn);
//
//         }
//     })


