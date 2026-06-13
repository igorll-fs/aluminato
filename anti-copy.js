/**
 * ALUMINATO — Anti-Copy Protection Layer
 * Bloqueia: right-click, Ctrl+C/U/S/A/P/J, DevTools, console, drag, selection
 */
(function () {
  'use strict';

  // 1. Bloquear botão direito
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    return false;
  });

  // 2. Bloquear atalhos de teclado
  document.addEventListener('keydown', function (e) {
    // Ctrl+U (view source)
    if (e.ctrlKey && e.key === 'u') { e.preventDefault(); return false; }
    // Ctrl+C (copy)
    if (e.ctrlKey && e.key === 'c') { e.preventDefault(); return false; }
    // Ctrl+S (save)
    if (e.ctrlKey && e.key === 's') { e.preventDefault(); return false; }
    // Ctrl+A (select all)
    if (e.ctrlKey && e.key === 'a') { e.preventDefault(); return false; }
    // Ctrl+P (print)
    if (e.ctrlKey && e.key === 'p') { e.preventDefault(); return false; }
    // Ctrl+Shift+J (console)
    if (e.ctrlKey && e.shiftKey && e.key === 'J') { e.preventDefault(); return false; }
    // Ctrl+Shift+I (DevTools)
    if (e.ctrlKey && e.shiftKey && e.key === 'I') { e.preventDefault(); return false; }
    // Ctrl+Shift+C (element picker)
    if (e.ctrlKey && e.shiftKey && e.key === 'C') { e.preventDefault(); return false; }
    // F12 (DevTools)
    if (e.key === 'F12') { e.preventDefault(); return false; }
    // F8 (source)
    if (e.key === 'F8') { e.preventDefault(); return false; }
  });

  // 3. Bloquear seleção de texto (exceto inputs)
  document.addEventListener('selectstart', function (e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return true;
    e.preventDefault();
    return false;
  });

  // 4. Bloquear arrastar (drag)
  document.addEventListener('dragstart', function (e) {
    e.preventDefault();
    return false;
  });

  // 5. Bloquear cópia via evento
  document.addEventListener('copy', function (e) {
    e.preventDefault();
    return false;
  });

  // 6. Detectar DevTools aberto (via debugger timing)
  var devToolsOpen = false;
  var threshold = 160;
  var detectInterval = setInterval(function () {
    var start = performance.now();
    debugger;
    var end = performance.now();
    if (end - start > threshold) {
      if (!devToolsOpen) {
        devToolsOpen = true;
        document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;background:#1a2332;color:#d4af37;font-family:Montserrat,sans-serif;font-size:24px;text-align:center;padding:40px">Acesso restrito.<br><small style="font-size:14px;color:#888;margin-top:10px;display:block">Feche as ferramentas de desenvolvedor para continuar.</small></div>';
      }
    } else {
      devToolsOpen = false;
    }
  }, 1000);

  // 7. Anti-iframe: se carregado dentro de iframe, redireciona
  if (window.self !== window.top) {
    window.top.location = window.self.location;
  }

  // 8. Console trap: sobrescrever console methods
  var noop = function () {};
  try {
    console.log = noop;
    console.warn = noop;
    console.error = noop;
    console.info = noop;
    console.debug = noop;
    console.clear();
  } catch (e) {}
})();
