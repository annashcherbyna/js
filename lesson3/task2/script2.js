// =================
// =====class=======
// =================
// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
let main_header = document.getElementById('main_header');
main_header.style.color = 'rgb(100,50,80)';
// -- робить шириниу елементу ul 400 пікселів
let ulAll = document.getElementsByTagName('ul');
for (const val of ulAll) {
    val.style.width = '400px';
}

// -- робить шириниу всіх елементів з класом linkList шириною 50%
let allLinkList = document.getElementsByClassName('linkList');
for (const val of allLinkList) {
    val.style.width = '200px';
}
// -- отримує текст який зберігається в елементі з класом listElement2
let ellistElement2 = document.getElementsByClassName('listElement2');
let textlistElement2 = '';
for (const val of ellistElement2) {
    textlistElement2 = textlistElement2 + val.innerText;
}
console.log(textlistElement2);

// -- отримує всі елементи li та змінює ім колір фону на сірий
let arrLi = document.getElementsByTagName('li');
for (const val of arrLi) {
    val.style.backgroundColor = 'rgb(150,150,80';
}
// -- отримує всі елементи 'a' та додає їм клас anchor
let arrA = document.getElementsByTagName('a');
for (const val of arrA) {
    val.classList.add('anchor');
}
// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (const val of arrA) {
    if(val.innerText === 'link3'){
        val.style.fontSize = '40px';
    }
}
// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (const val of arrA) {
    let textA = val.innerText;
    val.classList.add('element_' + textA);

}
// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let color = prompt('enter color, please');
let arrSubHeader = document.getElementsByClassName('sub-header');
for (const val of arrSubHeader) {
    val.style.backgroundColor = color;
}
// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let color2 = prompt('enter color again, please');
for (const val of arrSubHeader) {
    if(val.innerText === 'content 2 segment'){
        val.style.color = color2;
    }
}
// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let text3 = prompt('enter text, please');
let arrContent1 = document.getElementsByClassName('content_1');
for (const val of arrContent1) {
    val.innerText = text3;
}
// -- отримати елементи p та змінити їм paddin на довільне значення
let arrP = document.getElementsByTagName('p');
for (const val of arrP) {
    val.style.padding = '20px';
}
// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
let arrText2 = document.getElementsByClassName('text2');
for (const val of arrText2) {
    val.innerText = 'ddddddd';
}