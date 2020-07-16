// ==============================================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

// function Tag (name,description,arratrib){
//     this.name = name;
//     this.description = description;
//     this.arratrib = arratrib;
// }

// function Attr(name,description){
//     this.name = name;
//     this.description = description;
// }
// let arrA = [];
// arrA.push(new Attr('href','Задает адрес документа, на который следует перейти.'));
// arrA.push(new Attr('title','Добавляет всплывающую подсказку к тексту ссылки.'));

// let tagA = new Tag('a','Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.',arrA)
// console.log(tagA);

// let arrAdiv = [];
// arrAdiv.push(new Attr('align','Задает выравнивание содержимого тега <div>.'));
// arrAdiv.push(new Attr('title','Добавляет всплывающую подсказку к содержимому.'));

// let tagDiv = new Tag('div','Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.',arrAdiv)
// console.log(tagDiv);

// let arrH1 = [];
// arrH1.push(new Attr('align','Определяет выравнивание заголовка.'));
// arrH1.push(new Attr('id','Указывает имя стилевого идентификатора.'));

// let tagH1 = new Tag('h1','HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.',arrH1)
// console.log(tagH1);

// let attrSpan = [];
// attrSpan.push(new Attr('class','Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'));
// attrSpan.push(new Attr('style','Применяется для определения стиля элемента с помощью правил CSS.'));

// let tagSpan = new Tag('span','Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить цвет и размер первой буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.',attrSpan)
// console.log(tagSpan);

// let attrInput = [];
// attrInput.push(new Attr('type','Сообщает браузеру, к какому типу относится элемент формы.'));
// attrInput.push(new Attr('value','Значение элемента.'));

// let tagInput = new Tag('input','Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент <input> не требуется помещать внутрь контейнера <form>, определяющего форму, но если введенные пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная программа, то указывать <form> обязательно. То же самое обстоит и в случае обработки данных с помощью клиентских приложений, например, скриптов на языке JavaScript.',attrInput)
// console.log(tagInput);

// let attrForm = [];
// attrForm.push(new Attr('action','Адрес программы или документа, который обрабатывает данные формы.'));
// attrForm.push(new Attr('method','Метод протокола HTTP.'));

// let tagForm = new Tag('form','Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.',attrForm)
// console.log(tagForm);

// let attrOption = [];
// attrOption.push(new Attr('label','Указание метки пункта списка.'));
// attrOption.push(new Attr('selected','Заранее устанавливает определенный пункт списка выделенным.'));

// let tagOption = new Tag('option','Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.',attrOption)
// console.log(tagOption);

// let attrSelect = [];
// attrSelect.push(new Attr('size','Количество отображаемых строк списка.'));
// attrSelect.push(new Attr('multiply','Позволяет одновременно выбирать сразу несколько элементов списка.'));

// let tagSelect = new Tag('select','Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Каждый пункт создается с помощью тега <option>, который должен быть вложен в контейнер <select>. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.',attrSelect)
// console.log(tagSelect);

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================

class Tag {
    constructor(name,description,arratrib){
        this.name = name;
        this.description = description;
        this.arratrib = arratrib;
    }
}

class Attr{
    constructor(name,description){
        this.name = name;
        this.description = description;
    }
}

let arrA = [];
arrA.push(new Attr('href','Задает адрес документа, на который следует перейти.'));
arrA.push(new Attr('title','Добавляет всплывающую подсказку к тексту ссылки.'));

let tagA = new Tag('a','Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.',arrA)
console.log(tagA);

let arrAdiv = [];
arrAdiv.push(new Attr('align','Задает выравнивание содержимого тега <div>.'));
arrAdiv.push(new Attr('title','Добавляет всплывающую подсказку к содержимому.'));

let tagDiv = new Tag('div','Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.',arrAdiv)
console.log(tagDiv);

let arrH1 = [];
arrH1.push(new Attr('align','Определяет выравнивание заголовка.'));
arrH1.push(new Attr('id','Указывает имя стилевого идентификатора.'));

