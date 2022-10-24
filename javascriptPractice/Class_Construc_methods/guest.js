
const Greeting = require('./Greeting')

const guest1 = new Greeting("bob", 22)
const guest2 = new Greeting("bobby", 34)

console.log("***Guest1***")
console.log(guest1.userName)
console.log(guest1.userInfo())
console.log(guest1.dataType(guest1.userAge))
console.log(guest1.turnNumberToString())
console.log(guest1.dataType(guest1.turnNumberToString()))
console.log(guest1.turnNumberToString())

console.log("***Guest2***")
console.log(guest2.userName)
console.log(guest2.userInfo())
console.log(guest2.dataType(guest2.userAge))
console.log(guest2.turnNumberToString())
console.log(guest2.dataType(guest2.turnNumberToString()))
console.log(guest2.turnNumberToString())