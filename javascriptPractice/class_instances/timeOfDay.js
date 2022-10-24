
module.exports = class Greeting {

    constructor(num){
        this.num = num
    }
    timeOfDay() {
        if (typeof this.num !== 'number') {
            return 'Error: Please enter a number.'
        }
        else if (this.num % 3 === 0 && this.num % 7 !== 0) {
            return 'Good Morning';
        }
        else if (this.num % 3 !== 0 && this.num % 7 === 0) {
            return 'Good Afternoon';
        }
        else if (this.num % 3 === 0 && this.num % 7 === 0) {
            return 'Good Evening';
        }
        else if (this.num % 3 !== 0 || this.num % 7 !== 0) {
            return `${this.num}`;
        }
    }
}