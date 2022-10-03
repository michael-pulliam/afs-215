const Calculator = require('./Calculator')

const input1 = new Calculator(2,2)

console.log('****Test*****')
console.log("*Add*")
console.log(input1.add())
console.log("*Subtract*")
console.log(input1.subtract())
console.log("*Multiple*")
console.log(input1.multiple())
console.log("*Divide*")
console.log(input1.divide())
