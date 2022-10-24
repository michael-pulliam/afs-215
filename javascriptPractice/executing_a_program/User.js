
module.exports = class User{

    constructor(name = "User's Name", age = 0, num1, num2){
        this.name = name
        this.age = age
        this.num1 = num1
        this.num2 = num2
        
    }

    userInfo = () => {return `Welcome ${this.name}, you are Age: ${this.age}.`}
    userInfo(){
        return this.name
    }
    num_2_str(){
        let numString = String(`The Numbers you choose are ${this.num1} and ${this.num2}`)
        return numString
    }

    add(){
        return this.num1 + this.num2
    }

    subtract(){
        return this.num1 - this.num2
    }

    mult(){
        return this.num1 * this.num2
    }

    divide(){
        return this.num1 / this.num2
    }

}

