document.addEventListener('DOMContentLoaded', () => {

    // 1. FAQ Accordion Toggle
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.fa-chevron-down');

        if (question && answer) {
            question.addEventListener('click', (e) => {
                e.stopPropagation();

                // Check current state of this specific answer
                const isOpen = answer.style.display === 'block';

                // Close all open answers and reset chevron icons
                document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
                document.querySelectorAll('.faq-question i').forEach(i => i.style.transform = 'rotate(0deg)');

                // If it was closed, open it now
                if (!isOpen) {
                    answer.style.display = 'block';
                    if (icon) {
                        icon.style.transform = 'rotate(180deg)';
                    }
                }
            });
        }
    });

    // 2. Smooth Scrolling for Sidebar Navigation
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

});