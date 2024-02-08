const todolistContainer = document.querySelector('.todo-lists')

const todolistLibrary = []
export const taskCount = document.querySelector('.task-count')

//automate task count
export function taskCountFunc() {
    taskCount.innerHTML = `${todolistLibrary.length} tasks`
}

//create class prototype for todolist
class TodolistClass {
    constructor(title, description) {
        this.title = title
        this.description = description
    }
}

// function to create new todolist and add to library
export function addTodoToLibrary(title, description) {
    const newTodos = new TodolistClass(title, description)
    todolistLibrary.push(newTodos)
    // console.log(todolistLibrary)
}


//function to create new todos in html
export function articles () {
    todolistLibrary.forEach((todos) => {
        const article = document.createElement('article')
        article.innerHTML = `
        <label><input type="checkbox" class="checker"></label>
        <div class="title-description">
            <p>${todos.title}</p>
            <p class="description">${todos.description}</p>
        </div>
        `
        todolistContainer.appendChild(article)
    })
}


//function to create a todos
export function createTodo() {
    //button to open add new dialog
    const addNewButton = document.querySelector('.add-new')
    addNewButton.addEventListener('click', openDialog)

    //button to cancel add new dialog
    const cancel = document.querySelector('.cancel')
    cancel.addEventListener('click', cancelDialog)

    //button to add input to library and display
    const addTaskButton = document.querySelector('.add-task')
    addTaskButton.addEventListener('click', addTask)

    function openDialog() {
        document.getElementById('overlay').style.display = 'block'
        document.querySelector('.todo-dialog').style.display = 'block'
    }
    function cancelDialog() {
        document.getElementById('overlay').style.display = 'none'
        document.querySelector('.todo-dialog').style.display = 'none'
    }

    function addTask() {
        // e.preventDefault()
        // const form = document.querySelector('.form')
        // const formData = new FormData(form)
        // const toObject = Object.fromEntries(formData)
        // console.log(toObject)



        const inputTitle = document.getElementById('todo-title').value
        const inputDescription = document.getElementById('todo-description').value

        const object = {inputTitle, inputDescription}
        console.log(object)

        const article = document.createElement('article')
        article.innerHTML = `
        <label><input type="checkbox" class="checker"></label>
        <div class="title-description">
            <p>${inputTitle}</p>
            <p class="description">${inputDescription}</p>
        </div>
        `
        todolistContainer.appendChild(article)

        todolistLibrary.push(object)

        cancelDialog()
        console.log(todolistLibrary)
    }
}