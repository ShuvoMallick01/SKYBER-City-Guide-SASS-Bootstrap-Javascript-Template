// $(function () {
//   $("#datepicker").datepicker();
// });

// === SLIDER USING SWPER JS PLUGIN ===
const swiperContainer = document.querySelectorAll(".swiper-container");
const swipers = document.querySelectorAll(".swiper");

// create element
function createElement(className) {
  const element = document.createElement("div");
  element.className = className;
  return element;
}

for (let i = 0; i < swiperContainer.length; i++) {
  // console.log(swiperContainer[i]);
  const slider = swiperContainer[i];
  console.log(slider);
  const prevButton = createElement("swiper-button-prev");
  const nextButton = createElement("swiper-button-next");

  slider.append(prevButton, nextButton);

  const swiperE1 = slider.querySelector(".swiper");

  const slidePerView = slider.getAttribute("data-per-view");
  const disablePagination = slider.getAttribute("data-disable-pagination");
  const slideEffect = slider.getAttribute("data-slide-effect");

  // SWIPER
  const swiper = new Swiper(swiperE1, {
    // effect: slideEffect || "slide",

    // Default parameters
    // slidesPerView: 3,
    spaceBetween: 20,

    // // Navigation arrows
    navigation: {
      nextEl: slider.querySelector(".swiper-button-next"),
      prevEl: slider.querySelector(".swiper-button-prev"),
    },

    // Responsive breakpoints
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      992: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: slidePerView ? Number(slidePerView) : 3,
        spaceBetween: 20,
      },
    },
  });
}

// init Swiper:
// const swiper = new Swiper(".swiper", {
//   // effect: slideEffect || "slide",

//   // Default parameters
//   slidesPerView: 3,
//   spaceBetween: 18,

//   // // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   // // Responsive breakpoints
//   // Responsive
//   // breakpoints: {
//   //   0: {
//   //     slidesPerView: 1,
//   //     spaceBetween: 20,
//   //   },

//   //   992: {
//   //     slidesPerView: 2,
//   //     spaceBetween: 20,
//   //   },

//   //   1200: {
//   //     slidesPerView: 3,
//   //     spaceBetween: 20,
//   //   },
//   //   1400: {
//   //     slidesPerView: slidePerView ? Number(slidePerView) : 4,
//   //     spaceBetween: 20,
//   //   },
//   // },
// });

// === /SLIDER USING SWPER JS PLUGIN ===
