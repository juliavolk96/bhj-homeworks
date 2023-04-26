
const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');

const closeButtons = document.querySelectorAll('.modal__close');
const successButton = document.querySelector('.show-success');

modalMain.classList.add('modal_active');

closeButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const modal = button.closest('.modal');
    modal.classList.remove('modal_active');
  });
});

successButton.addEventListener('click', function(event) {
  event.preventDefault();
  modalMain.classList.remove('modal_active');
  modalSuccess.classList.add('modal_active');
});