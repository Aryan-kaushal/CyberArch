document.getElementById("assignTaskForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get task details from the form
    const taskTopic = document.getElementById("taskTopic").value;
    const taskDescription = document.getElementById("taskDescription").value;
    const deadline = document.getElementById("deadline").value;
    const employeeName = document.getElementById("employeeName").value;
    const assignedDate = new Date().toLocaleDateString(); // Store the current date

    // Create a new task object
    const newTask = {
        id: Date.now(), // Unique ID for each task
        topic: taskTopic,
        description: taskDescription,
        deadline: deadline,
        employee: employeeName,
        assignedDate: assignedDate,
        progress: 0
    };

    // Get existing tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Add the new task to the list
    tasks.push(newTask);

    // Save updated tasks to localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Clear form inputs
    document.getElementById("assignTaskForm").reset();

    // Update task sections
    displayTasks();
});

// Function to display all tasks
function displayTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskList = document.getElementById("tasks");
    taskList.innerHTML = "";

    tasks.forEach((task) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong>Topic:</strong> ${task.topic} <br>
            <strong>Description:</strong> ${task.description} <br>
            <strong>Deadline:</strong> ${task.deadline} <br>
            <strong>Assigned Date:</strong> ${task.assignedDate} <br>
            <strong>Assigned to:</strong> ${task.employee}
            <div class="progress-bar-container">
                <div class="progress-bar" style="width: ${task.progress}%;"></div>
                <span class="progress-text">${task.progress}% Time</span>
            </div>
            <button onclick="deleteTask(${task.id})" class="delete-button">Delete Task</button>
        `;
        taskList.appendChild(listItem);
    });
}

// Function to delete a task
function deleteTask(taskId) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter((task) => task.id !== taskId);

    // Save updated tasks to localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Update task section
    displayTasks();
}

// Function to display tasks for a specific employee
function displayEmployeeTasks(employeeName) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskList = document.getElementById("employeeTasks");
    taskList.innerHTML = "";

    // Filter tasks assigned to the specified employee
    const employeeTasks = tasks.filter((task) => task.employee === employeeName);

    employeeTasks.forEach((task) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong>Topic:</strong> ${task.topic} <br>
            <strong>Description:</strong> ${task.description} <br>
            <strong>Deadline:</strong> ${task.deadline} <br>
            <strong>Assigned Date:</strong> ${task.assignedDate}
            <div class="progress-bar-container">
                <div class="progress-bar" style="width: ${task.progress}%;"></div>
                <span class="progress-text">${task.progress}% progress</span>
            </div>
        `;
        taskList.appendChild(listItem);
    });
}

// Display all tasks on page load
window.onload = displayTasks;


let selectedEmployee = '';

// Function to assign task to the selected employee
function assignTaskTo(employeeName) {
    selectedEmployee = employeeName; // Store the selected employee's name
    alert(`Selected Employee: ${employeeName}`); // Optional: Alert for confirmation
}

// Update the form submission to use the selected employee
document.getElementById("assignTaskForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get task details from the form
    const taskTopic = document.getElementById("taskTopic").value;
    const taskDescription = document.getElementById("taskDescription").value;
    const deadline = document.getElementById("deadline").value;

    // Use the selected employee's name
    const employeeName = selectedEmployee || document.getElementById("employeeName").value;

    const assignedDate = new Date().toLocaleDateString(); // Store the current date

    // Create a new task object
    const newTask = {
        id: Date.now(), // Unique ID for each task
        topic: taskTopic,
        description: taskDescription,
        deadline: deadline,
        employee: employeeName,
        assignedDate: assignedDate,
        progress: 0
    };

    // Get existing tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Add the new task to the list
    tasks.push(newTask);

    // Save updated tasks to localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Clear form inputs
    document.getElementById("assignTaskForm").reset();
    selectedEmployee = ''; // Reset the selected employee after assignment

    // Update task sections
    displayTasks();
});
