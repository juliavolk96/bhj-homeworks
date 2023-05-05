let modalMain = document.getElementById('subscribe-modal');
let closeButtons = document.querySelectorAll('.modal__close');
let modalClosed = localStorage.getItem('modalClosed');

if (!modalClosed) {
  modalMain.classList.add('modal_active');
}

closeButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    let modal = button.closest('.modal');
    modal.classList.remove('modal_active');
    localStorage.setItem('modalClosed', true);
  });
});