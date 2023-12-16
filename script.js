const slides = document.querySelectorAll(".slide");
let counter = 0;

slides.forEach((slide, index) => (slide.style.left = `${index * 100}%`));

const Prev = () => {
  counter <= 0 ? null : counter--;
  slideImage();
};

const Next = () => {
  counter >= 3 ? null : counter++;
  slideImage();
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
