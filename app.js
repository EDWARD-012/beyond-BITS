// Define variables for storing data
let expenses = [];
let currentGoal = 0;
let loggedInUser = null;

// Function to add an expense
function addExpense(name, amount) {
    expenses.push({ name, amount });
    displayExpenses();
    calculateLeftOver(); // Calculate leftover money after adding expense
}

// Function to display expenses
function displayExpenses() {
    const expenseList = document.getElementById('expenseList');
    expenseList.innerHTML = '';
    let totalExpenses = 0;

    expenses.forEach(expense => {
        totalExpenses += expense.amount;
        const li = document.createElement('li');
        li.textContent = `${expense.name}: $${expense.amount.toFixed(2)}`;
        expenseList.appendChild(li);
    });

    document.getElementById('totalExpenses').textContent = totalExpenses.toFixed(2);
}

// Function to set financial goal
function setGoal() {
    const goalAmount = parseFloat(document.getElementById('goalAmount').value);
    currentGoal = goalAmount;
    document.getElementById('currentGoal').textContent = `Current goal: $${currentGoal.toFixed(2)}`;
    calculateLeftOver(); // Calculate leftover money after setting goal
}

// Function to calculate leftover money
function calculateLeftOver() {
    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
    const leftOver = currentGoal - totalExpenses;
    document.getElementById('leftOver').textContent = `Left Over: $${leftOver.toFixed(2)}`;
}

// Check if the user is logged in (you can modify this based on your actual authentication logic)
function checkLoggedInUser() {
    loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!loggedInUser) {
        // Redirect to login page if not logged in
        window.location.href = 'login.html';
    } else {
        // Initialize app with user's data (if any)
        // For example, you might load previously saved expenses here
    }
}

// Event listener for adding expense form submission
document.getElementById('expenseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const expenseName = document.getElementById('expenseName').value;
    const expenseAmount = parseFloat(document.getElementById('expenseAmount').value);
    addExpense(expenseName, expenseAmount);

    document.getElementById('expenseName').value = '';
    document.getElementById('expenseAmount').value = '';
});

// Event listener for setting financial goal
document.getElementById('setGoalBtn').addEventListener('click', function() {
    setGoal();
});

// Initial setup when the app starts
checkLoggedInUser();
