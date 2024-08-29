// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
// зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

// let div = document.getElementById('text');
// let btn = document.getElementById('btn');
// btn.onclick = function () {
//     div.classList.toggle('hide');
// }


//         #j693ca8
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
//     та повідомити про це користувача

// let form = document.forms.forma;
// form.onsubmit = function (e) {
//     e.preventDefault();
//     let info = form.elements.userAge.value;
//     let ageBlock = document.createElement('div');
//     if (info <= 18) {
//         ageBlock.innerText = `age ${info} is for cartoons`;
//     } else {
//         ageBlock.innerText = `age ${info} is for 18+`;
//     }
//     document.body.appendChild(ageBlock);
//     form.userAge.value = '';
// }


// #ymAmN2xJ
// Стоврити форму з трьома полями для name,suruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

// let userForm = document.forms.userForm;
// userForm.onsubmit = function (e) {
//     e.preventDefault();
//
//     let name = userForm.userName.value;
//     let surname = userForm.userSurname.value;
//     let age = userForm.userAge.value;
//     let user = {
//         name,
//         surname,
//         age
//     }
//     let userBlock = document.createElement('div');
//     userBlock.innerText = `name:${user.name}, surname:${user.surname}, age:${user.age}`
//     document.body.appendChild(userBlock);
//     userForm.reset()
// }


//
// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному
// перезавантажені сторінки буде додавати до неї +1

// let numDiv = document.createElement('div');
// let item = localStorage.getItem('num') || 0;
// numDiv.innerText = item
// document.body.appendChild(numDiv)
//
// window.onbeforeunload = function () {
//     newItem = JSON.parse(item) + 1
//     localStorage.setItem('num', newItem)
//     numDiv.innerText = newItem
// }
//
// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessionsList зберігається інформація про дату та час відвідування сторінки.
// Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно
// відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль,
// а малювати в DOM
//
// let date = Date().toString()
// window.onload = function (e) {
//     e.preventDefault()
//     localStorage.setItem('sessionsList', date)
// }


//
//
//
// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут.
// При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

// let weightForm = document.forms.forma;
// let result = document.getElementById('result');
//
// weightForm.oninput= function () {
//     let newWeight = +weightForm.elements.weight.value * 2.2
//     result.innerText = newWeight
// }

//
// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію,
// які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції - addToLocalStorage(arrayName:string,objToAdd:any{}):void

// function addToLocalStorage(arrayName, objToAdd) {
//     let localStorageArr = JSON.parse(localStorage.getItem(arrayName)) || []
//     localStorageArr.push(objToAdd)
//
//     localStorage.setItem(arrayName, JSON.stringify(localStorageArr));
// }
// addToLocalStorage('user', {name: 'vasya', age: 12})


//
//     #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк,
// третій вмиіст ячеєк. При натисканні кнопки, вся ця інформація зчитується і формується табличка,
// з відповідним вмістом.

// let tableForm = document.forms.tableForm;
// let button = document.getElementById('bth')
// button.onclick = function (e) {
//     e.preventDefault()
//     let row = +tableForm.elements.row.value
//     let komirka = +tableForm.elements.komirka.value
//     let text = tableForm.elements.kontent.value.toString()
//
//     let table = document.createElement('table');
//     table.style.border = '1px black solid'
//     for (let i = 0; i < row; i++) {
//         let tr = document.createElement('tr');
//         for (let i = 0; i < komirka; i++) {
//             let td = document.createElement('td');
//             td.textContent = text;
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
//     document.body.appendChild(table)
// }

//     #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком,
// в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд
//     після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

let bank = document.createElement('div');
bank.innerText = '100грн';
document.body.appendChild(bank);

window.onload = function () {
    let currentTime = new Date().getSeconds();

    let lastUpdateTime = +localStorage.getItem('lastUpdateTime');
    let value = +localStorage.getItem('value');

    if (currentTime - lastUpdateTime >= 1) {
        let newValue = +value + 10;
        bank.innerText = newValue + 'грн';
        localStorage.setItem('value', newValue);
        localStorage.setItem('lastUpdateTime', currentTime);
    } else {
        bank.innerText = value + 'грн';
    }
}


//
// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів