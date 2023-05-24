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
  const slider = swiperContainer[i];

  const prevButton = createElement("swiper-button-prev d-none d-md-block");
  const nextButton = createElement("swiper-button-next d-none d-md-block");
  const pagination = createElement("swiper-pagination");
  slider.append(prevButton, nextButton, pagination);

  const swiperE1 = slider.querySelector(".swiper");
  const slidePerView = slider.getAttribute("data-per-view");
  const slideLgPerView = slider.getAttribute("data-lg-per-view");
  const isDisablePagination =
    slider.getAttribute("data-disable-pagination") === "true" ? true : false;
  const isDisableCenterslide =
    slider.getAttribute("data-disable-center-slide") === "true" ? true : false;

  const slideEffect = slider.getAttribute("data-slide-effect");

  // SWIPER
  const swiper = new Swiper(swiperE1, {
    effect: slideEffect || "slide",

    // Default parameters
    // slidesPerView: 3,
    spaceBetween: 20,
    centeredSlides: isDisableCenterslide ? false : true,
    initialSlide: 1,
    slidesPerView: "auto",
    rewind: true,

    // Navigation arrows
    navigation: {
      nextEl: slider.querySelector(".swiper-button-next"),
      prevEl: slider.querySelector(".swiper-button-prev"),
    },

    // Pagination
    pagination: {
      el: isDisablePagination
        ? null
        : slider.querySelector(".swiper-pagination"),
      type: "bullets",
      clickable: true,
    },

    // Responsive breakpoints
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,

        pagination: {
          nextEl: null,
          prevEl: null,
        },
      },

      992: {
        slidesPerView: slideLgPerView ? Number(slideLgPerView) : 2,
        spaceBetween: 20,
      },

      1200: {
        slidesPerView: slideLgPerView ? Number(slideLgPerView) : 3,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: slidePerView ? Number(slidePerView) : 3,
        spaceBetween: 20,
      },
    },
  });
}
// === /Swiper JS

// === G Light Box JS / Single Place Gallery Catalog
const lightbox = GLightbox();
// === /G Light Box JS / Single Place Gallery Catalog

// === NoUISlider Range / Catalog Filter & Categories Page ===
const stepsSlider = document.getElementById("steps-slider");
const input0 = document.getElementById("input-with-keypress-0");
const input1 = document.getElementById("input-with-keypress-1");
const inputs = [input0, input1];

noUiSlider.create(stepsSlider, {
  start: [50, 500],
  connect: true,
  tooltips: [true, wNumb({ decimals: 1 })],
  range: {
    min: [0],
    // "10%": [10, 100],
    // "50%": [100, 500],
    // "80%": 800,
    max: 1000,
  },
});

stepsSlider.noUiSlider.on("update", function (values, handle) {
  inputs[handle].value = values[handle];
});

// Listen to Keypres on the input
// Listen to keydown events on the input field.
inputs.forEach(function (input, handle) {
  input.addEventListener("change", function () {
    stepsSlider.noUiSlider.setHandle(handle, this.value);
  });

  input.addEventListener("keydown", function (e) {
    var values = stepsSlider.noUiSlider.get();
    var value = Number(values[handle]);

    // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
    var steps = stepsSlider.noUiSlider.steps();

    // [down, up]
    var step = steps[handle];

    var position;

    // 13 is enter,
    // 38 is key up,
    // 40 is key down.
    switch (e.which) {
      case 13:
        stepsSlider.noUiSlider.setHandle(handle, this.value);
        break;

      case 38:
        // Get step to go increase slider value (up)
        position = step[1];

        // false = no step is set
        if (position === false) {
          position = 1;
        }

        // null = edge of slider
        if (position !== null) {
          stepsSlider.noUiSlider.setHandle(handle, value + position);
        }

        break;

      case 40:
        position = step[0];

        if (position === false) {
          position = 1;
        }

        if (position !== null) {
          stepsSlider.noUiSlider.setHandle(handle, value - position);
        }

        break;
    }
  });
});
// === / NoUISlider Range / Catalog Filter & Categories Page
