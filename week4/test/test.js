
const expect = require('chai').expect


it('add two numbers', function(){
    expect(add(num1,num2)).to.equal(4)
})
// it('expect passing test', function(){
//     expect(true).to.equal(true)
// })

// function cellPhone(arg){
//     if (arg === "att") {
//         return "blue"
//     }
//     if (arg === "sprint"){
//         return "yellow"
//     }
//     if (arg === "verizon"){
//         return "red"
//     }

//     else{
//         return "Not an option"
//     }

// }
// cellPhone("att")

// it('returns "yellow" when passed "sprint"', function(){
//     expect(cellPhone("sprint")).to.equal("yellow")
// })
// it('return "blue" when passed "att"', function(){
//     expect(cellPhone("att")).to.equal("blue")
// })

// it('returns "red" when passed "verizon"', function(){
//     expect(cellPhone("verizon")).to.equal("red")
// })

// it('returns error message when passed none of the above', function(){
//     expect(cellPhone("shadow Nija")).to.equal("Not an option")
// })
