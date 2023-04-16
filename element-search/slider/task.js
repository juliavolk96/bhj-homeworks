const sliderItems = document.querySelectorAll(".slider__item");
const sliderArrows = document.querySelectorAll(".slider__arrow");
console.log(sliderItems)
console.log(sliderArrows)
let indexImage = 0;
let numOfImages = sliderItems.length;

function sliderAction(arrowClass) {
  sliderItems.item(indexImage).classList.remove("slider__item_active");
  if (arrowClass == "slider__arrow_prev") {
    indexImage = (indexImage - 1 + numOfImages) % numOfImages;
  } else {
    indexImage = (indexImage + 1) % numOfImages;
  }
  sliderItems.item(indexImage).classList.add("slider__item_active");
}

for(let i = 0; i < sliderArrows.length; i++) {
  sliderArrows[i].addEventListener('click', function(e) {
    // sliderAction(sliderArrows[i].classList[1]);
    sliderAction(e.target.classList[1])
  });
}

