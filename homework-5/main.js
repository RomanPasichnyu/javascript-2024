// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let square = (x, y) => x * y
console.log(square(5, 10));
// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circleSquare = (radius) => 3.14 * radius * radius;
console.log(circleSquare(12));
// // #Mbiz5K4yFe7
// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cilinderSquare = (r, h) => 2 * 3.14 * r * h;
console.log(cilinderSquare(2, 5));
// // #SIdMd0hQ
// // - створити функцію яка приймає масив та виводить кожен його елемент
let numsArr = [11, 22, 33, 44, 55];
let logger = (arr) => {
    for (const element of arr) {
        console.log(element)
    }
}
logger(numsArr)

// // #59g0IsA
// // - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
let writer = (text) => {
    document.write(`<p>${text}</p>`)
}
writer('hello')
// // #hOL6126
// // - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
let ulAndLiWriter = (text) => {
    document.write(`
            <ul>
                <li>${text}</li>
                <li>${text}</li>
                <li>${text}</li>
            </ul>`)
}
ulAndLiWriter('world')
// // #0Kxco1edSN
// // - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом,
// // який є числовим (тут використовувати цикл) та виводить його через document.write
let ulAndLiWriterFor = (text, liCount) => {
    document.write(`<ul>`);
    for (let i = 0; i < liCount; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`)
}
ulAndLiWriterFor('qwe', 6)
// // #gEFoxMMO
// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li)
// та виводить його через document.write
let allTypesWriter = (arr) => {
    document.write(`<ul>`)
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write(`</ul>`)
}
allTypesWriter(['qwe', 123, true, '123123aeda']);
// // #bovDJDTIjt
// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {id: false, name: 'vasya', age: 31},
    {id: true, name: 'petya', age: 30},
    {id: true, name: 'kolya', age: 29},
    {id: false, name: 'olya', age: 28},
    {id: true, name: 'max', age: 30},
    {id: false, name: 'anya', age: 31},
    {id: false, name: 'oleg', age: 28},
    {id: true, name: 'andrey', age: 29},
    {id: true, name: 'masha', age: 30},
    {id: false, name: 'olya', age: 31},
    {id: true, name: 'max', age: 31}
];
//
let userWriter = (arr) => {
    for (const arrElement of arr) {
        document.write(`
            <div>
                id:${arrElement.id},
                name: ${arrElement.name},
                age: ${arrElement.age}
            </div>`)
    }
}
userWriter(users);
// //     #pghbnSB
// // - створити функцію яка повертає найменьше число з масиву
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, -1, -2, -3, -4]

let minNum = (arr) => {
    let min = arr[0];
    for (const number of arr) {
        if (number < min) {
            min = number
        }
    }
    console.log(min);
}

minNum(nums)
//
// // #EKRNVPM
// // - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum = (arr) => {
    let result = 0
    for (const number of arr) {
        result += number
    }
    console.log(result)
}

sum(nums);
// // #kpsbSQCt2Lf
// // - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// // Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr, index1, index2) => {
    let item = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = item
    console.log(arr)
}

swap(nums, 0, 1)
//
// // #mkGDenYnNjn
// // - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// // Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
//
let exchange = (sumUAH, arr, money) => {
    if (money === 'USD') {
        result = sumUAH / 25
    } else if (money === 'EUR') {
        result = sumUAH / 42
    }
    console.log(result);

}

exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'EUR')