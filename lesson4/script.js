// - створити функцію яка виводить масив
function logArr(x){
    for (const val of x) {
        console.log(val);
    }
}

// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
let arr = [];
function randArr(array,k){
    for (let i = 0; i < k; i++) {
        array.push(Math.round( 100*Math.random()));
    }
    logArr(array);
}
randArr(arr,10);

// - створити функцію яка приймає три числа та виводить та повертає найменьше.
function min3(a,b,c){
    let min;
    if (a<b){
        min = a;
    } else min = b;
    if(c<min){
        min = c;
    }
    return min;
}

console.log(min3(10,4,1))

// - створити функцію яка приймає три числа та виводить та повертає найбільше.
function max3(a,b,c){
    let max;
    if (a>b){
        max = a;
    } else min = b;
    if(c>max){
        max = c;
    }
    return max;
}

console.log(max3(10,4,1))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
console.log( '- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше');
function minmax(){
    let arg = arguments;
    let min = arguments[0];
    let max = arguments[0];
    for (let i = 1; i < arg.length; i++) {
        const el = arg[i];
        if(el>max){
            max =arg[i];
        } 
        if(el<min){
            min =arg[i];
        } 
    }
    console.log(max);
    return min;
}

console.log(minmax(1,3,23,43,111,0));

// - створити функцію яка виводить масив
// - створити функцію яка повертає найбільше число з масиву
// - створити функцію яка повертає найменьше число з масиву
let maxArr = function(array){
    let max = array[0];
    for (const val of array) {
        if(val>max){
            max = val;
        }
    }
    return max;
}
let minArr = function(array){
    let min = array[0];
    for (const val of array) {
        if(val < min){
            min = val;
        }
    }
    return min;
}

console.log(maxArr(arr));
console.log(minArr(arr));

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
let sumArr = function(array){
    let sum = 0;
    for (const val of array) {
        sum += val;
    }
    return sum;
}
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let avgArr = function(array){
    let sum = 0;
    let k = 0;
    for (const val of array) {
        sum += val;
        k++
    }
    return sum/k;
}
// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
let cntObArr = function(array){
    return array.length;
}
// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
let cnlFieldsArr = function(array){
    let k = 0;
    for (const val of array) {
        for (const key in val) {
            k++;
        }
    }
    return k;
}

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
let resArr = function (arr1,arr2) {
    let k = Math.max(arr1.length,arr2.length);
    let newArr =[];
    for (let i = 0; i < k; i++) {
        let val = 0;
        if(arr1[i] !== undefined){
            val +=arr1[i];
        }   
        if(arr2[i]!== undefined){
            val +=arr2[i];
        }   
        newArr.push(val);
    }
    return newArr;
}

console.log(resArr([1,2,3,4],[2,3,4]));

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
let changei = function(array,i){
    if(i+1<array.length && i>=0){
      let elI = array.splice(i,1);
      array.splice(i+1,0,elI[0]);
    }
}


let arr3 = [1,2,3,4,5,24];
console.log(arr3);
changei(arr3,4);

console.log(arr3);

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let sort0 = function(array){
    let arrN = [];
    let arr0 = [];
    for (let i = 0; i < array.length; i++) {
        const val = array[i];
        if (val === 0){
            arr0.push(val);
        } else arrN.push(val);
    }
    Array.prototype.push.apply(arrN,arr0);
    //arrN.splice(array.length,0,arr0);
    return arrN;
}

console.log(sort0([1,0,6,0,3]));
console.log(sort0([0,1,2,3,4]));
console.log(sort0([0,0,1,0]));

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
let hello = function(){
    let bb = document.createElement("div");
    bb.textContent = "Hello owu";
    document.body.appendChild(bb);
}
hello();

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
let addText = function(type,text){
    let bb = document.createElement(type);
    bb.textContent = text;
    document.body.appendChild(bb);
}
addText("p","Lorem");

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. 
//Всі властивості авто в обному блоці
let addCarToDoc = function(cars,idf){
    let elId = document.getElementById(idf);
    
    for (const val of cars) {
        let bb = document.createElement("div");
        let text = '';
        for (const key in val) {
            text += key + ': ' + val[key] + "; ";
        }
        bb.textContent = text;
        elId.appendChild(bb);
    }
}

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

addCarToDoc(arrCar,"cars");

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
// (на основі минулого ДЗ)
let addCarToDoc2 = function(cars,idf){
    let elId = document.getElementById(idf);
    
    for (const val of cars) {
        let el = document.createElement("div");
        for (const key in val) {
            let keyel = document.createElement("div");
            keyel.textContent = key + ': ' + val[key] + "; ";
            el.appendChild(keyel)
        }
        elId.appendChild(el);
        elId.appendChild(document.createElement("p"));
    }
}

addCarToDoc2(arrCar,"cars");

// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:

let merge2arr = function (arr1,arr2,id1,id2) {
    let new_arr = arr1;
    for (let i = 0; i<arr1.length;i++) {
        val1 = arr1[i];
        for (const val2 of arr2) {
            if(val1[id1] === val2[id2]){
                for (const key in val2) {
                    if (key !== id2) {
                        new_arr[i][key] = val2[key];  
                    }
                }
            }
        }
    }
    return new_arr;
}

let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];

console.log(merge2arr(usersWithId,citiesWithId,"id","user_id"));


// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

let createRules = function (arr) {
    let mainDiv = document.createElement("div");
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        let title = document.createElement("div");
        let body = document.createElement("div");
        title.textContent = el.title;
        body.textContent = el.body;
        mainDiv.appendChild(title);
        mainDiv.appendChild(body);
    }
    document.body.appendChild(mainDiv);
}

createRules(rules);

// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!

// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій

// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// ===========додаткове========