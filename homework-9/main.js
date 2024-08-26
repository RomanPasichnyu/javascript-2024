// #8Nmt60ZT
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let anyDiv = document.createElement('div');
anyDiv.classList.add('wrap', 'collapse', 'alpha', 'beta');
// anyDiv.style.background = 'red'
let divCopy = anyDiv.cloneNode(true);

document.body.append(anyDiv, divCopy);
console.log(anyDiv, divCopy);
//     #OPLI89c9G
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let arr = ['Main','Products','About us','Contacts'];
let ul = document.createElement('ul');
for (const arrElement of arr) {
    let li = document.createElement('li');
    li.innerText = arrElement;
    ul.appendChild(li);
}
document.body.appendChild(ul);
//
// #jeBqHV525U5
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про
// title та monthDuration
// Завдання робити через цикли.
for (const course of coursesAndDurationArray) {
    let div = document.createElement('div')
    div.innerText = `Title:${course.title} | Duration: ${course.monthDuration} `;
    document.body.appendChild(div)
}
//
// =========================
//     #Kx1xgoKy8
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити
// <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (const course of coursesAndDurationArray) {
    let div = document.createElement('div')
    div.classList.add('item');

    let h1 = document.createElement('h1');
    h1.classList.add('heading')
    h1.innerText = `${course.title}`

    let p = document.createElement('p')
    p.classList.add('description')
    p.innerText = `${course.monthDuration}`

    div.append(h1, p)
    document.body.appendChild(div)
}
