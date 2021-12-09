// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених"
// при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних
// об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ
// всіх обраних на попередньому етапі.

let userFunction = (userArray) => {
    let favorites = [];
    for (let userElement of userArray) {
        let div = document.createElement('div');
        let divChild = document.createElement('div');
        let button = document.createElement('button');
        button.innerText = 'додати до улюблених';
        for (let key in userElement) {
            divChild.append(userElement[key])
        }
        button.addEventListener('click', () => {
            favorites.push(userElement);
            localStorage.setItem('arr', JSON.stringify(favorites))

        })




        div.appendChild(divChild)
        div.appendChild(button)
        document.body.appendChild(div);
    }
    console.log(favorites)

    let x = localStorage.getItem('arr');
    console.log(JSON.parse(x))

}
userFunction(users);


// let x = localStorage.getItem('favorites');
// document.body.append(x);