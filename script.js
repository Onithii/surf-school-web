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