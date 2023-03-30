const timer = document.getElementById("timer");
var time = 59;

setInterval(updateTimer, 300);

function updateTimer() {
  if (time > 0) {
    time--;
  } else {
    alert("Вы победили в конкурсе!")
  }

  timer.innerHTML = time;
}