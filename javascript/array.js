//array is the collection of set of data
    //why index starts with 0 
    //cause 0 holds a memory that store the data in the 4 bit

    //array element access
    //const arr = [2,3,4,1,5,6,7,8,9,"k"]
    console.log(arr)
    console.log(arr.length)//length thapauna kati ota xa bhanera
    console.log(arr[arr.length-1])

    //add elements on the array
    arr[16]="fhaa"
    console.log(arr)

    arr[0]=22
    console.log(arr)

    //Array Constructor

    const newArr = new Array(4,5,7,8)
    console.log(newArr)

    //Array Method
    const arr = [39,43,12,4,5,6,13,5,6]

    //push - add element to  the last index
    arr.push('233')//aba 233 last ma gayera basxa
    console.log(arr)

    //unshift - it add the elements from the first index
    arr.unshift('boka')
    console.log()

    //pop - removes the element from the last index
    arr.pop()
    console.log(arr)

    //shift  - it removes the element from the fist index
    arr.shift()
    console.log(arr)

    //slice(it takes 2 argument start and end point and look for the gap in it)
    const sliced = arr.slice(3,6)
    console.log(sliced)

    //splice (it takes 2 argument shuru ko ley kun index ko remove garni bhanxa  & 2nd element ley kati ota remove garni tyo bhanxa)
    const spliced = arr.splice(3,4)
    console.log(spliced)

    //indexof - it is a searching method that help find the repeated values
    const indexo = [3,5,6,2,4,5,6,7,3,2,4,5,6,3].indexOf(6)
    console.log(indexo)

    const lastindex = [3,5,6,2,4,5,6,7,3,2,4,5,6,3].lastIndexOf(6)
    console.log(lastindex)

    const arry =[12,3,4,5,6,11,24,4,55]
    console.log(arry.sort((a,b)=>{return b-a}));

    const arry1 = [12,,3,4,5,6,11,23,4,22]
    console.log(arry1.reverse());

    //=================Array iteration Method===========================//

    const arr11 = [9,32,4,5,67,7,8,85,6,343,54]

// forEach
// it doensot create a new array 
// it makes changes on the existing array 
 console.log(arr11.forEach((val, idx, arr) =>{
    console.log( val * 2)
    // console.log(idx)
    // console.log(arr)
 })
)


// map 
// it creates a new array
// it doensot make changes on the existing array
// it uses 3 paramters ( value, index, array)

const newAr = arr11.map((val, idx, arr)=>{
    // console.log(arr)
     return val > 10
    // console.log(idx)
})
console.log(newAr)

// filter 
// it creates a new array
// it doensot make changes on the existing array
// it uses 3 paramters ( value, index, array)
// it gives the filter value 
const newArs = arr11.filter((val, idx, arr)=>{
    // console.log(arr)
     return val > 10
    // console.log(idx)
})
console.log(newArs)

//reduce 
const total = arr11.reduce((acc, total) => {//acc bhaneko acumulator ho that means shuruko value
return acc-total
})
console.log(total)

//right

const totals = arr.reduceRight((acc,total) =>{
    return acc - total
})
console.log(totals)


//find
const fruits = ["apple","orange","banana","strawberry","mango"]
const isThere = fruits.find((val)=>{
    return val === "strawberry"
})
console.log(isThere)

//flat

const myArr = [1,2,[3,4]]
console.log(myArr.flat())

    