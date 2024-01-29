let currentIndex = 0;
const galleryWrapper = document.querySelector(".gallery-wrapper");
const galleryItems = document.querySelectorAll(".gallery-item");
let autoSlide;

// 最初と最後のスライドを複製
const firstSlide = galleryItems[0].cloneNode(true);
const lastSlide = galleryItems[galleryItems.length - 1].cloneNode(true);

// 複製したスライドを適切な位置に挿入
galleryWrapper.appendChild(firstSlide);
galleryWrapper.insertBefore(lastSlide, galleryItems[0]);

// スライドの位置を調整
galleryWrapper.style.transform = "translateX(-100%)";

function showSlide(index) {
  const translateValue = -index * 100 + "%";
  galleryWrapper.style.transform = "translateX(" + translateValue + ")";
  currentIndex = index;
}

function nextSlide() {
  resetAutoSlide();
  currentIndex = (currentIndex + 1) % (galleryItems.length + 2);
  if (currentIndex === galleryItems.length) {
    // 最後のスライドに到達したら、シームレスに最初のスライドに戻る
    setTimeout(() => {
      galleryWrapper.style.transition = "none";
      galleryWrapper.style.transform = "translateX(-100%)";
      requestAnimationFrame(() => {
        galleryWrapper.style.transition = "";
        currentIndex = 0;
      });
    }, 500); // 500はトランジション時間と一致させる
  } else {
    showSlide(currentIndex);
  }
}

function prevSlide() {
  resetAutoSlide();
  currentIndex = (currentIndex - 1 + galleryItems.length + 2) % (galleryItems.length + 2);
  if (currentIndex === galleryItems.length + 1) {
    // 最初のスライドに到達したら、シームレスに最後のスライドに戻る
    setTimeout(() => {
      galleryWrapper.style.transition = "none";
      galleryWrapper.style.transform = "translateX(-" + (galleryItems.length + 1) * 100 + "%)";
      requestAnimationFrame(() => {
        galleryWrapper.style.transition = "";
        currentIndex = galleryItems.length - 1;
      });
    }, 500); // 500はトランジション時間と一致させる
  } else {
    showSlide(currentIndex);
  }
}

function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 5000);
}

autoSlide = setInterval(nextSlide, 5000);
