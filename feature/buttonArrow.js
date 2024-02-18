import { nextSlide, prevSlide } from "./moveSlide.js";

const btnArrowRight = document.querySelector(".arrow.right");
const btnArrowLeft = document.querySelector(".arrow.left");

let count = 0;


// Button's event
function eventPressButton() {
  btnArrowLeft.addEventListener("click", () => {
    count--;
    if (count == 0) {
      btnArrowLeft.style.display = `none`;
    }
    prevSlide(count);
  });

  btnArrowRight.addEventListener("click", () => {
    count++;
    if (count >= 7) {
      btnArrowRight.style.display = `none`;
    }
    nextSlide(count);
  });
}

// Check count to display button
function checker(){
  if(count > 6){
    btnArrowRight.style.display = `none`;
  } else {
    btnArrowRight.style.display = `block`;
  }
  if(count < 1){
    btnArrowLeft.style.display = `none`;
  } else {
    btnArrowLeft.style.display = `block`;
  }


  requestAnimationFrame(checker)
}
checker();

export default eventPressButton;
