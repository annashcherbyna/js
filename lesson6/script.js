// - создать массив с 20 числами.
// -- при помощи метода sort и колбека  отсортировать массив.
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// -- при помощи filter получить числа кратные 3
// -- при помощи filter получить числа кратные 10
// -- перебрать (проитерировать) массив при помощи foreach()
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

let arr = [12,3,4,23,54,-98,0,23,67,100,28,9,54,81,11,21,75,43,90,8];

arr.sort(function(a,b){
    return a - b;
})
console.log(arr);

arr.sort(function(a,b){
    return b - a;
})
console.log(arr);

let filtered = arr.filter(function(val){
    return !(val % 3);
});
console.log(filtered);

let filtered10 = arr.filter(function(val){
    return !(val % 10);
});
console.log(filtered10);

arr.forEach(element => {
    console.log(element);
});

let map1 = arr.map(x => x*3);
console.log(map1);

// - создать массив со словами на 15-20 элементов.
// -- отсортировать его по алфавиту в восходящем порядке.
// -- отсортировать его по алфавиту  в нисходящем порядке.
// -- отфильтровать слова длиной менее 4х символов
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

let arrS = ['Sergey','Misha','Kolia','Oleg','Kiril','Bogdan','Egor','Sviat','Rodion','Illia','Gena','Gosha','Stas','Dima','Andrey','Alex','Vlad','Sasha','Boria','Evgen'];
console.log(arrS);
arrS.sort(function(a,b){
    return a > b;
})
console.log(arrS);
arrS.sort(function(a,b){
    return a < b;
})
console.log(arrS);

let mapS = arrS.map(x => x + '!');
console.log(mapS);

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// - відсортувати його за індентифікатором

console.log(users);

users.sort(function(a,b){
    return a.age > b.age;
});
console.log(users);

users.sort(function(a,b){
    return a.age < b.age;
});
console.log(users);

let [...newUsers] = users;

console.log('newUsers');
console.log(newUsers);

newUsers.forEach(val => {
    val.id = Math.round(Math.random()*100);
});

console.log('newUsers');
console.log(newUsers);

console.log('users');
console.log(users);

newUsers.sort((a,b) => a.id > b.id);

console.log(newUsers);


// -- наисать функцию калькулятора с 2мя числами и колбеком
let calc = function (a,act,b) {
    if(act === '+') return a + b;
    if(act === '-') return a - b;
    if(act === '*') return a * b;
    if(act === '/' && b !== 0) return a / b;
    if(act === '%' && b !== 0) return a % b;
}

console.log(calc(3,'+',4));
// -- написать функцию калькулятора с 3мя числами и колбеком
let calc3 = function (a,act,b,act2,c) {
    let res1 = calc(a,act,b);
    return calc(res1,act2,c);
}
console.log(calc3(3,'+',4,'*',2));
// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================


