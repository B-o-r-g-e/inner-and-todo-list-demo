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
}

// function to create new todolist and add to library
function addTodoToLibrary(title, description) {
    const newTodos = new TodolistClass(title, description)
    todolistLibrary.push(newTodos)
    console.log(todolistLibrary)
}

addTodoToLibrary('wash', 'to wash cloth')
