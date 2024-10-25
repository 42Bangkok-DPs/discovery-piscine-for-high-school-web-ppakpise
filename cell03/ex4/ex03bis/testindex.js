// Function to retrieve the TO DO list from the cookie
function getCookie(name) {
    let decodedCookies = decodeURIComponent(document.cookie);
    let cookies = decodedCookies.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return "";
}

// Function to set a cookie with a specific name and value
function setCookie(name, value, days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // expire after `days` days
    let expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to display the TO DOs from cookie
function loadTodos() {
    let todoList = getCookie('todo_list');
    if (todoList) {
        let todos = JSON.parse(todoList);
        todos.forEach(todo => {
            addTodoToDOM(todo);
        });
    }
}

// Function to add a new TO DO
function addTodo() {
    let todoText = prompt("Enter a new TO DO:");
    if (todoText && todoText.trim() !== "") {
        // Add the new TO DO to the list
        addTodoToDOM(todoText);

        // Save the new TO DO in the cookie
        let todoList = getCookie('todo_list');
        let todos = todoList ? JSON.parse(todoList) : [];
        todos.unshift(todoText); // Add to the top of the list
        setCookie('todo_list', JSON.stringify(todos), 7); // Save the updated list in cookie for 7 days
    } else {
        alert("Please enter a valid TO DO.");
    }
}

// Function to add a TO DO to the DOM
function addTodoToDOM(todoText) {
    let todoDiv = $('<div></div>').addClass('todo').text(todoText);

    // When clicked, ask for confirmation to delete
    todoDiv.click(function() {
        if (confirm("Do you want to remove this TO DO?")) {
            // Remove from the DOM
            $(this).remove();

            // Update the cookie
            let todoList = getCookie('todo_list');
            let todos = todoList ? JSON.parse(todoList) : [];
            todos = todos.filter(todo => todo !== todoText); // Remove the deleted TO DO
            setCookie('todo_list', JSON.stringify(todos), 7); // Save the updated list in cookie
        }
    });

    // Prepend the new TO DO at the top of the list
    $('#ft_list').prepend(todoDiv);
}

// Load the list from cookies when the page loads
$(document).ready(function() {
    loadTodos();

    // Bind click event for the new TO DO button
    $('#newTodoBtn').click(addTodo);
});