/* ---------- ACCENT COLORS ---------- */
document.querySelectorAll(".post").forEach(post => {
  const accent = post.dataset.accent;
  if (accent) {
    post.style.setProperty("--accent", accent);
  }
});

/* ---------- LOAD MORE ---------- */
const BATCH = 3;
const posts = document.querySelectorAll('.post');
const loadMoreBtn = document.getElementById('load-more');
let shown = BATCH;

loadMoreBtn.addEventListener('click', () => {
  const next = Math.min(shown + BATCH, posts.length);
  for (let i = shown; i < next; i++) {
    posts[i].classList.remove('hidden');
  }
  shown = next;

  if (shown >= posts.length) loadMoreBtn.style.display = 'none';
});
