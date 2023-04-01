const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
const holes = document.getElementsByClassName("hole");
let deadCounter = 0;
let lostCounter = 0;

for(let hole of holes) {
  hole.addEventListener('click', function() {
    if ( hole.classList.contains('hole_has-mole')){
      deadCounter++;
      dead.textContent = deadCounter;
    } else {
      lostCounter++;
      lost.textContent = lostCounter;
    }

    if (deadCounter == 10) {
      alert ('win');
      deadCounter = 0;
      lostCounter = 0;
      dead.textContent = deadCounter;
      lost.textContent = lostCounter;
    } 

    if (lostCounter == 5) {
      alert('lost');
      deadCounter = 0;
      lostCounter = 0;
      dead.textContent = deadCounter;
      lost.textContent = lostCounter;
    }
});

}



// setInterval(moleJump, 500);

// function moleJump() {
//   let holeNum = Math.floor(Math.random() * 10);
//   console.log(document.getElementsByClassName("hole_has-mole").className)
//   document.getElementsByClassName("hole_has-mole").className.reduce("hole_has-mole", "");
//   holes[holeNum].className += " hole_has-mole";
// }

