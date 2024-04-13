let expenses = [];
let currentGoal = 0;
let loggedInUser = null;

function addExpense(name, amount) {
    expenses.push({ name, amount });
    displayExpenses();
}

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

function setGoal() {
    const goalAmount = parseFloat(document.getElementById('goalAmount').value);
    currentGoal = goalAmount;
    document.getElementById('currentGoal').textContent = `Current goal: $${currentGoal.toFixed(2)}`;
}

document.getElementById('expenseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const expenseName = document.getElementById('expenseName').value;
    const expenseAmount = parseFloat(document.getElementById('expenseAmount').value);
    addExpense(expenseName, expenseAmount);

    document.getElementById('expenseName').value = '';
    document.getElementById('expenseAmount').value = '';
});

document.getElementById('loginBtn').addEventListener('click', function() {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('budgetApp').style.display = 'block';
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    // Here, you can add logic to store the username and password (e.g., in an array or object)
    loggedInUser = { username, password };

    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('budgetApp').style.display = 'block';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Here, you can add logic to check if the username and password match the stored values
    if (loggedInUser && loggedInUser.username === username && loggedInUser.password === password) {
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('budgetApp').style.display = 'block';
    } else {
        alert('Invalid username or password.');
    }
});
