
const User = require('./User.js')

const user1 = new User('Jeff', 21, 5, 2)
const user2 = new User('Lauren', 22, 18, 12)

console.log('***User 1***')
console.log(user1.age)
console.log(user1.userInfo())
console.log(user1.add())
console.log(user1.subtract())
console.log(user1.mult())
console.log(user1.divide())
console.log(user1.num_2_str())

console.log('***User 2***')
console.log(user2.age)
console.log(user2.userInfo())
console.log(user2.add())
console.log(user2.subtract())
console.log(user2.mult())
console.log(user2.divide())
console.log(user2.num_2_str())
