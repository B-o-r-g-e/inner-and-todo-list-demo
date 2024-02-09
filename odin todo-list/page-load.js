const todolistContainer = document.querySelector('.todo-lists')

export const todolistLibrary = []
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
}

//function to add id to each todos
export function addID() {
    //create id for each todos
    todolistLibrary.forEach((todos, index) => {
        if (!todos.id) {
            todos.id = `data${index+1}`
        }
    })
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

function cancelDialog() {
    document.getElementById('overlay').style.display = 'none'
    document.querySelector('.todo-dialog').style.display = 'none'
}


//function to create a todos
export function createTodo() {
    //button to open add new dialog
    const addNewButton = document.querySelector('.add-new')
    addNewButton.addEventListener('click', openDialog)

    //button to cancel add new dialog
    const cancel = document.querySelector('.cancel')
    cancel.addEventListener('click', cancelDialog)

    function openDialog() {
        document.getElementById('overlay').style.display = 'block'
        document.querySelector('.todo-dialog').style.display = 'block'
    }

    cancelDialog()
}

export function addTasks() {
    //button to add input to library and display
    const addTaskButton = document.querySelector('.add-task')
    addTaskButton.addEventListener('click', addTask)

    function addTask() {
        const title = document.getElementById('todo-title').value
        const description = document.getElementById('todo-description').value

        const object = {title, description}

        if (title.trim() === '') {
            alert('Please fill in a title.');
            return; // Stop further execution if inputs are empty
        }

        const article = document.createElement('article')
        article.innerHTML = `
        <label><input type="checkbox" class="checker"></label>
        <div class="title-description">
            <p>${title}</p>
            <p class="description">${description}</p>
        </div>
        `
        todolistContainer.appendChild(article)

        todolistLibrary.push(object)

        addID()

        // checkbox()

        cancelDialog()
    }
}

//function for checkbox
export function checkbox() {
    const checker = document.querySelector('.checker')

    todolistLibrary.forEach((todos) => {
        const currentTodos = todos.id
        const indexToRemove = todolistLibrary.findIndex(
            todos => todos.id === currentTodos
        )

        // if (currentTodos) {
        //     checker.addEventListener('change', () => {
        //         if (checker.checked) {
        //             console.log('good')
        //             todolistLibrary.shift()
        //             console.log(todolistLibrary)
        //         }
        //     })
        // }

        checker.addEventListener('change', () => {
            if (checker.checked && currentTodos) {
                todolistLibrary.splice(indexToRemove, 1)

            }
        })
    })
}