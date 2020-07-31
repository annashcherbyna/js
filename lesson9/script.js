// Треба реалізувати свій розпорядок дня. 
// Колбеками, промісами та асинк авейт.

// В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання. 
// Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби 
// і т.д.

// Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають. 
// Якщо ж все ок, то ви маєте прожити свій звичайний день.
// Кожна подія має бути з рандомною (не по зростанню) затримкою.

let calcTimeout = () => Math.round(Math.random()*1000);
let dt = new Date();
let dtH = dt.getHours();
let money = 0;

//console.log(time);

function wakeUp(dtH) { 
    return new Promise((resolve,reject)=>{
        setTimeout( (time)=>{
            dtH>7? resolve('Good moring'):reject("I'm sleeping");
        },calcTimeout());
    })
}

function breakfast(haveProduct) {
    return new Promise((resolve,reject)=>{
        setTimeout( (time)=>{
            haveProduct? resolve('jami'):reject("I'm hangry");
        },calcTimeout());
    })
}

function brushTeeth(haveTime) {
    return new Promise((resolve,reject)=>{
        setTimeout( (time)=>{
            haveTime? resolve('Good. I`m care about my teeth'):reject("I don't have time for brushing teeth.");
        },calcTimeout());
    })
}

function work(intime) {
    return new Promise((resolve,reject)=>{
        setTimeout( (time)=>{
            if(intime){
                money += 1000;
                resolve('Good. I`m done my tasks')
            }
            else {
                money +=500;
                reject("I`m late. Tomorrow I have to working longer");
            }
        },calcTimeout());
    })
}

function goToClub(){
    return new Promise((resolve,reject)=>{
        setTimeout (()=>{
            money>=1000? resolve("Danse..danse"): reject("Home and cleaning house.");
        })
    })
}

wakeUp(dt)
    .then(result => {
        console.log(result);
        return breakfast(true);
    })
    .then(result => {
        console.log(result);
        return brushTeeth(true);
    })
    .then(result => {
        console.log(result);
        return work(true);
    })
    .then(result =>{
        console.log(result);
        return goToClub();
    })
    .then(result =>{
        console.log(result);
    })
    .catch(result => console.log(result + 'Bad day(('));


let as = async ()=>{
    // try{
        let wk = await wakeUp(dt);
        let bf = await breakfast(true);
        let bt = await brushTeeth(false);
        let wr = await work(true);
        let gtC = await goToClub();
        
        return {wk,bf,bt,wr,gtC}
    // } catch
    // {
    //     return {result};
    // }
}  

as().then(result => {for (const key in result) {
        console.log(result[key]);
    }
}).catch(result => console.log(result + 'Bad day((' ));