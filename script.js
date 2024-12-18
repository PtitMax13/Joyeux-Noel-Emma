document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('start');
  const riddleText = document.getElementById('riddle-text');
  const answerInput = document.getElementById('answer-input');
  const submitButton = document.getElementById('submit-answer');
  const feedback = document.getElementById('feedback');
  const rewardCollection = document.getElementById('reward-collection');
  const starContainer = document.getElementById('star-container');
  const bgMusic = document.getElementById('bg-music');

  const riddles = [
    { question: "Je suis grand et blanc, mais pas un nuage. Qui suis-je ?", answer: "neige" },
    { question: "Je suis décoré de guirlandes. Qui suis-je ?", answer: "sapin" },
    { question: "Je suis petit et sous le sapin. Qui suis-je ?", answer: "cadeau" },
    { question: "Boisson chaude en hiver ? Qui suis-je ?", answer: "chocolat chaud" }
  ];

  const rewards = ["images/reward1.jpg", "images/reward2.jpg", "images/reward3.jpg", "images/reward4.jpg"];
  let currentRiddle = 0;

  // Étoiles
  function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.width = `${Math.random() * 4 + 2}px`;
    star.style.height = star.style.width;
    starContainer.appendChild(star);
    setTimeout(() => star.remove(), 2000);
  }

  function showStars() {
    for (let i = 0; i < 50; i++) setTimeout(createStar, i * 50);
  }

  // Énigmes
  startButton.addEventListener('click', () => {
    if (currentRiddle < riddles.length) {
      riddleText.textContent = riddles[currentRiddle].question;
      answerInput.value = '';
      feedback.textContent = '';
      showStars();
      bgMusic.play();
    }
  });

  submitButton.addEventListener('click', () => {
    const answer = answerInput.value.trim().toLowerCase();
    if (answer === riddles[currentRiddle].answer) {
      feedback.textContent = "Bonne réponse ! 🎉";
      feedback.style.color = 'green';

      const img = document.createElement('img');
      img.src = rewards[currentRiddle];
      img.className = 'reward-image';
      rewardCollection.appendChild(img);

      currentRiddle++;
      if (currentRiddle < riddles.length) riddleText.textContent = riddles[currentRiddle].question;
      else alert("Félicitations !");
    } else {
      feedback.textContent = "Mauvaise réponse !";
      feedback.style.color = 'red';
    }
  });
});
