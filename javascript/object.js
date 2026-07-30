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