let tagH1 = new Tag('h1','HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.',arrH1)
console.log(tagH1);

let attrSpan = [];
attrSpan.push(new Attr('class','Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'));
attrSpan.push(new Attr('style','Применяется для определения стиля элемента с помощью правил CSS.'));

let tagSpan = new Tag('span','Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить цвет и размер первой буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.',attrSpan)
console.log(tagSpan);

let attrInput = [];
attrInput.push(new Attr('type','Сообщает браузеру, к какому типу относится элемент формы.'));
attrInput.push(new Attr('value','Значение элемента.'));

let tagInput = new Tag('input','Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент <input> не требуется помещать внутрь контейнера <form>, определяющего форму, но если введенные пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная программа, то указывать <form> обязательно. То же самое обстоит и в случае обработки данных с помощью клиентских приложений, например, скриптов на языке JavaScript.',attrInput)
console.log(tagInput);

let attrForm = [];
attrForm.push(new Attr('action','Адрес программы или документа, который обрабатывает данные формы.'));
attrForm.push(new Attr('method','Метод протокола HTTP.'));

let tagForm = new Tag('form','Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.',attrForm)
console.log(tagForm);

let attrOption = [];
attrOption.push(new Attr('label','Указание метки пункта списка.'));
attrOption.push(new Attr('selected','Заранее устанавливает определенный пункт списка выделенным.'));

let tagOption = new Tag('option','Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.',attrOption)
console.log(tagOption);

let attrSelect = [];
attrSelect.push(new Attr('size','Количество отображаемых строк списка.'));
attrSelect.push(new Attr('multiply','Позволяет одновременно выбирать сразу несколько элементов списка.'));

let tagSelect = new Tag('select','Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Каждый пункт создается с помощью тега <option>, который должен быть вложен в контейнер <select>. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.',attrSelect)
console.log(tagSelect);
// ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================



// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
let Car = {
    model: "BMW X5",
    produser: "BMW AG",
    year: 2015,
    speed: 220,
    engine: 4.8,
    drive: function () {
        console.log(`їдемо зі швидкістю ${this.speed} на годину`);
    },
    info: function(){
        console.log('Car:');
        for (const key in this) {
            if (this.hasOwnProperty(key) && typeof this[key] !== 'function') {
                if(typeof this[key] !== 'object'){
                    console.log(`${key}: ${this[key]}`)
                } else {
                    console.log(`${key}:`);
                    console.log( this[key]);
                }
            }
        }
    },
    increaseMaxSpeed: function(newSpeed){
        this.speed += newSpeed;
    },
    changeYear:function(newValue){
        this.year = newValue;
    },
    addDriver:function(driver){
        this.driver = driver;
    }
}

Car.drive();
Car.info();
Car.changeYear(2005);
Car.increaseMaxSpeed(20);
Car.addDriver({name:'Vasia',age:35});
Car.info();

// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

function Car1(model, produser,year,speed,engine){
    this.model = model;
    this.produser = produser;
    this.year = year;
    this.speed = speed;
    this.engine = engine;
    this.drive= function () {
        console.log(`їдемо зі швидкістю ${this.speed} на годину`);
    };
    this.info = function(){
        console.log('Car:');
        for (const key in this) {
            if (this.hasOwnProperty(key) && typeof this[key] !== 'function') {
                if(typeof this[key] !== 'object'){
                    console.log(`${key}: ${this[key]}`)
                } else {
                    console.log(`${key}:`);
                    console.log( this[key]);
                }
            }
        }
    };
    this.increaseMaxSpeed = function(newSpeed){
        this.speed += newSpeed;
    };
    this.changeYear = function(newValue){
        this.year = newValue;
    };
    this.addDriver = function(driver){
        this.driver = driver;
    }
}

let C1 = new Car1("BMW X3","BMW AG",2018,210,3);
console.log(C1);

