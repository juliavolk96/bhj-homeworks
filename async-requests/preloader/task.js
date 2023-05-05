let items = document.getElementById('items');
let loader = document.getElementById('loader')


//отправление get-запроса 
fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
.then(response => response.json()) //преобразование ответа
.then(data => { //обработка ответа 
  const valutes = data.response.Valute; //получение данных о курсах
  for (let key in valutes) {
    let valute = valutes[key];
    let code = valute.CharCode;
    let value = valute.Value.toFixed(2);
    let div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = `<div class="item__code">${code}</div><div class="item__value">${value}</div><div class="item__currency">руб.</div>`;
    items.appendChild(div);
  }

  loader.classList.remove('loader_active');
})

.catch(error => console.error(error));
