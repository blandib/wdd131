document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll("img[loading='lazy']");

    lazyImages.forEach(img => {
        img.addEventListener("load", () => {
            img.style.opacity = "1"; 
        });
    });
});
