// swiper for header
const swiper = new Swiper("header .swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
// header for section one
const swiperone = new Swiper(".sec-one .swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// swiper for section four
const swiperfour = new Swiper(".sec-four .swiper", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 4,
  spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".sec-four-next",
    prevEl: ".sec-four-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    676: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1006: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});

// Target date for Black Friday
// Target date for Black Friday
const targetDate = new Date("November 29, 2025 00:00:00").getTime();

// Function to update the countdown
function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft > 0) {
    // Calculate time components
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update HTML elements
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours
      .toString()
      .padStart(2, "0");
    document.getElementById("minutes").textContent = minutes
      .toString()
      .padStart(2, "0");
    document.getElementById("seconds").textContent = seconds
      .toString()
      .padStart(2, "0");
  } else {
    // If the target date is reached
    clearInterval(countdownInterval);

    document.getElementById("countdown").innerHTML =
      "<h1>Black Friday is Here!</h1>";
  }
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initialize countdown immediately
updateCountdown();

// swiper for section siven
const swipersiven = new Swiper(".sec-siven .swiper", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 4,
  spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".sec-siven-next",
    prevEl: ".sec-siven-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    676: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1006: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

// swiper for section eight

var swiperfroseceight = new Swiper(".egiht", {
  direction: "horizontal",
  slidesPerView: 7,
  centeredSlides: false,
  spaceBetween: 30,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".eight-swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    150: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    676: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    1006: {
      slidesPerView: 7,
      spaceBetween: 10,
    },
  },
});
window.addEventListener("load", () => {
  swiperfroseceight.update();
});

// swiper for secion nine
const swipernine = new Swiper(".sec-nine .swiper", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".sec-siven-next",
    prevEl: ".sec-siven-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    676: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1006: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

function checkVisibility() {
  const sections = document.querySelectorAll(
    ".sec-two, .sec-three, .sec-four, .sec-five, .sec-six"
  );
  const windowHeight = window.innerHeight;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < windowHeight - 50) {
      section.classList.add("visible");
    }
  });
}

// Run the visibility check on page load and scroll
document.addEventListener("scroll", checkVisibility);
document.addEventListener("DOMContentLoaded", checkVisibility);
