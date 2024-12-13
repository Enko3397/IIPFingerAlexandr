document.addEventListener("DOMContentLoaded", () => {
    console.log("Сайт готов!");

    // Плавный переход к секциям
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Анимация при наведении на секции
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.addEventListener("mouseover", () => {
            section.style.transform = "scale(1.02)";
            section.style.transition = "transform 0.3s ease";
        });
        section.addEventListener("mouseout", () => {
            section.style.transform = "scale(1)";
        });
    });
});
