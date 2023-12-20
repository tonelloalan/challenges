function toggleButton() {
  const cards = document.querySelectorAll('[data-js=card]');
  // const buttons = card.querySelectorAll('[data-js=buttons]');
  cards.forEach(card => {
    const button = card.querySelector('[data-js="button"]');
    const link = card.querySelector('[data-js="link"]'); // change from cards to card
    const arrow = card.querySelector('[data-js="arrow"]');

    button.addEventListener('click', () => {
      link.classList.toggle('hidden'); // changed from 'hide'
      arrow.classList.toggle('rotate');
    });
  });
}

toggleButton();
