// Lightbox/Gallery Functionality
const lightbox = document.getElementById("lightbox");
const lightboxContent = document.getElementById("lightbox-content");

document.querySelectorAll("figure.gallery-figure > a").forEach(item => {
    item.addEventListener("click", event => {
        event.preventDefault();
        let image = new Image();
        image.src = item.href;
        lightbox.style.display = "flex";

        // Remove any existing image.
        while (lightboxContent.firstChild) {
            lightboxContent.removeChild(lightboxContent.firstChild);
        }

        // Add image to lightbox.
        lightboxContent.appendChild(image);
        console.log(image.src);
    })
})

lightbox.addEventListener("click", function () {
    this.style.display = "none";
})