/**
 * validation.js
 * Provides validation for the student registration form
 */

const form = document.getElementById('registrationForm');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Clear all previous error messages
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

    // Get values
    const fullName = form.elements['fullName'].value.trim();
    const email = form.elements['email'].value.trim();
    const password = form.elements['password'].value.trim();
    const confirmPassword = form.elements['confirmPassword'].value.trim();
    const phone = form.elements['phone'].value.trim();
    const dob = form.elements['dob'].value;
    const course = form.elements['course'].value;
    const terms = form.elements['terms'].checked;

    let isValid = true;

    // Full Name
    if (fullName === '') {
        document.getElementById('nameError').textContent = 'Full Name is required.';
        isValid = false;
    }

    // Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Enter a valid email address.';
        isValid = false;
    }

    // Password
    if (password === '') {
        document.getElementById('passwordError').textContent = 'Password is required.';
        isValid = false;
    } else if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters.';
        isValid = false;
    }

    // Confirm Password
    if (confirmPassword === '') {
        document.getElementById('confirmPasswordError').textContent = 'Please confirm your password.';
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        isValid = false;
    }

    // Phone
    const phonePattern = /^[0-9]{10}$/; // 10-digit phone
    if (phone === '') {
        document.getElementById('phoneError').textContent = 'Phone number is required.';
        isValid = false;
    } else if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Enter a valid 10-digit phone number.';
        isValid = false;
    }

    // DOB
    if (dob === '') {
        document.getElementById('dobError').textContent = 'Date of Birth is required.';
        isValid = false;
    }

    // Course
    if (course === '') {
        document.getElementById('courseError').textContent = 'Please select a course.';
        isValid = false;
    }

    // Terms
    if (!terms) {
        document.getElementById('termsError').textContent = 'You must agree to the Terms.';
        isValid = false;
    }

    // Success Message
    const successMessage = document.getElementById('success-message');
    successMessage.textContent = '';

    if (isValid) {
        successMessage.textContent = '✅ Registration successful!';
        console.log('Form submitted successfully!');
        form.reset();
    }
});
