const images = [
    "https://picsum.photos/id/1015/800/600",
    "https://picsum.photos/id/1011/800/600",
    "https://picsum.photos/id/1012/800/600",
    "https://picsum.photos/id/1016/800/600"
];

let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = images[currentIndex];
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function changeImage(step) {
    currentIndex += step;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    document.getElementById("lightbox-img").src = images[currentIndex];
}

// Bonus: Image Filters
function filterSelection(category) {
    const items = document.getElementsByClassName("gallery-item");

    for (let i = 0; i < items.length; i++) {
        if (category === "all" || items[i].classList.contains(category)) {
            items[i].style.display = "block";
        } else {
            items[i].style.display = "none";
        }
    }
}