const greeting = require('../Conditional')
const expect = require('chai').expect


if(typeof input !== 'number'){
    expect(greeting()) ('Error, Enter Numbers Only..')
}
else if(input % 3 === 0 && input % 7 !== 0){
    return "Good Morning!"
}
else if(input % 3 !== 0 && input % 7 === 0){
    return "Good Afternoon!"
}
else if(input % 3 == 0 && input % 7 == 0){
    return "Good Evening!"
}
else if(input % 3 !== 0 && input % 7 !== 0){
    return `${input}`
}
