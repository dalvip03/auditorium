/* js/main.js */
// Global UI Utilities
document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle logic if exists
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        // Load preference
        if (localStorage.getItem('theme') === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggle.querySelector('.material-icons-outlined').textContent = 'light_mode';
        }

        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                themeToggle.querySelector('.material-icons-outlined').textContent = 'dark_mode';
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                themeToggle.querySelector('.material-icons-outlined').textContent = 'light_mode';
            }
        });
    }

    // Initialize nice dropdowns if any
});

// Toast notification feature
window.showToast = function (message, type = 'success') {
    let container = document.getElementById('toastContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toastContainer';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);

    // Auto remove after 3.5s
    setTimeout(() => {
        toast.remove();
    }, 3500);
};

// Form validation wrapper function
window.setupFormValidation = function (formId, submitBtnId, validatorFn) {
    const form = document.getElementById(formId);
    const btn = document.getElementById(submitBtnId);
    if (!form || !btn) return;

    // Validate on load (if prepopulated)
    if (validatorFn(form)) btn.disabled = false;

    form.addEventListener('input', () => {
        if (validatorFn(form)) {
            btn.disabled = false;
        } else {
            btn.disabled = true;
        }
    });
};
