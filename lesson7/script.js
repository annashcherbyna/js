// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let divdiv = document.getElementById("divdiv");
let elText = document.createElement('p');
elText.innerText = 'TEXT';
divdiv.appendChild(elText);

let newInput = document.createElement('input');
newInput.type = 'button';
newInput.onclick = () =>{
    elText.hidden = true;
}
divdiv.appendChild(newInput);

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let newform = document.createElement('form');
let newInput1 = document.createElement('input');
newInput1.type = 'button';
newInput1.value = 'hidden me'
newInput1.onclick = () =>{
    newInput1.hidden = true;
}
divdiv.appendChild(newform);
newform.appendChild(newInput1);
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let ageInput = document.forms.mainForm.ageI;
console.log(ageInput);
let submitAge = document.forms.mainForm.submitAge;
console.log(submitAge);
submitAge.onclick = function(){
    if (ageInput.value <=18){
        alert('Your age less then 18');
    }
}

// - Создайте меню, которое раскрывается/сворачивается при клике
let menuitem = document.createElement("div");
let ulMenu = document.createElement('ul');
document.body.appendChild(menuitem);
menuitem.appendChild(ulMenu);
let menu = ["main information","java","javascript","pyton"];
menu.forEach(val => {
        let liMenu = document.createElement('li');
        liMenu.innerText = val;
        ulMenu.appendChild(liMenu);
});
let checkMenu = document.forms.checkMenu;
let ckbox = checkMenu.checkbox;
ckbox.checked = true;
ckbox.onclick = function(){
    if(!ckbox.checked){
        menuitem.hidden = true;
    } else 
    menuitem.hidden = false;
}

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
let arrCom = [{title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title: 'lorem1', body:'lorem ipsum dolo sit ameti1'},
    {title: 'lorem2', body:'lorem ipsum dolo sit ameti2'}];

let divComMenu = document.createElement("div");
arrCom.forEach(val => {
    let eltit = document.createElement('div');
    eltit.innerText = val.title;
    divComMenu.appendChild(eltit);
    let divbody= document.createElement('div');
    divComMenu.appendChild(divbody);
    let elbody = document.createElement('div');
    divbody.appendChild(elbody);
    elbody.innerText = val.body;
    elbody.name = 'elbody';
    elbody.style.width = "300px";
    //elbody.style.display = "inline-block";
    divbody.style.width = "500px";
    
    let but = document.createElement("input");
    but.name = "buttonMenu";
    but.type = "button";
    but.value = "hide";
    but.style.display = "inline-block";
    divbody.appendChild(but);
    but.addEventListener('click',function(){
        let parr = this.parentElement;
        console.log(but);
        let elbody =  parr.childNodes[0];
        console.log(elbody);
        if (elbody.hidden === true){
        elbody.hidden = false;
        but.value = 'hide';
        } else {
            elbody.hidden = true;
            but.value = 'show';
        }
    })
});

document.body.appendChild(divComMenu);

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
document.write("...................................................");

let wrapper = document.createElement("div");
wrapper.style.margin = "10px";
document.body.appendChild(wrapper);
let form1 = document.createElement("form");
let input1 = document.createElement("input");
let input2 = document.createElement("input");
let form2 = document.createElement("form");
let input21 = document.createElement("input");
let input22 = document.createElement("input");
let btn = document.createElement("input");

wrapper.id = "wrapper";
form1.id = "form1";
form1.action = "/save"
form1.style.display =  "inline-block";
form2.id = "form2";
form2.action = "/save"
form2.style.display =  "inline-block";
input1.type = "text";
input1.type = "text";
input21.placeholder = "input text...";
input22.placeholder = "input text...";
input1.placeholder = "input text...";
input2.placeholder = "input text...";
btn.type = "submit";
btn.value = "save";
btn.style.display = "inline-block";

wrapper.appendChild(form1);
wrapper.appendChild(form2);
form1.appendChild(input1);
form1.appendChild(input2);
form2.appendChild(input21);
form2.appendChild(input22);
wrapper.appendChild(btn);

btn.onclick = function(){
    let arrInput1 = Array.from(document.getElementById("form1").getElementsByTagName("input"));
    let arrInput2 = Array.from(document.getElementById("form2").getElementsByTagName("input"));
    let arrInput = arrInput1.concat(arrInput2);
    //console.log(arrInput);
    for (let i = 0; i < arrInput.length; i++) {
        console.log(arrInput[i].value);
    }
}

// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.

let tag = document.createElement("div");
document.body.appendChild(tag);

function createTable(row,col,val,tag) {
    let newTable = document.createElement("table");
    for (let i = 0; i < row; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < col; j++) {
            let td = document.createElement("td");
            td.innerHTML = val;
            td.style.padding = "10px";
            tr.appendChild(td);
        }
        tag.appendChild(tr);
    }
}
//createTable(5,5,tag);


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let div2 = document.createElement("div");
let formTable = document.createElement("form");
formTable.name = "formTable";
let inputRow = document.createElement("input");
inputRow.placeholder = "input count of row";
inputRow.name = "inputRow";

let inputCol = document.createElement("input");
inputCol.placeholder = "input count of column";
inputCol.name = "inputCol";

