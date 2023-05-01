let checkboxes = document.querySelectorAll('.interests .interest__check');

function changeChecbox(event) {
  let checkbox = event.target;
  let nestedCheckboxes = checkbox.closest('.interest').querySelectorAll('.interest__check');

  if (checkbox.checked) {
    nestedCheckboxes.forEach((nestedCheckbox) => {
      nestedCheckbox.checked = true;
    });
  } else {
    nestedCheckboxes.forEach((nestedCheckbox) => {
      nestedCheckbox.checked = false;
    });
  }

  checkboxes.forEach((checkbox) => {
    let nestedCheckboxes = checkbox.closest('.interest').querySelectorAll('.interest__check');

    if (nestedCheckboxes.length > 1) {
      checkbox.addEventListener('change', changeChecbox);
    }
  });
}

checkboxes.forEach((checkbox) => {
  let nestedCheckboxes = checkbox.closest('.interest').querySelectorAll('.interest__check');

  if (nestedCheckboxes.length > 1) {
    checkbox.addEventListener('change', changeChecbox);
  }
});