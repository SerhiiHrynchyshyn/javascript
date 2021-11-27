// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model, producer, year, maxSpeed, engineCapacity) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     this.info = function () {
//         console.log(`модель машини - ${this.model}, виробник - ${this.producer}, рік випуску - ${this.year}, максимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${this.engineCapacity}`);
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = newSpeed;
//     }
//
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//
//     this.addDriver = function (driver) {
//         this.drive = driver;
//     }
// }
//
// let car = new Car('Mercedes-AMG GT Coupe', 'Germany', 2020, 300, '350 кВт (476 л. с.)');
// console.log(car)
// car.drive();
// car.info();
// car.increaseMaxSpeed('500');
// car.drive();
// car.changeYear(2021);
// car.info();
// car.addDriver();
// car.addDriver();
// car.addDriver('Serhii');

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(model, producer, year, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     info() {
//         console.log(`модель машини - ${this.model}, виробник - ${this.producer}, рік випуску - ${this.year}, максимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${this.engineCapacity}`);
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         console.log(this.maxSpeed = newSpeed);
//     }
//
//     changeYear(newValue) {
//         console.log(this.year = newValue);
//     }
//     addDriver (driver){
//         console.log(this.drive = driver);
//
//
//     }
// }
//
// let car = new Car('Mercedes-AMG GT Coupe', 'Germany', 2020, 300, '350 кВт (476 л. с.)');
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(400);
// car.changeYear(2021);
// car.addDriver('Serhii');


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// class Cinderella {
//     constructor(name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
// }
//
// const userCinderella = [
//     new Cinderella('Anna', 15, 5),
//     new Cinderella('Marta', 17, 10),
//     new Cinderella('Natalya', 27, 15),
//     new Cinderella('Ira', 25, 20),
//     new Cinderella('Inna', 30, 25),
//     new Cinderella('Julia', 23, 30),
//     new Cinderella('Nastya', 24, 35),
//     new Cinderella('Adelina', 26, 40),
//     new Cinderella('Veronika', 20, 45),
//     new Cinderella('Olya', 18, 50),
// ];
//
// class Prince {
//     constructor(name, age, shoe) {
//         this.name = name;
//         this.age = age;
//         this.shoe = shoe;
//     }
// }
//
// const prince = new Prince('Serhii', 23, 15);
//
// const princeCinderella = (userArr, prince) => {
//     for (const item of userArr) {
//         if (item.size === prince.shoe) {
//             return `твоя падруга: ${item.name}`;
//         }
//     }
// };
//
// console.log(princeCinderella(userCinderella, prince));
//
// console.log(userCinderella.find(value => value.size === prince.shoe));
