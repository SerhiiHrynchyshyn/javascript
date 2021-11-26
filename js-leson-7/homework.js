// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let arr = [
//     new User(1,'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774'),
//     new User(2,'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774'),
//     new User(3,'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774'),
//     new User(4,'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774'),
//     new User(5,'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774'),
//     new User(6,'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774'),
//     new User(7,'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774'),
//     new User(8,'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774'),
//     new User(9,'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774'),
//     new User(10,'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774')
// ];
// console.log(arr)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter)

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let arr = [
//     new User(1,'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774'),
//     new User(2,'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774'),
//     new User(3,'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774'),
//     new User(4,'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774'),
//     new User(5,'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774'),
//     new User(6,'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774'),
//     new User(7,'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774'),
//     new User(8,'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774'),
//     new User(9,'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774'),
//     new User(10,'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774')
// ];
// console.log(arr)
//
// arr.filter(value => {
//     if (value.id % 2 === 0){
//         console.log(value)
//     }
// })

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id.
// по зростанню (sort)


// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let arr = [
//     new User(7,'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774'),
//     new User(6,'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774'),
//     new User(9,'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774'),
//     new User(3,'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774'),
//     new User(2,'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774'),
//     new User(1,'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774'),
//     new User(4,'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774'),
//     new User(5,'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774'),
//     new User(8,'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774'),
//     new User(10,'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774')
// ];
//
// arr.sort((a, b) => {
//     return a.id - b.id
// })
//
// console.log(arr)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// let arr = [
//     new Client(1, 'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774', ['q1', 'q2', 'q3']),
//     new Client(2, 'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774', ['w1', 'w2']),
//     new Client(3, 'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774', ['e1', 'e2', 'e3']),
//     new Client(4, 'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774', ['r1', 'r2', 'r3', 'r4']),
//     new Client(5, 'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774', ['t1', 't2', 't3']),
//     new Client(6, 'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774', ['y1']),
//     new Client(7, 'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774', ['u1', 'u2', 'u3']),
//     new Client(8, 'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774', ['i1', 'i2']),
//     new Client(9, 'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774', ['o1', 'o2', 'o3']),
//     new Client(10, 'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774', ['p1', 'p2', 'p3']),
// ]
// console.log(arr);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// let arr = [
//     new Client(1, 'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774', ['q1', 'q2', 'q3']),
//     new Client(2, 'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774', ['w1', 'w2']),
//     new Client(3, 'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774', ['e1', 'e2', 'e3']),
//     new Client(4, 'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774', ['r1', 'r2', 'r3', 'r4']),
//     new Client(5, 'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774', ['t1', 't2', 't3']),
//     new Client(6, 'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774', ['y1']),
//     new Client(7, 'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774', ['u1', 'u2', 'u3']),
//     new Client(8, 'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774', ['i1', 'i2']),
//     new Client(9, 'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774', ['o1', 'o2', 'o3']),
//     new Client(10, 'Serhii', 'Hrynchyshyn', 'server_059@ukr.net', '+380938069774', ['p1', 'p2', 'p3']),
// ]
//
// console.log(arr.sort((a, b) => a.order.length - b.order.length));



