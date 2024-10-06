document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('application-form');
    const backButton = document.getElementById('back-button'); // Select the back button

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting
        
        // Get form field values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const education = document.getElementById('education').value.trim();
        const skills = document.getElementById('skills').value.trim();
        const jobAppliedFor = document.getElementById('job-applied-for').value.trim();
        
        // Get uploaded files
        const certificate = document.getElementById('certificate').files[0];
        const marksheet = document.getElementById('marksheet').files[0];
        const resume = document.getElementById('resume').files[0];
        
        // Validate required fields
        if (!name || !email || !education || !skills || !jobAppliedFor || !certificate || !marksheet || !resume) {
            alert("Please fill in all the fields and upload the required documents.");
            return;
        }
        
        // Validate email format
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        
        // Validate file uploads (you can customize this for specific types or sizes)
        if (!validateFile(certificate) || !validateFile(marksheet) || !validateFile(resume)) {
            alert("All uploaded files must be PDFs, and the size should not exceed 2MB.");
            return;
        }

        // If validation passes, process the form data
        alert('Form submitted successfully!');
        
        // Optionally, you can submit the form here or handle it via AJAX
        // form.submit(); // Uncomment this to allow form submission
    });

    // Function to validate email format using regex
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Function to validate uploaded files (e.g., PDFs and size limit)
    function validateFile(file) {
        const allowedTypes = ['application/pdf'];
        const maxSize = 2 * 1024 * 1024; // 2MB in bytes
        return allowedTypes.includes(file.type) && file.size <= maxSize;
    }

    // Back button functionality
    backButton.addEventListener('click', () => {
        // Redirect to the dashboard page (replace 'dashboard.html' with your actual dashboard page)
        window.location.href = 'dashboard.html'; // Adjust the path as necessary
    });
});
