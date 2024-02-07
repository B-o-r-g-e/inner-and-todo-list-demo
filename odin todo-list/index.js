const todolistLibrary = []
const taskCount = document.querySelector('.task-count')


taskCount.innerHTML = `${todolistLibrary.length} tasks`
class TodolistClass {
    constructor(title, description) {
        this.title = title
        this.description = description
    }

    newTodo() {
        const newTodo = new TodolistClass(this.title, this.description)
        todolistLibrary.push(newTodo)
        console.log(todolistLibrary)
    }
}

