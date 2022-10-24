
const Greeting = require('./timeOfDay')

const greeting1 = new Greeting(30)
const greeting2 = new Greeting(14)
const greeting3 = new Greeting(21)
const greeting4 = new Greeting(25)
const greeting5 = new Greeting('90')


console.log(greeting1.timeOfDay());
console.log(greeting2.timeOfDay());
console.log(greeting3.timeOfDay());
console.log(greeting4.timeOfDay());
console.log(greeting5.timeOfDay());
