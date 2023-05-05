let chatWidget = document.querySelector('.chat-widget');
let chatSideText = document.querySelector('.chat-widget__side-text');
let chatMessages = document.getElementById('chat-widget__messages');
let chatInput = document.getElementById('chat-widget__input');
let botMessages = ['Добрый день! До свидания!', 'Кто тут?', 'Где ваша совесть?', 'Мы ничего не будем вам продавать', 'К сожалению, все операторы сейчас заняты. Не пишите нам больше. Никогда.', 'Вы не купили ни одного товара, чтобы так с нами разговаривать.']

// Открываем 
chatSideText.addEventListener('click', function() {
  chatWidget.classList.add('chat-widget_active');
});

// Скрываем 
document.addEventListener('click', function(event) {
  if(!chatWidget.contains(event.target) && chatWidget.classList.contains("chat-widget_active")) {
    chatWidget.classList.remove('chat-widget_active');
  }
});

chatInput.addEventListener('keydown', function(event) {
  if(event.key === 'Enter') {
    let messageText = chatInput.value.trim();
    if (messageText !== '') {
      let message = document.createElement('div');
      message.classList.add('message', 'message_client');
      let time = document.createElement('div');
      time.classList.add('message__time');
      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      if (minutes < 10) {
        minutes = '0' + minutes;
      }
      time.textContent = hours + ':' + minutes; 
      let text = document.createElement('div');
      text.classList.add('message__text');
      text.textContent = messageText;
      message.appendChild(time);
      message.appendChild(text);
      chatMessages.appendChild(message);
      chatInput.value = '';

      setTimeout(() => {
        let botMessage = document.createElement('div');
        botMessage.classList.add('message');
        let botTime = document.createElement('div');
        botTime.classList.add('message__time');
        let botDate = new Date();
        let minutes = botDate.getMinutes();
        if (minutes < 10) {
          minutes = '0' + minutes;
        }
        botTime.textContent = `${botDate.getHours()}:${minutes}`;
        let botText = document.createElement('div');
        botText.classList.add('message__text');
        let randomIndex = Math.floor(Math.random() * botMessages.length);
        botText.innerHTML = botMessages[randomIndex];
        botMessage.appendChild(botTime);
        botMessage.appendChild(botText);
        chatMessages.appendChild(botMessage);
      }, 1000);
    }
  }
});