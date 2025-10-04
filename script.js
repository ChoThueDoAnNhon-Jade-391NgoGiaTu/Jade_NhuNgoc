const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Hiển thị slide đầu tiên
showSlide(currentIndex);

// Tự động chuyển slide mỗi 3 giây
setInterval(nextSlide, 3000);
