const images = [
    { src: "Galeria/d5.png", description: "Equipo AQUOX" },
    { src: "Galeria/d2.png", description: "Evolución del Proceso de Clarificación del Agua" },
    { src: "Galeria/d1.png", description: "Diagrama de flujo" },
    { src: "Galeria/d3.png", description: "Esquema Detallado de la Celda de Electrolisis: Vista Frontal, Superior e Isométrica" },
    { src: "Galeria/d4.png", description: "Tarjeta Recolectora" }
];

let currentIndex = 0;

function updateImage() {
    const galleryImage = document.getElementById('galleryImage');
    const imageDescription = document.getElementById('imageDescription');
    galleryImage.src = images[currentIndex].src;
    imageDescription.textContent = images[currentIndex].description;
}

function prevImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateImage();
}

function nextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateImage();
}

document.getElementById('galleryImage').addEventListener('click', nextImage);
