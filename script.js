document.addEventListener("DOMContentLoaded", function () {
    const professionElement = document.querySelector('.typing-effect');
    const professionText = professionElement.innerText;
    professionElement.innerText = '';

    let i = 0;
    function typeWriter() {
        if (i < professionText.length) {
            professionElement.innerText += professionText.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
        }
    }

    typeWriter();
});


// Open modal on portfolio item click
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', function () {
        const modalId = this.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'flex';
    });
});

// Close modal on close button click
document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        this.closest('.modal').style.display = 'none';
    });
});

// Close modal if clicked outside modal content
window.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});




// Progress Bars animation on scroll
window.addEventListener('scroll', function () {
    const skillBars = document.querySelectorAll('.progress-bar');
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        const barHeight = bar.getBoundingClientRect().top;
        if (barHeight <= window.innerHeight) {
            bar.style.width = progress + '%';
        }
    });
});

// Contact Form Validation and Submit Button Loading Spinner
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Hide previous error messages
    const errorMessages = document.querySelectorAll('.error');
    errorMessages.forEach(error => {
        error.style.display = 'none';
    });

    let valid = true;

    // Validate Name
    const name = document.getElementById('name').value;
    if (name === '') {
        valid = false;
        document.getElementById('nameError').style.display = 'block';
    }

    // Validate Email
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        valid = false;
        document.getElementById('emailError').style.display = 'block';
    }

    // Validate Message
    const message = document.getElementById('message').value;
    if (message === '') {
        valid = false;
        document.getElementById('messageError').style.display = 'block';
    }

    // If form is valid, simulate submission
    if (valid) {
        const submitBtn = document.getElementById('submitBtn');
        const spinner = document.getElementById('spinner');
        const submitText = document.getElementById('submitText');

        submitText.style.display = 'none'; // Hide text
        spinner.style.display = 'block'; // Show spinner

        // Simulate form submission (use AJAX for real submission)
        setTimeout(function () {
            alert('Form submitted successfully!');
            submitText.style.display = 'block'; // Show text
            spinner.style.display = 'none'; // Hide spinner
        }, 2000); // Simulate a 2 second submission delay
    }
});
