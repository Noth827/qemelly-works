let currentIndex = 0;
const galleryWrapper = document.querySelector(".gallery-wrapper");
const galleryItems = document.querySelectorAll(".gallery-item");
let autoSlide;

function showSlide(index) {
  currentIndex = index;
  const translateValue = -index * 100 + "%";
  galleryWrapper.style.transform = "translateX(" + translateValue + ")";
}

function nextSlide() {
  resetAutoSlide();
  currentIndex = (currentIndex + 1) % galleryItems.length;
  showSlide(currentIndex);
}

function prevSlide() {
  resetAutoSlide();
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  showSlide(currentIndex);
}

function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 5000);
}

autoSlide = setInterval(nextSlide, 5000);
