(() => {
  function ensureModal() {
    if (document.getElementById("qrModalOverlay")) return;

    const overlay = document.createElement("div");
    overlay.id = "qrModalOverlay";
    overlay.className = "qr-modal-overlay";
    overlay.setAttribute("aria-hidden", "true");

    overlay.innerHTML = `
      <div class="qr-modal-box" role="dialog" aria-modal="true" aria-label="QR Code">
        <button type="button" class="qr-modal-close" aria-label="Close">×</button>
        <div class="qr-modal-header">
          <div class="qr-modal-title"></div>
        </div>
        <div class="qr-modal-content">
          <img class="qr-modal-image" alt="QR Code" />
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    const box = overlay.querySelector(".qr-modal-box");
    const closeBtn = overlay.querySelector(".qr-modal-close");

    function close() {
      overlay.style.display = "none";
      overlay.setAttribute("aria-hidden", "true");
      document.body.classList.remove("qr-modal-open");
    }

    function open({ src, title }) {
      const img = overlay.querySelector(".qr-modal-image");
      const titleEl = overlay.querySelector(".qr-modal-title");
      img.src = src;
      img.alt = title ? `QR Code - ${title}` : "QR Code";
      titleEl.textContent = title || "";
      overlay.style.display = "block";
      overlay.setAttribute("aria-hidden", "false");
      document.body.classList.add("qr-modal-open");
    }

    closeBtn?.addEventListener("click", (e) => {
      e.preventDefault();
      close();
    });

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) close();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });

    overlay.__qrOpen = open;
    overlay.__qrClose = close;

    // prevent overlay click closing when clicking inside box
    box?.addEventListener("click", (e) => e.stopPropagation());
  }

  function getAbsSrc(href) {
    // Preserve relative paths; browser resolves automatically for <img src>.
    return href;
  }

  document.addEventListener("DOMContentLoaded", () => {
    ensureModal();
    const overlay = document.getElementById("qrModalOverlay");

    // Replace QR thumbnails with icon images (keep href pointing to QR image).
    document.querySelectorAll("a.qr-link").forEach((a) => {
      const href = a.getAttribute("href") || "";
      const img = a.querySelector("img");
      if (!img || !href) return;

      if (href.endsWith("wechat_QR.jpg")) {
        img.src = href.replace(/wechat_QR\.jpg$/, "wechat.png");
        if (!img.getAttribute("alt")) img.alt = "WeChat";
      } else if (href.endsWith("redbook_QR.jpg")) {
        img.src = href.replace(/redbook_QR\.jpg$/, "redbook.png");
        if (!img.getAttribute("alt")) img.alt = "小紅書";
      }
    });

    document.addEventListener("click", (e) => {
      const a = e.target?.closest?.("a.qr-link");
      if (!a) return;

      const href = a.getAttribute("href");
      if (!href) return;

      e.preventDefault();

      const title =
        a.getAttribute("data-qr-title") ||
        a.getAttribute("title") ||
        a.getAttribute("aria-label") ||
        "";

      overlay?.__qrOpen?.({ src: getAbsSrc(href), title });
    });
  });
})();

