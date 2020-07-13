// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
let pCounter = document.getElementById("content");
// - отримує текст з блоку з id "rules"
let elRules = document.getElementById("rules");
console.log(elRules.innerText);
// - замініть текст параграфа з id 'content' на будь-який інший
pCounter.textContent = 'new text';
// - замініть текст параграфа з id 'rules' на будь-який інший
elRules.textContent = 'new text el';
// - змініть кожному елементу колір фону на червоний
pCounter.style.backgroundColor = 'rgb(100,150,200)';
// - змініть кожному елементу колір тексту на синій
elRules.style.backgroundColor = 'rgb(150,80,200)';
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(elRules.classList);
// - отримати всі елементи з класом fc_rules
let elClass = document.getElementsByClassName("fc_rules")
// - поміняти колір тексту у всіх елементів fc_rules на червоний
for (const val of elClass) {
    val.style.color ='red';
}
// ====================
// ====================
// ====================
