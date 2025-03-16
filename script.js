document.addEventListener('DOMContentLoaded', function() {
  const startScreen = document.getElementById('startScreen');
  const app = document.getElementById('app');
  const wishInterface = document.getElementById('wishInterface');
  const userNameInput = document.getElementById('userName');
  const startAppButton = document.getElementById('startAppButton');
  const roulette = document.getElementById('roulette');
  const result = document.getElementById('result');
  const startButton = document.getElementById('startButton');
  const nextButton = document.getElementById('nextButton');
  const backButton = document.getElementById('backButton');
  const backToStart = document.getElementById('backToStart');
  const homeButton = document.getElementById('homeButton');
  const myName = document.getElementById('myName');
  const backgroundMusic = document.getElementById('backgroundMusic');
  const muteButton = document.getElementById('muteButton');
  let isMuted = false;
  let rotation = 0;
  let isSpinning = false;

  const answers = [
    'YES! IT IS TUESDAY!',
    'NOPE, NOT TUESDAY!',
    'MAYBE IT\'S TUESDAY?',
    'DEFINITELY TUESDAY!',
    'NOT EVEN CLOSE TO TUESDAY!',
    'IT\'S TUESDAY SOMEWHERE!',
    'TUESDAY VIBES ONLY!',
    'ASK AGAIN LATER, IT MIGHT BE TUESDAY!',
    'TUESDAY IS A STATE OF MIND!',
    'TUESDAY IS CALLING!'
  ];

  startAppButton.addEventListener('click', function() {
    const userName = userNameInput.value.trim();
    if (userName) {
      startScreen.style.display = 'none';
      app.style.display = 'block';
      myName.textContent = userName;
      backgroundMusic.play();
    } else {
      alert('PLEASE ENTER YOUR NAME!');
    }
  });

  startButton.addEventListener('click', function() {
    if (isSpinning) return;
    isSpinning = true;

    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    const spinDegrees = 360 * 5 + Math.floor(Math.random() * 360);
    rotation += spinDegrees;

    roulette.style.transition = 'transform 3s ease-in-out';
    roulette.style.transform = `rotate(${rotation}deg)`;
    roulette.classList.add('spinning-stripes');

    setTimeout(function() {
      result.textContent = randomAnswer;
      result.style.opacity = 1;
      roulette.style.transition = 'none';
      isSpinning = false;
      nextButton.style.display = 'inline-block';
      backToStart.style.display = 'inline-block';
    }, 3000);

    setTimeout(function() {
      result.style.opacity = 0;
      roulette.classList.remove('spinning-stripes');
    }, 8000);
  });

  nextButton.addEventListener('click', function() {
    app.style.display = 'none';
    wishInterface.style.display = 'block';
    nextButton.style.display = 'inline-block';
  });

  backButton.addEventListener('click', function() {
    wishInterface.style.display = 'none';
    app.style.display = 'block';
    nextButton.style.display = 'inline-block';
  });

  backToStart.addEventListener('click', function() {
    app.style.display = 'none';
    startScreen.style.display = 'block';
    userNameInput.value = '';
    backToStart.style.display = 'none';
  });

  homeButton.addEventListener('click', function() {
    wishInterface.style.display = 'none';
    startScreen.style.display = 'block';
    userNameInput.value = '';
  });

  muteButton.addEventListener('click', function() {
    if (isMuted) {
      backgroundMusic.play();
      muteButton.textContent = '🔊';
    } else {
      backgroundMusic.pause();
      muteButton.textContent = '🔇';
    }
    isMuted = !isMuted;
  });
});