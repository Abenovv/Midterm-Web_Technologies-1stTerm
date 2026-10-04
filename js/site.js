const filterButtons = document.querySelectorAll('[data-filter]');
const gameCards = document.querySelectorAll('[data-genre]');
const gameCount = document.querySelector('#game-count');

filterButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    const filter = button.dataset.filter;
    let visible = 0;
    filterButtons.forEach(function (item) {
      item.setAttribute('aria-pressed', String(item === button));
    });
    gameCards.forEach(function (card) {
      const show = filter === 'all' || card.dataset.genre === filter;
      card.hidden = !show;
      if (show) visible++;
    });
    if (gameCount) gameCount.textContent = visible + (visible === 1 ? ' game concept' : ' game concepts');
  });
});

function readSaved(key) {
  try { return localStorage.getItem(key); } catch { return null; }
}

function writeSaved(key, value) {
  try { localStorage.setItem(key, value); return true; } catch { return false; }
}

const wishlistButton = document.querySelector('#wishlist-button');
if (wishlistButton) {
  const wishlistMessage = document.querySelector('#wishlist-message');
  let saved = readSaved('sidequest-emberwake') === 'saved';
  function updateWishlist() {
    wishlistButton.setAttribute('aria-pressed', String(saved));
    wishlistButton.textContent = saved ? 'Saved to my list ✓' : 'Add to my list +';
  }
  updateWishlist();
  wishlistButton.addEventListener('click', function () {
    const next = !saved;
    if (writeSaved('sidequest-emberwake', next ? 'saved' : 'removed')) {
      saved = next;
      updateWishlist();
      wishlistMessage.textContent = saved ? 'Saved on this device. Come back whenever you like.' : 'Emberwake has been removed from your list.';
    } else {
      wishlistMessage.textContent = 'Your browser cannot save this choice. Please allow local storage and try again.';
    }
  });
}

const playtestForm = document.querySelector('#playtest-form');
if (playtestForm) {
  const feedback = document.querySelector('#form-feedback');
  const savedNote = document.querySelector('#saved-preferences');
  const savedSummary = document.querySelector('#saved-summary');
  const clearButton = document.querySelector('#clear-preferences');
  let previous = null;
  try { previous = JSON.parse(readSaved('sidequest-playtest')); } catch { previous = null; }
  if (previous && typeof previous.name === 'string' && typeof previous.game === 'string') {
    playtestForm.elements.name.value = previous.name;
    playtestForm.elements.game.value = previous.game;
    playtestForm.elements.format.value = previous.format || 'Online';
    playtestForm.elements.message.value = previous.message || '';
    savedNote.hidden = false;
    savedSummary.textContent = previous.name + ' · ' + previous.game + ' · ' + (previous.format || 'Online');
  }
  playtestForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!playtestForm.checkValidity()) {
      playtestForm.reportValidity();
      return;
    }
    const name = playtestForm.elements.name.value.trim();
    if (!name) {
      feedback.textContent = 'Please enter your name before saving.';
      playtestForm.elements.name.focus();
      return;
    }
    const preferences = {
      name: name,
      game: playtestForm.elements.game.value,
      format: playtestForm.elements.format.value,
      message: playtestForm.elements.message.value.trim()
    };
    if (writeSaved('sidequest-playtest', JSON.stringify(preferences))) {
      feedback.textContent = 'Saved, ' + preferences.name + '. Your choices are kept on this device. This does not book a place or send a message to the studio.';
      savedNote.hidden = false;
      savedSummary.textContent = preferences.name + ' · ' + preferences.game + ' · ' + preferences.format;
    } else {
      feedback.textContent = 'Your browser cannot save your preferences. Please allow local storage and try again.';
    }
  });
  clearButton.addEventListener('click', function () {
    try {
      localStorage.removeItem('sidequest-playtest');
      savedNote.hidden = true;
      playtestForm.reset();
      feedback.textContent = 'Your saved preferences have been cleared.';
    } catch {
      feedback.textContent = 'Your browser could not clear the saved preferences.';
    }
  });
}
