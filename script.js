/* 꿈식판 BIZ — interactions */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    /* Smooth scroll for in-page nav */
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        const id = a.getAttribute('href');
        if (id.length < 2) return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.pageYOffset - 72;
        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });
  });
})();
