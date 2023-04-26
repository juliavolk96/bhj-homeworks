const sliderItems = document.querySelectorAll(".slider__item");
const sliderArrows = document.querySelectorAll(".slider__arrow");
// console.log(sliderItems)
// console.log(sliderArrows)
for (let i = 0; i < sliderArrows.length; i++) {
  sliderArrows[i].addEventListener('click', function(e) {
    const arrowClass = e.target.classList[1];
    const activeIndex = Array.from(sliderItems).findIndex(item => item.classList.contains("slider__item_active"));
    sliderItems[activeIndex].classList.remove("slider__item_active");
    let indexImage = 0;
    const numOfImages = sliderItems.length;
    if (arrowClass == "slider__arrow_prev") {
      indexImage = (activeIndex - 1 + numOfImages) % numOfImages;
    } else {
      indexImage = (activeIndex + 1) % numOfImages;
    }
    sliderItems[indexImage].classList.add("slider__item_active");
  });
}

