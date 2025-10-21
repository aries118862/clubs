// Slideshow with Timer + Timestamp Display
function changeSlide(direction, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const slides = container.getElementsByClassName("slide");
  if (!slides.length) return;

  let activeIndex = Array.from(slides).findIndex(slide =>
    slide.classList.contains("active")
  );

  slides[activeIndex].classList.remove("active");
  activeIndex += direction;

  if (activeIndex < 0) activeIndex = slides.length - 1;
  if (activeIndex >= slides.length) activeIndex = 0;

  slides[activeIndex].classList.add("active");

  // Update timestamp
  updateTimestamp(containerId);
}

// Auto slide every 5 seconds
function startAutoSlide(containerId, interval = 5000) {
  setInterval(() => changeSlide(1, containerId), interval);
}

// Live timestamp
function updateTimestamp(containerId) {
  const timeElement = document.querySelector(`#${containerId} .timestamp`);
  if (!timeElement) return;

  const now = new Date();
  timeElement.textContent = `Updated: ${now.toLocaleTimeString()}`;
}

// Initialize both slideshows + footer clock
window.addEventListener("load", function() {
  const slideshows = ["events-slideshow", "meetings-slideshow"];

  slideshows.forEach(id => {
    updateTimestamp(id);
    startAutoSlide(id, 5000);
  });

  const clock = document.getElementById("live-clock");
  if (clock) {
    setInterval(() => {
      const now = new Date();
      clock.textContent = now.toLocaleTimeString();
    }, 1000);
  }

  // Responsive toggle menu
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
      menuToggle.classList.toggle("open");
    });
  }
});
