const  expect  = require('chai').expect
const User = require('../User')

beforeEach(() =>{
    user = new User(['hello'])
})
afterEach(() => {
    console.log('Test Complete')
})



it('Array is Displaying..', () => {
    expect(user.showItems()).to.deep.equal(['hello'])
})

it('Item is added', () => {
    expect(user.appendItem('goodbye')).to.equal('Item goodbye has been added')
})

it('Item is removed', () => {
    expect(user.removeItem('hello')).to.equal('hello was removed')
})

it('Found Item', () => {
    expect(user.getItem('hello')).to.equal(true)
})

it('Item Not Found', () => {
    expect(user.getItem('goodbye')).to.equal('Item not Found')
})

it('Item Not removed', () => {
    expect(user.removeItem('goodbye')).to.equal("Item Cannot be 'deleted' Item Not Found")
})

// it('Array is Displaying..', () => {
//     const user = new User([])
//     expect(user.showItems()).to.deep.equal([])
// })

// it('Item is added', () => {
//     const user = new User([])
//     expect(user.appendItem('hello')).to.equal('Item hello has been added')
// })

// it('Item is removed', () => {
//     const user = new User(['hello'])
//     expect(user.removeItem('hello')).to.equal('hello was removed')
// })

// it('Found Item', () => {
//     const user = new User(['hello'])
//     expect(user.getItem('hello')).to.equal(true)
// })

// it('Item Not Found', () => {
//     const user = new User(['hello'])
//     expect(user.getItem('goodbye')).to.equal('Item not Found')
// })

// it('Item Not removed', () => {
//     const user = new User(['hello'])
//     expect(user.removeItem('goodbye')).to.equal("Item Cannot be 'deleted' Item Not Found")
// })