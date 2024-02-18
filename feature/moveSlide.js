const intro1 = document.getElementById("intro1");
const intro2 = document.getElementById("intro2");
const intro3 = document.getElementById("intro3");
const intro4 = document.getElementById("intro4");
const intro5 = document.getElementById("intro5");
const intro6 = document.getElementById("intro6");
const intro7 = document.getElementById("intro7");
const intro8 = document.getElementById("intro8");

const container_intro = document.querySelector(".container_intro");

const arrayIntro = [
  intro1,
  intro2,
  intro3,
  intro4,
  intro5,
  intro6,
  intro7,
  intro8,
];

let indexIntro = 0;
let isDragging, beginPoint, endPoint, distance;

// Slide's event (mouse)
function moveSlide() {
  container_intro.addEventListener("mousedown", (e) => {
    isDragging = true;
    beginPoint = e.pageX;
  });
  container_intro.addEventListener("mouseup", () => {
    isDragging = false;
  });
  container_intro.addEventListener("mousemove", (e) => {
    if (isDragging) {
      endPoint = e.pageX;
      distance = (beginPoint - endPoint) / 10;
      arrayIntro.forEach((intro) => {
        intro.style.left = `${intro.offsetLeft - distance}px`;
      });
    }
  });
}

// Display one slide to center
function slideCenter(distance) {
  arrayIntro.forEach((intro) => {
    intro.style.transform = `translateX(${-distance}px)`;
    // console.log(intro.offsetLeft);
  });
}

// Check X cordinate of slide
function checker() {
  arrayIntro.forEach((intro) => {
  if (intro.offsetLeft <= window.innerWidth / 2 && intro.offsetLeft > 0) {
    console.log("Catched!");
    distance = intro.offsetLeft;
    slideCenter(distance);
  }
  });

  requestAnimationFrame(checker);
}

checker();


// Slide's event (button)
function nextSlide(count) {
  arrayIntro.forEach((intro) => {
    intro.style.transform = `translateX(-${count * 100}%)`;
    console.log(arrayIntro[0].offsetLeft);
  });
}

function prevSlide(count) {
  arrayIntro.forEach((intro) => {
    intro.style.transform = `translateX(${count * 100}%)`;
    console.log(arrayIntro[0].offsetLeft);
  });
}

export { nextSlide, prevSlide };
export default moveSlide;
