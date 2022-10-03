
const expect = require('chai').expect

module.exports = class Calculator{
    constructor(num1 = 2, num2 = 2){
        this.num1 = num1
        this.num2 = num2
    }

    add(){
        return this.num1 + this.num2
}
    subtract(){
        return this.num1 - this.num2
    }

    multiple(){
        return this.num1 * this.num2
    }

    divide(){
        return this.num1 / this.num2
    }
}






it('add two numbers', function(){
    expect(add(num1,num2)).to.equal(4)
})