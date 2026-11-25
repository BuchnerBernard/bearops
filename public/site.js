(function () {
  var b = document.body;
  var endpoint = b.getAttribute('data-endpoint') || '';
  var email = b.getAttribute('data-email') || '';
  var dlg = document.getElementById('book');

  document.querySelectorAll('[data-open]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      if (dlg && dlg.showModal) { e.preventDefault(); dlg.showModal(); }
    });
  });
  if (dlg) {
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
    var x = dlg.querySelector('.x');
    if (x) x.addEventListener('click', function () { dlg.close(); });
  }

  document.querySelectorAll('form[data-f]').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!f.checkValidity()) { f.reportValidity(); return; }
      var data = new FormData(f);
      var ok = f.querySelector('.ok p');
      if (data.get('_gotcha')) { f.classList.add('done'); return; }
      if (endpoint) {
        fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
          .then(function (r) {
            if (!r.ok) throw new Error('bad response');
            if (ok) ok.textContent = 'We will reply by email to arrange the call.';
            f.classList.add('done');
          })
          .catch(function () {
            if (ok) ok.textContent = 'Something went wrong. Please email ' + email + ' instead.';
            f.classList.add('done');
          });
      } else {
        var lines = [];
        data.forEach(function (v, k) { if (k.charAt(0) !== '_' && v) lines.push(k + ': ' + v); });
        window.location.href = 'mailto:' + email + '?subject=' + encodeURIComponent('Free call request') + '&body=' + encodeURIComponent(lines.join('\n'));
        if (ok) ok.textContent = 'Your email app should have opened with a draft. If it did not, please email ' + email + '.';
        f.classList.add('done');
      }
    });
  });

  var bar = document.getElementById('prog');
  if (bar) {
    window.addEventListener('scroll', function () {
      var d = document.documentElement, m = d.scrollHeight - window.innerHeight;
      bar.style.width = (m > 0 ? Math.min(100, (window.scrollY / m) * 100) : 0) + '%';
    }, { passive: true });
  }

  var chips = document.querySelectorAll('.chip');
  if (chips.length) {
    var cards = document.querySelectorAll('[data-cat]');
    chips.forEach(function (c) {
      c.addEventListener('click', function () {
        chips.forEach(function (o) { o.setAttribute('aria-pressed', 'false'); });
        c.setAttribute('aria-pressed', 'true');
        var k = c.getAttribute('data-k');
        cards.forEach(function (card) { card.hidden = !(k === 'all' || card.getAttribute('data-cat') === k); });
      });
    });
  }
})();
