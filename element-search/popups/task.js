let modal = document.getElementById('modal_main');
modal.classList.add("modal_active");

let modalTwo = document.getElementById('modal_success');


let btnClose = document.getElementsByClassName('modal__close_times');
let btnSuccess = document.getElementsByClassName('btn btn_danger show-success')[0];


btnClose[0].onclick = function() {
  modal.classList.remove("modal_active");
}

btnClose[1].onclick = function() {
  modalTwo.classList.remove("modal_active");
  console.log("modal")
}

btnSuccess.onclick = function() {
  modal.classList.remove("modal_active");
  modalTwo.classList.add("modal_active")
}

