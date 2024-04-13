document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Store user information in local storage
    localStorage.setItem('loggedInUser', JSON.stringify({ username, password }));

    // Redirect to login page
    window.location.href = 'login.html';
});
