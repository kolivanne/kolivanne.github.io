function initAnnotations() {
  document.querySelectorAll('.annotation').forEach(el => {
    el.addEventListener('mouseenter', () => {
      el.setAttribute('title', el.getAttribute('data-note'));
    });
  });
}