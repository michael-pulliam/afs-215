
const expect = require('chai').expect
const TodoList = require('../TodoList')

before(() => {
    console.log('Starting Test')
})

after(() => {
    console.log('All Test Are Complete')
})

beforeEach(() => {
    todo = new TodoList(['hello'])
})

it('todo has been added', () => {
    expect(todo.addTodo('goodbye')).to.equal(`"goodbye" has been added to List.`)
})

it('First todo has been Removed', () => {
    expect(todo.removeFirstTodo()).to.equal('First Todo Removed.')
})

it('Last todo has been Removed', () => {
    expect(todo.removeLastTodo()).to.equal('Last Todo Removed.')
})
 
it(`todo has been removed`, () => {
    expect(todo.removeTodo('hello')).to.equal(`hello was removed`)
})

it('todo not found', () => {
    expect(todo.removeTodo('goodbye')).to.equal("Item Cannot be 'deleted' Item Not Found")
})

it('Array is displaying..', () => {
    expect(todo.showTodoList()).to.deep.equal(['hello'])
})

it('All todos were added', () => {
    expect(todo.addMultiTodo()).to.equal('All Todo Were Added.')
})
