// waits until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Fondue is now the winning button
  const fondueBtn = document.getElementById('fondue');
  const message = document.getElementById('message');

  fondueBtn.addEventListener('click', () => {
    message.textContent = "Grate choice. Fondue is clearly superior! 🫕🔥😎";

    // Confetti 🎉
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
  });

  // raclette runs away when you try to catch it
  const racletteBtn = document.getElementById('raclette');
  const container = document.querySelector('.button-container');

  let dodgeCount = 0; // count how many times Raclette escapes

  racletteBtn.addEventListener('mouseover', () => {
    if (dodgeCount >= 6) {
      const counterDisplay = document.getElementById('dodgeCount');
      counterDisplay.textContent = "Come on... we all know Fondue's the GOAT. Just surrender already, I'm exhausted counting!";
      return; // stop moving and counting
    }

    const maxX = container.offsetWidth - racletteBtn.offsetWidth;
    const maxY = container.offsetHeight - racletteBtn.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    racletteBtn.style.left = `${randomX}px`;
    racletteBtn.style.top = `${randomY}px`;

    dodgeCount++;
    const counterDisplay = document.getElementById('dodgeCount');
    counterDisplay.textContent = `Raclette has dodged you ${dodgeCount} ${dodgeCount === 1 ? 'time' : 'times'}!`;
  });
});
