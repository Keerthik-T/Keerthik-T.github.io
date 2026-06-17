// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;
const themeIcon = themeToggleBtn.querySelector('i');

// Initialize Theme
const savedTheme = localStorage.getItem('theme');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'light' || (!savedTheme && !systemDark)) {
    htmlEl.setAttribute('data-theme', 'light');
    themeIcon.classList.replace('ph-moon', 'ph-sun');
} else {
    htmlEl.setAttribute('data-theme', 'dark');
    themeIcon.classList.replace('ph-sun', 'ph-moon');
}

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlEl.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        htmlEl.setAttribute('data-theme', 'light');
        themeIcon.classList.replace('ph-moon', 'ph-sun');
        localStorage.setItem('theme', 'light');
    } else {
        htmlEl.setAttribute('data-theme', 'dark');
        themeIcon.classList.replace('ph-sun', 'ph-moon');
        localStorage.setItem('theme', 'dark');
    }
});

// Scroll Reveal Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(section => {
    observer.observe(section);
});

// Set Footer Year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
