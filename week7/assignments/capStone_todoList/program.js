
const TodoList = require('./TodoList')

let array = ['sleep','eat', 69, true]
const todoList = new TodoList(array)

console.log('++++Starting Test++++')
todoList.addTodo('hello')
console.log(todoList.showTodoList())
todoList.addMultiTodo(2022,'goodbye', "happy Halloween")
console.log(todoList.showTodoList())
todoList.removeFirstTodo()
todoList.addTodo('another todo.. todo..')
console.log(todoList.showTodoList())
todoList.removeLastTodo()
console.log(todoList.showTodoList())
todoList.removeTodo('hello')
console.log(todoList.showTodoList())

