const daysElement = document.getElementById("myDay");
const hoursElement = document.getElementById("myHour");
const minutesElement = document.getElementById("myMinute");

let days = 3;
let hours = 6;
let minutes = 3;

function updateCountdown() {
  if (minutes > 0) {
    minutes--;
  } else {
    minutes = 59;
    if (hours > 0) {
      hours--;
    } else {
      hours = 23;
      if (days > 0) {
        days--;
      } else {
        clearInterval(countdownInterval); // Stop the countdown when all time is up
      }
    }
  }

  daysElement.innerHTML = `${
    days < 10 ? "0" + days : days
  } <span class="text-sm">Days</span>`;
  hoursElement.innerHTML = `${
    hours < 10 ? "0" + hours : hours
  } <span class="text-sm">Hours</span>`;
  minutesElement.innerHTML = `${
    minutes < 10 ? "0" + minutes : minutes
  } <span class="text-sm">Minutes</span>`;
}

// Initial update to set the correct time
updateCountdown();

// Update the countdown every minute
const countdownInterval = setInterval(updateCountdown, 60000); // 60000ms = 1 minute

let navbar = document.getElementById("navbar-sticky");
let navOpner = document.getElementById("menu-opener");

navOpner.addEventListener("click", function () {
  navbar.classList.toggle("hidden");
});

AOS.init({
  easing: "ease-out-cubic",
  duration: 1500,
  mirror: false,
  once: true,
});

var swiper = new Swiper("#mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

window.openModal = function(modalId) {
  document.getElementById(modalId).style.display = 'block'
  document.getElementsByTagName('body')[0].classList.add('overflow-y-hidden')
}

window.closeModal = function(modalId) {
  document.getElementById(modalId).style.display = 'none'
  document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
}

// Close all modals when press ESC
document.onkeydown = function(event) {
  event = event || window.event;
  if (event.keyCode === 27) {
      document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
      let modals = document.getElementsByClassName('modal');
      Array.prototype.slice.call(modals).forEach(i => {
          i.style.display = 'none'
      })
  }
};