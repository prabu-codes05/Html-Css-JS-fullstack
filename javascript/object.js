//==================== Object =================================
const pen = {
    name: "cello",
    color: "blue",
    penprice:10,
}

console.log(pen)
console.log(pen.name)
pen.company = "cello pvt ltd"
console.log(pen)

delete pen.color
console.log(pen)

pen.name = "naturaj"
console.log(pen)


const Bishow = {
    name: "prabesh",
    surname: "aryal",
    age: 22,
    address: {
        ward: 7,
        street: "abc road",
        municipality: "Butwal",
        district: "Rupandehi"
    },
    isVergin:true,
    gfs : ['shrestha','chhetri','aryal','bhandari']
}
console.log(Bishow.address.municipality)
console.log(Bishow.gfs)

console.log(Bishow.gfs.map((val)=> val.toUpperCase()))//map ley mathi array ma vako lai palai palo layera rakhxa

// Object methods
// {name: "prabesh",age:"age"}

const newObject = new Object() //duita { } bhitra lekhna yo syntax lekhinxa
newObject.name = "bijay"
newObject.age = 44

console.log(newObject)

console.log(Object.keys(Bishow))
console.log(Object.values(Bishow))
Object.freeze(Bishow)
Bishow.isVergin =false //freeze garesi change garna mildena kei kura pani
console.log(Bishow)


// ================================= OOPs =============================
// to write the modular , scalable , and maintainable code oops is importrant
// Oops uses class ,this ,encapsulation , polymorphism , and inheritance concept to write code  

// class - it is a blueprint of an object 
// - it is a template to crate an object 
// - it is a logical entity
// - it does not occupy and memory space

const place = { 
    name :"hayat",
    price: 20000,
    location : "butwal"
}

class Place{ //class ko name always capital
    name="hayat"
    price= 2000000
    location="butwal" 
}

const place1 = new Place()
console.log(place1.name)
console.log(place1.loaction)


// this is used to refrence the current object 
class Car{
    name= "lamborgini" // class instance
    constructor( name, engine , price){
        this.bishwo = name 
        this.boka = engine
        this.prices = price
    }

    // methods
    details(){
    return `Car name is ${this.bishow} has ${this.boka} engine and price is Rs. ${this.prices}`
}
}
const car1 = new Car("mustang", "V8", 2000000)
console.log(car1.name)
console.log(car1.bishwo)
console.log(car1.details())

//Simple Interest

class Interest{
    constructor(principle,rate,time){
        this.principle = principle //this is predefined keywords
        this.rate = rate
        this.time = time
    }
    //methods
    ints(){
        return this.principle * this.rate * this.time / 100
    }
}

const intrest1 = new Interest(34000,5,2) // new is predefined keywords
console.log(interest1.ints())

//Inheritance
//- inherit the property from parents to children 

class Parent{
    constructor(surename, hairColor, height  ){
        this.surename = surename
        this.hairColor = hairColor
        this.height = height
    }

    details(){
        return `surname is ${this.surename} has ${this.hairColor} hair and ${this.height} height`
    }
}

class Child extends Parent{
    constructor(surename, hairColor, height, skinColor){
        super(surename, hairColor, height)
        this.skinColor = skinColor
    }

    childDetails(){
        return `${super.details()} and ${this.skinColor} skin color`
    }
}


class Bishwos extends Child{
    constructor(surename, hairColor, height,skinColor, sugarMummy){
        super(surename, hairColor, height, skinColor)
        this.sugarMummy = sugarMummy
    }

    childDetails(){
        return `${super.details()} and ${this.sugarMummy} Sugger mummy`
    }
}

const child1 = new Bishwos("bashyal", "black", "5.10", "white" ,"Aaditi")
console.log(child1.childDetails())
console.log(child1.details())
















