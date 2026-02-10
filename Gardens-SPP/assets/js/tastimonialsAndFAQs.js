document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".reviews_swiper")) {
    new Swiper(".reviews_swiper", {
      loop: true,
      spaceBetween: 24,
      grabCursor: true,
      speed: 600,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        disableOnHover: true,
      },
    });
  }
});

// FAQ Accordion
document.querySelectorAll(".question_header").forEach((header) => {
  header.addEventListener("click", () => {
    const current = header.parentElement;

    document.querySelectorAll(".question").forEach((q) => {
      if (q !== current) q.classList.remove("active");
    });

    current.classList.toggle("active");
  });
});
