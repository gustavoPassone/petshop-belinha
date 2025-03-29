let index = 0;
    function changeSlide() {
        const slides = document.querySelector(".slides");
        index = (index + 1) % document.querySelectorAll(".slide").length;
        slides.style.transform = `translateX(${-index * 100}%)`;
    }
setInterval(changeSlide, 7000);


document.querySelectorAll(".loja").forEach((loja) => {
    loja.addEventListener("mouseenter", () => {
        document.querySelectorAll(".loja").forEach((outro) => {
            if (outro !== loja) {
                outro.style.filter = "brightness(0.85)";
            }
        });
    });

    loja.addEventListener("mouseleave", () => {
        document.querySelectorAll(".loja").forEach((outro) => {
            outro.style.filter = "brightness(1)";
        });
    });
});