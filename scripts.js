// Скрипт для интерактивного меню навигации
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Добавление плавного скроллинга к разделам
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 60, // Учитываем высоту навигации
            behavior: 'smooth'
        });

        // Закрыть меню на мобильных устройствах после выбора
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});
