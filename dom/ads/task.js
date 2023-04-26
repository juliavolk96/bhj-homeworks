const rotators = document.querySelectorAll('.rotator');

function changeRotatorCase(rotatorCases, currentCaseIndex) {
  const currentCase = rotatorCases[currentCaseIndex];
  currentCase.classList.remove('rotator__case_active');
  currentCaseIndex++;
  if (currentCaseIndex >= rotatorCases.length) {
    currentCaseIndex = 0;
  }
  const nextCase = rotatorCases[currentCaseIndex];
  nextCase.classList.add('rotator__case_active');
  return currentCaseIndex;
}

function startRotator(rotator) {
  const rotatorCases = rotator.querySelectorAll('.rotator__case');
  let currentCaseIndex = 0;
  setInterval(() => {
    currentCaseIndex = changeRotatorCase(rotatorCases, currentCaseIndex);
  }, 1000);
}

rotators.forEach(startRotator);