//function 
//function is a block of code which can be reused multiple time  

   //return = gets a value out of function
        //parameter = puts a value into a function

       /* function calculateTax(){
            console.log(1000*0.1)
        }
        calculateTax();*/ //normal function and function call code

        function calculateTax(parameter1){
            console.log(parameter1*0.1)
        }
        calculateTax(1000); //use of parameters

        function calculateTax(cost,taxpercent){
            console.log(cost*taxpercent);
        }
        calculateTax(1000,0.2); //use of doubleparameters



/*function hello()
    console.log("hello world")
}
hello()//function call nagare chaldena


function sum (a,b){
    console.log("sum is")
    return a+b
}
console.log(sum(12,12))


function add(x,y,c=10){
    return x+y+c
}
console.log(add(12,12,12))

//arrow function (Es6 module)
const Action = () => { //arrow function bhayera => deko
    console.log("this is arrow function")
}

const val =(messi,ronaldo)=> {
    return messi>ronaldo
}
console.log(val(10,7))

//closure function (euta function bhitra arko function chalnu)

function college(){
    return "bsc csit"
}

const inne = () =>{
    return college()
}

const outerFunc = () =>{
    return inner()
}

console.log(outerFunc())




// call back function (it returns the value)
//setTimeout(() =>{console.log("out out out...")},3000)//1000 matlab 1 sec, 3000 matlab 3 sec paxi display hunxa
//setInterval(()=>{console.log("hello")},2000)
//const out = setInterval(()=>{console.log("hello")},2000)
//clearInterval(out)*/

//login form
const login =(email,password)=>{
    const adminEmail = "bj@gmail.com"
    const adminPassword = "12345"
    if (email == adminEmail && password == adminPassword){
        return"login Successfull"
    }
    else{
        return"login Failed"
    }
}
console.log(login("bj@gmail.com","1234"))



const register = () =>{
    const username= prompt("Enter your name: ")
    const email= prompt("Enter your email: ")
    const password= prompt("Enter your password: ")
    const confirmPassword = prompt("Confirm your password: ")

    if(password == confirmPassword){
        return "Password is correct"
    }else{
        return "Password not matched"
    }

    console.log({username, email, password, confirmPassword})
}

console.log(register())


/*create a bank function inside it  you have paramter bank_name, bank_acc_no , bankBalanace


- get balanace ()
- withdarw()
- deposit()*/


