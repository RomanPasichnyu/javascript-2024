// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    return {
        id, name, surname, email, phone
    }
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let usersArr = []
for (let i = 0; i < 10; i++) {
    let user = new User(
        id = i + 1,
        `vasya${id}`,
        `qwe${id}`,
        `email${id}`,
        `17181920${id}`
    )
    usersArr.push(user)
}
console.log(usersArr)
//
// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let usersEvenIDs = usersArr.filter(user => user.id % 2 === 0);
console.log(usersEvenIDs)
//
// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let usersSorted = usersArr.sort((user1, user2) => user1.id - user2.id);
console.log(usersSorted)
//
// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order = []) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = []
for (let i = 0; i < 10; i++) {
    client = new Client(
        i + 1,
        `roma${id}`,
        `qwe${id}`,
        `assaas${id}`,
        `123123123${id}`,
        [`qwe${id}`, `asd${id}`]
    )
    clients.push(client)
}
console.log(clients)
// //
//
// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sorterClients = clients.sort((client1, client2) => client1.order.length - client2.order.length);


//
// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
function Car(model, creator, year, maxSpeed, engine) {
    return {
        model, creator, year, maxSpeed, engine,
        drive: function () {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
        },
        info: function () {
            console.log(`model:${this.model}, creator:${this.creator}, year:${this.year}, max speed:${this.maxSpeed}, engine:${this.engine}`)
        },
        increaseMaxSpeed: function (newSpeed) {
            this.maxSpeed = newSpeed
            console.log(newSpeed)
        },
        changeYear: function (newValue) {
            this.year = newValue
            console.log(newValue)
        },
        addDriver: function (name,age) {
            this.driver = {
                name:name,
                age:age
            };
            console.log(this.driver)
        }
    }
}

let volga = new Car('volga', 'qwe', 2000, 123, 2.0);
volga.drive();
volga.info();
volga.increaseMaxSpeed(100500);
volga.changeYear(2024)
console.log(volga)
volga.addDriver('valerka', 12)

//
// #5kla3yMpgpy
// - (Те саме, тільки через клас)
class Carik {
    constructor(model, creator, year, maxSpeed, engine) {
        this.model = model;
        this.creator = creator;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }
    drive () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    info() {
        console.log(`model:${this.model}, creator:${this.creator}, year:${this.year}, max speed:${this.maxSpeed}, engine:${this.engine}`)
    };
    increaseMaxSpeed (newSpeed) {
        this.maxSpeed = newSpeed
        console.log(newSpeed)
    };
    changeYear(newValue) {
        this.year = newValue
        console.log(newValue)
    }
    addDriver (name,age) {
        this.driver = {
            name:name,
            age:age
        };
        console.log(this.driver)
    }
}
let audi = new Carik('aaaa','qqqqq', 123,2222,2);
console.log(audi);
audi.drive();
audi.info();
audi.increaseMaxSpeed(1002003);
audi.changeYear(2021);
audi.addDriver('asdzxc', 123)

// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella {
    
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let cinderellas = []
for (let i = 0; i < 10; i++) {
    let cinderella = new Cinderella(
        `romashka${i+1}`,
        18+i,
        30+i
    )
    cinderellas.push(cinderella)
}
console.log(cinderellas)

class Prince {
    constructor(name, age, size){
        this.name = name;
        this.age = age;
        this.size = size
    }
}
let prince = new Prince('vasyl', 49, 32)
for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince.size){
        console.log(`${cinderella.name}+${prince.name}=18+`)
    }
}
console.log(cinderellas.find(cinderella => cinderella.footSize === 32));

// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter