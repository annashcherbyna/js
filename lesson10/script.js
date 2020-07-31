// 1) Створити карту користувача(User Card):
// Створити функцію «userCard» яка приймає число(будь-яке число) і повертає
// об’єкт з методами:
// const card3 = userCard(3); // returns an object with methods
// User Card методи:
// getCardOptions. Дана функція повертає об’єкт котрий містить інформацію про карту:
// card3.getCardOptions(); // returns options object with card info
// Об’єкт має містити такі властивості:
// • balance (по замовчуванням 100)
// • transactionLimit (по замовчуванням 100. Це ліміт коштів які ви можете взяти з
// карти)
// • historyLogs (масив об’єктів який містить інформацію про операції та трансакції
// данної карти)
// • key (число в діапазоні[1; 3] залежить від числа яке ви передали в userCard
// функції. Кожна карта повинна мати унікальний key)
// putCredits. Ця функція отримує певну кількість грошей і заповнює баланс
// карти:
// card3.putCredits(150);
// takeCredits. Ця функція отримує певну кількість грошей і віднімає ці кошти з баланса карти (протилежний за дією від метода putCredits):
// card3.takeCredits(100);
// setTransactionLimit.
// card3.setTransactionLimit(5000); transferCredits.
// card3.transferCredits(50, card1);
// Ви можете брати кошти з картки, якщо ліміт транзакцій та залишок коштів перевищують кількість коштів, які ви бажаєте взяти. Якщо ні, то слід записати відповідне повідомлення у консолі (скористайтеся console.error)
//  як ліміт транзакцій на картці
// Ця функція приймає як аргумент число і встановлює його
//  Ця функція отримує два аргументи - кількість кредитів, які потрібно передати, та карту одержувача (інший об’єкт, створений функцією `userCard` - card1):
//  Кошти, які ви хочете передати, повинні обкладатися податками 0,5%.
// Не забудьте перед перерахуванням перевірити залишок балансу та ліміт
// транзакцій відправника кредитів (card3).
//  Ви повинні відслідковувати тільки Put credits/Take credits/Transaction limit change операції і зберігайте history log. History log (Дивитись зображення 1) інформація має зберігатись в об’єктах з такими властивостями:
// • operationType (стрічка яка описує здійснену операцію)
// • credits (кількість коштів)
// • operationTime (формат: "27/07/2018, 03:24:53". Час коли була здійснена операція)
//  getCardOptions

// 2) Створити UserAccount:
// Зображення 1 — Приклад виклику функції
// Створити класс `UserAccount` (для цього завдання можна використати ES6 класс або звичайну функцію):
// const user = new UserAccount('Bob');
// Класс має містити:
// Властивості акаунту користувача:
// - name (передати в конструкторі)
// - cards (Масив карток користувача. Масив не має бути довшим ніж 3)
// Методи акаунту користувача:
// - addCard. Створює нову карту (використовуйте ‘userCard’ функцію) та додайте її до cards:
// user.addCard();
// Користувач повинен мати <= 3 карти.
// - getCardByKey. Приймає число в діапазоні {1; 3} і повертає об’єкт карти
// /*
// * Повертає об’єкт {
// * key: 1,
// * balance: 150,
// * ...other card properties *}
// */
// user.getCardByKey(1); Код

// Приклад переказу коштів:
// let user = new UserAccount('Bob'); user.addCard()
// user.addCard()
// let card1 = user.getCardByKey(1); let card2 = user.getCardByKey(2);
// card1.putCredits(500); card1.setTransactionLimit(800); card1.transferCredits(300, card2);
// card2.takeCredits(50); console.log(card1.getCardOptions()); // див зображення 2
// Зображення 2 - Об’єкт властивостей card1 console.log(card2.getCardOptions()); // див зображення 3
// Зображення 3 - Об’єкт властивостей card2 Посилання
// - https://css-tricks.com/javascript-scope-closures/
// - https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Classes


//1------------------------------------------------------------------------------------------------------------------------------
function userCard(pin) {
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    let key = pin;

    function getCardOptions(params) {
        return {balance: this.balance,transactionLimit: this.transactionLimit,historyLogs: this.historyLogs,key: this.key}
    }
    function putCredits(sumPut) {
        this.balance += sumPut;
        this.operLog("Received credits",sumPut,new Date());
    }
    function takeCredits(sumTake) {
        if(this.balance>=sumTake){
            this.balance -= sumTake;
            this.operLog("Withdrawal of credits",sumTake,new Date());
        } else console.error("balance less sum of transaction") 
    }
    function setTransactionLimit(tran) {
        this.transactionLimit = tran;
        this.operLog("Set Transaction Limit",tran,new Date());
    }
    function transferCredits(sum,card) {
        let sumOper = (sum*1.005).toFixed(2);
        if(this.balance>=sumOper) {
            if(this.transactionLimit>=sumOper){
                this.takeCredits(sumOper);
                card.putCredits(sum);
            } else console.error("transactionLimit less sum of transaction")
        } else console.error("balance less sum of transaction")
    }

    function operLog(operationType,sum,dt) {
        let dateOper = convertDate(dt);
        let operation = {operationType,sum,dateOper};
        this.historyLogs.push(operation);
    }

    return {balance,transactionLimit,historyLogs,key,getCardOptions,putCredits,takeCredits,setTransactionLimit,transferCredits,operLog};
}

function convertDate(dt){
    var today = new Date();
    var day = today.getDate() + "";
    var month = (today.getMonth() + 1) + "";
    var year = today.getFullYear() + "";
    var hour = today.getHours() + "";
    var minutes = today.getMinutes() + "";
    var seconds = today.getSeconds() + "";
    
    day = checkZero(day);
    month = checkZero(month);
    year = checkZero(year);
    hour = checkZero(hour);
    mintues = checkZero(minutes);
    seconds = checkZero(seconds);
    
    return day + "/" + month + "/" + year + ", " + hour + ":" + minutes + ":" + seconds;
}

function checkZero(data){
    if(data.length == 1){
      data = "0" + data;
    }
    return data;
}

const card1 = userCard(1); // returns an object with methods
const card3 = userCard(3); // returns an object with methods
console.log(card3);
console.log(card1);

console.log(card3.getCardOptions());
card3.putCredits(150);
console.log(card3.getCardOptions());
card3.takeCredits(100);
console.log(card3.getCardOptions());
card3.setTransactionLimit(5000); 
card3.transferCredits(50, card1);
console.log(card3.getCardOptions());
console.log(card1.getCardOptions());

console.log(card3.historyLogs);
console.log(card1.historyLogs);


//2------------------------------------------------------------------------------------------------------------------------------
console.log("2--------");
class UserAccount{
    constructor(name){
        this.name = name;
        this.cards = [];
    }

    addCard() {
        let i = this.cards.length;
        i<=3 ? this.cards.push(userCard(i+1)) : console.error("You have 3 card");
    }

    getCardByKey(keySearch){
        let cardSearch;
        this.cards.forEach(el => {
            if (el.key == keySearch) cardSearch = el;
        });
        if (cardSearch){
            return cardSearch;
        } else console.error("No find card");
    }
}

const user = new UserAccount('Bob');
user.addCard();
user.addCard();
let card12 = user.getCardByKey(1); 
let card22 = user.getCardByKey(2);
card12.putCredits(500); 
card12.setTransactionLimit(800); 
card12.transferCredits(300, card22);
card22.takeCredits(50); 
console.log(card12.getCardOptions())
console.log(card22.getCardOptions());

