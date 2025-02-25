// Добавление класса "fade-in" при скролле
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section-title, .section-text, .service-card, .gallery-images img');
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('fade-in');
        }
    });
});

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Валидация формы
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Спасибо за вашу заявку!');
    form.reset();
});
