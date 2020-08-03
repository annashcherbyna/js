// Необхіжно реалізувати друкарську машинку.
// У вас є інпут. Ви в нього ввожите якусь слово і тицькаєте кнопку "друкувати".

// Після того як ви тикнули кнопку вам необхідно запустити функцію яка буде друкувтаи на строніці то, шо ви ввели по одній букві 
// з рандомною затримкою від 0.1 до 0.5 секунд. 
// Тим самим симулюючи друкування цього тексту реальною людиною.
// НА КОЖНУ БУКВА РІЗНА ЗАТРИМКА !

let fnRandom = ()=> Math.random() * (0.5 - 0.1) + 0.1;


let input = document.createElement('input');

let btnPrint = document.createElement("button");
btnPrint.innerText = "SAVE";

let fnprintEl = (el) =>{
    return new Promise((resolve)=>{
        let x =1000*fnRandom();
        setTimeout(()=>{
            document.write(el);
            resolve(x);
        }, x)
    })
}

btnPrint.onclick = () =>{
    let val = input.value;
    valarr = [...val];
    valarr.forEach(el => {
        fnprintEl(el)
        .then(x => console.log(x));
    });
}

document.body.appendChild(input);
document.body.appendChild(btnPrint);

