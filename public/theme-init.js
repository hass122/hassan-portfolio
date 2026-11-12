(function () {
  var t = 'dark';
  try {
    var s = localStorage.getItem('theme');
    t = s === 'light' || s === 'dark' ? s : window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  } catch (e) {}
  document.documentElement.setAttribute('data-theme', t);
  var m = document.querySelector('meta[name="theme-color"]');
  if (m) m.setAttribute('content', t === 'light' ? '#F7F5EF' : '#211F1C');
})();
