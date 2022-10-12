const Conditional = require("../conditional_test/program")


module.exports = class Calculator{
    constructor(num1 = 2, num2 = 2){
        this.num1 = num1
        this.num2 = num2
    }

    add(){
        if(!this.notNumber()){return this.num1 + this.num2}
        return 'You must enter numbers'
    }

    subtract(){
        if(!this.notNumber()){return this.num1 - this.num2}
        return 'You must enter numbers'
    }

    multiple(){
        if(!this.notNumber()){return this.num1 * this.num2}
        return 'You must enter numbers'
    }

    divide(){
        if(!this.notNumber()){return this.num1 / this.num2}
        return 'You must enter numbers'
    }

    notNumber(){
        if(typeof this.num1 !== 'number' || typeof this.num2 !== 'number'){
            return true
        }
        return false
    }
}


