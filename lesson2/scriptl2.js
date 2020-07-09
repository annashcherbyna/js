//03.07.2020 Анна Щербина Лекция 2

//--створити масив та вивести його в консоль:
//- з 5 числових значень
//- з 5 стічкових значень
//- з 5 значень стрічкового, числового та булевого типу
//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arr = [1,2,3,4,5];
let arrStr = ['a','b','c','d','e'];
let arrAll = [1,2,3,4,5,'a','b','c','d','e',true,false,true,false,true];
console.log(arr);
console.log(arrStr);
console.log(arrAll);

let arr1 = [];
arr1[0] = 123;
arr1[1] = 12;
console.log(arr1);

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
for(let i = 0; i<10;i++){
    document.write(`<div>hi</div>`);
}
for(let i = 0; i<10;i++){
    document.write(`<div>hi ${i}</div>`);
}
let i = 0;
while(i<20){
    document.write(`<h1>while</h1>`);
    i++;
}
i = 0;
while(i<20){
    document.write(`<h1>while ${i}</h1>`);
    i++;
}
//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arr2 = [1,2,3,4,5,6,7,8,9,10];
for(let i = 0; i<arr2.length;i++){
    console.log(arr2[i]);
}
let arr3 = ['a','b','c','d','e','f','g','h','i','j'];
for(let i = 0; i<arr3.length;i++){
    console.log(arr3[i]);
}
let arr4 = [123,'b','c','d','e',true,'g','h','i','j'];
for(let i = 0; i<arr4.length;i++){
    console.log(arr4[i]);
}

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let arr5 = [123,90,'c','d','e',true,'g',false,'i',50];
for(let i = 0; i<arr5.length;i++){
    if(typeof(arr5[i]) === "boolean"){
        console.log(arr5[i]);
    }
}
for(let i = 0; i<arr5.length;i++){
    if(typeof(arr5[i]) === "string"){
        console.log(arr5[i]);
    }
}
for(let i = 0; i<arr5.length;i++){
    if(typeof(arr5[i]) === "number"){
        console.log(arr5[i]);
    }
}

//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let arr6 = [];
arr6[0] = 0;
arr6[1] = 'a';
arr6[2] = true;
arr6[3]= 'anna';
arr6[4]= '100500';
arr6[5]= 100500;
arr6[6]= false;
arr6[7]= {'a': 100,'b':200};
arr6[8]= [0,2,4,5,6,7];
arr6[9]= -999;

for(let i = 0; i<arr6.length;i++){
    console.log(arr6[i]);
}
//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for(let i = 0; i<10;i++){
    console.log(i);
    document.write(i + '<br>');
}
//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for(let i = 0; i<100;i++){
    console.log(i);
    document.write(i + '<br>');
}
//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for(let i = 0; i<100;i+=2){
    console.log(i);
    document.write(i + '<br>');
}
//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
document.write('Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write' +  '<br>');
for(let i = 0; i<100;i+=1){
    if(i%2 === 0){
        console.log(i);
        document.write(i + '<br>');
    }
}
//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
document.write('Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки.' +  '<br>');
for(let i = 0; i<100;i+=1){
    if(i%2 !== 0){
        console.log(i);
        document.write(i + '<br>');
    }
}

//- Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
for(let mm = 0;mm<2;mm++){
    for(let ss = 0;ss<60;ss++){
        console.log(`${mm} min ${ss} sec`)
    }
}

//- Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
for(let hh = 0;hh<3;hh++){
    for(let mm = 0; mm<60;mm++){
        if (hh === 2 && mm > 20) break;
        for(let ss = 0;ss<60;ss++){
            if (hh === 2 && mm === 20 && ss >0) break;
            document.write(`${hh} hour ${mm} min ${ss} sec <br>`);
        }
    }
}

//Додатково
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let arr7 = [ 'a', 'b', 'c'];
let slovo ='';
for(let i = 0;i<arr7.length;i++){
    slovo = slovo + arr7[i];
}
console.log(slovo);
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
i = 0;
slovo ='';
while(i<arr7.length){
    slovo = slovo+ arr7[i];
    i++;
}
console.log(slovo);

//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
slovo ='';
for(let val of arr7){
    slovo = slovo+ val;
}
console.log(slovo);

//=================
//=================
//=================
//=================

//- Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
arr7.push(1);
arr7.push(2);
arr7.push(3);
console.log(arr7);

//- Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
console.log('Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].');
let arr8 = [1,2,3];
for(let i = 0,j = arr8.length-1;i<arr8.length && i<j;i++,j--){
	let temp = arr8[i];
	arr8[i] = arr8[j];
	arr8[j] = temp;
}
console.log(arr8);
//- Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
let arr9 = [1,2,3];
arr9.push(4);
arr9.push(5);
arr9.push(6);
console.log(arr9);
//- Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
let arr10 = [1,2,3];
arr10.unshift(4);
arr10.unshift(5);
arr10.unshift(6);
console.log(arr10);

//- Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
let arr11 = ['js', 'css', 'jq'];
document.write(arr11.shift() + '<br>');
//- Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
document.write(arr11.pop() + '<br>');

//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
let arr12 = [1, 2, 3, 4, 5];
arr12 = arr12.slice(3);
console.log(arr12);

//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
let arr13 = [1, 2, 3, 4, 5];
arr13 = arr13.slice(0,2);
console.log(arr13);

//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
let arr14 = [1, 2, 3, 4, 5];
arr14.splice(1,2);
console.log(arr14);

