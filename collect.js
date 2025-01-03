const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg"
];

let currentImageIndex = 0;

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) currentImageIndex = images.length - 1;
    if (currentImageIndex >= images.length) currentImageIndex = 0;
    
    // 更換圖片
    document.getElementById("collection-image").src = images[currentImageIndex];
}
