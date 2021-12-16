// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
// которая имеет детальную информацию про текущий пост.

let getUser = localStorage.getItem('user');
let user = JSON.parse(getUser);

let container = document.createElement('div');
container.classList.add('container');

let postBtn = document.createElement('button');
postBtn.innerText = 'post of current user';

function getUsers(userObj) {
    for (let userKey in userObj) {
        let wrapUser = document.createElement('div');
        if (typeof userObj[userKey] === 'object' && userObj[userKey] !== null) {
            getUsers(userObj[userKey]);
        } else {
            wrapUser.innerText = userObj[userKey];
            container.appendChild(wrapUser);
        }
    }
}

getUsers(user);

container.appendChild(postBtn);
document.body.appendChild(container);







