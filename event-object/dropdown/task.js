const dropdowns = document.querySelectorAll(".dropdown")

dropdowns.forEach(dropdown => {
  const dropdownList = dropdown.querySelector(".dropdown__list");
  const dropdownButton = dropdown.querySelector(".dropdown__value");
  const dropdownItems = dropdown.querySelectorAll(".dropdown__item");

  dropdownButton.addEventListener('click', function() {
    if(dropdownList.classList.contains("dropdown__list_active")) {
      dropdownList.classList.remove("dropdown__list_active");
    } else {
      dropdownList.classList.add("dropdown__list_active");
    }
  });

  function dropdownClick(event) {
    event.preventDefault();
    const value = event.target.textContent;
    dropdownButton.textContent = value;
    dropdownList.classList.remove("dropdown__list_active");
  }

  dropdownItems.forEach(item => {
    const link = item.querySelector(".dropdown__link");
    link.addEventListener('click', dropdownClick)
  });
});