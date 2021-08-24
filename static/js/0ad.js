// Return To Top Of Page Functionality
const toTopButton = document.getElementById("to-top");
window.onscroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        toTopButton.style.visibility = "visible";
        toTopButton.style.opacity = "1";
    } else {
        toTopButton.style.visibility = "hidden";
        toTopButton.style.opacity = "0";
    }
};

// When the user clicks on the button, scroll to the top of the document
toTopButton.addEventListener("click", () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera  
});


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