// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

let area = document.createElement("textarea");
let areaLocal = localStorage.getItem("textarea");
if (areaLocal){
    area.value = areaLocal;
}

area.addEventListener('input', () => {
    console.log(area.value);
    localStorage.setItem("textarea",area.value);
});

document.body.appendChild(area);



// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.

// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

document.body.appendChild(document.createElement("p"));

let area1 = document.createElement("textarea");
let i = 0;

let arrHist = [];

let redrow = (i,arr)=>{
    area1.value = arrHist[i];
}

if (localStorage.getItem("arrHist")){
    arrHist = JSON.parse(localStorage.getItem("arrHist"));
    i = arrHist.length-1;
    redrow(i,arrHist);
} else {
    localStorage.setItem("arrHist",JSON.stringify(arrHist));
}

let btn = document.createElement("button");
btn.innerText = "SAVE";

btn.onclick = () =>{
    arrHist.push(area1.value);
    console.log(arrHist);
    localStorage.setItem("arrHist",JSON.stringify(arrHist));
} 


let btnleft = document.createElement("button");
btnleft.innerText = "Left";
let btnRight = document.createElement("button");
btnRight.innerText = "Right";

btnleft.onclick = ()=>{
    i>0? i-=1: i=arrHist.length-1;
    redrow(i,arrHist);
}

btnRight.onclick = ()=>{
    i<arrHist.length-1? i+=1: i=0;
    redrow(i,arrHist);
}

document.body.appendChild(area1);
document.body.appendChild(btn);

document.body.appendChild(document.createElement("div")); //разделитель

document.body.appendChild(btnleft);
document.body.appendChild(btnRight);


// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

document.body.appendChild(document.createElement("p")); //разделитель

class User {
    constructor(name,phone,email,company,department,dayBirthday){
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.company = company;
        this.department = department;
        this.dayBirthday = dayBirthday;
    }
}

let users = [];
if(localStorage.getItem("users")){
    users = JSON.parse(localStorage.getItem("users"));
} else {
    ocalStorage.setItem("users",JSON.stringify(users));
}

let nameLabel = document.createElement("label");
nameLabel.innerText = "Enter your name: "
let name = document.createElement("input");

let phoneLabel = document.createElement("label");
phoneLabel.innerText = "Enter your phone: "
let phone = document.createElement("input");

let emailLabel = document.createElement("label");
emailLabel.innerText = "Enter your email: "
let email = document.createElement("input");

let companyLabel = document.createElement("label");
companyLabel.innerText = "Enter your company: "
let company = document.createElement("input");

let departmentLabel = document.createElement("label");
departmentLabel.innerText = "Enter your department: "
let department = document.createElement("input");

let dayBirthdayLabel = document.createElement("label");
dayBirthdayLabel.innerText = "Enter your day of Birthday: "
let dayBirthday = document.createElement("input");

let btnSave = document.createElement("button");
btnSave.innerText = "SAVE";

btnSave.onclick = ()=>{
    let tempUser = new User(name.value,phone.value,email.value,company.value,department.value,dayBirthday.value);
    console.log(tempUser);
    users.push(tempUser);
    localStorage.setItem("users",JSON.stringify(users));
}

function formCreate(){
    let form = document.createElement("form");
    document.body.appendChild(form);
    form.appendChild(nameLabel);
    form.appendChild(name);
    form.appendChild(document.createElement("div")); //разделитель
    form.appendChild(phoneLabel);
    form.appendChild(phone);
    form.appendChild(document.createElement("div")); //разделитель
    form.appendChild(emailLabel);
    form.appendChild(email);
    form.appendChild(document.createElement("div")); //разделитель
    form.appendChild(companyLabel);
    form.appendChild(company);
    form.appendChild(document.createElement("div")); //разделитель
    form.appendChild(departmentLabel);
    form.appendChild(department);
    form.appendChild(document.createElement("div")); //разделитель
    form.appendChild(dayBirthdayLabel);
    form.appendChild(dayBirthday);
    form.appendChild(btnSave);
}

function showAll (tag) {
    users.forEach(el => {
        let divUser = document.createElement("div");
        divUser.innerText = JSON.stringify(el);

        let btnChange = document.createElement("button");
        btnChange.innerText = "Change";
        divUser.appendChild(btnChange);
        tag.appendChild(divUser);

        btnChange.onclick = () => {
            formCreate();
        }
    });
}

let menuBook = document.createElement("div");
let btnCreate = document.createElement("button");
btnCreate.innerText = "Create new contact";
let btnShow = document.createElement("button");
btnShow.innerText = "Show all contacts";

btnCreate.onclick = () => {
    formCreate();
}

btnShow.onclick = () => showAll(document.body);

document.body.appendChild(menuBook);
menuBook.appendChild(btnCreate);
menuBook.appendChild(btnShow);