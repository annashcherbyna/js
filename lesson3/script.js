
// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу
let objDog = {
    age: 3,
    name: 'Leo',
    weight: 10,
    children:[{name: 'bob'},{name:'charly'}],
    breed: 'colly'
};

let objPerson ={
    name: 'Vasia',
    age: 30,
    children:[{name: 'bob'},{name:'charly'}],
    height: 99,
    education: 'higher'
}

let objCar = {
    model: 'Mazda',
    age: 5,
    color: 'red',
    type: 'sedan',
    engine: 2
}

let flat = {
    floor: 5,
    address: 'Peremogy,60',
    square: 50,
    price: 10000,
    cntRoom: 3
}

 let book = {
     name : 'Alise in Wonderland',
     author : 'Lewis Karroll',
     style : 'novel',
     year : '1865',
     mainCharacters:['Alise','The White Rabbit','The Queen of Hearts','The Cheshire Cat','The Mad Hatter']
 }

// -- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів

// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка
// Дан массив:
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
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// - статус Максима
// - ім'я передостаннього об'єкту
// - ім'я третього об'єкта
// - вік Олега
// - вік Олі
// - вік + ім'я 5го об'єкта
// - вік + сатус Анни
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!
console.log(users[7].status);
console.log(users[4].status);
console.log(users[10].status);
console.log(users[9].name);
console.log(users[2].name);
console.log(users[6].age);
console.log(users[3].age);
console.log(users[9].age);
console.log(users[4].age + ' ' + users[4].name);
console.log(users[5].age + ' ' + users[5].status);