let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, 
        {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, 
        {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, 
        {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, 
        {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, 
        {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, 
        {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, 
        {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, 
        {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, 
        {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, 
        {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, 
        {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, 
        {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
// - двигун = 2л
// - виробник мерс
// - двигун більше 3х літрів + виробник мерседес
// - двигун більше 3х літрів + виробник субару
// - сили більше ніж 300
// - сили більше ніж 300 + виробник субару
// - мотор серіі ej
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// - двигун меньше 3х літрів + виробник мерседес
// - двигун більше 2л + сили більше 250
// - сили більше 250  + виробник бмв

let filtred = cars.filter(val => val.volume >3);
console.log(filtred);

let filtred1 = cars.filter(val => val.volume === 2);
console.log(filtred1);

let filtred2 = cars.filter(val => val.producer === 'mercedes');
console.log(filtred2);

let filtred3 = cars.filter(val => val.producer === 'mercedes' && val.volume>3);
console.log(filtred3);

let filtred4 = cars.filter(val => val.producer === 'subaru' && val.volume>3);
console.log(filtred4);

let filtred5 = cars.filter(val => val.power > 300);
console.log(filtred5);

let filtred6 = cars.filter(val => val.producer === 'subaru' && val.power > 300);
console.log(filtred6);

let filtred7 = cars.filter(val => val.engine.substring(0,2) === 'ej');
console.log(filtred7);

let filtred8 = cars.filter(val => val.producer === 'subaru' && val.power > 300 && val.engine.substring(0,2) === 'ej');
console.log(filtred8);

let filtred9 = cars.filter(val => val.producer === 'mercedes' && val.volume<3);
console.log(filtred9);

let filtred10 = cars.filter(val => val.volume > 2 && val.power > 250);
console.log(filtred10);

let filtred11 = cars.filter(val => val.producer === 'bmw' && val.power > 250);
console.log(filtred11);

// - взять слдующий массив
let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
                    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, 
                    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, 
                    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, 
                    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, 
                    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, 
                    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, 
                    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, 
                    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, 
                    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
                    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
// -- отсортировать его по id пользователей
// -- отсортировать его по id пользователей в обратном опрядке
// -- отсортировать его по возрасту пользователей
// -- отсортировать его по возрасту пользователей в обратном порядке
// -- отсортировать его по имени пользователей
// -- отсортировать его по имени пользователей в обратном порядке
// -- отсортировать его по названию улицы  в алфавитном порядке
// -- отсортировать его по номеру дома по возрастанию
// -- отфильтровать (оставить) тех кто младше 30
// -- отфильтровать (оставить) тех у кого отрицательный статус
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// -- отфильтровать (оставить) тех у кого номер дома четный

let logA = (arr)=> {
    arr.forEach(element => {
        console.log(element);
    });
}

console.log(usersWithAddress[0]);
usersWithAddress.sort(function(a,b){
    return a.id > b.id;
});
console.log(usersWithAddress[0]);

usersWithAddress.sort(function(a,b){
    return a.id < b.id;
});
console.log(usersWithAddress[0]);

usersWithAddress.sort(function(a,b){
    return a.age > b.age;
});
logA(usersWithAddress);

usersWithAddress.sort(function(a,b){
    return a.age < b.age;
});
logA(usersWithAddress);

usersWithAddress.sort(function(a,b){
    return a.name > b.name;
});
logA(usersWithAddress);

usersWithAddress.sort(function(a,b){
    return a.name < b.name;
});
logA(usersWithAddress);

console.log('sort by number');
usersWithAddress.sort(function(a,b){
    return a.address.number > b.address.number;
});
logA(usersWithAddress);

console.log('sort by number');
usersWithAddress.sort(function(a,b){
    return a.address.street > b.address.street;
});
logA(usersWithAddress);


console.log('age < 30');
let arr1 = usersWithAddress.filter((val)=>{
    return val.age < 30;
})
logA(arr1);

console.log('!val.status');
let arr2 = usersWithAddress.filter((val)=>{
    return !val.status;
})
logA(arr2);

console.log('age < 30  && !val.status');
let arr3 = usersWithAddress.filter((val)=>{
    return val.age < 30 && !val.status;
})
logA(arr3);

console.log('%2');
let arr4 = usersWithAddress.filter(val => !(val.address.number % 2));
logA(arr4);

// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================

// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

class Car {
    constructor(model,year,power,price,driver){
        this.model = model;
        this.year = year;
        this.power = power;
        this.price = price;
        this.driver = driver;
    }
    repairEngine(){
        this.power += + 10;
    }
    changePrice(x){
        this.price += this.price*x;
    }
    changeDriver(name,age,timeempl){
        this.driver = new Driver(name,age,timeempl);
    }
}

class Driver{
    constructor(name,age,timeempl){
        this.name = name;
        this.age = age;
        this.timeempl = timeempl;
    }
    uplevel(){
        this.timeempl++;
    }
}

let c1 = new Car("legacy",2010,250,800000,new Driver('Petia',40,20));
let c2 = new Car("e200",2012,300,700000,new Driver('Petia',40,20));
let c3 = new Car("cx-5",2018,310,900000,new Driver('Kolia',36,12));
let c4 = new Car("6000",1027,350,1000000,new Driver('Alla',23,4));
let c5 = new Car("ck-2",2005,130,350000,new Driver('Sergey',30,7));
let c6 = new Car("jetta",2010,250,650000,new Driver('Dima',25,5));
let c7 = new Car("q3",2019,290,770000,new Driver('Olia',26,0.5));

c1.repairEngine();
c1.changeDriver('Ivan',45,25);
c2.repairEngine();
c2.changeDriver('Vova',50,22);
c3.repairEngine();
c3.changeDriver('Lilia',24,2);

let cars1 = [c1,c2,c3,c4,c5,c6,c7];
console.log(cars1);

for (let i = 0; i < cars1.length; i+=2) {
    cars1[i].repairEngine();
    cars1[i].changePrice(5);
}

cars1.forEach(val => {
    if(val.driver.age>25 && val.driver.timeempl<5){
        val.driver.uplevel();
    }
});

console.log(cars1);

// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.

// Пример:
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];

let minMaxIdx = (x,Arr) => {
    let min= Arr.indexOf(x);
    let max = Arr.lastIndexOf(x);
    return `MinIndex = ${min}, MaxIndex = ${max}`;
}

console.log(minMaxIdx(1,Arr));

console.log(minMaxIdx(4,Arr));

//navigator.geolocation.getCurrentPosition((geo) => {  console.log(geo.coords.latitude);  console.log(geo.coords.longitude);})
