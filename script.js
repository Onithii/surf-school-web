document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.fa-chevron-down');
        const isVisible = answer.style.display === 'block';
        
        // Close all
        document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
        document.querySelectorAll('.faq-question i').forEach(i => i.style.transform = 'rotate(0deg)');
        
        // Toggle current
        if (!isVisible) {
            answer.style.display = 'block';
            icon.style.transform = 'rotate(180deg)';
        }
    });
});

// Smooth scrolling for sidebar navigation links
document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// FAQ Accordion Toggle
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.fa-chevron-down');
        const isVisible = answer.style.display === 'block';
        
        // Close all
        document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
        document.querySelectorAll('.faq-question i').forEach(i => i.style.transform = 'rotate(0deg)');
        
        // Toggle current
        if (!isVisible) {
            answer.style.display = 'block';
            icon.style.transform = 'rotate(180deg)';
        }
    });
});