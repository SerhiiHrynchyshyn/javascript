// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули


// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
// которая имеет детальную информацию про текущий пост.

// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации
// - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно
// их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)

let getUser = localStorage.getItem('user');
let user = JSON.parse(getUser);

let container = document.createElement('div');
container.classList.add('container');

let postBtn = document.createElement('button');
postBtn.innerText = 'post of current user';
postBtn.classList.add('btnMain');

let wrap = document.createElement('div');
wrap.classList.add('wrap');


function getUsers(userObj) {
    for (let userKey in userObj) {
        let wrapUser = document.createElement('div');
        if (typeof userObj[userKey] === 'object' && userObj[userKey] !== null) {
            getUsers(userObj[userKey]);
        } else {
            wrapUser.innerText = userObj[userKey];
            wrap.appendChild(wrapUser)
            container.appendChild(wrap);
        }
    }
}

getUsers(user)

document.body.appendChild(container)
container.appendChild(postBtn)

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(post => post.json())
    .then(posts => {
        postBtn.onclick = function () {
            let container = document.createElement('div');
            container.classList.add('containerTwo');

            for (let post of posts) {
                let divPostTitle = document.createElement('div');

                for (let postKey in post) {

                    if (user.id === post.userId) {
                        divPostTitle.innerText = post.title;
                        container.appendChild(divPostTitle)


                        let btnPost = document.createElement('button');
                        let btnLinkA = document.createElement('a');
                        btnLinkA.innerText = 'postDetails';
                        btnLinkA.href = 'http://localhost:63342/javascript/mini-project/postDetails/post-details.html?_ijt=t7h4ombs2jfgj4rklvh0hsij8m&_ij_reload=RELOAD_ON_SAVE';
                        btnLinkA.target = '_blank';
                        btnPost.appendChild(btnLinkA)
                        divPostTitle.appendChild(btnPost);

                        btnPost.onclick = function (){
                            localStorage.setItem('post', JSON.stringify(post))
                            // console.log(post);
                        }

                    }
                }
            }
            document.body.appendChild(container)
        }
    })

