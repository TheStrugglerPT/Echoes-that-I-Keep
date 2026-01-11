/* ---------- ACCENT COLORS ---------- */
document.querySelectorAll(".post").forEach(post => {
  const accent = post.dataset.accent;
  if (accent) {
    post.style.setProperty("--accent", accent);
  }
});