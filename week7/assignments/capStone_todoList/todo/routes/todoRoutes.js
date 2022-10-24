const express = require('express');
const todoRouter = express.Router();
const {v4: uuidv4} = require('uuid');
const TodoList = require('../../TodoList')

// let data = [
//     {
//         title: "Web Meeting",
//         Description: "FSW-125 Live Class",
//         time: "7:30pm",
//         date: "12/16/2022",
//         isComplete: false,
//         _id: uuidv4()
//     },
//     {
//         title: "Web Meeting",
//         Description: "FSW-125 Live Class",
//         time: "7:30pm",
//         date: "12/16/2022",
//         isComplete: false,
//         _id: uuidv4()
//     },
//     {
//         title: "Web Meeting",
//         Description: "FSW-125 Live Class",
//         time: "7:30pm",
//         date: "12/16/2022",
//         isComplete: false,
//         _id: uuidv4()
//     }
// ]

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
todoRouter
    .get("/", (req, res) => {
        res.send(`<div> ${todoList.showTodoList()} </div>`)
    })
    .post("/", (req, res) => {
        const todoId = req.body;
        newId._id = uuidv4();
        data.push(todoId);
        res.send("added successfully");
    })
    .put("/:todoId", (req, res) => {
        const todoId = req.params.todoId;
        const updateEntry = data.indexOf(e => e._id === todoId)
        Object.assign(data[updateEntry], req.body)
        res.send(`${data[UpdateEntry].title} updated Successfully`)
    })
    .delete("/:todoId", (req, res) => {
        const todoId = req.params.todoId
        const newId = data.indexOf(e => e._id === todoId)
        data.splice(newId)
        res.send("deleted Successfully")
    })

    module.exports = todoRouter