
//home page image slide 
let currentImageIndex = 0;
const images = [
    'Home/home3.jpg', // Change to your actual image paths
    'Home/home4.jpg',
    'Home/home5.jpg',
    'Home/home2.jpg' // Change to your actual image paths
];
const bridalImg=[
    'Home/bridalRings/img1.avif',
    'Home/bridalRings/img3.avif',
    'Home/bridalRings/img4.avif',
    'Home/bridalRings/img5.avif'
];
function showImage(index) {
    const sliderImage = document.getElementById('slider-image');
    
    sliderImage.src = images[index];
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}
//bridal 
function prevImagebridal() {
    currentImageIndex = (currentImageIndex - 1 + bridalImg.length) % bridalImg.length;
    showBridal(currentImageIndex);
}

function nextImagebridal() {
    currentImageIndex = (currentImageIndex + 1) % bridalImg.length;
    showBridal(currentImageIndex);
}

function showBridal(index){
    const sliderImage = document.getElementById('slider-bridal-image');
    
    sliderImage.src = bridalImg[index];
}



// Initial image display
showImage(currentImageIndex);

showBridal(currentImageIndex);
