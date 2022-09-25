
const Greeting = require('./timeOfDay')

const greeting1 = new Greeting(30)
const greeting2 = new Greeting(23)
const greeting3 = new Greeting(57)
const greeting4 = new Greeting(62)
const greeting5 = new Greeting('90')
const greeting6 = new Greeting(true)


console.log(greeting1.timeOfDay());
console.log(greeting2.timeOfDay());
console.log(greeting3.timeOfDay());
console.log(greeting4.timeOfDay());
console.log(greeting5.timeOfDay());
console.log(greeting6.timeOfDay());
