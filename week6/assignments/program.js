
const User = require('./User.js')

let array=[10,20];

const user1 = new User(array)
// const user2 = new User()

console.log(user1.showItems())
user1.appendItem('hello')
console.log(user1.showItems())
console.log(user1.getItem('hello'))
console.log(user1.removeItem('hello'))

console.log(user1.showItems())



// console.log(user2.showArray())
// console.log(user1.addItem('chicken'))
// console.log(user1.showArray())