C1.drive();
C1.info();
C1.changeYear(2005);
C1.increaseMaxSpeed(20);
C1.addDriver({name:'Vasia',age:35});
C1.info();

// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
class Car2{
    constructor(model, produser,year,speed,engine){
        this.model = model;
        this.produser = produser;
        this.year = year;
        this.speed = peed;
        this.engine = engine;
    };
    drive() {
        console.log(`їдемо зі швидкістю ${this.speed} на годину`);
    }
    info(){
        console.log('Car:');
        for (const key in this) {
            if (this.hasOwnProperty(key) && typeof this[key] !== 'function') {
                if(typeof this[key] !== 'object'){
                    console.log(`${key}: ${this[key]}`)
                } else {
                    console.log(`${key}:`);
                    console.log( this[key]);
                }
            }
        }
    }
    increaseMaxSpeed(newSpeed){
        this.speed += newSpeed;
    }
    changeYear(newValue){
        this.year = newValue;
    }
    addDriver(driver){
        this.driver = driver;
    }
}

let C2 = new Car1("BMW X6","BMW AG",2018,250,4);
console.log(C1);

C2.drive();
C2.info();
C2.changeYear(2020);
C2.increaseMaxSpeed(20);
C2.addDriver({name:'Vasia',age:35});
C2.info();

// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
class Cinderella {
    constructor(name,age,sizefoot){
        this.name = name;
        this.age = age;
        this.sizefoot = sizefoot;
    }
}

let arrCinderellas = [];
arrCinderellas.push(new Cinderella('Alisa',18,37));
arrCinderellas.push(new Cinderella('Misha',22,39));
arrCinderellas.push(new Cinderella('Masha',16,36));
arrCinderellas.push(new Cinderella('Dasha',7,30));
arrCinderellas.push(new Cinderella('Anika',10,32));
arrCinderellas.push(new Cinderella('Katia',19,38));
arrCinderellas.push(new Cinderella('Sveta',33,35));
arrCinderellas.push(new Cinderella('Monika',35,40));
arrCinderellas.push(new Cinderella('Kristina',17,37));
arrCinderellas.push(new Cinderella('Asia',24,41));

class Prince{
    constructor(name,age,sizeshoe){
        this.name = name;
        this.age = age;
        this.sizeshoe = sizeshoe;
    }
}
let PrinceRomire = new Prince('Romire',40,38);

for (const val of arrCinderellas) {
    if(PrinceRomire.sizeshoe === val.sizefoot){
        console.log(`Cinderella: ${val.name}`)
    }
}


// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

function Cinderella1(name,age,sizefoot) {
        this.name = name;
        this.age = age;
        this.sizefoot = sizefoot;
}

let arrCinderellas1 = [];
arrCinderellas1.push(new Cinderella1('Alisa',18,37));
arrCinderellas1.push(new Cinderella1('Misha',22,39));
arrCinderellas1.push(new Cinderella1('Masha',16,36));
arrCinderellas1.push(new Cinderella1('Dasha',7,30));
arrCinderellas1.push(new Cinderella1('Anika',10,32));
arrCinderellas1.push(new Cinderella1('Katia',19,38));
arrCinderellas1.push(new Cinderella1('Sveta',33,35));
arrCinderellas1.push(new Cinderella1('Monika',35,40));
arrCinderellas1.push(new Cinderella1('Kristina',17,37));
arrCinderellas1.push(new Cinderella1('Asia',24,41));

function Prince1(name,age,sizeshoe) {
        this.name = name;
        this.age = age;
        this.sizeshoe = sizeshoe;
        this.findCinderella = function(arrCinderellas){
            for (const val of arrCinderellas) {
                if(this.sizeshoe === val.sizefoot){
                    console.log(`Cinderella: ${val.name}`)
                }
            }
        }
}
let PrinceRomire1 = new Prince1('Romire',40,38);
PrinceRomire1.findCinderella(arrCinderellas1);

