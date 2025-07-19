document.addEventListener("DOMContentLoaded", () => {
  const fondueBtn = document.getElementById('fondue');
  const racletteBtn = document.getElementById('raclette');
  const message = document.getElementById('message');
  const counterDisplay = document.getElementById('dodgeCount');
  const container = document.querySelector('.button-container');

  let dodgeCount = 0;
  const maxDodges = window.innerWidth < 600 ? 12 : 6; // more dodges allowed on small screens

  fondueBtn.addEventListener('click', () => {
    message.textContent = "Great choice. Fondue is clearly superior! 🫕🔥😎";
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
  });

  // Set initial position for raclette button (important for consistent styling)
  racletteBtn.style.top = '0px';

  function dodgeRaclette() {
    if (dodgeCount >= maxDodges) {
      counterDisplay.textContent = "Come on... we all know fondue's the GOAT. Just surrender already, I'm exhausted counting!";
      return;
    }

    const maxX = container.offsetWidth - racletteBtn.offsetWidth;
    const maxY = container.offsetHeight - racletteBtn.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    racletteBtn.style.left = `${randomX}px`;
    racletteBtn.style.top = `${randomY}px`;

    dodgeCount++;
    counterDisplay.textContent = `Raclette has dodged you ${dodgeCount} ${dodgeCount === 1 ? 'time' : 'times'}!`;
  }

  racletteBtn.addEventListener('mouseover', dodgeRaclette);

  r
