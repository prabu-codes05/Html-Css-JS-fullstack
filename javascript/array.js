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

    //splice (it takes 2 argument start & length that it should cut and look for the gap in it)
    const spliced = arr.splice(3,4)
    console.log(spliced)

    //indexof - it is a searching method that help find the repeated values
    const indexo = [3,5,6,2,4,5,6,7,3,2,4,5,6,3].indexOf(6)
    console.log(indexo)

    const lastindex = [3,5,6,2,4,5,6,7,3,2,4,5,6,3].lastIndexOf(6)
    console.log(lastindex)
    