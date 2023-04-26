function scrollFind() {
  const revealBlocks = document.querySelectorAll('.reveal');

  for (let i = 0; i < revealBlocks.length; i++) {
    const block = revealBlocks[i];
    const blockTop = block.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;

    if (blockTop < windowHeight) {
      block.classList.add('reveal_active');
    } else {
      block.classList.remove('reveal_active');
    }
  }
}

window.addEventListener('scroll', scrollFind);