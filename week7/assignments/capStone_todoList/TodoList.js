
module.exports = class TodoList{

    constructor(todos){
        this.todos = todos
    
        // this.size = todos.length
    }

    addTodo(todo){
        this.todos.push(todo)
        return `"${todo}" has been added to List.`
    }

    addMultiTodo(...todos){
        todos.map(todo => this.addTodo(todo))
        console.log(this.todos)
        return 'All Todo Were Added.'

    }

    removeFirstTodo(){
        this.todos.shift()
        return 'First Todo Removed.'
    }

    removeLastTodo(){
        this.todos.pop()
        return 'Last Todo Removed.'
    }

    removeTodo(todo){
        const find = this.todos.findIndex(e => e === todo)
        const e = this.todos[find]
        if(find == -1){
            return "Item Cannot be 'deleted' Item Not Found"
        }
        this.todos.splice(find, 1)
        return `${e} was removed`  
    }

    showTodoList(){
        return this.todos
    }
}