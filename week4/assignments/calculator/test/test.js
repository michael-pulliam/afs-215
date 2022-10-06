const Calculator = require('../Calculator.js')
const expect = require('chai').expect


it('add two numbers', function(){
    const calc = new Calculator()
    expect(calc.add()).to.equal(4)
})

it('Subtract two numbers', function(){
    const calc = new Calculator()
    expect(calc.subtract()).to.equal(0)
})

it('multiple two numbers', function(){
    const calc = new Calculator()
    expect(calc.multiple()).to.equal(4)
})

it('Divide two numbers', function(){
    const calc = new Calculator()
    expect(calc.divide()).to.equal(1)
})

it('expect Error Message', function(){
    const calc = new Calculator('g', 'g')
    expect(calc.add()).to.equal('You must enter numbers')
})

// const input1 = new Calculator(2,2)

// console.log('****Test*****')
// console.log("*Add*")
// console.log(input1.add())
// console.log("*Subtract*")
// console.log(input1.subtract())
// console.log("*Multiple*")
// console.log(input1.multiple())
// console.log("*Divide*")
// console.log(input1.divide())