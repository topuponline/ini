const scrollContainer = document.getElementById('scroll-container');

function scrollLeft() {
    scrollContainer.scrollBy({
        left: -100, // Sesuaikan dengan lebar item
        behavior: 'smooth'
    });
}

function scrollRight() {
    scrollContainer.scrollBy({
        left: 100, // Sesuaikan dengan lebar item
        behavior: 'smooth'
    });
}
