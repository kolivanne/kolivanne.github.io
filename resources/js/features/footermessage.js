function renderFooterMessage(targetId) {
  const container = document.getElementById(targetId);
  if (!container) return;

  const div = document.createElement('div');
  div.className = 'px-4 py-5 my-5 text-center';

  const h2 = document.createElement('h2');
  h2.className = 'display-7 fw-bold my-headline my-font';
  h2.textContent = 'Thank you so much for visiting. Have a nice day.';

  div.appendChild(h2);
  container.appendChild(div);
}

renderFooterMessage('footer-message-container');