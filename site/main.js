// Simple utilities
(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const updated = document.getElementById('updated');
  if (updated) updated.textContent = new Date().toISOString().slice(0, 10);

  // Theme toggle
  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch {}
  };
  const storedTheme = (() => { try { return localStorage.getItem('theme'); } catch { return null; } })();
  const initial = storedTheme || 'dark';
  applyTheme(initial);

  const header = document.querySelector('header .container');
  if (header) {
    const toggleWrap = document.createElement('div');
    toggleWrap.className = 'theme-toggle';
    const btn = document.createElement('button');
    btn.type = 'button';
    const setLabel = () => { btn.textContent = (document.documentElement.getAttribute('data-theme') === 'light') ? '다크' : '라이트'; };
    setLabel();
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'light' ? 'dark' : 'light';
      applyTheme(next);
      setLabel();
    });
    toggleWrap.appendChild(btn);
    // Insert before brand to place at left
    header.insertBefore(toggleWrap, header.firstChild);
  }

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const status = document.getElementById('status');
      if (status) status.textContent = '전송 중...';

      // No backend: emulate success and open mailto
      const data = new FormData(form);
      const params = new URLSearchParams();
      data.forEach((v, k) => params.append(k, v.toString()));
      const subject = encodeURIComponent('[Site] 문의 - ' + (data.get('name') || '익명'));
      const body = encodeURIComponent(`From: ${data.get('name')} <${data.get('email')}>\n\n${data.get('message')}`);
      window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;
      setTimeout(() => { if (status) status.textContent = '메일 앱이 열렸습니다.'; }, 400);
      (form).reset();
    });
  }
})();


