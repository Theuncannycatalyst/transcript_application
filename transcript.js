document.addEventListener('DOMContentLoaded', function () { // Ensure the DOM is fully loaded
    const loginForm = document.getElementById('login-form');
    const transcriptForm = document.getElementById('transcript-form');
    const formContainer = document.getElementById('form-container');
    const progressBar = document.getElementById('progress');
    const errorMessage = document.getElementById('error-message'); // Added error message element

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Simple login logic (in reality, validate against a database)
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        if (username === 'student' && password === 'password') {
            document.getElementById('login-container').style.display = 'none';
            formContainer.style.display = 'block';
        } else {
            alert('Invalid username or password');
        }
    });

    transcriptForm.addEventListener('input', function () { // Added input event listener for progress update
        updateProgress();
    });

    transcriptForm.addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateForm()) { // Validate form before submission
            errorMessage.textContent = '';
            // Process the form submission (e.g., send data to server)
            alert('Application submitted successfully!');
        } else {
            errorMessage.textContent = 'Please fill in all required fields.'; // Display error message
        }
    });

    function updateProgress() { // Function to update progress bar
        const requiredFields = transcriptForm.querySelectorAll('input[required], select[required]');
        let filledFields = 0;
        requiredFields.forEach(field => {
            if (field.value.trim() !== '') {
                filledFields++;
            }
        });
        const progress = (filledFields / requiredFields.length) * 100;
        progressBar.style.width = progress + '%';
    }

    function validateForm() { // Function to validate form
        const requiredFields = transcriptForm.querySelectorAll('input[required], select[required]');
        let isValid = true;
        requiredFields.forEach(field => {
            if (field.value.trim() === '') {
                isValid = false;
            }
        });
        return isValid;
    }
});
