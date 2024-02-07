const todolistLibrary = []
const taskCount = document.querySelector('.task-count')


taskCount.innerHTML = `${todolistLibrary.length} tasks`
class TodolistClass {
    constructor(title, description) {
        this.title = title
        this.description = description
    }
}

