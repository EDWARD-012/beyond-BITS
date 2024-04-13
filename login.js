document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if username and password match stored values (e.g., in local storage)
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (storedUser && storedUser.username === username && storedUser.password === password) {
        window.location.href = 'index.html'; // Redirect to the budgeting app
    } else {
        alert('Invalid username or password.');
    }
});
