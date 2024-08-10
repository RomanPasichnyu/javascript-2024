const array = [213, 'qwe', true, 213, 'qwe', true, 213, 'qwe', true, false];
console.log(array[0], array[1], array[2], array[3], array[4], array[5], array[6], array[7], array[8], array[9]);

const book1 = {
    title: 'qwe',
    pageCount: 123,
    genre: 'asd',
    authors: [
        {
            name: 'vasya',
            age: 11
        },
        {
            name: 'kokos',
            age: 1
        }
    ]
};
const book2 = {
    title: 'qwe',
    pageCount: 123,
    genre: 'asd',
    authors: [
        {
            name: 'vasya',
            age: 11
        },
        {
            name: 'kokos',
            age: 1
        }
    ]
};
const book3 = {
    title: 'qwe',
    pageCount: 123,
    genre: 'asd',
    authors: [
        {
            name: 'vasya',
            age: 11
        },
        {
            name: 'kokos',
            age: 1
        }
    ]
};

let users = [
    {name: 'petya', age: 30, password: 123},
    {name: 'kolya', age: 29, password: 1231},
    {name: 'olya', age: 28, password: 123},
    {name: 'max', age: 30, password: 123},
    {name: 'anya', age: 31, password: 123},
    {name: 'oleg', age: 28, password: 123},
    {name: 'andrey', age: 29, password: 123},
    {name: 'masha', age: 30, password: 123},
    {name: 'olya', age: 31, password: 123},
    {name: 'max', age: 31, password: 123}
];
console.log(users[0], users[1], users[2], users[3], users[4], users[5], users[6], users[7], users[8], users[9]);

const weekTemp = [
    {morning1: 0, afternoon1: 0, evening1: 0},
    {morning2: 0, afternoon2: 0, evening2: 0},
    {morning3: 0, afternoon3: 0, evening3: 0},
    {morning4: 0, afternoon4: 0, evening4: 0},
    {morning5: 0, afternoon5: 0, evening5: 0},
    {morning6: 0, afternoon6: 0, evening6: 0},
    {morning7: 0, afternoon7: 0, evening7: 0},
];


const x = 10;
let a = 1;
// let a = 0;
// let a = -3;

if (x || a !== 0) {
    console.log('Вірно')
} else {
    console.log('Не вірно')
}

const time = 13;
if (time >= 0 && time <= 15) {
    console.log('1st quarter')
} else if (time > 15 && time <= 30) {
    console.log('2nd quarter')
} else if (time > 30 && time <= 45) {
    console.log('3rd quarter')
} else if (time > 45 && time <= 60) {
    console.log('4th quarter')
} else {
    console.log('wrong data')
}


const day = 12;
if (day >= 1 && day <= 10) {
    console.log('1st part')
} else if (day > 10 && day <= 20) {
    console.log('2nd part')
} else if (day > 20 && day <= 31) {
    console.log('3rd part')
} else {
    console.log('wrong data')
}


const dayCount = 6;
switch (dayCount) {
    case 1:
        console.log('to do work');
        break;
    case 2:
        console.log('to do work');
        break;
    case 3:
        console.log('to do work');
        break;
    case 4:
        console.log('to do work');
        break;
    case 5:
        console.log('to do work');
        break;
    case 6:
        console.log('to do rest');
        break;
    case 7:
        console.log('to do rest');
        break;
}

const n1 = 4;
const n2 = 1;

if (n1 > n2) {
    console.log(`${n1} is max`)
} else if (n1 < n2) {
    console.log(`${n2} is max`)
} else if (n1 === n2) {
    console.log(`${n1}=${n2}`)
} else {
    console.log('wrong number')
}

let x1 = NaN;
if (!x1){
    x1 = 'default'
    console.log(x1)
}else if(x1 === true){
    console.log('all ok')
}


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5){
    console.log(`${coursesAndDurationArray[0].title} - Супер`)
}else{
    console.log(`${coursesAndDurationArray[0].title} - Біда`)
}
if (coursesAndDurationArray[1].monthDuration > 5){
    console.log(`${coursesAndDurationArray[1].title} - Супер`)
}else{
    console.log(`${coursesAndDurationArray[1].title} - Біда` )
}
if (coursesAndDurationArray[2].monthDuration > 5){
    console.log(`${coursesAndDurationArray[2].title} - Супер`)
}else{
    console.log(`${coursesAndDurationArray[2].title} - Біда`)
}
if (coursesAndDurationArray[3].monthDuration > 5){
    console.log(`${coursesAndDurationArray[3].title} - Супер`)
}else{
    console.log(`${coursesAndDurationArray[3].title} - Біда`)
}
if (coursesAndDurationArray[4].monthDuration > 5){
    console.log(`${coursesAndDurationArray[4].title} - Супер`)
}else{
    console.log(`${coursesAndDurationArray[4].title} - Біда`)
}
if (coursesAndDurationArray[5].monthDuration > 5){
    console.log(`${coursesAndDurationArray[5].title} - Супер`)
}else{
    console.log(`${coursesAndDurationArray[5].title} - Біда`)
}
