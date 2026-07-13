//function
function myname(){
    console.log("hello world")
}
myname()

let obj ={"name":"bijay",age:27}
console.log(typeof(obj))

//operators

// Arthemetic Operators
let increment =10
console.log(increment++)
console.log(++increment)
let decrement =10
console.log(--decrement)
console.log(decrement--)
console.log(2**3) //exponential operator
console.log(10%3) // remainder operator

//comparision operator
console.log(10=="10")//checks only value
console.log(10==="10")//checks value as well as datatypes

console.log(2>2)//false
console.log(2>=2)//true
console.log(2<2)//false
console.log(2<=2)//true

//assignment operators
let pocketmoney = 400
pocketmoney += 100
pocketmoney -= 100
pocketmoney *= 2
pocketmoney /= 2
pocketmoney %= 2
pocketmoney **= 2
console.log(pocketmoney)

// logical Operators
console.log(true && false && true && true) // AND operator
console.log(true || false || true || true) // AND operator
