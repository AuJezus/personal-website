const screen = document.querySelector(".screen");
const screenImage = document.querySelector(".screen-image");
const h1 = document.querySelector("h1");
let timeout;

// screen.addEventListener("mousemove", () => {
//   screenImage.classList.add("noise");
//   h1.classList.add("big");
//   clearTimeout(timeout);
//   timeout = setTimeout(() => {
//     screenImage.classList.remove("noise");
//     h1.classList.remove("big");
//   }, 50); // Adjust the timeout duration as needed (1 second in this example)
// });

function addGlitchEffect() {
  screenImage.classList.add("noise");
  const randomDelay = Math.random() * 200 + 50;
  setTimeout(() => {
    screenImage.classList.remove("noise");
    scheduleNextGlitch();
  }, randomDelay); // Glitch effect duration (0.5 seconds)
}

function scheduleNextGlitch() {
  const randomDelay = Math.random() * 1300 + 300; // Random delay between 1 to 6 seconds
  setTimeout(() => {
    addGlitchEffect();
  }, randomDelay);
}

// Initial glitch scheduling
scheduleNextGlitch();
