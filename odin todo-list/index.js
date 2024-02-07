const todolistLibrary = []
const taskCount = document.querySelector('.task-count')

//automate task count
taskCount.innerHTML = `${todolistLibrary.length} tasks`

//create class prototype for todolist
class TodolistClass {
    constructor(title, description) {
        this.title = title
        this.description = description
    }

    // addTodo () {
    //     const newTodos = new TodolistClass(this.title, this.description)
    //     todolistLibrary.push(newTodos)
    //     console.log(todolistLibrary)
    // }
}

// function to create new todolist and add to library
function addTodoToLibrary(title, description) {
    return new TodolistClass(title, description)
    // console.log(todolistLibrary)
}

addTodoToLibrary('wash', 'to wash cloth')
