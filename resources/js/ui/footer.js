function getFooterHTML() {
    const currentYear = new Date().getFullYear();

    return `
    <footer class="footer" data-bs-theme="blue">
        <div class="container text-center border-top py-4 mb-4 small">
            <span class="text-muted copyright-year">
                &copy; ${currentYear} Anne.
                Built with HTML, Bootstrap & vanilla JavaScript by <span class="my-font">me</span> 💜
                <br>
            </span>

            <span class="text-muted">
                Credit:
                <a rel="noreferrer" target="_blank"
                   href="https://icons8.com/icon/WB1rUe6nRn3r/handwritten-ocr">
                   Handwritten OCR
                </a>
                icon by
                <a rel="noreferrer" target="_blank" href="https://icons8.com">
                   Icons8
                </a>
            </span>

            <span class="text-muted">
                | <a href="policy.html">Privacy Policy</a>
            </span>

            <span class="text-muted">
                | <a href="legal.html">Legal</a>
            </span>
        </div>
    </footer>
    `;
}

function renderFooter() {
    const footerContainer = document.getElementById("footer");

    if (!footerContainer) {
        console.warn("Footer container not found");
        return;
    }

    footerContainer.innerHTML = getFooterHTML();
}

document.addEventListener("DOMContentLoaded", renderFooter);