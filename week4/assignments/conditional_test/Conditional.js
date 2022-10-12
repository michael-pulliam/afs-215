

// module.exports = class Conditional{
//     constructor(input=1){
//         this.input = input
//     }

module.exports = greeting = (input) => {
        if(typeof input !== 'number'){
            return 'Error, Enter Numbers Only..'
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
    }

// console.log(greeting(3))
