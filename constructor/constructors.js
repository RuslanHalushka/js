// function Car(model, year, maker, maxSpeed){
//     this.model = model;
//     this.year = year;
//     this.maker = maker;
//     this.maxSpeed = maxSpeed;
//
//     this.drive = function (){
//         console.log(`Їдемо зі шв ${this.maxSpeed}`);
//     }
//     this.info = function (){
//         console.log(this)
//     }
//     this.increaseMaxSpeed = function(newSpeed){
//         this.maxSpeed += newSpeed;
//         console.log(this.maxSpeed);
//     }
//
// }
//
// let bmw = new Car('3 seria', 2017, 'BMW', 260);
// console.log(bmw);
// bmw.drive();
// bmw.info();
// bmw.increaseMaxSpeed(20);

// class Car {
//     constructor(model, year, maker, maxSpeed) {
//         this.model = model;
//         this.year = year;
//         this.maker = maker;
//         this.maxSpeed = maxSpeed;
//     }
//
//     drive (){
//         console.log(`Їдемо зі шв ${this.maxSpeed}`);
//     }
//     info (){
//         console.log(this)
//     }
//     increaseMaxSpeed (newSpeed){
//         this.maxSpeed += newSpeed;
//         console.log(this.maxSpeed);
//     }
//
// }
//
// let bmw = new Car('3 seria', 2017, 'BMW', 280);
// console.log(bmw);
// bmw.drive();
// bmw.info();
// bmw.increaseMaxSpeed(20);



class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Popelushka extends Human{
    constructor(name, age, footSize) {
        super(name, age);
        this.footSize = footSize;
    }
}

class Prince extends Human{
    constructor(name, age, footSizeHeNeed) {
        super(name, age);
        this.footSizeHeNeed = footSizeHeNeed;
    }
    findPopelushka(arrOfGirls){

        for (let i of arrOfGirls){
            if (this.footSizeHeNeed === i.footSize){
                console.log(i);
            }
            console.log('Smth was wrong')
        }

    }
}

let ira = new Popelushka('Ira', 20, 36);
let galya = new Popelushka('Galya', 23, 35.5);
let yulia = new Popelushka('Yulia', 18, 35);
let nastya = new Popelushka('Nastya', 30, 36.5);
let vika = new Popelushka('Vika', 25, 37);

let arrOfGirls = [ira, galya, yulia, nastya, vika];



let vasya = new Prince('Vasya', 30, 35);
vasya.findPopelushka(arrOfGirls)


































