// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
// кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
// Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
let body = document.body;
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let container = document.createElement('div');
        let container2 = document.createElement('div');
        let container3 = document.createElement('div');
        container.classList.add('container');
        container2.classList.add('container2');
        container3.classList.add('container3');
        for (let user of users) {
            let button = document.createElement('button');
            let linkDetails = document.createElement('a');
            linkDetails.innerText = 'User Post';
            button.appendChild(linkDetails)
            for (let key in user) {
                const divChild = document.createElement('div');
                if (user[key] === user.id || user[key] === user.name) {
                    divChild.innerText = `${user[key]}`;
                    container.appendChild(divChild);
                }
                button.onclick = function () {
                    container2.style.display = 'block';
                    this.disabled = true;
                    fetch('https://jsonplaceholder.typicode.com/posts')
                        .then(resPost => resPost.json())
                        .then(post => {
                            for (let postElement of post) {
                                let btn = document.createElement('button');
                                btn.innerText = 'post';

                                if (postElement.userId === user.id) {
                                    for (let postKey in postElement) {
                                        let postDiv = document.createElement('div');
                                        postDiv.innerText = postElement[postKey];
                                        container2.appendChild(postDiv);
                                    }
                                    container2.appendChild(btn);
                                }
                                btn.onclick = function () {
                                    container3.style.display = 'block';
                                    btn.disabled = true;
                                    fetch('https://jsonplaceholder.typicode.com/comments')
                                        .then(resComments => resComments.json())
                                        .then(comment => {
                                            for (let commentElement of comment) {
                                                for (let key in commentElement) {
                                                    if (postElement.userId === commentElement.postId) {
                                                        let commDiv = document.createElement('div');
                                                        commDiv.innerText = commentElement[key];
                                                        container3.appendChild(commDiv);
                                                    }
                                                }
                                            }
                                        })
                                }

                            }
                        })
                }
            }
            container.appendChild(button)
        }
        body.appendChild(container);
        body.appendChild(container2);
        body.appendChild(container3);
    })