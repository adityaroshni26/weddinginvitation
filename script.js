const intro = document.getElementById('intro');
const site = document.getElementById('site');
const music = document.getElementById('music');
const modal = document.getElementById('videoModal');
const frame = document.getElementById('frame');
const closeButton = document.getElementById('close');
const enterButtons = document.querySelectorAll('[data-enter-site], [data-scroll-films]');
const musicToggle = document.querySelector('[data-music-toggle]');
const musicLabel = document.querySelector('[data-music-label]');
let lastFocusedElement = null;

function revealSite({ scrollToFilms = true } = {}) {
  intro.style.display = 'none';
  site.classList.add('is-open');
  site.removeAttribute('aria-hidden');
  if (scrollToFilms) {
    document.getElementById('memories')?.scrollIntoView({ block: 'start' });
  }
}

function setMusicState(isPlaying) {
  musicToggle?.setAttribute('aria-pressed', String(isPlaying));
  if (musicLabel) musicLabel.textContent = isPlaying ? 'Music on' : 'Music off';
}

async function toggleMusic() {
  if (!music) return;
  if (music.paused) {
    music.volume = 0.22;
    try {
      await music.play();
      setMusicState(true);
    } catch {
      setMusicState(false);
    }
  } else {
    music.pause();
    setMusicState(false);
  }
}

function openVideo(videoId) {
  if (!videoId) return;
  lastFocusedElement = document.activeElement;
  frame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  modal.hidden = false;
  modal.classList.add('is-open');
  document.body.classList.add('modal-open');
  closeButton.focus();
}

function closeVideo() {
  frame.src = '';
  modal.classList.remove('is-open');
  modal.hidden = true;
  document.body.classList.remove('modal-open');
  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
    lastFocusedElement.focus();
  }
}

enterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    revealSite({ scrollToFilms: button.hasAttribute('data-scroll-films') });
    if (button.hasAttribute('data-enter-site')) {
      toggleMusic();
    }
  });
});

musicToggle?.addEventListener('click', toggleMusic);

window.openInvite = () => revealSite();

document.querySelectorAll('.film-link').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    revealSite({ scrollToFilms: false });
    openVideo(link.dataset.video);
  });
});

closeButton.addEventListener('click', closeVideo);

modal.addEventListener('click', (event) => {
  if (event.target === modal) closeVideo();
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('is-open')) {
    closeVideo();
  }
});

setMusicState(false);
