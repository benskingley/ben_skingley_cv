function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const icon = document.querySelector('.toggle-btn i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
}

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.job, .project, .education-item');
    elementsToAnimate.forEach(el => observer.observe(el));

    // Add typing sound effect simulation
    const title = document.querySelector('.title');
    title.addEventListener('animationend', () => {
        title.style.borderRight = 'none';
    });
});

// Add parallax effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    header.style.transform = `translateY(${rate}px)`;
});