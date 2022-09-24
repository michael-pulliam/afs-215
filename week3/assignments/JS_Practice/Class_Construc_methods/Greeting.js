
module.exports = class Greeting{
    
    constructor(userName = "Joe", userAge = 19){
        this.userName = userName
        this.userAge = userAge
    }

    userInfo = () => {return`Hello my name is ${this.userName}, I am ${this.userAge} years old`}
    userInfo(){
        return this.userName
    }
    dataType = (arg) => {return `${arg} is a ${typeof(arg)}!`}
    turnNumberToString = () => {
        let userAgeToString = String(this.userAge)
        return userAgeToString
    }
}