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
        const titleDescription = document.createElement('div')

        titleDescription.innerHTML = `
<!--        <label><input type="checkbox" class="checker"></label>-->
            <p>${todos.title}</p>
            <p class="description">${todos.description}</p>
        `
        article.appendChild(titleDescription)
        todolistContainer.appendChild(article)

        handleCheckBox(article, titleDescription)
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
        const dueDate = document.createElement('div')
        dueDate.className = 'due-date'

        const object = {title, description}

        if (title.trim() === '') {
            alert('Please fill in a title.');
            return; // Stop further execution if inputs are empty
        }

        const article = document.createElement('article')
        const titleDescription = document.createElement('div')
        titleDescription.className = 'title-description'
        titleDescription.innerHTML = `
<!--        <label><input type="checkbox" class="checker"></label>-->
            <p>${title}</p>
            <p class="description">${description}</p>
        `
        article.appendChild(titleDescription)
        article.appendChild(dueDate)
        todolistContainer.appendChild(article)

        todolistLibrary.push(object)

        addID()

        cancelDialog()

        handleCheckBox(article, titleDescription)
    }
}


//function to handle checkbox
//Really suffered more on this
function handleCheckBox(article, titleDescription) {
    const checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    checkbox.className = 'checker'
    article.insertBefore(checkbox, titleDescription)

    checkbox.addEventListener('change', () => {
        todolistLibrary.forEach((todos) => {
            const todoId = todos.id
            const indexToRemove = todolistLibrary.findIndex(
                todos => todos.id === todoId
            )

            if (checkbox.checked) {
                console.log('checked')

                todolistLibrary.splice(indexToRemove, 1)
                console.log(todolistLibrary)
                article.remove()

                if (todolistLibrary.length === 1) {
                    article.remove()
                }
            }
        })
    })
}

//calendar function
export function calendar() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();

    const day = document.querySelector(".calendar-dates");

    const currdate = document
        .querySelector(".calendar-current-date");

    const prenexIcons = document
        .querySelectorAll(".calendar-navigation span");

// Array of month names
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

// Function to generate the calendar
    const manipulate = () => {

        // Get the first day of the month
        let dayOne = new Date(year, month, 1).getDay();

        // Get the last date of the month
        let lastDate = new Date(year, month + 1, 0).getDate();

        // Get the day of the last date of the month
        let dayEnd = new Date(year, month, lastDate).getDay();

        // Get the last date of the previous month
        let monthLastDate = new Date(year, month, 0).getDate();

        // Variable to store the generated calendar HTML
        let lit = "";

        // Loop to add the last dates of the previous month
        for (let i = dayOne; i > 0; i--) {
            lit +=
                `<li class="inactive">${monthLastDate - i + 1}</li>`;
        }

        // Loop to add the dates of the current month
        for (let i = 1; i <= lastDate; i++) {

            // Check if the current date is today
            let isToday = i === date.getDate()
            && month === new Date().getMonth()
            && year === new Date().getFullYear()
                ? "active"
                : "";
            lit += `<li class="${isToday}">${i}</li>`;
        }

        // Loop to add the first dates of the next month
        for (let i = dayEnd; i < 6; i++) {
            lit += `<li class="inactive">${i - dayEnd + 1}</li>`
        }

        // Update the text of the current date element
        // with the formatted current month and year
        currdate.innerText = `${months[month]} ${year}`;

        // update the HTML of the dates element
        // with the generated calendar
        day.innerHTML = lit;
    }

    manipulate();

// Attach a click event listener to each icon
    prenexIcons.forEach(icon => {

        // When an icon is clicked
        icon.addEventListener("click", () => {

            // Check if the icon is "calendar-prev"
            // or "calendar-next"
            month = icon.id === "calendar-prev" ? month - 1 : month + 1;

            // Check if the month is out of range
            if (month < 0 || month > 11) {

                // Set the date to the first day of the
                // month with the new year
                date = new Date(year, month, new Date().getDate());

                // Set the year to the new year
                year = date.getFullYear();

                // Set the month to the new month
                month = date.getMonth();
            }

            else {

                // Set the date to the current date
                date = new Date();
            }

            // Call the manipulate function to
            // update the calendar display
            manipulate();
        });
    });

    // Add this code after the existing code in the script tag

// Function to handle the click event on a date
    function handleDateClick(event) {
        const calendarContainer = document.querySelector('.calendar-container')
        // Retrieve the clicked date
        const clickedDate = event.target.innerText;
        const timeIntervalSpace = document.querySelector('.time-interval-space')

        // Display the selected date (you can modify this part based on your requirements)
        // console.log((`Selected date: ${months[month]} ${clickedDate}, ${year}`));
        timeIntervalSpace.innerHTML = `${months[month]} ${clickedDate}, ${year}`

        timeIntervalSpace.style.display = 'flex'
        calendarContainer.style.display = 'none'
    }

// Attach a click event listener to each date element
    day.addEventListener("click", handleDateClick);

    openCalendar()

}

//open calendar
export function openCalendar() {
    const showCalendar = document.querySelector('.show-calendar')
    const calendarContainer = document.querySelector('.calendar-container')
    // const timeIntervalSpace = document.querySelector(".time-interval-space");

    showCalendar.addEventListener('click', () => {
        calendarContainer.style.display = 'block'
    })
}