let inputVal = document.createElement("input");
inputVal.placeholder = "input value";
inputVal.name = "inputVal";

let btnTable = document.createElement("input");
btnTable.type = "button";
btnTable.value = "Create table";

btnTable.onclick = function (el) {
    let cntRow = document.forms.formTable.inputRow.value;
    let cntCol = document.forms.formTable.inputCol.value;
    let val = document.forms.formTable.inputVal.value;
    createTable(cntRow,cntCol,val,div2);
}

document.body.appendChild(div2);
div2.appendChild(formTable);
div2.appendChild(btnTable);
formTable.appendChild(inputRow);
formTable.appendChild(inputCol);
formTable.appendChild(inputVal);

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
let arrImg = [
    {urlImg: "img/img0.png"},
    {urlImg: "img/img1.png"},
    {urlImg: "img/img2.png"},
    {urlImg: "img/img3.png"},
    {urlImg: "img/img4.png"},
    {urlImg: "img/img5.png"}
];

let divIMG = document.createElement("div");
divIMG.style.padding = "15px";
document.body.appendChild(divIMG);
let imgCur = document.createElement("img");
imgCur.width = 300;
let btnImgL = document.createElement("button");
btnImgL.innerText = "left";
let btnImgR = document.createElement("button");
btnImgR.innerText = "Right";

let idx = 0;
imgCur.src = arrImg[idx].urlImg;

divIMG.appendChild(imgCur);
divIMG.appendChild(btnImgL);
divIMG.appendChild(btnImgR);

btnImgL.onclick = () => {
    idx < 1 ? idx = arrImg.length - 1: idx-=1;
    imgCur.src = arrImg[idx].urlImg;
}

btnImgR.onclick = () => {
    idx >= arrImg.length - 1 ? idx = 0: idx+=1;
    imgCur.src = arrImg[idx].urlImg;
}

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

let arrBadWords = ['fuck','bastard','stupid','ass'];
let div3 = document.createElement('div');
let input3 = document.createElement("input");
let btn3 = document.createElement("button");

div3.style.padding = "30px";
btn3.innerText = "check";

document.body.appendChild(div3);
div3.appendChild(input3);
div3.appendChild(btn3);

btn3.addEventListener('click',()=>{
    arrBadWords.includes(input3.value)? alert("bad word"): alert("OK");
})

input3.onfocus = (el) => {
    input3.style.backgroundColor  = 'white';
    console.log(el);
}

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку


btn3.addEventListener('click',() =>{
    let arrW = input3.value.split(' ');
    let bad = false;
    arrW.forEach(el => {
       if (arrBadWords.includes(el.toLowerCase())) bad = true;
    });
    bad? input3.style.backgroundColor = "red": input3.style.backgroundColor = "green";
});

// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
let container = document.getElementById("content");
let wrap = document.getElementById("wrap");
let arrH2 = document.getElementsByTagName("h2");
let ul = document.createElement("ul");

for (let i = 0; i < arrH2.length; i++) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    let yakor = 'y' +i;
    a.href = '#'+ yakor;
    arrH2[i].setAttribute('id',yakor);
    a.innerText = arrH2[i].innerText;
    li.appendChild(a);
    ul.appendChild(li);
}
content.style.width = "20%";
content.style.float = 'left';
wrap.style.width = '80%';
wrap.style.float = 'left';
container.appendChild(ul);

// -- взять массив пользователей
let usersWithAddress = [
                {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
                {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
                {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
                {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
                {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
                {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
                {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
                {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
                {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
            ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

let box1 = document.createElement("input");
let l1 = document.createElement("label");
l1.innerText = 'статус false';
box1.type = "checkbox";
let box2 = document.createElement("input");
box2.type = "checkbox";
let l2 = document.createElement("label");
l2.innerText = '>=29 лет '
let box3 = document.createElement("input");
box3.type = "checkbox";
let l3 = document.createElement("label");
l3.innerText = "город киев"

let btnFilter = document.createElement("button");
btnFilter.innerText = "filter"

let forCheckbox = document.createElement('div');
let divForUser = document.createElement('div');
dro(usersWithAddress);
document.body.appendChild(divForUser);



function dro(arr) {
    arr.forEach(el => {
        let elDiv = document.createElement('div');
        elDiv.innerText = JSON.stringify(el);
        divForUser.appendChild(elDiv);
    })
}


btnFilter.onclick = () => {
    divForUser.innerText = '';
    let arrDrow = usersWithAddress;
    if (box1.checked === true){
        arrDrow = arrDrow.filter(el => el.status === false);
    } 
    if (box2.checked === true){
        arrDrow = arrDrow.filter(el => el.age >=29);
    } 
    if (box3.checked === true){
        arrDrow = arrDrow.filter(el => el.address.city === 'Kyiv');
    } 
    dro(arrDrow);
}


document.body.appendChild(l1);
document.body.appendChild(box1);
document.body.appendChild(l2);
document.body.appendChild(box2);
document.body.appendChild(l3);
document.body.appendChild(box3);
document.body.appendChild(btnFilter);
document.body.appendChild(forCheckbox);


// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне


// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

