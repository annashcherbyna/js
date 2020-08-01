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
let form3 = document.createElement("form");
let input3 = document.createElement("input");
let textarea3 = document.createElement("textarea");
let checkbox3 = document.createElement("input");
checkbox3.type = "checkbox";

if(localStorage.getItem("input3")){
    input3.value = localStorage.getItem("input3");
}
if(localStorage.getItem("textarea3")){
    textarea3.value = localStorage.getItem("textarea3");
}
if(localStorage.getItem("checkbox3")){
    localStorage.getItem("checkbox3") === 'false' ? checkbox3.checked = false : checkbox3.checked = true;
}

input3.addEventListener('input',()=>{
    localStorage.setItem("input3", input3.value);
})
textarea3.addEventListener('input',()=>{
    localStorage.setItem("textarea3", textarea3.value);
})
checkbox3.addEventListener('click',()=>{
    localStorage.setItem("checkbox3", checkbox3.checked);
})

form3.appendChild(input3);
form3.appendChild(textarea3);
form3.appendChild(checkbox3);

document.body.appendChild(form3);


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

let btnCreateNew = document.createElement("button");
btnCreateNew.innerText = "CREATE";

let btnSave = document.createElement("button");
btnSave.innerText = "SAVE";

let divShow = document.createElement("div");


let menuBook = document.createElement("div");
let btnCreate = document.createElement("button");
btnCreate.innerText = "Create new contact";
let btnShow = document.createElement("button");
btnShow.innerText = "Show all contacts";
let form = document.createElement("form");

btnCreate.onclick = () => {
    formCreate();
}

btnShow.onclick = () => showAll();

document.body.appendChild(menuBook);
menuBook.appendChild(btnCreate);
menuBook.appendChild(btnShow);
document.body.appendChild(divShow);
document.body.appendChild(form);
showAll();

btnCreateNew.onclick = ()=>{
    let tempUser = new User(name.value,phone.value,email.value,company.value,department.value,dayBirthday.value);
    console.log(tempUser);
    users.push(tempUser);
    localStorage.setItem("users",JSON.stringify(users));
}

function formCreate(i){
    divShow.innerHTML = '';
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
    
    if (i){
        name.value = users[i].name;
        phone.value = users[i].phone;
        email.value = users[i].email;
        company.value = users[i].company;
        department.value = users[i].department;
        dayBirthday.value = users[i].dayBirthday;
        form.appendChild(btnSave);

        btnSave.onclick = ()=>{
            let tempUser = new User(name.value,phone.value,email.value,company.value,department.value,dayBirthday.value);
            console.log(tempUser);
            users[i] = tempUser;
            localStorage.setItem("users",JSON.stringify(users));
        }
    } else form.appendChild(btnCreateNew);
}

function showAll () {
    form.innerHTML = '';
    divShow.innerHTML = '';
    for(let i =0 ;i<users.length;i++) {
        el = users[i];
        let divUser = document.createElement("div");
        divUser.innerText = JSON.stringify(el);

        let btnChange = document.createElement("button");
        btnChange.innerText = "Change";
        let btnDel = document.createElement("button");
        btnDel.innerText = "Delete";
        divUser.appendChild(btnChange);
        divUser.appendChild(btnDel);
        divShow.appendChild(divUser);

        btnChange.onclick = () => {
            formCreate(i);
        }

        btnDel.onclick =()=>{
            users.splice(i,1);
            localStorage.setItem("users",JSON.stringify(users));
            showAll();
        }
    };
}



