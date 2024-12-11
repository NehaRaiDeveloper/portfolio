// Example script for additional interactivity like form validation, etc.

// Contact form validation example
document.querySelector('form').addEventListener('submit', function (e) {
    const name = document.querySelector('input[name="name"]');
    const email = document.querySelector('input[name="email"]');
    const message = document.querySelector('textarea[name="message"]');

    if (name.value === '' || email.value === '' || message.value === '') {
        alert('Please fill out all fields.');
        e.preventDefault();
    }
});