let arr15 = [1, 2, 3, 4, 5];
arr15.splice(2,0,'a', 'b', 'c');
console.log(arr15);

let arr16 = [1, 2, 3, 4, 5];
arr16.splice(1,0,'a', 'b');
arr16.splice(6,0, 'c');
arr16.splice(8,0,'e');
console.log(arr16);

//- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
arr17 = [2,5,34,2,12,34,77,53,100,99]; 
console.log(arr17);
for(let val of arr17){
    if(val%2 === 0) {
        console.log(val);
    }
}

let arr18 = [];
for(let val of arr17){
    arr18.push(val);
}
console.log(arr18);

let arr19 = [];
for(let i = 0;i<arr17.length;i++){
    arr19[i] = arr17[i];
}
console.log(arr19);

//============

//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//1. перебрати його циклом while
// 2. перебрати його циклом for
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
//

let arr20 =[2,17,13,6,22,31,45,66,100,-18];
i =0;
while(i<arr20.length){
    console.log(arr20[i]);
    i++;
}
for(val of arr20){
    console.log(val);
}
i =0;
while(i<arr20.length){
    if (arr20[i] % 2 !== 0) {
        console.log(arr20[i]);
    }
    i++;
}
for(val of arr20){
    if(val % 2 !== 0){
        console.log(val);
    }
}
i =0;
while(i<arr20.length){
    if (arr20[i] % 2 === 0) {
        console.log(arr20[i]);
    }
    i++;
}
for(val of arr20){
    if(val % 2 === 0){
        console.log(val);
    }
}
console.log('замінити кожне число кратне 3 на слово "okten"');
for(let i = 0;i<arr20.length;i++){
    if (arr20[i]%3 === 0) {
        arr20[i] = 'okten';
    }
    console.log(arr20[i]);
}
console.log('вивести масив в зворотньому порядку.');
for(let i = arr20.length-1;i>=0;i--){
    console.log(arr20[i]);
}

//--9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
i = arr20.length-1;
console.log('while-------');
while(i>=0){
    console.log(arr20[i]);
    i--;
}
console.log('for---------');
for(let i = arr20.length-1;i>=0;i--){
    console.log(arr20[i]);
}
i = arr20.length-1;
console.log('while nepar----------');
while(i>=0){
    if (arr20[i] % 2 !== 0) {
        console.log(arr20[i]);
    }
    i--;
}
console.log('for nepar--------');
for(let i = arr20.length-1;i>=0;i--){
    if(arr20[i] % 2 !== 0){
        console.log(arr20[i]);
    }
}
i = arr20.length-1;
console.log('while par---------');
while(i>=0){
    if (arr20[i] % 2 === 0) {
        console.log(arr20[i]);
    }
    i--;
}
console.log('for par---------');
for(let i = arr20.length-1;i>=0;i--){
    if(arr20[i] % 2 === 0){
        console.log(arr20[i]);
    }
}
//10
// створити пустий масив та :
////- заповнити його 50 парними числами за допомоги циклу.
//- заповнити його 50 непарними числами за допомоги циклу.
let arr21 = [];
for (let i = 0, j = 0; i < 100; i++) {
    if( i % 2 === 0){
        j++;
        arr21.push(i);
    }
}
console.log(arr21);
for (let i = 0, j = 0; i < 100; i++) {
    if( i % 2 !== 0){
        j++;
        arr21.push(i);
    }
}
console.log(arr21);


// 1
//  створити пустий масив та :
// 1. заповнити його 50 парними числами за допомоги циклу.
// 2. заповнити його 50 непарними числами за допомоги циклу.
// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
//  диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
//  2. вывести на консоль  каждый третий елемент
//  3. вывести на консоль  каждый третий елемент
//  но при условии что его значение является парным.
//  4. вывести на консоль  каждый третий елемент
//  но при условии что он имеет парное значение и
//  записать их в другой массив.
//  5. Вывести каждый елемент массива у которого соседний с права элемент - парный
let arr22 = [];
for (let i = 0; i < 20; i++) {
    let rd = Math.random() * (732 - 8) + 8;
    rd = Math.round(rd);
    arr22.push(rd);
}
console.log(arr22);
console.log('kozen 3-i');
for (let i = 0; i < arr22.length; i+=3) {
    console.log(arr22[i]);
}
let arr33 = [];
console.log('kozen 3-i');
for (let i = 0; i < arr22.length; i+=3) {
    if(arr22[i] %2 === 0){
        console.log(arr22[i]);
        arr33.push(arr22[i]);
    }
}
console.log('Вывести каждый елемент массива у которого соседний с права элемент - парный');
for (let i = 0; i < arr22.length-1; i++) {
    if(arr22[i+1] % 2 === 0){
        console.log(arr22[i]);
    }
} 

//   5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
let arr24 = [100,250,50,168,120,345,188];
let sum = 0;
for (const val of arr24) {
    sum+= val;
}
console.log(sum / arr24.length + '  avg check');

//3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let arr25 = [];
for (let i = 0; i < 20; i++) {
    let rd = Math.random() * 100;
    arr25.push(Math.round(rd));
}
let arr26 = [];
for (let i = 0; i < arr25.length; i++) {
    arr26 = 5 * arr25[i];
}

// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
//  додати його в інший масив.

let arr27 = [123,90,'c','d','e',true,'g',false,'i',50];
let arr28 = [];
for (let i = 0; i < arr27.length; i++) {
    if(typeof arr27[i] === "number"){
        arr28.push(arr27[i]);
    } 
}
console.log(arr28);
