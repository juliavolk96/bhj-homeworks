var num = 0;
var clicker__counter = document.getElementById("clicker__counter");
var cookie = document.getElementById("cookie");

function cookieClick() {
  num++;

  clicker__counter.innerHTML = num;
  changeSize();
}

function changeSize() {
  cookie.style.width = 230 + 'px';
  setTimeout(function() {
    cookie.style.width = 200 + 'px';
  }, 100)
}
