async function fetchPollData() {
  const response = await fetch('https://students.netoservices.ru/nestjs-backend/poll');
  return response.json();
}

async function fetchNewPollData() {
  const response = await fetch('https://students.netoservices.ru/nestjs-backend/new-poll');
  return response.json();
}

function createPollTitleElement(title) {
  const pollTitleElement = document.createElement('div');
  pollTitleElement.classList.add('poll__title');
  pollTitleElement.textContent = title;
  return pollTitleElement;
}

function createPollAnswerButton(answer) {
  const pollAnswerButton = document.createElement('button');
  pollAnswerButton.classList.add('poll__answer');
  pollAnswerButton.textContent = answer;
  pollAnswerButton.addEventListener('click', handlePollAnswerButtonClick);
  return pollAnswerButton;
}

function handlePollAnswerButtonClick() {
  localStorage.setItem('hasVoted', 'true');
  alert('Спасибо, ваш голос засчитан!');
  window.location.reload();
}

async function loadPoll() {
  try {
    const pollData = await fetchPollData();
    const pollTitle = pollData.data.title;
    const pollAnswers = pollData.data.answers;

    const pollTitleElement = createPollTitleElement(pollTitle);
    const pollAnswersElement = document.createElement('div');
    pollAnswersElement.classList.add('poll__answers');

    pollAnswers.forEach(answer => {
      const pollAnswerButton = createPollAnswerButton(answer);
      pollAnswersElement.appendChild(pollAnswerButton);
    });

    const pollElement = document.querySelector('.poll');
    pollElement.appendChild(pollTitleElement);
    pollElement.appendChild(pollAnswersElement);

    if (localStorage.getItem('hasVoted') === 'true') {
      const newPollData = await fetchNewPollData();
      const newPollTitle = newPollData.data.title;
      const newPollAnswers = newPollData.data.answers;

      pollTitleElement.textContent = newPollTitle;
      pollAnswersElement.innerHTML = '';

      newPollAnswers.forEach(answer => {
        const pollAnswerButton = createPollAnswerButton(answer);
        pollAnswersElement.appendChild(pollAnswerButton);
      });
    }
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener('load', loadPoll);










