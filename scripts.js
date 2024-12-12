document.addEventListener("DOMContentLoaded", () => {
    console.log("Сайт загружен и готов к использованию!");

    // Прокрутка к секциям при клике (добавить меню, если требуется)
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href").slice(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
