const timer = document.getElementById("timer");
var time = 59;

let timerId = setInterval(updateTimer, 300);

function updateTimer() {
  if (time > 0) {
    time--;
  } else {
    alert("Вы победили в конкурсе!")
    clearInterval(timerId);
  }

  timer.innerHTML = time;
}