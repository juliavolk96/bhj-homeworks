let signInForm = document.getElementById('signin__form');
let welcomeBlock = document.getElementById('welcome');
let userIdSpan = document.getElementById('user_id');

signInForm.addEventListener('submit', function(event) {
  event.preventDefault();
  let formData = new FormData(signInForm);
  fetch('https://students.netoservices.ru/nestjs-backend/auth', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if(data.success) {
      localStorage.setItem('userId', data.user_id);
      userIdSpan.textContent = data.user_id;
      welcomeBlock.classList.add('welcome_active');
    } else {
      alert('Неверный логин/пароль');
    }
  })
  .catch(error => console.error(error));
})