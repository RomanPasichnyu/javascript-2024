// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
console.log(str1.length);
console.log(str2.length);
console.log(str3.length);
// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
console.log(str3.toUpperCase());
// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
let srt1Up = 'HELLO WORLD';
let srt2Up = 'LOREM IPSUM';
let srt3Up = 'JAVASCRIPT IS COOL';
console.log(srt1Up.toLowerCase());
console.log(srt2Up.toLowerCase());
console.log(srt3Up.toLowerCase());
// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.trim(''));
//     #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let string = 'Ревуть воли як ясла повні';
let stringToArray = (str) => {
    return str.split(' ')
};
let arr = stringToArray(string);
console.log(arr)
//
// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numsArr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let stringsArr = numsArr.map(numsArr => numsArr + '');
console.log(stringsArr)
// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
function sortNums(nums, sort) {
    return nums.sort((num1, num2) => {
        if (sort === 'ascending') {
            return num1 - num2;
        } else if (sort === 'descending') {
            return num2 - num1
        } else {
            return console.error('wrong data')
        }
    });
}

console.log(sortNums(nums, 'ascending'))
console.log(sortNums(nums, 'descending'))
// #yo06d74c1C
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sortedDuration = coursesAndDurationArray.sort((course1, course2) => {
    return course2.monthDuration - course1.monthDuration
});
console.log(sortedDuration)
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filteredDuration = coursesAndDurationArray.filter(course => course.monthDuration > 5)
console.log(filteredDuration)
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let mappedArr = coursesAndDurationArray.map((course, index) => {
    let obj = {
        id: index + 1,
        title: course.title,
        monthDuration: course.monthDuration
    }
    return obj
})
console.log(mappedArr)
// =========================
//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
let cards = [
    {suit: 'hearts', value: '6'},
    {suit: 'hearts', value: '7'},
    {suit: 'hearts', value: '8'},
    {suit: 'hearts', value: '9'},
    {suit: 'hearts', value: '10'},
    {suit: 'hearts', value: 'jack'},
    {suit: 'hearts', value: 'queen'},
    {suit: 'hearts', value: 'king'},
    {suit: 'hearts', value: 'ace'},
    {suit: 'diamonds', value: '6'},
    {suit: 'diamonds', value: '7'},
    {suit: 'diamonds', value: '8'},
    {suit: 'diamonds', value: '9'},
    {suit: 'diamonds', value: '10'},
    {suit: 'diamonds', value: 'jack'},
    {suit: 'diamonds', value: 'queen'},
    {suit: 'diamonds', value: 'king'},
    {suit: 'diamonds', value: 'ace'},
    {suit: 'clubs', value: '6'},
    {suit: 'clubs', value: '7'},
    {suit: 'clubs', value: '8'},
    {suit: 'clubs', value: '9'},
    {suit: 'clubs', value: '10'},
    {suit: 'clubs', value: 'jack'},
    {suit: 'clubs', value: 'queen'},
    {suit: 'clubs', value: 'king'},
    {suit: 'clubs', value: 'ace'},
    {suit: 'spades', value: '6'},
    {suit: 'spades', value: '7'},
    {suit: 'spades', value: '8'},
    {suit: 'spades', value: '9'},
    {suit: 'spades', value: '10'},
    {suit: 'spades', value: 'jack'},
    {suit: 'spades', value: 'queen'},
    {suit: 'spades', value: 'king'},
    {suit: 'spades', value: 'ace'}
]
let aceSpades = cards.find(card => card.suit === 'spades' && card.value === 'ace');
console.log(aceSpades);
let allSixCards = cards.filter(card => card.value === '6');
console.log(allSixCards);
let redCards = cards.filter(card => card.suit === 'hearts' || card.suit === 'diamonds');
console.log(redCards);
let allDiamondsCards = cards.filter(card => card.suit === 'diamonds');
console.log(allDiamondsCards)
let clubsMoreThanNine = cards.filter(card => card.suit === 'clubs' && card.value >= '9');
console.log(clubsMoreThanNine)
// =========================
//
//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let reducedCards = cards.reduce((accumlator, card) => {
    if (card.suit === 'spades') {
        accumlator.spades.push(card)
    } else if (card.suit === 'diamonds') {
        accumlator.diamonds.push(card)
    } else if (card.suit === 'hearts') {
        accumlator.hearts.push(card)
    } else if (card.suit === 'clubs') {
        accumlator.clubs.push(card)
    }
    return accumlator
}, {spades: [], diamonds: [], hearts: [], clubs: []});
console.log(reducedCards)
// =========================
// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
let sassModule = coursesArray.filter(course=> course.modules.includes('sass'))
console.log(sassModule)

let dockerModule = coursesArray.filter(course=> course.modules.includes('docker'))
console.log(dockerModule)

