
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
    weight: 99,
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

let arrDog = [];
let objDog1 = {
    age: 2,
    name: 'Kate',
    weight: 7,
    children:[{name: 'nelly'}],
    breed: 'dog'
};
let objDog2 = {
    age: 6,
    name: 'Lusia',
    weight: 2,
    children:[{name: 'puppy'}],
    breed: 'chau-chau'
};
let objDog3 = {
    age: 10,
    name: 'Lory',
    weight: 12,
    children:[],
    breed: 'serbernar'
};
let objDog4 = {
    age: 7,
    name: 'Molly',
    weight: 6,
    children:[{name: 'joi'},{name: 'kia'}],
    breed: 'ovcharka'
};
arrDog.push(objDog);
arrDog.push(objDog1);
arrDog.push(objDog2);
arrDog.push(objDog3);
arrDog.push(objDog4);

console.log(arrDog);

let arrPerson =[
    {
        name: 'Vasia',
        age: 30,
        children:[{name: 'bob'},{name:'charly'}],
        weight: 99,
        education: 'higher'
    },{
        name: 'Lesia',
        age: 5,
        children:[],
        weight: 20,
        education: null
    },{
        name: 'Masha',
        age: 25,
        children:[{name: 'Olia'}],
        weight: 55,
        education: 'higher'
    },{
        name: 'Oleg',
        age: 18,
        children:[],
        weight: 50,
        education: 'middle'
    },{
        name: 'Mila',
        age: 23,
        children:[],
        weight: 56,
        education: 'higher'
    }
];
console.log(arrPerson);

let arrCar = [
    {
        model: 'Mazda',
        age: 5,
        color: 'red',
        type: 'sedan',
        engine: 2
    },{
        model: 'Opel',
        age: 15,
        color: 'blue',
        type: 'sedan',
        engine: 1.8
    },{
        model: 'BMW',
        age: 1,
        color: 'black',
        type: 'sedan',
        engine: 2.5
    },{
        model: 'Seat',
        age: 4,
        color: 'red',
        type: 'universal',
        engine: 1.6
    },{
        model: 'Kia',
        age: 7,
        color: 'orange',
        type: 'hach-back',
        engine: 2
    }
];
console.log(arrCar);
// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка
let house = {
    floor:3,
    address:{city:'Dnipro',street: 'Peremogy',num: 153},
    rooms:6,
    square:350,
    dop:['garage','garden']
}
console.log(house);
let driver = {
    name: 'Sergey',
    class:['A','B','C'],
    car: {
        model: 'Kia',
        age: 7,
        color: 'orange',
        type: 'hach-back',
        engine: 2
    },
    age: 52,
    timeempl:6
}
console.log(driver);

let toy ={
    foAge: [2,3,4,5],
    type: 'constructor',
    name: 'lego',
    elements: {figure:5,blocks: 30},
    collection: 'Betman'
}
console.log(toy);

let table = {
    use: ['kitchen','dinnerroom'],
    height: 100,
    width:120,
    length: 200,
    components:{
        legs:4,
        base: 1,
        screw: 20
    }
}
console.log(table);

let bag = {
    height: 35,
    width:20,
    deep:8,
    color: ['red','orange','black'],
    pocket: {color:'red',cnt: 3}
}
console.log(bag);
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

