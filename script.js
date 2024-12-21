// Toggles between Login and Sign Up Forms
function toggleForm() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    }
}

// Login form submission handler
document.getElementById('login').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Simplified login validation
    if (email === "user@example.com" && password === "password123") {
        alert('Logged in successfully');
        showHomePage();
    } else {
        alert('Invalid credentials');
    }
});

// Sign Up form submission handler
document.getElementById('signup').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    alert('Sign up successful');
    showHomePage();
});

// Show the Home page
function showHomePage() {
    document.getElementById('authForm').style.display = 'none';
    document.getElementById('homePage').style.display = 'block';
}

// Logout handler
function logout() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('authForm').style.display = 'block';
}

// Send Money Form Handler
document.getElementById('sendForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const receiverEmail = document.getElementById('receiver').value;
    const amount = document.getElementById('amount').value;

    if (receiverEmail && amount) {
        // Generate a new transaction entry
        const transaction = `Sent ₹${amount} to ${receiverEmail}`;

        // Add transaction to the transaction dropdown
        const transactionList = document.getElementById('transactionList');
        const newTransaction = document.createElement('li');
        newTransaction.textContent = transaction;
        transactionList.appendChild(newTransaction);

        // Clear the form
        document.getElementById('sendForm').reset();

        // Notify the user
        alert('Transaction successful!');
    } else {
        alert('Please fill in all fields.');
    }
});


// Simulate QR Code scanning
function scanQRCode() {
    const scannedCode = 'QR Code: PAY1234';
    document.getElementById('scannedCode').innerHTML = `<p>Scanned Code: ${scannedCode}</p>`;
}

// Transaction History
let transactionHistory = [];
function updateTransactionHistory(transaction) {
    transactionHistory.push(transaction);
    const historyList = document.getElementById('historyList');
    const newTransaction = document.createElement('li');
    newTransaction.textContent = transaction;
    historyList.appendChild(newTransaction);
}

// Booking Services
function bookService() {
    document.getElementById('bookingMessage').textContent = 'Service booked successfully!';
}
