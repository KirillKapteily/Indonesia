let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }

  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === currentIndex) {
      slide.classList.add("active");
    }
  });

  dots.forEach((dot, i) => {
    dot.classList.remove("active");
    if (i === currentIndex) {
      dot.classList.add("active");
    }
  });

  const offset = -currentIndex * 100;
  document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function currentSlide(index) {
  showSlide(index);
}
