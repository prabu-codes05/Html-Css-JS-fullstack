//polymorphism (dahi chiure)
// - it is the ability of an object to take many forms
// - it is the ability of a method to fo different things based on the object that it is acting upon

console.log(2+2) //4
console.log("2"+"2")//22

class Animal{
    sound(){
        return "Animal makes sound"
    }
}
class Dog extends Animal{
    sound(){
        return "bhau bhau"
    }
}
class Cat extends animal{
    sound(){
        return "meow meow"
    }
}

const prom = [new Animal(), new Dog(), new Bishow()]
prom.forEach((val)=>{
    console.log(val.sound())
})

//Encapsulaion
// - it means to protect the data and methods from outside access

//# private
//_protected

class Login{

    constructor(username, password, email){
        this.username = username
        this._password = password
        this.#email = email
    }
    details (){
        return `your Email is ${this.#email} and password is ${this._password}`
    }
}

const user1 = new Login("prabesh","12345", "mailforprabu@gmail.com")
console.log(user1.details())

// ============================ Bank System =============================
// withdraw, deposit , check balance , change pin

class Bank{
    #accountNumber
    _accountHolderName
    _balance
    #pin
    constructor(accountNumber, accountHolderName, balance, pin){
        this.#accountNumber = accountNumber
        this._accountHolderName = accountHolderName
        this._balance = balance
        this.#pin = pin
    }

    deposit(amount, pin){
        if(pin === this.#pin){
            this._balance += amount 
            return "Deposit Successful. Your new balance is " + this._balance
        }

        return "Invalid Pin. Deposit Failed"
    }

    withdraw(amount, pin){
        if(pin === this.#pin){
            if(amount <= this._balance){
                this._balance -= amount 
                return "Withdrawal Successful. Your new balance is " + this._balance
            }
            return "Insufficient Balance. Withdrawal Failed"
        }

        return "Invalid Pin. Withdrawal Failed"
    }

    get balance(){
        return `Your Balance is ${this._balance}`
    }

    set pin(newPin){
        this.#pin = newPin
    }

    get pin(){
        return this.#pin
    }
}


const bank1 = new Bank("1234567890", "Bijay", 10000, "1234")
console.log(bank1.deposit(5000, "1234"))
console.log(bank1.withdraw(2000, "1234"))
console.log(bank1.balance)
bank1.pin = "5678"
console.log(bank1.pin)

